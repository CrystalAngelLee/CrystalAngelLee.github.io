"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[302],{7293:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=r(5893),s=r(1151),t=r(4866),a=r(5162);const o={},i="Flow",c={id:"flow",title:"Flow",description:"Flow \u662f JavaScript \u7684\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u5668",source:"@site/docs/flow.md",sourceDirName:".",slug:"/flow",permalink:"/docs/flow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/javascript/data_types"},next:{title:"Web Components",permalink:"/docs/web_components"}},u={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u5b89\u88c5\u5e76\u4f7f\u7528flow",id:"\u5b89\u88c5\u5e76\u4f7f\u7528flow",level:3},{value:"\u7f16\u8bd1\u79fb\u9664\u6ce8\u89e3",id:"\u7f16\u8bd1\u79fb\u9664\u6ce8\u89e3",level:3},{value:"\u5f00\u53d1\u5de5\u5177\u63d2\u4ef6",id:"\u5f00\u53d1\u5de5\u5177\u63d2\u4ef6",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u63a8\u65ad",level:3},{value:"\u7c7b\u578b\u6ce8\u89e3",id:"\u7c7b\u578b\u6ce8\u89e3",level:3},{value:"\u539f\u59cb\u7c7b\u578b",id:"\u539f\u59cb\u7c7b\u578b",level:4},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:4},{value:"\u5bf9\u8c61\u7c7b\u578b",id:"\u5bf9\u8c61\u7c7b\u578b",level:4},{value:"\u51fd\u6570\u7c7b\u578b",id:"\u51fd\u6570\u7c7b\u578b",level:4},{value:"\u7279\u6b8a\u7c7b\u578b",id:"\u7279\u6b8a\u7c7b\u578b",level:4},{value:"Mixed Any",id:"mixed-any",level:4},{value:"\u8fd0\u884c\u73af\u5883API",id:"\u8fd0\u884c\u73af\u5883api",level:2}];function h(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"flow",children:"Flow"}),"\n",(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://flow.org/",children:"Flow"})," \u662f JavaScript \u7684\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u5668"]})}),"\n",(0,l.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,l.jsx)(e.h3,{id:"\u5b89\u88c5\u5e76\u4f7f\u7528flow",children:"\u5b89\u88c5\u5e76\u4f7f\u7528flow"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5b89\u88c5\u4f9d\u8d56\uff1a"})," ",(0,l.jsx)(e.code,{children:"yarn add --dev flow-bin"})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5173\u95edIDE JavaScript \u6821\u9a8c\u529f\u80fd\uff1a"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5728 setting \u4e2d\u641c\u7d22 ",(0,l.jsx)(e.code,{children:"javascript validate"})]}),"\n",(0,l.jsx)(e.li,{children:"\u627e\u5230\u5bf9\u5e94\u7684 Validate"}),"\n",(0,l.jsx)(e.li,{children:"\u5173\u95ed\u9009\u9879"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6dfb\u52a0 flow \u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u901a\u8fc7\u547d\u4ee4\u751f\u6210\uff1a ",(0,l.jsx)(e.code,{children:"yarn flow init"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5728\u9700\u8981\u68c0\u67e5\u7684\u6587\u4ef6\u4e2d\u6dfb\u52a0 @flow"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// @flow\nfunction sum (a: number, b: number) {\n  return a + b\n}\nsum(100, 1)\nsum('100', '1')\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u68c0\u6d4b\u4ee3\u7801"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"yarn flow"})}),"\n",(0,l.jsxs)(e.li,{children:["\u505c\u6b62 flow \u670d\u52a1\uff1a ",(0,l.jsx)(e.code,{children:"yarn flow stop"})]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u7f16\u8bd1\u79fb\u9664\u6ce8\u89e3",children:"\u7f16\u8bd1\u79fb\u9664\u6ce8\u89e3"}),"\n","\n","\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(a.Z,{value:"one",label:"\u65b9\u6848\u4e00",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u5b89\u88c5\u4f9d\u8d56\nyarn add --dev flow-remove-types\n\n# \u4f7f\u7528\u547d\u4ee4\nyarn flow-remove-types src -d dist\n"})})}),(0,l.jsxs)(a.Z,{value:"two",label:"\u65b9\u6848\u4e8c",children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Babel \u5b89\u88c5\uff1a"})," ",(0,l.jsx)(e.code,{children:"yarn add --dev @babel/core @babel/cli @babel/preset-flow"})]}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6dfb\u52a0 babel \u914d\u7f6e\u6587\u4ef6\uff1a"})," ",(0,l.jsx)(e.code,{children:".babelrc"})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-babelrc",children:'{\n  "presets": ["@babel/preset-flow"]\n}\n'})}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u4f7f\u7528\u547d\u4ee4\uff1a"})," ",(0,l.jsx)(e.code,{children:"yarn babel src -d dist"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u5f00\u53d1\u5de5\u5177\u63d2\u4ef6",children:"\u5f00\u53d1\u5de5\u5177\u63d2\u4ef6"}),"\n",(0,l.jsxs)(e.p,{children:["VScode \u641c\u7d22 ",(0,l.jsx)(e.code,{children:"flow "})," \u627e\u5230 ",(0,l.jsx)(e.code,{children:"Flow Language Support"})," \u5e76\u8fdb\u884c\u5b89\u88c5"]}),"\n",(0,l.jsxs)(e.p,{children:["\ud83d\udc49\ud83c\udffb ",(0,l.jsx)(e.a,{href:"https://flow.org/en/docs/editors/",children:"\u70b9\u51fb\u67e5\u770b\u7f16\u8f91\u5668\u652f\u6301\u60c5\u51b5"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(e.h3,{id:"\u7c7b\u578b\u63a8\u65ad",children:"\u7c7b\u578b\u63a8\u65ad"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u4ee3\u7801\u4e2d\u7684\u4f7f\u7528\u60c5\u51b5\u53bb\u63a8\u65ad\u51fa\u53d8\u91cf\u7c7b\u578b\u7684\u7279\u5f81\u53eb\u505a\u7c7b\u578b\u63a8\u65ad"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u7c7b\u578b\u63a8\u65ad\n *\n * @flow\n */\n\nfunction square (n) {\n  return n * n\n}\n\n// square('100')\n\nsquare(100)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u7c7b\u578b\u6ce8\u89e3",children:"\u7c7b\u578b\u6ce8\u89e3"}),"\n",(0,l.jsx)(e.p,{children:"\u66f4\u660e\u786e\u7684\u9650\u5236\u7c7b\u578b"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5b98\u65b9\u7c7b\u578b\u8bf4\u660e\u6587\u6863\uff1a ",(0,l.jsx)(e.a,{href:"https://flow.org/en/docs/types/",children:"https://flow.org/en/docs/types/"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u7b2c\u4e09\u65b9\u7c7b\u578b\u8bf4\u660e\u624b\u518c\uff1a",(0,l.jsx)(e.a,{href:"https://www.saltycrane.com/cheat-sheets/flow-type/latest/",children:"https://www.saltycrane.com/cheat-sheets/flow-type/latest/"})]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u7c7b\u578b\u6ce8\u89e3\n *\n * @flow\n */\n\nfunction square (n: number) {\n  return n * n\n}\n\nlet num: number = 100\n\n// num = 'string' // error\n\nfunction foo (): number {\n  return 100 // ok\n  // return 'string' // error\n}\n\nfunction bar (): void {\n  // return undefined\n}\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u539f\u59cb\u7c7b\u578b",children:"\u539f\u59cb\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u539f\u59cb\u7c7b\u578b\n *\n * @flow\n */\n\nconst a: string = 'foobar'\n\nconst b: number = Infinity // NaN // 100\n\nconst c: boolean = false // true\n\nconst d: null = null\n\nconst e: void = undefined\n\nconst f: symbol = Symbol()\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u6570\u7ec4\u7c7b\u578b",children:"\u6570\u7ec4\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u6570\u7ec4\u7c7b\u578b\n *\n * @flow\n */\n\nconst arr1: Array<number> = [1, 2, 3]\n\nconst arr2: number[] = [1, 2, 3]\n\n// \u5143\u7ec4\nconst foo: [string, number] = ['foo', 100]\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u5bf9\u8c61\u7c7b\u578b",children:"\u5bf9\u8c61\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u5bf9\u8c61\u7c7b\u578b\n *\n * @flow\n */\n\nconst obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 }\n\nconst obj2: { foo?: string, bar: number } = { bar: 100 }\n\nconst obj3: { [string]: string } = {}\n\nobj3.key1 = 'value1'\nobj3.key2 = 'value2'\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u51fd\u6570\u7c7b\u578b",children:"\u51fd\u6570\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u51fd\u6570\u7c7b\u578b\n *\n * @flow\n */\n\nfunction foo (callback: (string, number) => void) {\n  callback('string', 100)\n}\n\nfoo(function (str, n) {\n  // str => string\n  // n => number\n})\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u7279\u6b8a\u7c7b\u578b",children:"\u7279\u6b8a\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u7279\u6b8a\u7c7b\u578b\n *\n * @flow\n */\n\n// \u5b57\u9762\u91cf\u7c7b\u578b: \u9650\u5236\u67d0\u4e00\u4e2a\u53d8\u91cf\u5fc5\u987b\u662f\u67d0\u4e00\u4e2a\u503c\nconst a: 'foo' = 'foo'\n\nconst type: 'success' | 'warning' | 'danger' = 'success'\n\n// ------------------------\n\n// \u58f0\u660e\u7c7b\u578b\n\ntype StringOrNumber = string | number\n\nconst b: StringOrNumber = 'string' // 100\n\n// ------------------------\n\n// Maybe \u7c7b\u578b \u6269\u5c55\u4e86 null \u548c undefined \u4e24\u79cd\u7c7b\u578b\nconst gender: ?number = undefined\n// \u76f8\u5f53\u4e8e\n// const gender: number | null | void = undefined\n"})}),"\n",(0,l.jsx)(e.h4,{id:"mixed-any",children:"Mixed Any"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * Mixed Any\n *\n * @flow\n */\n\n// \u63a5\u6536\u4efb\u610f\u7c7b\u578b\n// string | number | boolean | ....\nfunction passMixed (value: mixed) {\n  if (typeof value === 'string') {\n    value.substr(1)\n  }\n\n  if (typeof value === 'number') {\n    value * value\n  }\n}\n\npassMixed('string')\n\npassMixed(100)\n\n// ---------------------------------\n// \u63a5\u6536\u4efb\u610f\u7c7b\u578b\nfunction passAny (value: any) {\n  value.substr(1)\n\n  value * value\n}\n\npassAny('string')\n\npassAny(100)\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"any  \u662f\u5f31\u7c7b\u578b mixed \u662f\u5f3a\u7c7b\u578b"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8fd0\u884c\u73af\u5883api",children:"\u8fd0\u884c\u73af\u5883API"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * \u8fd0\u884c\u73af\u5883 API\n *\n * @flow\n */\n\nconst element: HTMLElement | null = document.getElementById('app')\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tex",children:"https://github.com/facebook/flow/tree/main/lib/core.js\nhttps://github.com/facebook/flow/tree/main/lib/dom.js\nhttps://github.com/facebook/flow/tree/main/lib/bom.js\nhttps://github.com/facebook/flow/tree/main/lib/cssom.js\nhttps://github.com/facebook/flow/tree/main/lib/node.js\n"})})]})}function f(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},5162:(n,e,r)=>{r.d(e,{Z:()=>a});r(7294);var l=r(512);const s={tabItem:"tabItem_Ymn6"};var t=r(5893);function a(n){let{children:e,hidden:r,className:a}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s.tabItem,a),hidden:r,children:e})}},4866:(n,e,r)=>{r.d(e,{Z:()=>y});var l=r(7294),s=r(512),t=r(2466),a=r(6550),o=r(469),i=r(1980),c=r(7392),u=r(12);function d(n){return l.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,l.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:r}=n;return(0,l.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:r,attributes:l,default:s}}=n;return{value:e,label:r,attributes:l,default:s}}))}(r);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function f(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function b(n){let{queryString:e=!1,groupId:r}=n;const s=(0,a.k6)(),t=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,i._X)(t),(0,l.useCallback)((n=>{if(!t)return;const e=new URLSearchParams(s.location.search);e.set(t,n),s.replace({...s.location,search:e.toString()})}),[t,s])]}function p(n){const{defaultValue:e,queryString:r=!1,groupId:s}=n,t=h(n),[a,i]=(0,l.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=r.find((n=>n.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:t}))),[c,d]=b({queryString:r,groupId:s}),[p,m]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,t]=(0,u.Nk)(r);return[s,(0,l.useCallback)((n=>{r&&t.set(n)}),[r,t])]}({groupId:s}),j=(()=>{const n=c??p;return f({value:n,tabValues:t})?n:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,l.useCallback)((n=>{if(!f({value:n,tabValues:t}))throw new Error(`Can't select invalid tab value=${n}`);i(n),d(n),m(n)}),[d,m,t]),tabValues:t}}var m=r(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(5893);function g(n){let{className:e,block:r,selectedValue:l,selectValue:a,tabValues:o}=n;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),u=n=>{const e=n.currentTarget,r=i.indexOf(e),s=o[r].value;s!==l&&(c(e),a(s))},d=n=>{let e=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{const r=i.indexOf(n.currentTarget)+1;e=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(n.currentTarget)-1;e=i[r]??i[i.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},e),children:o.map((n=>{let{value:e,label:r,attributes:t}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:n=>i.push(n),onKeyDown:d,onClick:u,...t,className:(0,s.Z)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":l===e}),children:r??e},e)}))})}function v(n){let{lazy:e,children:r,selectedValue:s}=n;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=t.find((n=>n.props.value===s));return n?(0,l.cloneElement)(n,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((n,e)=>(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function w(n){const e=p(n);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(n){const e=(0,m.Z)();return(0,x.jsx)(w,{...n,children:d(n.children)},String(e))}},1151:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>a});var l=r(7294);const s={},t=l.createContext(s);function a(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);