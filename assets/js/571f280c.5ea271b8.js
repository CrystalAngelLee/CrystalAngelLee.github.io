"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[9991],{8759:(n,l,e)=>{e.r(l),e.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var r=e(5893),s=e(1151);const o={},i="rollup\u6982\u8ff0",c={id:"rollup",title:"rollup\u6982\u8ff0",description:"\u5b98\u7f51",source:"@site/docs/rollup.md",sourceDirName:".",slug:"/rollup",permalink:"/docs/rollup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},t=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u52a0\u8f7dNPM\u6a21\u5757",id:"\u52a0\u8f7dnpm\u6a21\u5757",level:3}];function h(n){const l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.h1,{id:"rollup\u6982\u8ff0",children:"rollup\u6982\u8ff0"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.a,{href:"https://rollupjs.org/",children:"\u5b98\u7f51"})}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"rollup \u662f\u4e00\u6b3e ESModule \u7684\u6253\u5305\u5668\uff0c\u5b83\u4e5f\u53ef\u4ee5\u5c06\u9879\u76ee\u4e2d\u6563\u843d\u7684\u7ec6\u5c0f\u6a21\u5757\u6253\u5305\u4e3a\u6574\u5757\u4ee3\u7801\uff0c\u4ece\u800c\u4f7f\u5212\u5206\u7684\u6a21\u5757\u66f4\u597d\u7684\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883orNodejs\u73af\u5883\u4e2d\u3002"}),"\n",(0,r.jsx)(l.p,{children:"rollup \u76f8\u6bd4\u4e8e webpack \u66f4\u52a0\u5c0f\u5de7\uff0c\u5b83\u4e0d\u652f\u6301\u7c7b\u4f3c HMR \u8fd9\u79cd\u9ad8\u7ea7\u7279\u6027\u3002"}),"\n",(0,r.jsx)(l.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u81ea\u52a8\u5f00\u542f tree-shaking"}),"\n",(0,r.jsx)(l.li,{children:"rollup \u9ed8\u8ba4\u53ea\u80fd\u5904\u7406ES\u6a21\u5757"}),"\n",(0,r.jsx)(l.li,{children:"\u8f93\u51fa\u7ed3\u679c\u66f4\u52a0\u6241\u5e73"}),"\n",(0,r.jsx)(l.li,{children:"\u6253\u5305\u7ed3\u679c\u4f9d\u7136\u5b8c\u5168\u53ef\u9605\u8bfb"}),"\n",(0,r.jsx)(l.li,{children:"\uff01\u52a0\u8f7d\u8d39ESM\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u6bd4\u8f83\u590d\u6742"}),"\n",(0,r.jsx)(l.li,{children:"\uff01\u6a21\u5757\u6700\u7ec8\u90fd\u88ab\u6253\u7206\u5230\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u65e0\u6cd5\u5b9e\u73b0HMR"}),"\n",(0,r.jsx)(l.li,{children:"\uff01\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\uff0c\u4ee3\u7801\u62c6\u5206\u529f\u80fd\u4f9d\u8d56AMD\u5e93"}),"\n"]}),"\n",(0,r.jsx)(l.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,r.jsxs)(l.p,{children:["\u5b89\u88c5\u4f9d\u8d56 ",(0,r.jsx)(l.code,{children:"yarn add rollup --dev"})]}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.a,{href:"https://rollupjs.org/introduction/#quick-start",children:"\u3010\u4e0d\u5e38\u7528\u3011\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u884c\u6253\u5305\u6307\u5357"})}),"\n",(0,r.jsx)(l.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0\u6587\u4ef6 ",(0,r.jsx)(l.code,{children:"rollup.config.js"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:["\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528 ",(0,r.jsx)(l.code,{children:"require"})," \u548c ",(0,r.jsx)(l.code,{children:"module.exports"})," \u5c06\u914d\u7f6e\u6587\u4ef6\u5199\u6210\u4e00\u4e2a CommonJS \u6a21\u5757\uff0c\u5219\u5e94\u8be5\u5c06\u6587\u4ef6\u6269\u5c55\u540d\u66f4\u6539\u4e3a ",(0,r.jsx)(l.code,{children:".cjs"}),"\uff0c\u8fd9\u4f1a\u963b\u6b62 Rollup \u5c1d\u8bd5\u8f6c\u8bd1\u6587\u4ef6"]}),"\n",(0,r.jsxs)(l.li,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Node 13+\uff0c\u5219\u5c06\u6587\u4ef6\u6269\u5c55\u540d\u66f4\u6539\u4e3a ",(0,r.jsx)(l.code,{children:".mjs"})," \u4e5f\u53ef\u4ee5\u963b\u6b62 Rollup \u8fdb\u884c\u7f16\u8bd1\uff0c\u5e76\u5c06\u6587\u4ef6\u5bfc\u5165\u4e3a ES \u6a21\u5757"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://rollupjs.org/configuration-options/",children:"\u914d\u7f6e\u9009\u9879\u5b8c\u6574\u5217\u8868"})}),"\n",(0,r.jsxs)(l.li,{children:["\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u5728\u547d\u4ee4\u884c\u52a0\u4e0a",(0,r.jsx)(l.code,{children:"--config"})," \u6216\u8005 ",(0,r.jsx)(l.code,{children:"-c"})," \u7684\u9009\u9879"]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u4f7f\u7528\u63d2\u4ef6",children:(0,r.jsx)(l.a,{href:"https://rollupjs.org/plugin-development/#a-simple-example",children:"\u4f7f\u7528\u63d2\u4ef6"})}),"\n",(0,r.jsx)(l.p,{children:"rollup \u4ec5\u662f\u4e00\u6b3e ESModule \u7684\u6253\u5305\u5668\uff0c\u5982\u679c\u6211\u4eec\u6709\u66f4\u9ad8\u7ea7\u7684\u9700\u6c42(\u6bd4\u5982\u52a0\u8f7d\u5176\u4ed6\u7c7b\u578b\u8d44\u6e90\u6a21\u5757\u3001\u5bfc\u5165CommonJS\u6a21\u5757\u3001\u7f16\u8bd1ECMAScript\u65b0\u7279\u6027...)\uff0c\u6211\u4eec\u5c31\u9700\u8981\u4f7f\u7528\u5230\u63d2\u4ef6\u6765\u6269\u5c55 rollup \u7684\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(l.p,{children:"\u63d2\u4ef6\u662f rollup \u552f\u4e00\u6269\u5c55\u9014\u5f84\u3002"}),"\n",(0,r.jsxs)(l.p,{children:["rollup \u7684\u63d2\u4ef6\u5e93\uff1a",(0,r.jsx)(l.a,{href:"https://github.com/rollup/awesome",children:"https://github.com/rollup/awesome"})]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-js",children:"// demo \u6f14\u793a rollup-plugin-json\u4f7f\u7528\n/**\n * 1. \u5b89\u88c5\u4f9d\u8d56 yarn add rollup-plugin-json --dev\n * 2. \u6dfb\u52a0\u76f8\u5173\u914d\u7f6e\u5230\u914d\u7f6e\u6587\u4ef6\n */\n\n// rollup.config.js\nimport json from 'rollup-plugin-json'\n\nexport default {\n  input: 'src/index.js',\n  output: {\n    file: 'dist.js',\n    format: 'iife',\n  },\n  plugins: [json()],\n}\n\n// src/index.js  useage\nimport { name, version } from '../package.json'\n\nconsole.log(name, version)\n"})}),"\n",(0,r.jsx)(l.h3,{id:"\u52a0\u8f7dnpm\u6a21\u5757",children:"\u52a0\u8f7dNPM\u6a21\u5757"}),"\n",(0,r.jsxs)(l.p,{children:["rollup \u9ed8\u8ba4\u53ea\u80fd\u6309\u7167\u6587\u4ef6\u8def\u5f84\u7684\u65b9\u5f0f\u52a0\u8f7d\u672c\u5730\u6587\u4ef6\u6a21\u5757\uff0c\u5bf9\u4e8e ",(0,r.jsx)(l.code,{children:"node_modules"})," \u4e2d\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u5e76\u4e0d\u80fd\u591f\u901a\u8fc7\u6a21\u5757\u540d\u79f0\u5bfc\u5165\u5bf9\u5e94\u7684\u6a21\u5757\uff0c\u4e3a\u4e86\u53ef\u4ee5\u63d0\u4f9b\u8fd9\u4e2a\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,r.jsx)(l.code,{children:"rollup-plugin-node-resolve"})," \u7684\u63d2\u4ef6"]}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsx)(l.li,{children:"\u5b89\u88c5\u63d2\u4ef6\u4f9d\u8d56"}),"\n",(0,r.jsx)(l.li,{children:"\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u5230\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(l.li,{children:"\u4f7f\u7528\u4e09\u65b9\u5e93 & \u6253\u5305"}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.strong,{children:"\u52a0\u8f7d CommonJS \u6a21\u5757"})}),"\n",(0,r.jsx)(l.p,{children:"rollup \u9ed8\u8ba4\u53ea\u5904\u7406 ESM \u7684\u6253\u5305\uff0c\u5982\u679c\u5728\u4ee3\u7801\u4e2d\u5bfc\u5165CommonJS\u6a21\u5757\uff0c\u9ed8\u8ba4\u662f\u4e0d\u88ab\u652f\u6301\u7684\u3002"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:["\u5b89\u88c5\u63d2\u4ef6\u4f9d\u8d56: ",(0,r.jsx)(l.code,{children:"yarn add rollup-plugin-commonjs --dev"})]}),"\n",(0,r.jsx)(l.li,{children:"\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u5230\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"**\u4ee3\u7801\u62c6\u5206(\u5206\u5305):**\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\u5b9e\u73b0"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.strong,{children:"\u591a\u5165\u53e3\u6253\u5305"})}),"\n",(0,r.jsx)(l.p,{children:"\u4e0d\u80fd\u4f7f\u7528iife\u7684\u683c\u5f0f\u8fdb\u884c\u6253\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528amd\u683c\u5f0f"})]})}function p(n={}){const{wrapper:l}={...(0,s.a)(),...n.components};return l?(0,r.jsx)(l,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},1151:(n,l,e)=>{e.d(l,{Z:()=>c,a:()=>i});var r=e(7294);const s={},o=r.createContext(s);function i(n){const l=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function c(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:l},n.children)}}}]);