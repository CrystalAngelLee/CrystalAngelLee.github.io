"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[1351],{2483:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const s={},c="\u6e90\u7801\u89e3\u6790",a={id:"scaffold/find_up",title:"find_up",description:"Find a file or directory by walking up parent directories",source:"@site/docs/scaffold/find_up.md",sourceDirName:"scaffold",slug:"/scaffold/find_up",permalink:"/docs/scaffold/find_up",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pkg_dir",permalink:"/docs/scaffold/pkg_dir"},next:{title:"locate_path",permalink:"/docs/scaffold/locate_path"}},i={},d=[{value:"1. \u89e3\u6790\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84",id:"1-\u89e3\u6790\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84",level:2},{value:"2. \u89e3\u6790\u6839\u8def\u5f84",id:"2-\u89e3\u6790\u6839\u8def\u5f84",level:2},{value:"3. \u62fc\u63a5\u4f20\u9012\u8fc7\u6765\u7684\u6587\u4ef6\u540d",id:"3-\u62fc\u63a5\u4f20\u9012\u8fc7\u6765\u7684\u6587\u4ef6\u540d",level:2},{value:"4. \u6b7b\u5faa\u73af\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\u6587\u4ef6",id:"4-\u6b7b\u5faa\u73af\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\u6587\u4ef6",level:2},{value:"4.1 runMatcher \u67e5\u627e\u8def\u5f84",id:"41-runmatcher-\u67e5\u627e\u8def\u5f84",level:3},{value:"4.2 \u627e\u5230\u7684\u8def\u5f84\u4e3a stop \u503c\u5219\u8fd4\u56de",id:"42-\u627e\u5230\u7684\u8def\u5f84\u4e3a-stop-\u503c\u5219\u8fd4\u56de",level:3},{value:"4.3 \u627e\u5230\u4e86\u8def\u5f84\u8fd4\u56de\u7edd\u5bf9\u8def\u5f84",id:"43-\u627e\u5230\u4e86\u8def\u5f84\u8fd4\u56de\u7edd\u5bf9\u8def\u5f84",level:3},{value:"4.4 \u627e\u5230\u4e86\u6839\u76ee\u5f55\u8fd8\u6ca1\u627e\u5230\u5219\u8fd4\u56de",id:"44-\u627e\u5230\u4e86\u6839\u76ee\u5f55\u8fd8\u6ca1\u627e\u5230\u5219\u8fd4\u56de",level:3},{value:"4.5 \u76ee\u5f55\u5411\u4e0a\u4e00\u7ea7\u7ee7\u7eed\u67e5\u627e",id:"45-\u76ee\u5f55\u5411\u4e0a\u4e00\u7ea7\u7ee7\u7eed\u67e5\u627e",level:3}];function l(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Find a file or directory by walking up parent directories"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u67d0\u4e2a\u76ee\u5f55\u4e0b\u5411\u4e0a\u627e\u6307\u5b9a\u6587\u4ef6\uff0c\u627e\u5230\u5219\u8fd4\u56de\u8be5\u6587\u4ef6\u8def\u5f84\uff0c\u627e\u4e0d\u5230\u8fd4\u56de null"}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u6e90\u7801\u89e3\u6790",children:"\u6e90\u7801\u89e3\u6790"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'"use strict";\nconst path = require("path");\nconst locatePath = require("locate-path");\nconst pathExists = require("path-exists");\n\nconst stop = Symbol("findUp.stop");\n\nmodule.exports = async (name, options = {}) => {\n  let directory = path.resolve(options.cwd || "");\n  const { root } = path.parse(directory);\n  const paths = [].concat(name);\n\n  const runMatcher = async (locateOptions) => {\n    if (typeof name !== "function") {\n      return locatePath(paths, locateOptions);\n    }\n\n    const foundPath = await name(locateOptions.cwd);\n    if (typeof foundPath === "string") {\n      return locatePath([foundPath], locateOptions);\n    }\n\n    return foundPath;\n  };\n\n  // eslint-disable-next-line no-constant-condition\n  while (true) {\n    // eslint-disable-next-line no-await-in-loop\n    const foundPath = await runMatcher({ ...options, cwd: directory });\n\n    if (foundPath === stop) {\n      return;\n    }\n\n    if (foundPath) {\n      return path.resolve(directory, foundPath);\n    }\n\n    if (directory === root) {\n      return;\n    }\n\n    directory = path.dirname(directory);\n  }\n};\n\nmodule.exports.sync = (name, options = {}) => {\n  let directory = path.resolve(options.cwd || "");\n  const { root } = path.parse(directory);\n  const paths = [].concat(name);\n\n  const runMatcher = (locateOptions) => {\n    if (typeof name !== "function") {\n      return locatePath.sync(paths, locateOptions);\n    }\n\n    const foundPath = name(locateOptions.cwd);\n    if (typeof foundPath === "string") {\n      return locatePath.sync([foundPath], locateOptions);\n    }\n\n    return foundPath;\n  };\n\n  // eslint-disable-next-line no-constant-condition\n  while (true) {\n    const foundPath = runMatcher({ ...options, cwd: directory });\n\n    if (foundPath === stop) {\n      return;\n    }\n\n    if (foundPath) {\n      return path.resolve(directory, foundPath);\n    }\n\n    if (directory === root) {\n      return;\n    }\n\n    directory = path.dirname(directory);\n  }\n};\n\nmodule.exports.exists = pathExists;\n\nmodule.exports.sync.exists = pathExists.sync;\n\nmodule.exports.stop = stop;\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u540c\u6b65\u7684\u6e90\u7801\u90e8\u5206"}),"\n",(0,r.jsx)(e.h2,{id:"1-\u89e3\u6790\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84",children:"1. \u89e3\u6790\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'let directory = path.resolve(options.cwd || "");\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7",(0,r.jsx)(e.code,{children:"path.resolve()"})," \u65b9\u6cd5\u5c06\u8def\u5f84\u89e3\u6790\u4e3a\u7edd\u5bf9\u8def\u5f84"]}),"\n",(0,r.jsx)(e.h2,{id:"2-\u89e3\u6790\u6839\u8def\u5f84",children:"2. \u89e3\u6790\u6839\u8def\u5f84"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const { root } = path.parse(directory);\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"path.parse()"})," \u6765\u89e3\u6790\u7edd\u5bf9\u8def\u5f84\u4e2d\u7684\u6839\u8def\u5f84"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"path.parse(\"/home/user/dir/file.txt\");\n// Returns:\n// { root: '/',\n//   dir: '/home/user/dir',\n//   base: 'file.txt',\n//   ext: '.txt',\n//   name: 'file' }\n"})}),"\n",(0,r.jsx)(e.h2,{id:"3-\u62fc\u63a5\u4f20\u9012\u8fc7\u6765\u7684\u6587\u4ef6\u540d",children:"3. \u62fc\u63a5\u4f20\u9012\u8fc7\u6765\u7684\u6587\u4ef6\u540d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const paths = [].concat(name);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"4-\u6b7b\u5faa\u73af\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\u6587\u4ef6",children:"4. \u6b7b\u5faa\u73af\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\u6587\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"while (true) {\n  const foundPath = runMatcher({ ...options, cwd: directory });\n\n  if (foundPath === stop) {\n    return;\n  }\n\n  if (foundPath) {\n    return path.resolve(directory, foundPath);\n  }\n\n  if (directory === root) {\n    return;\n  }\n\n  directory = path.dirname(directory);\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b9a\u4e49\u6b7b\u5faa\u73af\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\u6587\u4ef6\uff0c\u627e\u5230\u5219\u8fd4\u56de\u8def\u5f84\u3002\u8fd9\u91cc\u67e5\u627e\u8def\u5f84\u5b9a\u4e49\u4e86\u4e00\u4e2a runMatcher \u65b9\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"41-runmatcher-\u67e5\u627e\u8def\u5f84",children:"4.1 runMatcher \u67e5\u627e\u8def\u5f84"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7 locate-path \u67e5\u627e\u5f53\u524d\u8def\u5f84\u662f\u5426\u5b58\u5728"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'const runMatcher = (locateOptions) => {\n  if (typeof name !== "function") {\n    return locatePath.sync(paths, locateOptions);\n  }\n\n  const foundPath = name(locateOptions.cwd);\n  if (typeof foundPath === "string") {\n    return locatePath.sync([foundPath], locateOptions);\n  }\n\n  return foundPath;\n};\n'})}),"\n",(0,r.jsx)(e.p,{children:"locatePath: \u5728\u78c1\u76d8\u591a\u4e2a\u8def\u5f84\u4e2d\u67e5\u627e\u7b2c\u4e00\u4e2a\u5b58\u5728\u7684\u8def\u5f84"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["name \u7c7b\u578b\u4e0d\u4e3a ",(0,r.jsx)(e.code,{children:"function"})," \u76f4\u63a5\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"locatePath.sync()"})," \u65b9\u6cd5\u67e5\u627e\u5f53\u524d\u8def\u5f84\u4e2d\u662f\u5426\u5b58\u5728\u6587\u4ef6"]}),"\n",(0,r.jsx)(e.li,{children:"\u5426\u5219\u67e5\u627e\u7684\u8def\u5f84\u4e3a name \u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(e.li,{children:["\u67e5\u627e\u8def\u5f84\u4e3a string \u7c7b\u578b\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"locatePath.sync()"})," \u65b9\u6cd5\u67e5\u627e\u5f53\u524d\u8def\u5f84\u4e2d\u662f\u5426\u5b58\u5728\u6587\u4ef6"]}),"\n",(0,r.jsx)(e.li,{children:"\u5426\u5219\u8fd4\u56de name \u8fd4\u56de\u503c"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"42-\u627e\u5230\u7684\u8def\u5f84\u4e3a-stop-\u503c\u5219\u8fd4\u56de",children:"4.2 \u627e\u5230\u7684\u8def\u5f84\u4e3a stop \u503c\u5219\u8fd4\u56de"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"if (foundPath === stop) {\n  return;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"43-\u627e\u5230\u4e86\u8def\u5f84\u8fd4\u56de\u7edd\u5bf9\u8def\u5f84",children:"4.3 \u627e\u5230\u4e86\u8def\u5f84\u8fd4\u56de\u7edd\u5bf9\u8def\u5f84"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"if (foundPath) {\n  return path.resolve(directory, foundPath);\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u89e3\u6790\u540e\u7684\u7edd\u5bf9\u8def\u5f84"}),"\n",(0,r.jsx)(e.h3,{id:"44-\u627e\u5230\u4e86\u6839\u76ee\u5f55\u8fd8\u6ca1\u627e\u5230\u5219\u8fd4\u56de",children:"4.4 \u627e\u5230\u4e86\u6839\u76ee\u5f55\u8fd8\u6ca1\u627e\u5230\u5219\u8fd4\u56de"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"if (directory === root) {\n  return;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"45-\u76ee\u5f55\u5411\u4e0a\u4e00\u7ea7\u7ee7\u7eed\u67e5\u627e",children:"4.5 \u76ee\u5f55\u5411\u4e0a\u4e00\u7ea7\u7ee7\u7eed\u67e5\u627e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"directory = path.dirname(directory);\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>c});var r=t(7294);const o={},s=r.createContext(o);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);