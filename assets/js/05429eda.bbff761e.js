"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[5786],{2468:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=s(5893),d=s(1151);const l={},i="require",c={id:"nodejs/require",title:"require",description:"require \u652f\u6301\u52a0\u8f7d\u8d44\u6e90\u7684\u7c7b\u578b",source:"@site/docs/nodejs/require.md",sourceDirName:"nodejs",slug:"/nodejs/require",permalink:"/docs/nodejs/require",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EggJs",permalink:"/docs/nodejs/eggjs"},next:{title:"fs.realpathSync \u6e90\u7801\u89e3\u6790",permalink:"/docs/nodejs/fs_realpath_sync"}},o={},h=[{value:"require \u652f\u6301\u52a0\u8f7d\u8d44\u6e90\u7684\u7c7b\u578b",id:"require-\u652f\u6301\u52a0\u8f7d\u8d44\u6e90\u7684\u7c7b\u578b",level:2},{value:"node.js \u6a21\u5757\u8def\u5f84\u89e3\u6790\u6d41\u7a0b",id:"nodejs-\u6a21\u5757\u8def\u5f84\u89e3\u6790\u6d41\u7a0b",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"require",children:"require"}),"\n",(0,r.jsx)(n.h2,{id:"require-\u652f\u6301\u52a0\u8f7d\u8d44\u6e90\u7684\u7c7b\u578b",children:"require \u652f\u6301\u52a0\u8f7d\u8d44\u6e90\u7684\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["require \u652f\u6301\u52a0\u8f7d\u7684\u8d44\u6e90\u7c7b\u578b\u6709: ",(0,r.jsx)(n.code,{children:".js/.json/.node "})," and \u5176\u4ed6\u4efb\u4f55\u7c7b\u578b\u7684\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u52a0\u8f7d\u7684\u662f ",(0,r.jsx)(n.code,{children:".js"})," \u6587\u4ef6\u7c7b\u578b\u7684\u8bdd\uff0c require \u8981\u6c42\u5fc5\u987b\u8f93\u51fa ",(0,r.jsx)(n.code,{children:"module.exports/exports."})," \u8f93\u51fa\u6a21\u5757"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u52a0\u8f7d\u7684\u662f",(0,r.jsx)(n.code,{children:".json"})," \u6587\u4ef6\uff0crequire \u4f1a\u5bf9\u6587\u4ef6\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"JSON.parse"})," \u8fdb\u884c\u89e3\u6790\u5e76\u8f93\u51fa\u5bf9\u8c61"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".node"})," \u7c7b\u578b\u6587\u4ef6\u662f\u4e00\u4e2a C++ \u7684\u63d2\u4ef6\uff0crequire \u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"process.dlopen"})," \u6765\u6253\u5f00\u8fd9\u4e2a C++\u63d2\u4ef6"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u52a0\u8f7d\u7684\u662f\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0crequire \u4f1a\u9ed8\u8ba4\u901a\u8fc7 .js \u5f15\u64ce\u8fdb\u884c\u89e3\u6790"}),"\n",(0,r.jsx)(n.h3,{id:"nodejs-\u6a21\u5757\u8def\u5f84\u89e3\u6790\u6d41\u7a0b",children:"node.js \u6a21\u5757\u8def\u5f84\u89e3\u6790\u6d41\u7a0b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["node.js \u9879\u76ee\u6a21\u5757\u8def\u5f84\u89e3\u6790\u662f\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"require.resolve"})," \u65b9\u6cd5\u5b9e\u73b0\u7684"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"require.resolve"})," \u5c31\u662f\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Module._resolveFileName"})," \u65b9\u6cd5\u5b9e\u73b0\u7684"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"require.resolve"})," \u5b9e\u73b0\u539f\u7406\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Module._resolveFileName"})," \u65b9\u6cd5\u6838\u5fc3\u6d41\u7a0b\u6709 3 \u70b9:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u5224\u65ad\u6a21\u5757\u662f\u5426\u4e3a\u5185\u7f6e\u6a21\u5757\uff0c\u5982\u679c\u662f\u5185\u7f6e\u6a21\u5757\uff0c\u76f4\u63a5\u8fd4\u56de"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4e0d\u662f\u5185\u7f6e\u6a21\u5757\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Module._resolveFileName"})," \u65b9\u6cd5\u751f\u6210\u6240\u6709 ",(0,r.jsx)(n.code,{children:"node_modules"})," \u53ef\u80fd\u5b58\u5728\u7684\u8def\u5f84"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7136\u540e\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Module._findPath"})," \u67e5\u8be2\u6a21\u5757\u7684\u771f\u5b9e\u8def\u5f84"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Module._findPath"})," \u6838\u5fc3\u6d41\u7a0b\u6709\u56db\u70b9\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u67e5\u8be2\u7f13\u5b58\uff08\u5c06 request \u548c paths \u901a\u8fc7\u7a7a\u683c ",(0,r.jsx)(n.code,{children:"\\x00"})," \u5408\u5e76\u7ec4\u5408\u6210 cacheKey\uff09\uff0c\u5982\u679c\u5728\u7f13\u5b58\u4e2d\u67e5\u627e\u5230\uff0c\u5219\u76f4\u63a5\u8fd4\u56de"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6ca1\u6709\u5728\u7f13\u5b58\u4e2d\u627e\u5230\uff0c\u5219\u904d\u5386\u6240\u6709 ",(0,r.jsx)(n.code,{children:"node_modules"})," \u53ef\u80fd\u5b58\u5728\u7684\u8def\u5f84 ",(0,r.jsx)(n.code,{children:"paths"}),", \u5c06\u6bcf\u4e00\u4e2a\u8def\u5f84 path \u4e0e \u6a21\u5757\u540d\u79f0 request \u7ec4\u6210\u751f\u6210\u6587\u4ef6\u8def\u5f84 basePath"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5224\u65ad basePath \u662f\u5426\u5b58\u5728\uff0c\u5982\u679c basePath \u5b58\u5728\uff0c\u5219\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"fs.realPathSync"})," \u83b7\u53d6\u6587\u4ef6\u771f\u5b9e\u8def\u5f84\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u7ee7\u7eed\u904d\u5386\u4e0b\u4e00\u4e2a path\uff0c\u76f4\u5230 path \u904d\u5386\u5b8c"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u627e\u5230\u4e86\u6587\u4ef6\u7684\u771f\u5b9e\u8def\u5f84\uff0c\u5c31\u4f1a\u76f4\u63a5\u8fd4\u56de\uff0c\u5e76\u4e14\u5c06\u6587\u4ef6\u771f\u5b9e\u8def\u5f84\u7f13\u5b58\u5230 ",(0,r.jsx)(n.code,{children:"Module._pathCache"})," \u4e2d\uff08\u7528\u5230\u7684 key \u5c31\u662f\u524d\u9762\u751f\u6210\u7684 cacheKey\uff09"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fs.realPathSync"})," \u6838\u5fc3\u6d41\u7a0b\u6709 3 \u70b9\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u67e5\u8be2\u7f13\u5b58\uff08\u7f13\u5b58\u7684 key \u4e3a p \u5c31\u662f path\uff0c\u5c31\u662f\u5728 ",(0,r.jsx)(n.code,{children:"Module._findPath"})," \u4e2d\u751f\u6210\u7684\u6587\u4ef6\u8def\u5f84 basePath\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u5728\u7f13\u5b58\u4e2d\u6ca1\u6709\u67e5\u5230\uff0c\u5c31\u4f1a\u5c06\u7f13\u5b58\u7684 key(\u8def\u5f84\u5b57\u7b26\u4e32 basePath)\u4ece\u5de6\u5f80\u53f3\u904d\u5386\uff0c\u67e5\u8be2\u5230 ",(0,r.jsx)(n.code,{children:"/"})," \u65f6\uff0c\u62c6\u5206\u8def\u5f84\uff0c\u628a\u524d\u9762\u7684\u8def\u5f84\u62ff\u51fa\u6765\uff0c\u5224\u65ad\u8be5\u8def\u5f84\u662f\u5426\u4e3a\u8f6f\u94fe\u63a5\uff0c\u5982\u679c\u662f\u8f6f\u94fe\u63a5\u5219\u8c03\u7528\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e00\u4e2a API \u67e5\u8be2\u5b83\u7684\u771f\u5b9e\u8def\u5f84\uff0c\u5e76\u751f\u6210\u65b0\u8def\u5f84 p\uff0c\u7136\u540e\u7ee7\u7eed\u5f80\u540e\u904d\u5386\uff0c\u53ea\u6709\u6709\u4e00\u4e2a\u7ec6\u8282\u9700\u8981\u7279\u522b\u6ce8\u610f\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u904d\u5386\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684\u5b50\u8def\u5f84 base \u4f1a\u7f13\u5b58\u5728 knownHard\uff08\u662f\u5f53\u524d\u67e5\u627e\u8fc7\u7684&\u7f13\u5b58\u4e2d\u6ca1\u6709\u7684\u8def\u5f84\uff09 \u548c cache \u4e2d\uff0c\u907f\u514d\u91cd\u590d\u67e5\u8be2"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u904d\u5386\u5b8c\u6210\u540e\u5f97\u5230\u6a21\u5757\u5bf9\u5e94\u7684\u771f\u5b9e\u8def\u5f84\uff0c\u6b64\u65f6\u4f1a\u5c06\u539f\u59cb\u8def\u5f84 original \u4f5c\u4e3a key,\u771f\u5b9e\u8def\u5f84\u4f5c\u4e3a value\uff0c\u4fdd\u5b58\u5230\u7f13\u5b58\u4e2d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"require.resolve.paths"})," \u7b49\u4ef7\u4e8e ",(0,r.jsx)(n.code,{children:"Module._resolveLookupPaths"}),",\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u6240\u6709 node_modules \u53ef\u80fd\u5b58\u5728\u7684\u8def\u5f84"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"require.resolve.paths"})," \u5b9e\u73b0\u539f\u7406\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8def\u5f84\u4e3a ",(0,r.jsx)(n.code,{children:"/"}),"(\u6839\u76ee\u5f55)\uff0c\u76f4\u63a5\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"['/node_modules']"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5426\u5219\uff0c\u5c06\u8def\u5f84\u5b57\u7b26\u4e32\u4ece\u540e\u5f80\u524d\u904d\u5386\uff0c\u67e5\u8be2\u5230",(0,r.jsx)(n.code,{children:"/"}),"\u65f6\uff0c\u62c6\u5206\u8def\u5f84\uff0c\u5728\u540e\u9762\u52a0\u4e0a node_modules,\u5e76\u4f20\u5165\u4e00\u4e2a paths \u6570\u7ec4\uff0c\u76f4\u81f3\u67e5\u8be2\u4e0d\u5230 ",(0,r.jsx)(n.code,{children:"/"})," \u540e\u8fd4\u56de paths \u6570\u7ec4"]}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var r=s(7294);const d={},l=r.createContext(d);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);