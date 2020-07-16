import nodeToSketchLayers from './nodeToSketchLayers';
import { isNodeVisible } from '../helpers/visibility';
import { getName } from '../helpers/name';
import { Group, Style } from '../model';
import { AnyLayer } from '../model/type';

/**
 * 获得可用的节点子级
 */
const getChildNodeList = (node: Element) =>
  Array.from(node.children)
    .filter((node) => isNodeVisible(node))
    // 根据 z-index 排序 将顶上的元素放上面
    .sort((a, b) => {
      const computedA = getComputedStyle(a).zIndex,
        computedB = getComputedStyle(b).zIndex,
        zIndexA = isNaN(Number(computedA)) ? 0 : +computedA,
        zIndexB = isNaN(Number(computedB)) ? 0 : +computedB;

      return zIndexA - zIndexB;
    });

const nodeToSketchGroup = (node: Element, options?: any): AnyLayer => {
  const bcr = node.getBoundingClientRect();
  const { left, top } = bcr;
  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;

  const layers = nodeToSketchLayers(node) || [];

  // ---------- 处理父节点 ------ //
  if (node.nodeName !== 'svg') {
    const childNodeList = getChildNodeList(node);
    // const childNodeList = getChildNodeList(node);
    // Recursively collect child groups for child nodes

    childNodeList.forEach((childNode) => {
      layers.push(nodeToSketchGroup(childNode, options));

      // Traverse the shadow DOM if present
      if (childNode.shadowRoot) {
        Array.from(childNode.shadowRoot.children)
          .filter((node) => isNodeVisible(node))
          .map(nodeToSketchGroup)
          .forEach((layer) => layers.push(layer));
      }
    });
  }

  // Now build a group for all these children

  const styles = getComputedStyle(node);
  const { opacity } = styles;

  const group = new Group({ x: left, y: top, width, height });
  const groupStyle = new Style();

  groupStyle.addOpacity(opacity);
  group.style = groupStyle;

  layers
    .filter((l) => l)
    .forEach((layer) => {
      // Layer positions are relative, and as we put the node position to the group,
      // we have to shift back the layers by that distance.

      layer.x -= left;

      layer.y -= top;

      group.addLayer(layer);
    });

  if (
    group.layers.length === 1 &&
    (group.layers[0].class === 'rectangle' ||
      // group.layers[0].class === 'text' ||
      group.layers[0].class === 'group')
  ) {
    console.log('该 group 只包含一个子级,丢弃...');
    const layer = group.layers[0];
    // 将父级的图层关系给到子集
    layer.x += group.x;
    layer.y += group.y;
    return layer;
  }
  if (group.layers.length === 0) {
    console.log('该 group 是空的,丢弃...');
    return;
  }

  if (options && options.getGroupName) {
    group.name = options.getGroupName(node);
  } else {
    group.name = getName(node.nodeName);
  }
  return group;
};

export default nodeToSketchGroup;
