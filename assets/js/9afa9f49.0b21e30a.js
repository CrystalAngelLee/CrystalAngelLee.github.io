"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[2281],{9437:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(5893),c=t(1151);const o={},s="\u51fd\u6570\u91cd\u8f7d",i={id:"typescript/advance_function_overload",title:"\u51fd\u6570\u91cd\u8f7d",description:"JavaScript \u662f\u4e00\u95e8\u52a8\u6001\u8bed\u8a00\uff0c\u9488\u5bf9\u540c\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u6709\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\uff0c\u8fd9\u5c31\u662f\u51fd\u6570\u7684\u591a\u6001\u3002",source:"@site/docs/typescript/advance_function_overload.md",sourceDirName:"typescript",slug:"/typescript/advance_function_overload",permalink:"/docs/typescript/advance_function_overload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8054\u5408\u7c7b\u578b",permalink:"/docs/typescript/advance_union"},next:{title:"\u7c7b\u578b\u5b88\u536b",permalink:"/docs/typescript/advance_type_protect"}},u={},a=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u51fd\u6570\u91cd\u8f7d",children:"\u51fd\u6570\u91cd\u8f7d"}),"\n",(0,r.jsxs)(e.p,{children:["JavaScript \u662f\u4e00\u95e8\u52a8\u6001\u8bed\u8a00\uff0c\u9488\u5bf9\u540c\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u6709\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\uff0c\u8fd9\u5c31\u662f\u51fd\u6570\u7684",(0,r.jsx)(e.strong,{children:"\u591a\u6001"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u800c\u5728 TypeScript \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u76f8\u5e94\u5730\u8868\u8fbe\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u51fd\u6570\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'function convert(x: string | number | null): string | number | -1 {\n  if (typeof x === "string") {\n    return Number(x);\n  }\n  if (typeof x === "number") {\n    return String(x);\n  }\n  return -1;\n}\nconst x1 = convert("1"); // => string | number\nconst x2 = convert(1); // => string | number\nconst x3 = convert(null); // => string | number\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u628a convert \u51fd\u6570\u7684 string \u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a number \u7c7b\u578b\uff0cnumber \u7c7b\u578b\u8f6c\u6362\u4e3a string \u7c7b\u578b\uff0c\u800c\u5c06 null \u7c7b\u578b\u8f6c\u6362\u4e3a\u6570\u5b57 -1\u3002\u6b64\u65f6\uff0c x1\u3001x2\u3001x3 \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u90fd\u4f1a\u88ab\u63a8\u65ad\u6210 string | number \u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u90a3\u4e48\uff0c\u6709\u6ca1\u6709\u4e00\u79cd\u529e\u6cd5\u53ef\u4ee5\u66f4\u7cbe\u786e\u5730\u63cf\u8ff0\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\u7ea6\u675f\u5173\u7cfb\u7684\u51fd\u6570\u7c7b\u578b\u5462\uff1f\u6709\uff0c\u8fd9\u5c31\u662f\u51fd\u6570\u91cd\u8f7d\uff08Function Overload\uff09\uff0c\u5982\u4e0b\u793a\u4f8b\u4e2d 1~3 \u884c\u5b9a\u4e49\u4e86\u4e09\u79cd\u5404\u4e0d\u76f8\u540c\u7684\u51fd\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5e76\u63cf\u8ff0\u4e86\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\u5bf9\u5e94\u4e0d\u540c\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u800c\u4ece\u7b2c 4 \u884c\u5f00\u59cb\u624d\u662f\u51fd\u6570\u7684\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'function convert(x: string): number;\nfunction convert(x: number): string;\nfunction convert(x: null): -1;\nfunction convert(x: string | number | null): any {\n  if (typeof x === "string") {\n    return Number(x);\n  }\n  if (typeof x === "number") {\n    return String(x);\n  }\n  return -1;\n}\nconst x1 = convert("1"); // => number\nconst x2 = convert(1); // => string\nconst x3 = convert(null); // -1\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u26a0\ufe0f \u6ce8\u610f\uff1a\u51fd\u6570\u91cd\u8f7d\u5217\u8868\u7684\u5404\u4e2a\u6210\u5458\uff08\u5373\u793a\u4f8b\u4e2d\u7684 1 ~ 3 \u884c\uff09\u5fc5\u987b\u662f\u51fd\u6570\u5b9e\u73b0\uff08\u5373\u793a\u4f8b\u4e2d\u7684\u7b2c 4 \u884c\uff09\u7684\u5b50\u96c6\uff0c\u4f8b\u5982 \u201cfunction convert(x: string): number\u201d\u662f\u201cfunction convert(x: string | number | null): any\u201d\u7684\u5b50\u96c6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728 convert \u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0cTypeScript \u4f1a\u4ece\u4e0a\u5230\u4e0b\u67e5\u627e\u51fd\u6570\u91cd\u8f7d\u5217\u8868\u4e2d\u4e0e\u5165\u53c2\u7c7b\u578b\u5339\u914d\u7684\u7c7b\u578b\uff0c\u5e76\u4f18\u5148\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u91cd\u8f7d\u5b9a\u4e49\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u628a\u6700\u7cbe\u786e\u7684\u51fd\u6570\u91cd\u8f7d\u653e\u5230\u524d\u9762\u3002\u4f8b\u5982\u6211\u4eec\u5728\u7b2c 13 \u884c\u4f20\u5165\u4e86\u5b57\u7b26\u4e32 '1'\uff0c\u67e5\u627e\u5230\u7b2c 1 \u884c\u5373\u5339\u914d\uff0c\u800c\u7b2c 14 \u884c\u4f20\u5165\u4e86\u6570\u5b57 1\uff0c\u5219\u67e5\u627e\u5230\u7b2c 2 \u884c\u5339\u914d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\ud83c\udf30 \u4e3e\u4e2a\u4f8b\u5b50"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'interface P1 {\n  name: string;\n}\ninterface P2 extends P1 {\n  age: number;\n}\nfunction convert(x: P1): number;\nfunction convert(x: P2): string;\nfunction convert(x: P1 | P2): any {}\nconst x1 = convert({ name: "" } as P1); // => number\nconst x2 = convert({ name: "", age: 18 } as P2); // number\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u56e0\u4e3a P2 \u7ee7\u627f\u81ea P1\uff0c\u6240\u4ee5\u7c7b\u578b\u4e3a P2 \u7684\u53c2\u6570\u4f1a\u548c\u7c7b\u578b\u4e3a P1 \u7684\u53c2\u6570\u4e00\u6837\u5339\u914d\u5230\u7b2c\u4e00\u4e2a\u51fd\u6570\u91cd\u8f7d\uff0c\u6b64\u65f6 x1\u3001x2 \u7684\u8fd4\u56de\u503c\u90fd\u662f number\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'function convert(x: P2): string;\nfunction convert(x: P1): number;\nfunction convert(x: P1 | P2): any {}\nconst x1 = convert({ name: "" } as P1); // => number\nconst x2 = convert({ name: "", age: 18 } as P2); // => string\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u800c\u6211\u4eec\u53ea\u9700\u8981\u5c06\u51fd\u6570\u91cd\u8f7d\u5217\u8868\u7684\u987a\u5e8f\u8c03\u6362\u4e00\u4e0b\uff0c\u7c7b\u578b\u4e3a P2 \u548c P1 \u7684\u53c2\u6570\u5c31\u53ef\u4ee5\u5206\u522b\u5339\u914d\u5230\u6b63\u786e\u7684\u51fd\u6570\u91cd\u8f7d\u4e86\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>s});var r=t(7294);const c={},o=r.createContext(c);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);