(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"6VBw":function(e,n,t){"use strict";var r=t("ODXe"),a=t("rePB"),o=t("Ff2n"),c=t("q1tI"),i=t.n(c),l=t("TSYQ"),s=t.n(l),u=t("VTBJ"),m=t("U8pU"),d=t("HXN9"),f=t("Kwbf"),p=t("Gu+u");function b(e,n){Object(f["a"])(e,"[@ant-design/icons] ".concat(n))}function y(e){return"object"===Object(m["a"])(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(m["a"])(e.icon)||"function"===typeof e.icon)}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var r=e[t];switch(t){case"class":n.className=r,delete n.class;break;default:n[t]=r}return n}),{})}function h(e,n,t){return t?i.a.createElement(e.tag,Object(u["a"])(Object(u["a"])({key:n},g(e.attrs)),t),(e.children||[]).map((function(t,r){return h(t,"".concat(n,"-").concat(e.tag,"-").concat(r))}))):i.a.createElement(e.tag,Object(u["a"])({key:n},g(e.attrs)),(e.children||[]).map((function(t,r){return h(t,"".concat(n,"-").concat(e.tag,"-").concat(r))})))}function C(e){return Object(d["generate"])(e)[0]}function v(e){return e?Array.isArray(e)?e:[e]:[]}var k="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",w=!1,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;Object(c["useEffect"])((function(){w||(Object(p["insertCss"])(e,{prepend:!0}),w=!0)}),[])},j={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function E(e){var n=e.primaryColor,t=e.secondaryColor;j.primaryColor=n,j.secondaryColor=t||C(n),j.calculated=!!t}function x(){return Object(u["a"])({},j)}var S=function(e){var n=e.icon,t=e.className,r=e.onClick,a=e.style,c=e.primaryColor,i=e.secondaryColor,l=Object(o["a"])(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),s=j;if(c&&(s={primaryColor:c,secondaryColor:i||C(c)}),O(),b(y(n),"icon should be icon definiton, but got ".concat(n)),!y(n))return null;var m=n;return m&&"function"===typeof m.icon&&(m=Object(u["a"])(Object(u["a"])({},m),{},{icon:m.icon(s.primaryColor,s.secondaryColor)})),h(m.icon,"svg-".concat(m.name),Object(u["a"])({className:t,onClick:r,style:a,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l))};S.displayName="IconReact",S.getTwoToneColors=x,S.setTwoToneColors=E;var T=S;function N(e){var n=v(e),t=Object(r["a"])(n,2),a=t[0],o=t[1];return T.setTwoToneColors({primaryColor:a,secondaryColor:o})}function I(){var e=T.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}N("#1890ff");var J=c["forwardRef"]((function(e,n){var t=e.className,i=e.icon,l=e.spin,u=e.rotate,m=e.tabIndex,d=e.onClick,f=e.twoToneColor,p=Object(o["a"])(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=s()("anticon",Object(a["a"])({},"anticon-".concat(i.name),Boolean(i.name)),t),y=s()({"anticon-spin":!!l||"loading"===i.name}),g=m;void 0===g&&d&&(g=-1);var h=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,C=v(f),k=Object(r["a"])(C,2),w=k[0],O=k[1];return c["createElement"]("span",Object.assign({role:"img","aria-label":i.name},p,{ref:n,tabIndex:g,onClick:d,className:b}),c["createElement"](T,{className:y,icon:i,primaryColor:w,secondaryColor:O,style:h}))}));J.displayName="AntdIcon",J.getTwoToneColor=I,J.setTwoToneColor=N;n["a"]=J},Gfsy:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("iodu"),c=t("Llbl"),i=()=>{var e=Object(o["b"])(),n=e.elements,t=e.ref;return a.a.createElement(o["a"],{elements:n},a.a.createElement("div",{id:"icons",ref:t},a.a.createElement(c["a"],null)))};n["default"]=i},Llbl:function(e,n,t){"use strict";var r=t("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},o=a,c=t("6VBw"),i=function(e,n){return r["createElement"](c["a"],Object.assign({},e,{ref:n,icon:o}))};i.displayName="UpCircleOutlined";n["a"]=r["forwardRef"](i)},iodu:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return E}));t("EpIQ");var r=t("bx4M"),a=(t("Jmwx"),t("BMrR")),o=(t("Y2jk"),t("zeV3")),c=(t("rO+z"),t("kPKH")),i=(t("L/Qf"),t("2/Rp")),l=(t("qNb/"),t("PArb")),s=t("tJVT"),u=t("q1tI"),m=t.n(u),d=t("ovOe"),f=t.n(d),p=t("WmNS"),b=t.n(p),y=(t("8/o9"),t("tsqr")),g=t("9og8"),h=t("+QRC"),C=t.n(h),v=t("/7QA");"undefined"!==typeof window&&(window.DUMI_HTML2SKETCH={nodeToSketchSymbol:v["nodeToSketchSymbol"],nodeToGroup:v["nodeToGroup"]});var k=()=>{var e=Object(u["useState"])(),n=Object(s["a"])(e,2),t=n[0],r=n[1],a=function(){var e=Object(g["a"])(b.a.mark((function e(n,t){var a,o,c,i,l;return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.groupCollapsed("[html2sketch]\u5f00\u59cb\u8f6c\u6362..."),!(n instanceof Array)){e.next=17;break}o=[],c=0;case 5:if(!(c<n.length)){e.next=14;break}return i=n[c],e.next=9,t(i);case 9:l=e.sent,o.push(l);case 11:c+=1,e.next=5;break;case 14:a=o,e.next=20;break;case 17:return e.next=19,t(n);case 19:a=e.sent;case 20:return console.groupEnd(),console.log("\u89e3\u6790\u7ed3\u679c:",a),C()(JSON.stringify(a)),r(a),e.next=26,y["b"].success("\u8f6c\u6362\u6210\u529f\ud83c\udf89 \u5df2\u590d\u5236\u5230\u526a\u5207\u677f");case 26:return e.abrupt("return",a);case 29:return e.prev=29,e.t0=e["catch"](0),e.next=33,y["b"].error("\u89e3\u6790\u5931\u8d25,\u8bf7\u68c0\u67e5 Console \u8f93\u51fa \ud83d\ude36");case 33:console.groupEnd(),console.groupEnd(),console.error("\u62a5\u9519\u5982\u4e0b:"),console.error(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(n,t){return e.apply(this,arguments)}}();return{sketchJSON:t,generateSymbol:function(){var e=Object(g["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(n,function(){var e=Object(g["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["nodeToSketchSymbol"])(n);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),generateGroup:function(){var e=Object(g["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(n,function(){var e=Object(g["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["nodeToGroup"])(n);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()}},w=k,O=e=>{var n=e.elements,t=e.children,d=e.buttons,p=w(),b=p.sketchJSON,y=p.generateGroup,g=p.generateSymbol,h=Object(u["useState"])(!1),C=Object(s["a"])(h,2),v=C[0],k=C[1];return m.a.createElement("div",null,t,m.a.createElement(l["a"],{dashed:!0}),m.a.createElement(a["a"],{style:{zIndex:99999}},m.a.createElement(c["a"],{span:24},m.a.createElement(a["a"],{justify:"space-between"},m.a.createElement(c["a"],null,m.a.createElement(i["a"],{disabled:!b,onClick:()=>{k(!v)}},v?"\u9690\u85cf":"\u663e\u793a"," JSON")),m.a.createElement(c["a"],null,m.a.createElement(o["b"],null,null===d||void 0===d?void 0:d.map(e=>m.a.createElement(i["a"],{key:e.name,onClick:e.onClick},e.name)),m.a.createElement(i["a"],{onClick:()=>{y(n)}},"\u8f6c\u6362\u4e3a Group"),m.a.createElement(i["a"],{type:"primary",onClick:()=>{g(n)}},"\u8f6c\u6362\u4e3a Symbol"))))),v?m.a.createElement(c["a"],{span:24},m.a.createElement(r["a"],null,m.a.createElement(f.a,{name:"Sketch JSON",src:b||{}}))):null))},j=O,E=()=>{var e=Object(u["useRef"])(null),n=Object(u["useState"])([]),t=Object(s["a"])(n,2),r=t[0],a=t[1];return Object(u["useEffect"])(()=>{0===r.length&&e.current&&a(e.current)}),{ref:e,elements:r,setElements:a}}}}]);