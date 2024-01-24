"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[804],{216:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var t=s(5893),l=s(1151);const o={},d="Web Components",c={id:"web_components",title:"Web Components",description:"- \u5b98\u7f51",source:"@site/docs/web_components.md",sourceDirName:".",slug:"/web_components",permalink:"/docs/web_components",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TS \u7c7b\u578b",permalink:"/docs/typescript/basic_types"},next:{title:"Git \u5e38\u7528\u64cd\u4f5c",permalink:"/docs/git"}},i={},r=[{value:"\u4ec0\u4e48\u662fWeb Components",id:"\u4ec0\u4e48\u662fweb-components",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"custom elements",id:"custom-elements",level:3},{value:"Shadow DOM",id:"shadow-dom",level:3},{value:"HTML Template",id:"html-template",level:3},{value:"\u7279\u6027\u517c\u5bb9\u6027&amp;polyfill",id:"\u7279\u6027\u517c\u5bb9\u6027polyfill",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:3},{value:"polyfill",id:"polyfill",level:3},{value:"Web Components \u5b9e\u73b0\u603b\u7ed3",id:"web-components-\u5b9e\u73b0\u603b\u7ed3",level:2},{value:"\u76f8\u5173\u62d3\u5c55",id:"\u76f8\u5173\u62d3\u5c55",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"web-components",children:"Web Components"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.webcomponents.org/",children:"\u5b98\u7f51"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components",children:"MDN"})}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u4ec0\u4e48\u662fweb-components",children:"\u4ec0\u4e48\u662fWeb Components"}),"\n",(0,t.jsx)(n.p,{children:"\u884c\u8d70\u5728\u65b0\u65f6\u4ee3\u7684\u6211\u4eec\u9762\u5bf9\u524d\u7aef\u5f00\u53d1\u8eab\u8fb9\u56f4\u7ed5\u7740\u5404\u58f0\u5404\u8272\u7684\u201c\u7ec4\u4ef6\u5316\u201d\uff0c\u4f7f\u7528\u6700\u591a\u7684\u6bd4\u5982 Vue \u4e2d\u7684\u6a21\u7248\u8bed\u6cd5\u3001React \u4e2d\u7684JSX\uff0c\u90fd\u81f4\u529b\u4e8e\u5c06\u7ed3\u6784\u3001\u6837\u5f0f\u3001\u903b\u8f91\u5c01\u88c5\u6210\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u91c7\u7528\u7ec4\u4ef6\u590d\u7528\u6765\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002\u4f46\u662f\u8fd9\u4e9b\u6846\u67b6\u7684\u7ec4\u4ef6\u5316\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u7ec4\u4ef6\u5316\uff0c\u867d\u7136\u6211\u4eec\u5199\u4ee3\u7801\u65f6\u786e\u5b9e\u662f\u5199\u7684\u7ec4\u4ef6\u5316\u4ee3\u7801\uff0c\u4f46\u7ecf\u8fc7\u7f16\u8bd1\u540e\u5c31\u4e0d\u518d\u662f\u7ec4\u4ef6\u5316\u4e86\uff0c\u6bd4\u5982\u5728\u4f7f\u7528ElementUI \u7684\u65f6\u5019\u6211\u4eec\u4f1a\u4f7f\u7528 \u7ec4\u4ef6\uff0c\u5728\u7ecf\u8fc7\u7f16\u8bd1\u8fc7\u540e\u663e\u793a\u5728\u9875\u9762\u4e0a\u7684\u5c31\u4f1a\u53d8\u6210 div \u7b49\u6807\u7b7e\uff0c\u8fd9\u79cd\u5c31\u50cf\u662fCSS\u9884\u5904\u7406\u5668\u3002Web Components \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u662f\u539f\u751f\u652f\u6301\u7684\u7ec4\u4ef6\u5316\uff0c\u4e0d\u4f9d\u8d56\u4efb\u4f55\u5e93\u6216\u6846\u67b6\u4ee5\u53ca\u5404\u79cd\u7f16\u8bd1\u6253\u5305\u5de5\u5177\u5c31\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff0c\u5e76\u4e14\u5176\u53ef\u4ee5\u4e0eMVVM\u6846\u67b6\u5171\u5b58\u3002\u6211\u4eec\u5728\u4f7f\u7528 ElementUI \u65f6\uff0c\u4f1a\u6216\u591a\u6216\u5c11\u53d7\u5230\u5176\u6837\u5f0f\u7684\u5f71\u54cd\uff0cWeb Components \u53ef\u4ee5\u5b8c\u7f8e\u907f\u5f00\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u7ec4\u4ef6\u6e32\u67d3\u5728\u72ec\u7acb\u7684 DOM \u6811\u4e2d\uff0c\u5929\u7136\u652f\u6301\u6a21\u5757\u95f4\u6837\u5f0f\u548c\u903b\u8f91\u7684\u9694\u79bb\u3002\u4e0d\u4f1a\u5e72\u6270\u9875\u9762\u4e0a\u7684\u5176\u4ed6\u4ee3\u7801\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u770b\uff0c\u4e0b\u9762\u4f7f\u6211\u4eec\u5b9e\u73b0\u7684\u4e00\u4e2a\u7b80\u5355 Web \u7ec4\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u4f7f\u7528\u6548\u679c(\u662f\u76f4\u63a5\u663e\u793a\u4e3a\u81ea\u5b9a\u4e49\u6807\u7b7e\u7684\u8bf6~)\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1676616483601",src:s(8400).Z+"",width:"805",height:"96"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/CrystalAngelLee/crystal-fd-repositories/blob/master/webcomponents",children:"\u5b8c\u6574demo\u4ee3\u7801"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"web component \u7531\u4e09\u9879\u4e3b\u8981\u6280\u672f\u7ec4\u6210\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Custom element"}),"\n\u4e00\u7ec4 JavaScript API\uff0c\u53ef\u4ee5\u5b9a\u4e49 custom elements \u53ca\u5176\u884c\u4e3a\uff0c\u7136\u540e\u5728\u7528\u6237\u754c\u9762\u4e2d\u6309\u7167\u9700\u8981\u4f7f\u7528\u5b83\u4eec\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shadow DOM"}),"\n\u4e00\u7ec4 JavaScript API\uff0c\u7528\u4e8e\u5c06\u5c01\u88c5\u7684 Shadow DOM \u6811\u9644\u52a0\u5230\u5143\u7d20\uff08\u4e0e\u4e3b\u6587\u6863 DOM \u5206\u5f00\u5448\u73b0\uff09\u5e76\u63a7\u5236\u5176\u5173\u8054\u7684\u529f\u80fd\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4fdd\u6301\u5143\u7d20\u7684\u529f\u80fd\u79c1\u6709\uff0c\u8fd9\u6837\u5b83\u4eec\u5c31\u53ef\u4ee5\u88ab\u811a\u672c\u5316\u548c\u6837\u5f0f\u5316\uff0c\u800c\u4e0d\u7528\u62c5\u5fc3\u4e0e\u6587\u6863\u7684\u5176\u4ed6\u90e8\u5206\u53d1\u751f\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HTML template"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template",children:"<template>"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot",children:"<slot>"})," \u5143\u7d20\u4f7f\u60a8\u53ef\u4ee5\u7f16\u5199\u4e0d\u5728\u5448\u73b0\u9875\u9762\u4e2d\u663e\u793a\u7684\u6807\u8bb0\u6a21\u677f\u3002\u7136\u540e\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u81ea\u5b9a\u4e49\u5143\u7d20\u7ed3\u6784\u7684\u57fa\u7840\u88ab\u591a\u6b21\u91cd\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"custom-elements",children:"custom elements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u518c custom elements"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a <a-b-c> \u7684\u7ec4\u4ef6\ncustomElements.define('a-b-c', class extends HTMLElement {})\n// \u5143\u7d20\u53eb\u505a word-count\uff0c\u7c7b\u5bf9\u8c61\u662f WordCount, \u7ee7\u627f\u81ea <p> \u5143\u7d20\ncustomElements.define('word-count', WordCount, { extends: 'p' });\n\n/*\u53c2\u6570\u8bf4\u660e*/\n1. \u8868\u793a\u6240\u521b\u5efa\u7684\u5143\u7d20\u540d\u79f0\u7684\u7b26\u5408 DOMString \u6807\u51c6\u7684\u5b57\u7b26\u4e32\u3002\u6ce8\u610f\uff0ccustom element \u7684\u540d\u79f0\u4e0d\u80fd\u662f\u5355\u4e2a\u5355\u8bcd\uff0c\u4e14\u5176\u4e2d\u5fc5\u987b\u8981\u6709\u77ed\u6a2a\u7ebf\u3002\n2. \u7528\u4e8e\u5b9a\u4e49\u5143\u7d20\u884c\u4e3a\u7684 \u7c7b \u3002\n3. \u53ef\u9009\u53c2\u6570\uff0c\u4e00\u4e2a\u5305\u542b extends \u5c5e\u6027\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u662f\u53ef\u9009\u53c2\u6570\u3002\u5b83\u6307\u5b9a\u4e86\u6240\u521b\u5efa\u7684\u5143\u7d20\u7ee7\u627f\u81ea\u54ea\u4e2a\u5185\u7f6e\u5143\u7d20\uff0c\u53ef\u4ee5\u7ee7\u627f\u4efb\u4f55\u5185\u7f6e\u5143\u7d20\u3002\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u83b7\u53d6\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u83b7\u53d6 <a-b-c> \u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570\ncustomElements.get('a-b-c')\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5347\u7ea7\u4e3a\u81ea\u5b9a\u4e49\u5143\u7d20"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u521b\u5efa\u4e00\u4e2a <a-b-c> \u7684\u5143\u7d20\uff0c\u540d\u4e3a el\nconst el = document.createElement('a-b-c')\n// \u5347\u7ea7 el \u5143\u7d20\ncustomElements.upgrade(el)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9a\u4e49\u540e"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u5f53 <a-b-c> \u7ec4\u4ef6\u5b9a\u4e49\u540e\ncustomElements.whenDefined('a-b-c').then(() => { /* \u5f53 <a-b-c> \u7ec4\u4ef6\u5b9a\u4e49\u540e\u7684\u56de\u6389\u51fd\u6570 */ })\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u751f\u547d\u5468\u671f\u51fd\u6570"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connectedCallback"}),"\uff1a\u5f53 custom element \u9996\u6b21\u88ab\u63d2\u5165\u6587\u6863 DOM \u65f6\uff0c\u88ab\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disconnectedCallback"}),"\uff1a\u5f53 custom element \u4ece\u6587\u6863 DOM \u4e2d\u5220\u9664\u65f6\uff0c\u88ab\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"adoptedCallback"}),"\uff1a\u5f53 custom element \u88ab\u79fb\u52a8\u5230\u65b0\u7684\u6587\u6863\u65f6\uff0c\u88ab\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attributeChangedCallback"}),": \u5f53 custom element \u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u81ea\u8eab\u5c5e\u6027\u65f6\uff0c\u88ab\u8c03\u7528\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"constructor () {\n  super()\n  // \u76f8\u5f53\u4e8e Vue \u7684 setup\n  console.log('\u5148\u8fd0\u884c\u6784\u9020\u51fd\u6570')\n}\n// \u5f53 custom element \u9996\u6b21\u88ab\u63d2\u5165\u6587\u6863 DOM \u65f6\uff0c\u88ab\u8c03\u7528\nconnectedCallback () {\n  // \u76f8\u5f53\u4e8e Vue \u7684 mounted\n  console.log('\u518d\u8fd0\u884c\u8fde\u63a5\u56de\u8c03')\n}\ndisconnectedCallback () {\n  // \u76f8\u5f53\u4e8e Vue \u7684 unmounted\n  console.log('\u5f53\u5220\u9664\u7ec4\u4ef6\u65f6\u624d\u4f1a\u8fd0\u884c\u5931\u8054\u56de\u8c03')\n}\nadoptedCallback () {\n  // \u5f53\u4f7f\u7528 document.adoptNode \u540e\u4f1a\u89e6\u53d1\u8be5\u751f\u547d\u5468\u671f\n  console.log('\u5f53\u4f7f\u7528 document.adoptNode \u540e\u4f1a\u8fd0\u884c\u6536\u517b\u56de\u8c03')\n}\n// \u76f8\u5f53\u4e8e Vue \u7684 data\nstatic observedAttributes = ['id']\n// \u4e5f\u53ef\u4ee5\u5199\u6210\u4e0b\u9762\u8fd9\u6837\uff1a\n// static get observedAttributes () { return ['id'] }\n\n// getter \u548c setter \u914d\u5408 attributeChangedCallback \u6253\u9020\u5c5e\u6027\u7279\u6027\u8054\u52a8\u540c\u6b65\nget id () { return this.getAttribute('id') }\nset id (value) { this.setAttribute('id', value) }\nattributeChangedCallback (name, oldValue, newValue) {\n  // \u76f8\u5f53\u4e8e Vue \u7684 watch\n  if (oldValue === newValue) return\n\n  switch (name) {\n    case 'id':\n      console.log(`oldValue: ${oldValue}, newValue: ${newValue}`)\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"shadow-dom",children:"Shadow DOM"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Web components \u7684\u4e00\u4e2a\u91cd\u8981\u5c5e\u6027\u662f\u5c01\u88c5\u2014\u2014\u53ef\u4ee5\u5c06\u6807\u8bb0\u7ed3\u6784\u3001\u6837\u5f0f\u548c\u884c\u4e3a\u9690\u85cf\u8d77\u6765\uff0c\u5e76\u4e0e\u9875\u9762\u4e0a\u7684\u5176\u4ed6\u4ee3\u7801\u76f8\u9694\u79bb\uff0c\u4fdd\u8bc1\u4e0d\u540c\u7684\u90e8\u5206\u4e0d\u4f1a\u6df7\u5728\u4e00\u8d77\uff0c\u53ef\u4f7f\u4ee3\u7801\u66f4\u52a0\u5e72\u51c0\u3001\u6574\u6d01\u3002\u5176\u4e2d\uff0cShadow DOM \u63a5\u53e3\u662f\u5173\u952e\u6240\u5728\uff0c\u5b83\u53ef\u4ee5\u5c06\u4e00\u4e2a\u9690\u85cf\u7684\u3001\u72ec\u7acb\u7684 DOM \u9644\u52a0\u5230\u4e00\u4e2a\u5143\u7d20\u4e0a\u3002 -- ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM",children:"MDN"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Shadow"})," DOM \u5141\u8bb8\u5c06\u9690\u85cf\u7684 DOM \u6811\u9644\u52a0\u5230\u5e38\u89c4\u7684 DOM \u6811\u4e2d\u2014\u2014\u5b83\u4ee5 shadow root \u8282\u70b9\u4e3a\u8d77\u59cb\u6839\u8282\u70b9\uff0c\u5728\u8fd9\u4e2a\u6839\u8282\u70b9\u7684\u4e0b\u65b9\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u5143\u7d20\uff0c\u548c\u666e\u901a\u7684 DOM \u5143\u7d20\u4e00\u6837\u3002\u4e0d\u540c\u7684\u662f\uff0cShadow DOM \u5185\u90e8\u7684\u5143\u7d20\u59cb\u7ec8\u4e0d\u4f1a\u5f71\u54cd\u5230\u5b83\u5916\u90e8\u7684\u5143\u7d20\uff08\u9664\u4e86 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within",children:(0,t.jsx)(n.code,{children:":focus-within"})}),"\uff09\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:"Shadow host\uff1a\u4e00\u4e2a\u5e38\u89c4 DOM \u8282\u70b9\uff0cShadow DOM \u4f1a\u88ab\u9644\u52a0\u5230\u8fd9\u4e2a\u8282\u70b9\u4e0a\u3002\nShadow tree\uff1aShadow DOM \u5185\u90e8\u7684 DOM \u6811\u3002\nShadow boundary\uff1aShadow DOM \u7ed3\u675f\u7684\u5730\u65b9\uff0c\u4e5f\u662f\u5e38\u89c4 DOM \u5f00\u59cb\u7684\u5730\u65b9\u3002\nShadow root: Shadow tree \u7684\u6839\u8282\u70b9\u3002\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(1469).Z+"",width:"1107",height:"509"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<body>\n  <my-shadow></my-shadow>\n  <script>\n    customElements.define(\n      'my-shadow',\n      class extends HTMLElement {\n        constructor() {\n          super()\n          // 1. \u521b\u5efa shadow root\n          const shadow = this.attachShadow({ mode: 'open' })\n\n          // 2. \u521b\u5efa shadow DOM \u7ed3\u6784\n          const wrapper = document.createElement('span')\n          wrapper.setAttribute('class', 'wrapper')\n          wrapper.innerHTML = '<h1>shadow DOM</h1>'\n\n          // 3. \u5c06\u6240\u521b\u5efa\u7684\u5143\u7d20\u6dfb\u52a0\u5230 Shadow DOM \u4e0a\n          shadow.appendChild(wrapper)\n        }\n      }\n    )\n  <\/script>\n</body>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"html-template",children:"HTML Template"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"template"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<template>"})," \u5143\u7d20\u662f\u4e00\u79cd\u4fdd\u62a4\u5ba2\u6237\u7aef\u5185\u5bb9\u673a\u5236\uff0c\u8be5\u5185\u5bb9\u5728\u52a0\u8f7d\u9875\u9762\u65f6\u4e0d\u4f1a\u5448\u73b0\uff0c\u4f46\u968f\u540e\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4f7f\u7528 JavaScript \u5b9e\u4f8b\u5316\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<body>\n  <template id=\"my-paragraph\">\n    <p>My paragraph</p>\n    <style>\n      p {\n        color: white;\n        background-color: #666;\n        padding: 5px;\n      }\n    </style>\n  </template>\n  <my-paragraph></my-paragraph>\n\n  <script>\n    customElements.define(\n      'my-paragraph',\n      class extends HTMLElement {\n        constructor() {\n          super()\n          let template = document.getElementById('my-paragraph')\n          let templateContent = template.content.cloneNode(true)\n\n          this.appendChild(templateContent)\n        }\n      }\n    )\n  <\/script>\n</body>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"slot"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528\u6a21\u7248\u6211\u4eec\u53ea\u80fd\u4f20\u9012\u4e00\u4e9b\u6587\u672c\u53d8\u91cf\uff0c\u8fd9\u5f88\u6709\u5c40\u9650\u6027\uff0c\u4e8e\u662f Web Components \u5f15\u5165\u4e86",(0,t.jsx)(n.code,{children:"<slot>"}),"\uff08\u63d2\u69fd\uff09\u7684\u6982\u5ff5\u6765\u589e\u52a0\u7f16\u7801\u7684\u7075\u6d3b\u5ea6\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 slot \u6765\u5b9e\u73b0\u57fa\u4e8e\u6a21\u7248\u7684\u90e8\u5206\u81ea\u5b9a\u4e49\u5185\u5bb9\uff08\u6807\u7b7e\u3001\u6837\u5f0f\uff09\u7684\u6e32\u67d3\uff0cslot \u63d2\u69fd\u9700\u8981\u5728 Shadow DOM \u91cc\u624d\u80fd\u751f\u6548\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<body>   \n  <my-slot>\n    <span slot=\"my-text\">Let's have some different text!</span>\n  </my-slot>\n  <script>\n    // slot\n    customElements.define(\n      'my-slot',\n      class extends HTMLElement {\n        constructor() {\n          super()\n          let template = document.getElementById('my-paragraph')\n          let templateContent = template.content.cloneNode(true)\n\n          const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(\n            templateContent.cloneNode(true)\n          )\n          }\n      }\n    )\n  <\/script>\n</body>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u6027\u517c\u5bb9\u6027polyfill",children:"\u7279\u6027\u517c\u5bb9\u6027&polyfill"}),"\n",(0,t.jsx)(n.h3,{id:"\u517c\u5bb9\u6027",children:"\u517c\u5bb9\u6027"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Elements"}),"\n",(0,t.jsx)(n.img,{alt:"customElement\u517c\u5bb9\u6027",src:s(3474).Z+"",width:"1372",height:"666"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Shadow DOM"}),"\n",(0,t.jsx)(n.img,{alt:"shadowDom\u517c\u5bb9\u6027",src:s(6316).Z+"",width:"1371",height:"710"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HTML Template"}),"\n",(0,t.jsx)(n.img,{alt:"HTMLTemplate\u517c\u5bb9\u6027",src:s(840).Z+"",width:"1372",height:"694"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u901a\u8fc7\u4e0a\u8ff0\u6570\u636e\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u7684\u517c\u5bb9\u6027\u5df2\u7ecf\u8fbe\u5230\u4e8696%\u4ee5\u4e0a"}),"\n",(0,t.jsx)(n.h3,{id:"polyfill",children:"polyfill"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u4e8e\u4e0a\u8ff0\u7684\u517c\u5bb9\u8fd8\u4e0d\u591f\u5b8c\u7f8e, \u6211\u4eec\u53ef\u4ee5\u627e\u5230\u76f8\u5173\u7684 polyfill \u6765\u8fdb\u884c\u4f7f\u7528\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/webcomponents/polyfills",children:"Web Components Polyfills"}),"\n\u4f7f\u7528\u4e86 polyfill \u4e4b\u540e, \u517c\u5bb9\u7a0b\u5ea6\u662f\u8fd9\u6837:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Polyfill"}),(0,t.jsx)(n.th,{children:"Edge"}),(0,t.jsx)(n.th,{children:"IE11+"}),(0,t.jsx)(n.th,{children:"Chrome*"}),(0,t.jsx)(n.th,{children:"Firefox*"}),(0,t.jsx)(n.th,{children:"Safari 9+*"}),(0,t.jsx)(n.th,{children:"Chrome Android*"}),(0,t.jsx)(n.th,{children:"Mobile Safari*"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom Elements"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shady CSS/DOM"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"*\u8868\u793a\u6d4f\u89c8\u5668\u7684\u5f53\u524d\u7248\u672c\n\u73b0\u5728\u52a0\u4e0a\u4e86 polyfill \u4e4b\u540e, \u517c\u5bb9\u6027\u5c31\u6bd4\u8f83\u7a33\u59a5\u4e86"}),"\n",(0,t.jsx)(n.h2,{id:"web-components-\u5b9e\u73b0\u603b\u7ed3",children:"Web Components \u5b9e\u73b0\u603b\u7ed3"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u7c7b\u6216\u51fd\u6570\u6765\u6307\u5b9a web \u7ec4\u4ef6\u7684\u529f\u80fd"}),"\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define",children:(0,t.jsx)(n.code,{children:"CustomElementRegistry.define()"})})," \u65b9\u6cd5\u6ce8\u518c\u60a8\u7684\u65b0\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u5e76\u5411\u5176\u4f20\u9012\u8981\u5b9a\u4e49\u7684\u5143\u7d20\u540d\u79f0\u3001\u6307\u5b9a\u5143\u7d20\u529f\u80fd\u7684\u7c7b\u3001\u4ee5\u53ca\u53ef\u9009\u7684\u5176\u6240\u7ee7\u627f\u81ea\u7684\u5143\u7d20"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow",children:(0,t.jsx)(n.code,{children:"Element.attachShadow()"})})," \u65b9\u6cd5\u5c06\u4e00\u4e2a shadow DOM \u9644\u52a0\u5230\u81ea\u5b9a\u4e49\u5143\u7d20\u4e0a\u3002\u4f7f\u7528\u901a\u5e38\u7684 DOM \u65b9\u6cd5\u5411 shadow DOM \u4e2d\u6dfb\u52a0\u5b50\u5143\u7d20\u3001\u4e8b\u4ef6\u76d1\u542c\u5668\u7b49\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u4f7f\u7528  ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template",children:"<template>"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot",children:"<slot>"})," \u5b9a\u4e49\u4e00\u4e2a HTML \u6a21\u677f\u3002\u518d\u6b21\u4f7f\u7528\u5e38\u89c4 DOM \u65b9\u6cd5\u514b\u9686\u6a21\u677f\u5e76\u5c06\u5176\u9644\u52a0\u5230\u60a8\u7684 shadow DOM \u4e2d\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u9875\u9762\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u4f4d\u7f6e\u4f7f\u7528\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u5c31\u50cf\u4f7f\u7528\u5e38\u89c4 HTML \u5143\u7d20\u90a3\u6837\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u62d3\u5c55",children:"\u76f8\u5173\u62d3\u5c55"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u5217\u51fa\u51e0\u4e2a\u57fa\u4e8e WebComponents \u7684\u6846\u67b6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://zeroing.jd.com/",children:"MicroApp"}),"\uff1a\u662f\u4e00\u6b3e\u57fa\u4e8eWebComponents\u7684\u601d\u60f3\u5b9e\u73b0\u7684\u9ad8\u6027\u80fd\u4f4e\u6210\u672c\u5fae\u524d\u7aef\u6846\u67b6"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://lit.dev/",children:"LitElement"}),"\uff1a \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u7c7b\uff0c\u7528\u4e8e\u4f7f\u7528 lit-html \u521b\u5efa\u5feb\u901f\u3001\u8f7b\u91cf\u7ea7\u7684 Web Components"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://tencent.github.io/omi/",children:"Omi"}),"\uff1a\u662f Web Components + JSX/TSX \u878d\u5408\u4e3a\u4e00\u4e2a\u6846\u67b6\uff0c\u5c0f\u5de7\u7684\u5c3a\u5bf8\u548c\u9ad8\u6027\u80fd\uff0c\u878d\u5408\u548c React \u548c Web Components \u5404\u81ea\u7684\u4f18\u52bf"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://stenciljs.com/",children:"Stencil"}),"\uff1a\u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u53ef\u91cd\u7528\u3001\u53ef\u6269\u5c55\u7684\u8bbe\u8ba1\u7cfb\u7edf\u7684\u5de5\u5177\u94fe\u3002\u751f\u6210\u53ef\u5728\u6bcf\u4e2a\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u5c0f\u578b\u3001\u6781\u5feb\u4e14 100% \u57fa\u4e8e\u6807\u51c6\u7684 Web Components\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3474:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/custom_element_usage-a1f73a39748416dbfc0ee76c5dcf2083.png"},840:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/html_template_usage-7996940015b4a826c19edc811777f76a.png"},1469:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/shadow_dom-902121a5885cf11e40487a3b91c5b56b.svg"},6316:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/shadow_dom_usage-bb790fb994fab89afd7ae97d4bc303cd.png"},8400:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/webcomponents_demo-3add4dac5a7ac194e9f66e07bc98e90e.jpg"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var t=s(7294);const l={},o=t.createContext(l);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);