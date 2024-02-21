"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[6454],{3364:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(5893),r=t(1151);const s={},l="\u7c7b\u578b\u62d3\u5bbd(Type Widening)",c={id:"typescript/basic_wide_narrow",title:"\u7c7b\u578b\u62d3\u5bbd(Type Widening)",description:"\u6bd4\u5982\u5bf9 null \u548c undefined \u7684\u7c7b\u578b\u8fdb\u884c\u62d3\u5bbd\uff0c\u901a\u8fc7 let\u3001var \u5b9a\u4e49\u7684\u53d8\u91cf\u5982\u679c\u6ee1\u8db3\u672a\u663e\u5f0f\u58f0\u660e\u7c7b\u578b\u6ce8\u89e3\u4e14\u88ab\u8d4b\u4e88\u4e86 null \u6216 undefined \u503c\uff0c\u5219\u63a8\u65ad\u51fa\u8fd9\u4e9b\u53d8\u91cf\u7684\u7c7b\u578b\u662f any\uff1a",source:"@site/docs/typescript/basic_wide_narrow.md",sourceDirName:"typescript",slug:"/typescript/basic_wide_narrow",permalink:"/docs/typescript/basic_wide_narrow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"this",permalink:"/docs/typescript/basic_this"},next:{title:"\u7c7b\u578b\u522b\u540d",permalink:"/docs/typescript/advance_type"}},o={},a=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u7c7b\u578b\u62d3\u5bbdtype-widening",children:"\u7c7b\u578b\u62d3\u5bbd(Type Widening)"}),"\n",(0,i.jsx)(e.p,{children:"\u6bd4\u5982\u5bf9 null \u548c undefined \u7684\u7c7b\u578b\u8fdb\u884c\u62d3\u5bbd\uff0c\u901a\u8fc7 let\u3001var \u5b9a\u4e49\u7684\u53d8\u91cf\u5982\u679c\u6ee1\u8db3\u672a\u663e\u5f0f\u58f0\u660e\u7c7b\u578b\u6ce8\u89e3\u4e14\u88ab\u8d4b\u4e88\u4e86 null \u6216 undefined \u503c\uff0c\u5219\u63a8\u65ad\u51fa\u8fd9\u4e9b\u53d8\u91cf\u7684\u7c7b\u578b\u662f any\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"{\n  let x = null; // \u7c7b\u578b\u62d3\u5bbd\u6210 any\n  let y = undefined; // \u7c7b\u578b\u62d3\u5bbd\u6210 any\n  /** -----\u5206\u754c\u7ebf------- */\n  const z = null; // \u7c7b\u578b\u662f null\n  /** -----\u5206\u754c\u7ebf------- */\n  let anyFun = (param = null) => param; // \u5f62\u53c2\u7c7b\u578b\u662f null\n  let z2 = z; // \u7c7b\u578b\u662f null\n  let x2 = x; // \u7c7b\u578b\u662f null\n  let y2 = y; // \u7c7b\u578b\u662f undefined\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u4e00\u4e9b\u6bd4\u8f83\u8001\u7684\u7248\u672c\u4e2d\uff082.0\uff09null \u548c undefined \u5e76\u4e0d\u4f1a\u88ab\u62d3\u5bbd\u6210\u201cany\u201d"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u73b0\u4ee3 TypeScript \u4e2d\uff0c\u4ee5\u4e0a\u793a\u4f8b\u7684\u7b2c 2~3 \u884c\u7684\u7c7b\u578b\u62d3\u5bbd\u66f4\u7b26\u5408\u5b9e\u9645\u7f16\u7a0b\u4e60\u60ef\uff0c\u6211\u4eec\u53ef\u4ee5\u8d4b\u4e88\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u7684\u503c\u7ed9\u5177\u6709 null \u6216 undefined \u521d\u59cb\u503c\u7684\u53d8\u91cf x \u548c y\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u7b2c 7~10 \u884c\u7684\u7c7b\u578b\u63a8\u65ad\u884c\u4e3a\u56e0\u4e3a\u5f00\u542f\u4e86 strictNullChecks=true\uff08\u57fa\u4e8e\u4e25\u683c\u6a21\u5f0f\uff09\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u4ece\u7c7b\u578b\u5b89\u5168\u7684\u89d2\u5ea6\u8bd5\u7740\u601d\u8003\u4e00\u4e0b\uff1a\u8fd9\u51e0\u884c\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u53d8\u91cf\u3001\u5f62\u53c2\u7684\u7c7b\u578b\u4e3a\u4ec0\u4e48\u662f null \u6216 undefined\uff0c\u800c\u4e0d\u662f any\uff1f\u56e0\u4e3a\u524d\u8005\u53ef\u4ee5\u8ba9\u6211\u4eec\u66f4\u8c28\u614e\u5bf9\u5f85\u8fd9\u4e9b\u53d8\u91cf\u3001\u5f62\u53c2\uff0c\u800c\u540e\u8005\u4e0d\u80fd\u3002"}),"\n",(0,i.jsx)(e.h1,{id:"\u7c7b\u578b\u7f29\u5c0ftype-narrowing",children:"\u7c7b\u578b\u7f29\u5c0f\uff08Type Narrowing\uff09"}),"\n",(0,i.jsx)(e.p,{children:'\u5728 TypeScript \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u67d0\u4e9b\u64cd\u4f5c\u5c06\u53d8\u91cf\u7684\u7c7b\u578b\u7531\u4e00\u4e2a\u8f83\u4e3a\u5bbd\u6cdb\u7684\u96c6\u5408\u7f29\u5c0f\u5230\u76f8\u5bf9\u8f83\u5c0f\u3001\u8f83\u660e\u786e\u7684\u96c6\u5408\uff0c\u8fd9\u5c31\u662f "Type Narrowing"\u3002'}),"\n",(0,i.jsx)(e.p,{children:"\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u5b88\u536b\u5c06\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u4ece any \u7f29\u5c0f\u5230\u660e\u786e\u7684\u7c7b\u578b\uff0c\u5177\u4f53\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'{\n  let func = (anything: any) => {\n    if (typeof anything === "string") {\n      return anything; // \u7c7b\u578b\u662f string\n    } else if (typeof anything === "number") {\n      return anything; // \u7c7b\u578b\u662f number\n    }\n    return null;\n  };\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 VS Code \u4e2d hover \u5230\u7b2c 4 \u884c\u7684 anything \u53d8\u91cf\u63d0\u793a\u7c7b\u578b\u662f string\uff0c\u5230\u7b2c 6 \u884c\u5219\u63d0\u793a\u7c7b\u578b\u662f number\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u540c\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u5b88\u536b\u5c06\u8054\u5408\u7c7b\u578b\u7f29\u5c0f\u5230\u660e\u786e\u7684\u5b50\u7c7b\u578b\uff0c\u5177\u4f53\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'{\n  let func = (anything: string | number) => {\n    if (typeof anything === "string") {\n      return anything; // \u7c7b\u578b\u662f string\n    } else {\n      return anything; // \u7c7b\u578b\u662f number\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b57\u9762\u91cf\u7c7b\u578b\u7b49\u503c\u5224\u65ad\uff08===\uff09\u6216\u5176\u4ed6\u63a7\u5236\u6d41\u8bed\u53e5\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e if\u3001\u4e09\u76ee\u8fd0\u7b97\u7b26\u3001switch \u5206\u652f\uff09\u5c06\u8054\u5408\u7c7b\u578b\u6536\u655b\u4e3a\u66f4\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'{\n  type Goods = "pen" | "pencil" | "ruler";\n  const getPenCost = (item: "pen") => 2;\n  const getPencilCost = (item: "pencil") => 4;\n  const getRulerCost = (item: "ruler") => 6;\n  const getCost = (item: Goods) => {\n    if (item === "pen") {\n      return getPenCost(item); // item => \'pen\'\n    } else if (item === "pencil") {\n      return getPencilCost(item); // item => \'pencil\'\n    } else {\n      return getRulerCost(item); // item => \'ruler\'\n    }\n  };\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e0a\u8ff0 getCost \u51fd\u6570\u4e2d\uff0c\u63a5\u53d7\u7684\u53c2\u6570\u7c7b\u578b\u662f\u5b57\u9762\u91cf\u7c7b\u578b\u7684\u8054\u5408\u7c7b\u578b\uff0c\u51fd\u6570\u5185\u5305\u542b\u4e86 if \u8bed\u53e5\u7684 3 \u4e2a\u6d41\u7a0b\u5206\u652f\uff0c\u5176\u4e2d\u6bcf\u4e2a\u6d41\u7a0b\u5206\u652f\u8c03\u7528\u7684\u51fd\u6570\u7684\u53c2\u6570\u90fd\u662f\u5177\u4f53\u72ec\u7acb\u7684\u5b57\u9762\u91cf\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u90a3\u4e3a\u4ec0\u4e48\u7c7b\u578b\u7531\u591a\u4e2a\u5b57\u9762\u91cf\u7ec4\u6210\u7684\u53d8\u91cf item \u53ef\u4ee5\u4f20\u503c\u7ed9\u4ec5\u63a5\u6536\u5355\u4e00\u7279\u5b9a\u5b57\u9762\u91cf\u7c7b\u578b\u7684\u51fd\u6570 getPenCost\u3001getPencilCost\u3001getRulerCost \u5462\uff1f\u8fd9\u662f\u56e0\u4e3a\u5728\u6bcf\u4e2a\u6d41\u7a0b\u5206\u652f\u4e2d\uff0c\u7f16\u8bd1\u5668\u77e5\u9053\u6d41\u7a0b\u5206\u652f\u4e2d\u7684 item \u7c7b\u578b\u662f\u4ec0\u4e48\u3002\u6bd4\u5982 item === 'pencil' \u7684\u5206\u652f\uff0citem \u7684\u7c7b\u578b\u5c31\u88ab\u6536\u7f29\u4e3a\u201cpencil\u201d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e8b\u5b9e\u4e0a\uff0c\u5982\u679c\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u53bb\u6389\u4e2d\u95f4\u7684\u6d41\u7a0b\u5206\u652f\uff0c\u7f16\u8bd1\u5668\u4e5f\u53ef\u4ee5\u63a8\u65ad\u51fa\u6536\u655b\u540e\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const getCost = (item: Goods) => {\n  if (item === \"pen\") {\n    item; // item => 'pen'\n  } else {\n    item; // => 'pencil' | 'ruler'\n  }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>l});var i=t(7294);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);