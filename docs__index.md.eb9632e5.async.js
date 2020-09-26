(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"F+kV":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u7b80\u4ecb"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7b80\u4ecb"},l.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u4ecb"),l.a.createElement("p",null,"\u4e00\u4e2a\u5c06\u7f51\u9875\u8f6c sketch \u7684\u6a21\u5757"),l.a.createElement("h2",{id:"\u5feb\u901f\u4e0a\u624b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5feb\u901f\u4e0a\u624b"},l.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),l.a.createElement("h3",{id:"\u5b89\u88c5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5b89\u88c5"},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),l.a.createElement(o.a,{code:"npm i html2sketch --save\n",lang:"bash"}),l.a.createElement("p",null,"\u6216"),l.a.createElement(o.a,{code:"yarn add html2sketch\n",lang:"unknown"}),l.a.createElement("h3",{id:"\u4f7f\u7528"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528"},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528"),l.a.createElement("p",null,l.a.createElement("code",null,"html2sketch")," \u5305\u542b 3 \u4e2a\u4e3b\u8981\u65b9\u6cd5 ",l.a.createElement("code",null,"nodeToLayer")," \u3001 ",l.a.createElement("code",null,"nodeToGroup")," \u548c ",l.a.createElement("code",null,"nodeToSketchSymbol")," \u3002"),l.a.createElement("h4",{id:"nodetolayer"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodetolayer"},l.a.createElement("span",{className:"icon icon-link"})),"nodeToLayer"),l.a.createElement("p",null,"\u5c06 DOM \u8282\u70b9\u8f6c\u6210 Sketch \u7684\u5bf9\u8c61,\u8f6c\u6362\u65f6\u4e0d\u5904\u7406\u8282\u70b9\u7684\u5b50\u7ea7"),l.a.createElement(o.a,{code:"import { nodeToLayer } from 'html2sketch';\n\nconst fn = async () => {\n  // 1. \u83b7\u53d6 DOM \u8282\u70b9\n  const node = document.getElementById('id');\n\n  // 2. \u8c03\u7528\u8f6c\u6362\u65b9\u6cd5\n  const layer = await nodeToLayer(node);\n\n  // 3. \u751f\u6210\u4e3a Sketch JSON\n  const sketchJSON = layer.toSketchJSON();\n\n  return sketchJSON;\n};\n\nfn().then((json) => {\n  console.log(json);\n});\n",lang:"js"}),l.a.createElement("h4",{id:"nodetogroup"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodetogroup"},l.a.createElement("span",{className:"icon icon-link"})),"nodeToGroup"),l.a.createElement("p",null,"\u5c06 DOM \u8282\u70b9\u4ee5\u53ca\u5b83\u7684\u5b50\u7ea7\u6574\u4f53\u8f6c\u6210 Sketch \u7684 Group \u5bf9\u8c61"),l.a.createElement(o.a,{code:"import { nodeToGroup } from 'html2sketch';\n\nconst fn = async () => {\n  // 1. \u83b7\u53d6 DOM \u8282\u70b9\n  const node = document.getElementById('id');\n\n  // 2. \u8c03\u7528\u8f6c\u6362\u65b9\u6cd5\n  const group = await nodeToGroup(node);\n\n  // 3. \u751f\u6210\u4e3a Sketch JSON\n  const sketchJSON = group.toSketchJSON();\n\n  return sketchJSON;\n};\n\nfn().then((json) => {\n  console.log(json);\n});\n",lang:"js"}),l.a.createElement("h4",{id:"nodetosketchsymbol"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodetosketchsymbol"},l.a.createElement("span",{className:"icon icon-link"})),"nodeToSketchSymbol"),l.a.createElement("p",null,"\u5c06 DOM \u8282\u70b9\u8f6c Sketch \u7684 Symbol \u5bf9\u8c61"),l.a.createElement(o.a,{code:"import { nodeToSketchSymbol } from 'html2sketch';\n\nconst fn = async () => {\n  // 1. \u83b7\u53d6 DOM \u8282\u70b9\n  const node = document.getElementById('id');\n\n  // 2. \u8c03\u7528\u8f6c\u6362\u65b9\u6cd5\n  const symbol = await nodeToSketchSymbol(node);\n\n  // 3. \u751f\u6210\u4e3a Sketch JSON\n  const sketchJSON = symbol.toSketchJSON();\n\n  return sketchJSON;\n};\n\nfn().then((json) => {\n  console.log(json);\n});\n",lang:"js"}),l.a.createElement("h2",{id:"\u6709\u4e86-sketch-json-\u7684\u4e0b\u4e00\u6b65"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6709\u4e86-sketch-json-\u7684\u4e0b\u4e00\u6b65"},l.a.createElement("span",{className:"icon icon-link"})),"\u6709\u4e86 Sketch JSON \u7684\u4e0b\u4e00\u6b65?"),l.a.createElement("p",null,"\u751f\u6210\u7684 Sketch JSON \u4e25\u683c\u7b26\u5408 ",l.a.createElement("a",{href:"https://developer.sketch.com/file-format/",target:"_blank",rel:"noopener noreferrer"},"Sketch FileFormat",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," \u7ed3\u6784\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u7b80\u5355\u5730\u5c06\u76f8\u5e94\u7684 JSON \u6309\u7167 Sketch \u6587\u4ef6\u89c4\u8303\u5408\u6210 ",l.a.createElement("code",null,".sketch")," \u6587\u4ef6\uff0c\u5373\u53ef\u83b7\u5f97 Sketch \u6587\u4ef6\u3002"),l.a.createElement("p",null,"\u793e\u533a\u76f8\u5173 API \u6a21\u5757:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/ant-design/sketch-json-api",target:"_blank",rel:"noopener noreferrer"},"sketch-json-api",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/oscarotero/node-sketch",target:"_blank",rel:"noopener noreferrer"},"node-sketch",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/amzn/sketch-constructor",target:"_blank",rel:"noopener noreferrer"},"sketch-constructor",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),l.a.createElement("p",null,"\u5982\u679c\u5e0c\u671b\u76f4\u63a5\u4f7f\u7528\u8be5 JSON \u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("a",{href:"https://github.com/arvinxx/sketch-json",target:"_blank",rel:"noopener noreferrer"},"Sketch JSON",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," \u63d2\u4ef6\uff0c\u4e00\u952e\u7c98\u8d34 JSON \u8fdb\u5165 Sketch \u4e2d\u3002")))}}}]);