(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{iodu:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return j}));n("EpIQ");var r=n("bx4M"),a=(n("Jmwx"),n("BMrR")),c=(n("Y2jk"),n("zeV3")),o=(n("rO+z"),n("kPKH")),u=(n("L/Qf"),n("2/Rp")),s=(n("qNb/"),n("PArb")),l=n("tJVT"),i=n("q1tI"),p=n.n(i),d=n("ovOe"),b=n.n(d),f=n("WmNS"),m=n.n(f),h=(n("8/o9"),n("tsqr")),k=n("9og8"),w=n("+QRC"),S=n.n(w),v=n("/7QA");"undefined"!==typeof window&&(window.DUMI_HTML2SKETCH={nodeToSketchSymbol:v["nodeToSketchSymbol"],nodeToGroup:v["nodeToGroup"]});var E=()=>{var e=Object(i["useState"])(),t=Object(l["a"])(e,2),n=t[0],r=t[1],a=function(){var e=Object(k["a"])(m.a.mark((function e(t,n){var a,c,o,u,s;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.groupCollapsed("[html2sketch]\u5f00\u59cb\u8f6c\u6362..."),!(t instanceof Array)){e.next=17;break}c=[],o=0;case 5:if(!(o<t.length)){e.next=14;break}return u=t[o],e.next=9,n(u);case 9:s=e.sent,c.push(s);case 11:o+=1,e.next=5;break;case 14:a=c,e.next=20;break;case 17:return e.next=19,n(t);case 19:a=e.sent;case 20:return console.groupEnd(),console.log("\u89e3\u6790\u7ed3\u679c:",a),S()(JSON.stringify(a)),r(a),e.next=26,h["b"].success("\u8f6c\u6362\u6210\u529f\ud83c\udf89 \u5df2\u590d\u5236\u5230\u526a\u5207\u677f");case 26:return e.abrupt("return",a);case 29:return e.prev=29,e.t0=e["catch"](0),e.next=33,h["b"].error("\u89e3\u6790\u5931\u8d25,\u8bf7\u68c0\u67e5 Console \u8f93\u51fa \ud83d\ude36");case 33:console.groupEnd(),console.groupEnd(),console.error("\u62a5\u9519\u5982\u4e0b:"),console.error(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t,n){return e.apply(this,arguments)}}();return{sketchJSON:n,generateSymbol:function(){var e=Object(k["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t,function(){var e=Object(k["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["nodeToSketchSymbol"])(t);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),generateGroup:function(){var e=Object(k["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t,function(){var e=Object(k["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["nodeToGroup"])(t);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},O=E,x=e=>{var t=e.elements,n=e.children,d=e.buttons,f=O(),m=f.sketchJSON,h=f.generateGroup,k=f.generateSymbol,w=Object(i["useState"])(!1),S=Object(l["a"])(w,2),v=S[0],E=S[1];return p.a.createElement("div",null,n,p.a.createElement(s["a"],{dashed:!0}),p.a.createElement(a["a"],{style:{zIndex:99999}},p.a.createElement(o["a"],{span:24},p.a.createElement(a["a"],{justify:"space-between"},p.a.createElement(o["a"],null,p.a.createElement(u["a"],{disabled:!m,onClick:()=>{E(!v)}},v?"\u9690\u85cf":"\u663e\u793a"," JSON")),p.a.createElement(o["a"],null,p.a.createElement(c["b"],null,null===d||void 0===d?void 0:d.map(e=>p.a.createElement(u["a"],{key:e.name,onClick:e.onClick},e.name)),p.a.createElement(u["a"],{onClick:()=>{h(t)}},"\u8f6c\u6362\u4e3a Group"),p.a.createElement(u["a"],{type:"primary",onClick:()=>{k(t)}},"\u8f6c\u6362\u4e3a Symbol"))))),v?p.a.createElement(o["a"],{span:24},p.a.createElement(r["a"],null,p.a.createElement(b.a,{name:"Sketch JSON",src:m||{}}))):null))},y=x,j=()=>{var e=Object(i["useRef"])(null),t=Object(i["useState"])([]),n=Object(l["a"])(t,2),r=n[0],a=n[1];return Object(i["useEffect"])(()=>{0===r.length&&e.current&&a(e.current)}),{ref:e,elements:r,setElements:a}}},ySmn:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("iodu");t["default"]=()=>{var e=Object(c["b"])(),t=e.elements,n=e.ref;return a.a.createElement(c["a"],{elements:t},a.a.createElement("div",{ref:n},a.a.createElement("span",{style:{color:"#1890ff",background:"#e6f7ff",borderColor:"#91d5ff",padding:"0 7px",height:22,display:"inline-block",fontSize:12,lineHeight:"20px",border:"1px solid #d9d9d9",borderRadius:2}},"\u84dd\u8272")))}}}]);