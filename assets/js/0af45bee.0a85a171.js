"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[7818],{5676:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=t(5893),r=t(1151);const i={},c="\u7c7b\u578b\u8c13\u8bcd\uff08is\uff09",o={id:"typescript/advance_is",title:"\u7c7b\u578b\u8c13\u8bcd\uff08is\uff09",description:"\u5728 TypeScript \u4e2d\uff0c\u51fd\u6570\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u7279\u6b8a\u7684\u7c7b\u578b\u63cf\u8ff0\uff0c\u5982\u4e0b\u793a\u4f8b \uff1a",source:"@site/docs/typescript/advance_is.md",sourceDirName:"typescript",slug:"/typescript/advance_is",permalink:"/docs/typescript/advance_is",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u522b\u540d",permalink:"/docs/typescript/advance_type"},next:{title:"\u8054\u5408\u7c7b\u578b",permalink:"/docs/typescript/advance_union"}},a={},p=[];function u(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u7c7b\u578b\u8c13\u8bcdis",children:"\u7c7b\u578b\u8c13\u8bcd\uff08is\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 TypeScript \u4e2d\uff0c\u51fd\u6570\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u7279\u6b8a\u7684\u7c7b\u578b\u63cf\u8ff0\uff0c\u5982\u4e0b\u793a\u4f8b \uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'function isString(s): s is string {\n  // \u7c7b\u578b\u8c13\u8bcd\n  return typeof s === "string";\n}\nfunction isNumber(n: number) {\n  return typeof n === "number";\n}\nfunction operator(x: unknown) {\n  if (isString(x)) {\n    //\xa0ok\xa0x\xa0\u7c7b\u578b\u7f29\u5c0f\u4e3a\xa0string\n  }\n  if (isNumber(x)) {\n    //\xa0ts(2345)\xa0unknown\xa0\u4e0d\u80fd\u8d4b\u503c\u7ed9\xa0number\n  }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u5728\u6dfb\u52a0\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u5730\u65b9\uff0c\u6211\u4eec\u901a\u8fc7\u201c\u53c2\u6570\u540d + is + \u7c7b\u578b\u201d\u7684\u683c\u5f0f\u660e\u786e\u8868\u660e\u4e86\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u8fdb\u800c\u5f15\u8d77\u7c7b\u578b\u7f29\u5c0f\uff0c\u6240\u4ee5\u7c7b\u578b\u8c13\u8bcd\u51fd\u6570\u7684\u4e00\u4e2a\u91cd\u8981\u7684\u5e94\u7528\u573a\u666f\u662f\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7c7b\u578b\u5b88\u536b\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var s=t(7294);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);