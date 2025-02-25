import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import BaseStyle from '../Base/BaseStyle';
import { initImageURL } from '../../utils/image';
import { fetchBase64 } from '../../utils/fetch';

/**
 * 图片资产
 * 用于添加到 Fill 和 Border 的内容
 */
class Image extends BaseStyle {
  constructor(url: string) {
    super();
    const { url: safeURL, base64 } = initImageURL(url);
    this.url = safeURL;
    this.base64 = base64;
  }

  /**
   * 完成图片资源的初始化
   */
  async init() {
    if (this.url.startsWith('http')) {
      const base64 = await fetchBase64(this.url);

      if (base64) {
        this.base64 = base64;
      }
    }
  }

  /**
   * 外部传入的 URL
   */
  url: string;

  /**
   * 转换成的 base64 数据
   */
  base64: string;

  toSketchJSON(): SketchFormat.DataRef {
    return {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: this.id,
      data: {
        _data: this.base64,
      },
      sha1: {
        _data: '',
      },
    };
  }
}

export default Image;
