"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[3553],{8086:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(5893),l=s(1151);const r={},i="JS \u5f02\u6b65\u7f16\u7a0b",o={id:"javascript/async_programming",title:"JS \u5f02\u6b65\u7f16\u7a0b",description:"JS \u91c7\u7528\u5355\u7ebf\u7a0b\u6a21\u5f0f\u5de5\u4f5c\u7684\u539f\u56e0",source:"@site/docs/javascript/async_programming.md",sourceDirName:"javascript",slug:"/javascript/async_programming",permalink:"/docs/javascript/async_programming",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Closure\uff08\u95ed\u5305\uff09",permalink:"/docs/javascript/closure"},next:{title:"Promise",permalink:"/docs/javascript/promise"}},c={},d=[{value:"\u540c\u6b65\u6a21\u5f0f\u4e0e\u5f02\u6b65\u6a21\u5f0f",id:"\u540c\u6b65\u6a21\u5f0f\u4e0e\u5f02\u6b65\u6a21\u5f0f",level:2},{value:"\u540c\u6b65\u6a21\u5f0f\uff08Synchronous\uff09",id:"\u540c\u6b65\u6a21\u5f0fsynchronous",level:3},{value:"\u5f02\u6b65\u6a21\u5f0f\uff08Asynchronous\uff09",id:"\u5f02\u6b65\u6a21\u5f0fasynchronous",level:3},{value:"\u540c\u6b65\u6a21\u5f0f API \u548c\u5f02\u6b65\u6a21\u5f0f API \u7684\u7279\u70b9",id:"\u540c\u6b65\u6a21\u5f0f-api-\u548c\u5f02\u6b65\u6a21\u5f0f-api-\u7684\u7279\u70b9",level:3},{value:"\u4e8b\u4ef6\u5faa\u73af\u4e0e\u6d88\u606f\u961f\u5217",id:"\u4e8b\u4ef6\u5faa\u73af\u4e0e\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e8b\u4ef6\u5faa\u73af EventLoop",id:"\u4e8b\u4ef6\u5faa\u73af-eventloop",level:3},{value:"\u6d88\u606f\u961f\u5217",id:"\u6d88\u606f\u961f\u5217",level:3},{value:"\u5fae\u4efb\u52a1/ \u5b8f\u4efb\u52a1",id:"\u5fae\u4efb\u52a1-\u5b8f\u4efb\u52a1",level:3},{value:"\u5f02\u6b65\u7f16\u7a0b\u7684\u53d1\u5c55\u5386\u7a0b",id:"\u5f02\u6b65\u7f16\u7a0b\u7684\u53d1\u5c55\u5386\u7a0b",level:2},{value:"1. \u56de\u8c03\u51fd\u6570",id:"1-\u56de\u8c03\u51fd\u6570",level:3},{value:"2. Promise",id:"2-promise",level:3},{value:"3. Generator",id:"3-generator",level:3},{value:"4. async/await",id:"4-asyncawait",level:3},{value:"\u76f8\u5173\u6307\u5357",id:"\u76f8\u5173\u6307\u5357",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"js-\u5f02\u6b65\u7f16\u7a0b",children:"JS \u5f02\u6b65\u7f16\u7a0b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JS \u91c7\u7528\u5355\u7ebf\u7a0b\u6a21\u5f0f\u5de5\u4f5c\u7684\u539f\u56e0"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u65e9 js \u8bed\u8a00\u5c31\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u811a\u672c\u8bed\u8a00\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u9875\u9762\u4e0a\u7684\u52a8\u6001\u4ea4\u4e92\u3002",(0,t.jsx)(n.strong,{children:"\u5b9e\u73b0\u9875\u9762\u4ea4\u4e92\u7684\u6838\u5fc3\u5c31\u662f DOM \u64cd\u4f5c\uff0c\u8fd9\u5c31\u51b3\u5b9a\u4e86\u5b83\u5fc5\u987b\u4f7f\u7528\u5355\u7ebf\u7a0b\u6a21\u578b"}),"\uff0c\u5426\u5219\u5c31\u4f1a\u51fa\u73b0\u5f88\u590d\u6742\u7684\u7ebf\u7a0b\u540c\u6b65\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"\u5047\u8bbe\u5728 js \u4e2d\u6709\u591a\u4e2a\u7ebf\u7a0b\u4e00\u8d77\u5de5\u4f5c\uff0c\u5176\u4e2d\u4e00\u4e2a\u7ebf\u7a0b\u4fee\u6539\u4e86\u8fd9\u4e2a DOM \u5143\u7d20\uff0c\u540c\u65f6\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u53c8\u5220\u9664\u4e86\u8fd9\u4e2a\u5143\u7d20\uff0c\u6b64\u65f6\u6d4f\u89c8\u5668\u5c31\u65e0\u6cd5\u660e\u786e\u8be5\u4ee5\u54ea\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u4e3a\u51c6\u3002\u6240\u4ee5\u4e3a\u4e86\u907f\u514d\u7ebf\u7a0b\u540c\u6b65\u7684\u95ee\u9898\uff0c\u4ece\u4e00\u5f00\u59cb\uff0cjs \u5c31\u8bbe\u8ba1\u6210\u4e86\u5355\u7ebf\u7a0b\u7684\u5de5\u4f5c\u6a21\u5f0f\u3002"}),(0,t.jsx)(n.p,{children:"\u5355\u7ebf\u7a0b\u6307\u7684\u662f\uff1ajs \u6267\u884c\u73af\u5883\u4e2d\u8d1f\u8d23\u6267\u884c\u4ee3\u7801\u7684\u7ebf\u7a0b\u53ea\u6709\u4e00\u4e2a,\u5982\u679c\u6709\u591a\u4e2a\u4efb\u52a1\uff0c\u90a3\u4efb\u52a1\u9700\u8981\u6392\u961f\u4f9d\u6b21\u6267\u884c\u3002"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5355\u7ebf\u7a0b\u7684\u4f18\u52bf\u548c\u5f0a\u7aef"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f18\u52bf\uff1a",(0,t.jsx)(n.strong,{children:"\u66f4\u5b89\u5168\uff0c\u66f4\u7b80\u5355"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u7f3a\u70b9\uff1a\u5982\u679c\u4e2d\u95f4\u6709\u4e00\u4e2a\u7279\u522b\u8017\u65f6\u7684\u4efb\u52a1\uff0c\u5176\u4ed6\u7684\u4efb\u52a1\u5c31\u8981\u7b49\u5f85\u5f88\u957f\u7684\u65f6\u95f4\uff0c\u51fa\u73b0\u5047\u6b7b\u7684\u60c5\u51b5\u3002",(0,t.jsx)(n.strong,{children:"\u8fd9\u91cc\u8981\u5f3a\u8c03\uff0cjs \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u6d4f\u89c8\u5668\u4e0d\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u6709\u4e00\u4e9b API \u662f\u6709\u5355\u72ec\u7684\u7ebf\u7a0b\u53bb\u505a\u7684\u3002"})]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\uff0cjs \u6709\u4e24\u79cd\u4efb\u52a1\u7684\u6267\u884c\u6a21\u5f0f\uff1a",(0,t.jsx)(n.strong,{children:"\u540c\u6b65\u6a21\u5f0f\uff08Synchronous\uff09\u548c\u5f02\u6b65\u6a21\u5f0f\uff08Asynchronous\uff09"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u540c\u6b65\u6a21\u5f0f\u4e0e\u5f02\u6b65\u6a21\u5f0f",children:"\u540c\u6b65\u6a21\u5f0f\u4e0e\u5f02\u6b65\u6a21\u5f0f"}),"\n",(0,t.jsx)(n.h3,{id:"\u540c\u6b65\u6a21\u5f0fsynchronous",children:"\u540c\u6b65\u6a21\u5f0f\uff08Synchronous\uff09"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u5728\u6267\u884c\u67d0\u6bb5\u4ee3\u7801\u65f6\uff0c\u5728\u8be5\u4ee3\u7801\u6ca1\u6709\u5f97\u5230\u8fd4\u56de\u7ed3\u679c\u4e4b\u524d\uff0c\u5176\u4ed6\u4ee3\u7801\u6682\u65f6\u662f\u65e0\u6cd5\u6267\u884c\u7684\uff0c\u4f46\u662f\u4e00\u65e6\u6267\u884c\u5b8c\u6210\u62ff\u5230\u8fd4\u56de\u503c\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u6267\u884c\u5176\u4ed6\u4ee3\u7801\u4e86\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u6b64\u6bb5\u4ee3\u7801\u6267\u884c\u5b8c\u672a\u8fd4\u56de\u7ed3\u679c\u4e4b\u524d\uff0c\u4f1a\u963b\u585e\u4e4b\u540e\u7684\u4ee3\u7801\u6267\u884c\uff0c\u8fd9\u6837\u7684\u60c5\u51b5\u79f0\u4e3a\u540c\u6b65\u3002\u5728\u5355\u7ebf\u7a0b\u6a21\u5f0f\u4e0b\uff0c\u5927\u591a\u6570\u4efb\u52a1\u90fd\u4f1a\u4ee5\u540c\u6b65\u6a21\u5f0f\u6267\u884c"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("global begin");\nfunction bar() {\n  console.log("bar task");\n}\nfunction foo() {\n  console.log("foo task");\n  bar();\n}\nfoo();\nconsole.log("global end");\n\n// global begin\n// foo task\n// bar task\n// global end\n\n// \u4f7f\u7528\u8c03\u7528\u6808\u7684\u903b\u8f91\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5f02\u6b65\u6a21\u5f0fasynchronous",children:"\u5f02\u6b65\u6a21\u5f0f\uff08Asynchronous\uff09"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u4e0d\u4f1a\u53bb\u7b49\u5f85\u8fd9\u4e2a\u4efb\u52a1\u7684\u7ed3\u675f\u624d\u5f00\u59cb\u4e0b\u4e00\u4e2a\u4efb\u52a1\uff0c\u90fd\u662f\u5f00\u542f\u8fc7\u540e\u5c31\u7acb\u5373\u5f80\u540e\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002\u8017\u65f6\u51fd\u6570\u7684\u540e\u7eed\u903b\u8f91\u4f1a\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\u5b9a\u4e49\u3002\u5728\u5185\u90e8\uff0c\u8017\u65f6\u4efb\u52a1\u5b8c\u6210\u8fc7\u540e\u5c31\u4f1a\u81ea\u52a8\u6267\u884c\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570"})}),"\n",(0,t.jsxs)(n.p,{children:["js \u7ebf\u7a0b\u67d0\u4e2a\u65f6\u523b\u53d1\u8d77\u4e86\u4e00\u4e2a\u5f02\u6b65\u8c03\u7528\uff0c\u5b83\u7d27\u63a5\u7740\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u7684\u4efb\u52a1\uff0c\u6b64\u65f6\u5f02\u6b65\u7ebf\u7a0b\u4f1a\u5355\u72ec\u6267\u884c\u5f02\u6b65\u4efb\u52a1\uff0c\u6267\u884c\u8fc7\u540e\u4f1a\u5c06\u56de\u8c03\u653e\u5230\u6d88\u606f\u961f\u5217\u4e2d\uff0cjs \u4e3b\u7ebf\u7a0b\u6267\u884c\u5b8c\u4efb\u52a1\u8fc7\u540e\u4f1a\u4f9d\u6b21\u6267\u884c\u6d88\u606f\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002",(0,t.jsx)(n.strong,{children:"\u8fd9\u91cc\u8981\u5f3a\u8c03\uff0cjs \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u6d4f\u89c8\u5668\u4e0d\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u6709\u4e00\u4e9b API \u662f\u6709\u5355\u72ec\u7684\u7ebf\u7a0b\u53bb\u505a\u7684\u3002"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u540c\u6b65\u548c\u5f02\u6b65\u4e0d\u662f\u6307\u5199\u4ee3\u7801\u7684\u65b9\u5f0f\uff0c\u800c\u662f\u8fd0\u884c\u73af\u5883\u63d0\u4f9b\u7684 API \u662f\u4ee5\u540c\u6b65\u6216\u5f02\u6b65\u6a21\u5f0f\u7684\u65b9\u5f0f\u5de5\u4f5c*"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("global begin");\n// \u5ef6\u65f6\u5668\nsetTimeout(function timer1() {\n  console.log("timer1 invoke");\n}, 1800);\n// \u5ef6\u65f6\u5668\u4e2d\u53c8\u5d4c\u5957\u4e86\u4e00\u4e2a\u5ef6\u65f6\u5668\nsetTimeout(function timer2() {\n  console.log("timer2 invoke");\n  setTimeout(function inner() {\n    console.log("inner invoke");\n  }, 1000);\n}, 1000);\nconsole.log("global end");\n\n// global begin\n// global end\n// timer2 invoke\n// timer1 invoke\n// inner invoke\n\n// \u9664\u4e86\u8c03\u7528\u6808\uff0c\u8fd8\u7528\u5230\u4e86\u6d88\u606f\u961f\u5217\u548c\u4e8b\u4ef6\u5faa\u73af\n/** eventloop \u8d1f\u8d23\u76d1\u542c\u8c03\u7528\u6808\u548c\u6d88\u606f\u961f\u5217\uff0c\u4e00\u65e6\u8c03\u7528\u6808\u4e2d\u7684\u4efb\u52a1\u90fd\u7ed3\u675f\u4e86\uff0c\u4e8b\u4ef6\u5faa\u73af\u5c31\u4f1a\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u53d6\u51fa\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u538b\u5165\u5230\u8c03\u7528\u6808 */\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u540c\u6b65\u6a21\u5f0f-api-\u548c\u5f02\u6b65\u6a21\u5f0f-api-\u7684\u7279\u70b9",children:"\u540c\u6b65\u6a21\u5f0f API \u548c\u5f02\u6b65\u6a21\u5f0f API \u7684\u7279\u70b9"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u540c\u6b65\u6a21\u5f0f\u7684 API \u7684\u7279\u70b9:"})," \u4efb\u52a1\u6267\u884c\u5b8c\u4ee3\u7801\u624d\u4f1a\u7ee7\u7eed\u5f80\u4e0b\u8d70\uff0c\u4f8b\u5982\uff1aconsole.log"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5f02\u6b65\u6a21\u5f0f\u7684 API \u7684\u7279\u70b9"}),": \u4e0b\u8fbe\u8fd9\u4e2a\u4efb\u52a1\u5f00\u542f\u7684\u6307\u4ee4\u4e4b\u540e\u4ee3\u7801\u5c31\u4f1a\u7ee7\u7eed\u6267\u884c\uff0c\u4ee3\u7801\u4e0d\u4f1a\u7b49\u5f85\u4efb\u52a1\u7684\u7ed3\u675f"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8b\u4ef6\u5faa\u73af\u4e0e\u6d88\u606f\u961f\u5217",children:"\u4e8b\u4ef6\u5faa\u73af\u4e0e\u6d88\u606f\u961f\u5217"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8b\u4ef6\u5faa\u73af-eventloop",children:"\u4e8b\u4ef6\u5faa\u73af EventLoop"}),"\n",(0,t.jsx)(n.p,{children:"JS \u662f\u5355\u7ebf\u7a0b\uff0c\u5728 I/O \u64cd\u4f5c\uff0c\u7f51\u7edc\u8bf7\u6c42\uff0c\u8bfb\u53d6\u6587\u4ef6\u7b49\u8fc7\u7a0b\u4e2d\u90fd\u662f\u8fdb\u884c\u7b49\u5f85\u64cd\u4f5c\uff0c\u8fd9\u6837\u5bb9\u6613\u5f15\u8d77\u963b\u585e\u3002\nJS \u4e8b\u4ef6\u5faa\u73af\u662f\u7528\u6765\u534f\u8c03\u4e8b\u4ef6\u3001\u7528\u6237\u4ea4\u4e92\u3001\u811a\u6b65\u6267\u884c\u3001\u9875\u9762\u6e32\u67d3\u3001\u7f51\u7edc\u8bf7\u6c42\u7b49\u3002\u90fd\u662f\u7531\u4e00\u4e2a\u53eb\u505a worker \u673a\u5236\u7684\u4ee3\u7406\u53bb\u7ba1\u7406\u3002\nJS \u5f15\u5165 worker \u673a\u5236\uff0c\u53ef\u4ee5\u5b9e\u73b0\u591a\u7ebf\u7a0b\u3002worker \u4e2d\u8bbe\u7f6e\u4e24\u4e2a\u7ebf\u7a0b\uff1a\u4e00\u4e2a\u8d1f\u8d23\u7a0b\u5e8f\u672c\u8eab\u7684\u8fd0\u884c\uff0c\u79f0\u4e3a\u201d\u4e3b\u7ebf\u7a0b\u201d\uff1b\u53e6\u4e00\u4e2a\u8d1f\u8d23\u4e3b\u7ebf\u7a0b\u4e0e\u5176\u5b83\u8fdb\u7a0b\uff08\u4e3b\u8981\u662f\u5404\u79cd I/O \u64cd\u4f5c\uff09\u7684\u901a\u4fe1\uff0c\u88ab\u79f0\u4e3a\u201dEvent Loop \u7ebf\u7a0b\u201d, \u4e8b\u4ef6\u5faa\u73af\u8d1f\u8d23\u6267\u884c\u4ee3\u7801\u3001\u6536\u96c6\u548c\u5904\u7406\u4e8b\u4ef6\u4ee5\u53ca\u6267\u884c\u961f\u5217\u4e2d\u7684\u5b50\u4efb\u52a1\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u7b80\u5355\u6982\u62ec"}),'\uff1a\n\u4e3b\u7ebf\u7a0b\u4ece"\u4efb\u52a1\u961f\u5217"\u4e2d\u8bfb\u53d6\u4e8b\u4ef6\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u5faa\u73af\u4e0d\u65ad\u7684\uff0c\u6240\u4ee5\u6574\u4e2a\u7684\u8fd9\u79cd\u8fd0\u884c\u673a\u5236\u53c8\u79f0\u4e3a Event Loop\uff08\u4e8b\u4ef6\u5faa\u73af\uff09\u3002']}),"\n",(0,t.jsx)(n.p,{children:"Event Loop \u7ebf\u7a0b\u5904\u7406\u7684\u4efb\u52a1\u88ab\u5206\u4e3a\u4e24\u7c7b\u5373 \u5fae\u4efb\u52a1\uff08micro task\uff09\u548c\u5b8f\u4efb\u52a1\uff08macro task) \u8fd9\u4e24\u4e2a\u4efb\u52a1\u5206\u522b\u7ef4\u62a4\u4e00\u4e2a\u961f\u5217\uff0c\u90fd\u662f\u91c7\u7528\u5148\u8fdb\u5148\u51fa\u7684\u7b56\u7565\u8fdb\u884c\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u6d88\u606f\u961f\u5217",children:"\u6d88\u606f\u961f\u5217"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a JavaScript \u8fd0\u884c\u65f6\u5305\u542b\u4e86\u4e00\u4e2a\u5f85\u5904\u7406\u6d88\u606f\u7684\u6d88\u606f\u961f\u5217\u3002\u6bcf\u4e00\u4e2a\u6d88\u606f\u90fd\u5173\u8054\u7740\u4e00\u4e2a\u7528\u4ee5\u5904\u7406\u8fd9\u4e2a\u6d88\u606f\u7684\u56de\u8c03\u51fd\u6570\u3002\n\u5728 ",(0,t.jsx)(n.em,{children:"\u4e8b\u4ef6\u5faa\u73af"})," \u671f\u95f4\u7684\u67d0\u4e2a\u65f6\u523b\uff0c\u8fd0\u884c\u65f6\u4f1a\u4ece\u6700\u5148\u8fdb\u5165\u961f\u5217\u7684\u6d88\u606f\u5f00\u59cb\u5904\u7406\u961f\u5217\u4e2d\u7684\u6d88\u606f\u3002\u88ab\u5904\u7406\u7684\u6d88\u606f\u4f1a\u88ab\u79fb\u51fa\u961f\u5217\uff0c\u5e76\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u6765\u8c03\u7528\u4e0e\u4e4b\u5173\u8054\u7684\u51fd\u6570\u3002\n\u6b63\u5982\u524d\u9762\u6240\u63d0\u5230\u7684\uff0c\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u603b\u662f\u4f1a\u4e3a\u5176\u521b\u9020\u4e00\u4e2a\u65b0\u7684\u6808\u5e27\u3002\n\u51fd\u6570\u7684\u5904\u7406\u4f1a\u4e00\u76f4\u8fdb\u884c\u5230\u6267\u884c\u6808\u518d\u6b21\u4e3a\u7a7a\u4e3a\u6b62\uff1b\u7136\u540e\u4e8b\u4ef6\u5faa\u73af\u5c06\u4f1a\u5904\u7406\u961f\u5217\u4e2d\u7684\u4e0b\u4e00\u4e2a\u6d88\u606f\uff08\u5982\u679c\u8fd8\u6709\u7684\u8bdd\uff09"]}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u524d\u6267\u884c\u6808\u6267\u884c\u5b8c\u6bd5\u65f6\u4f1a\u7acb\u523b\u5148\u5904\u7406\u6240\u6709\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u518d\u53bb\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u53d6\u51fa\u4e00\u4e2a\u4e8b\u4ef6\u3002\n\u540c\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u5fae\u4efb\u52a1\u6c38\u8fdc\u5728\u5b8f\u4efb\u52a1\u4e4b\u524d\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5fae\u4efb\u52a1-\u5b8f\u4efb\u52a1",children:"\u5fae\u4efb\u52a1/ \u5b8f\u4efb\u52a1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5e38\u89c1\u7684\u5b8f\u4efb\u52a1\uff1a"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"script \u4e2d\u7684\u4ee3\u7801\u5757"}),"\n",(0,t.jsx)(n.li,{children:"setTimeout()"}),"\n",(0,t.jsx)(n.li,{children:"setInterval()"}),"\n",(0,t.jsx)(n.li,{children:"setImmediate() (\u975e\u6807\u51c6\uff0cIE \u548c Node.js \u4e2d\u652f\u6301)"}),"\n",(0,t.jsx)(n.li,{children:"\u6ce8\u518c\u4e8b\u4ef6"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u6d4f\u89c8\u5668"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Node"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"I/O"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"setTimeout"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"setInterval"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"setImmediate"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"requestAnimationFrame"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5e38\u89c1\u7684\u5fae\u4efb\u52a1\uff1a"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Promise"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver",children:"MutationObserver"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask",children:"queueMicrotask"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'queueMicrotask(() => {\n  console.log("\u5fae\u4efb\u52a1");\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u6d4f\u89c8\u5668"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Node"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process.nextTick"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MutationObserver"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Promise.then catch finally"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8%E5%BE%AE%E4%BB%BB%E5%8A%A1",children:"\u4f55\u65f6\u4f7f\u7528\u5fae\u4efb\u52a1"})})}),"\n",(0,t.jsx)(n.p,{children:"\u5fae\u4efb\u52a1\u7684\u6267\u884c\u65f6\u673a\uff0c\u665a\u4e8e\u5f53\u524d\u672c\u8f6e\u4e8b\u4ef6\u5faa\u73af\u7684 Call Stack(\u8c03\u7528\u6808) \u4e2d\u7684\u4ee3\u7801(\u5b8f\u4efb\u52a1)\uff0c\u65e9\u4e8e\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u548c\u5b9a\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5fae\u4efb\u52a1\u7684\u6700\u4e3b\u8981\u539f\u56e0\u7b80\u5355\u5f52\u7eb3\u4e3a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u51cf\u5c11\u64cd\u4f5c\u4e2d\u7528\u6237\u53ef\u611f\u77e5\u5230\u7684\u5ef6\u8fdf"}),"\n",(0,t.jsx)(n.li,{children:"\u786e\u4fdd\u4efb\u52a1\u987a\u5e8f\u7684\u4e00\u81f4\u6027\uff0c\u5373\u4fbf\u5f53\u7ed3\u679c\u6216\u6570\u636e\u662f\u540c\u6b65\u53ef\u7528\u7684"}),"\n",(0,t.jsx)(n.li,{children:"\u6279\u91cf\u64cd\u4f5c\u7684\u4f18\u5316"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u786e\u4fdd\u4efb\u52a1\u987a\u5e8f\u7684\u4e00\u81f4\u6027"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'customElement.prototype.getData = url => {\n  if (this.cache[url]) {\n    this.data = this.cache[url];\n    this.dispatchEvent(new Event("load"));\n  } else {\n    fetch(url).then(result => result.arrayBuffer()).then(data => {\n      this.cache[url] = data;\n      this.data = data;\n      this.dispatchEvent(new Event("load"));\n    )};\n  }\n};\n\nelement.addEventListener("load", () => console.log("Loaded data"));\nconsole.log("Fetching data...");\nelement.getData();\nconsole.log("Data fetched");\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-\u6570\u636e\u8f93\u51fa\u7ed3\u679c",src:s(368).Z+"",width:"1864",height:"408"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'customElement.prototype.getData = url => {\n  if (this.cache[url]) {\n    queueMicrotask(() => {\n      this.data = this.cache[url];\n      this.dispatchEvent(new Event("load"));\n    });\n  } else {\n    fetch(url).then(result => result.arrayBuffer()).then(data => {\n      this.cache[url] = data;\n      this.data = data;\n      this.dispatchEvent(new Event("load"));\n    )\n  };\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6279\u91cf\u64cd\u4f5c"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let messageQueue = [];\nlet sendMessage = (message) => {\n  messageQueue.push(message);\n  if (messageQueue.length === 1) {\n    queueMicrotask(() => {\n      const json = JSON.stringify(messageQueue);\n      messageQueue.length = 0;\n      // fetch("url-of-receiver", json);\n      console.log(json);\n    });\n  }\n};\n\nsendMessage("\u5218\u5907");\nsendMessage("\u5173\u7fbd");\nsendMessage("\u66f9\u64cd");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5f02\u6b65\u7f16\u7a0b\u7684\u53d1\u5c55\u5386\u7a0b",children:"\u5f02\u6b65\u7f16\u7a0b\u7684\u53d1\u5c55\u5386\u7a0b"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u56de\u8c03\u51fd\u6570",children:"1. \u56de\u8c03\u51fd\u6570"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u7531\u8c03\u7528\u8005\u5b9a\u4e49\uff0c\u4ea4\u7ed9\u6267\u884c\u8005\u6267\u884c\u7684\u51fd\u6570"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u5386\u53f2\u53d1\u5c55\u7684\u8109\u7edc\u6765\u770b\uff0c\u65e9\u4e9b\u5e74\u4e3a\u4e86\u5b9e\u73b0 JS \u7684\u5f02\u6b65\u7f16\u7a0b\uff0c\u4e00\u822c\u90fd\u91c7\u7528\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u6bd4\u5982\u6bd4\u8f83\u5178\u578b\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\uff0c\u6216\u8005\u7528 setTimeout/ setInterval \u6765\u5b9e\u73b0\u4e00\u4e9b\u5f02\u6b65\u7f16\u7a0b\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u6765\u5b9e\u73b0\u5b58\u5728\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u56de\u8c03\u5730\u72f1\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// callback\u5c31\u662f\u56de\u8c03\u51fd\u6570\n// \u5c31\u662f\u628a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u7f3a\u70b9\u662f\u4e0d\u5229\u4e8e\u9605\u8bfb\uff0c\u6267\u884c\u987a\u5e8f\u6df7\u4e71\u3002\nfunction foo(callback) {\n  setTimeout(function () {\n    callback();\n  }, 3000);\n}\n\nfoo(function () {\n  console.log("\u8fd9\u5c31\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570");\n  console.log("\u8c03\u7528\u8005\u5b9a\u4e49\u8fd9\u4e2a\u51fd\u6570\uff0c\u6267\u884c\u8005\u6267\u884c\u8fd9\u4e2a\u51fd\u6570");\n  console.log("\u5176\u5b9e\u5c31\u662f\u8c03\u7528\u8005\u544a\u8bc9\u6267\u884c\u8005\u5f02\u6b65\u4efb\u52a1\u7ed3\u675f\u540e\u5e94\u8be5\u505a\u4ec0\u4e48");\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7f3a\u70b9"}),"\uff1a \u5f88\u5bb9\u6613\u5f62\u6210\u56de\u8c03\u5730\u72f1"]}),"\n",(0,t.jsx)(n.p,{children:"\u56de\u8c03\u5b9e\u73b0\u5f02\u6b65\u7f16\u7a0b\u7684\u573a\u666f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ajax \u8bf7\u6c42\u7684\u56de\u8c03"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9a\u65f6\u5668\u4e2d\u7684\u56de\u8c03"}),"\n",(0,t.jsx)(n.li,{children:"\u4e8b\u4ef6\u56de\u8c03"}),"\n",(0,t.jsx)(n.li,{children:"Nodejs \u4e2d\u7684\u4e00\u4e9b\u65b9\u6cd5\u56de\u8c03"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5f02\u6b65\u56de\u8c03\u5982\u679c\u5c42\u7ea7\u5f88\u5c11\uff0c\u53ef\u8bfb\u6027\u548c\u4ee3\u7801\u7684\u7ef4\u62a4\u6027\u6682\u65f6\u8fd8\u662f\u53ef\u4ee5\u63a5\u53d7\uff0c\u4e00\u65e6\u5c42\u7ea7\u53d8\u591a\u5c31\u4f1a\u9677\u5165\u56de\u8c03\u5730\u72f1\uff0c\u4e0a\u9762\u8fd9\u4e9b\u5f02\u6b65\u7f16\u7a0b\u7684\u573a\u666f\u90fd\u4f1a\u6d89\u53ca\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(n.h3,{id:"2-promise",children:["2. ",(0,t.jsx)(n.a,{href:"/docs/javascript/promise",children:"Promise"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Promise \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u8868\u8ff0\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\u6267\u884c\u4e4b\u540e\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002\n\u91c7\u7528 Promise \u7684\u5b9e\u73b0\u65b9\u5f0f\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5373\u4fbf promise \u4e2d\u6ca1\u6709\u4efb\u4f55\u7684\u5f02\u6b65\u64cd\u4f5c\uff0cthen \u65b9\u6cd5\u7684\u56de\u8c03\u51fd\u6570\u4ecd\u7136\u4f1a\u8fdb\u5165\u5230\u4e8b\u4ef6\u961f\u5217\u4e2d\u6392\u961f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"\u672c\u8d28"})}),"\uff1a\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\u53bb\u5b9a\u4e49\u5f02\u6b65\u4efb\u52a1\u7ed3\u675f\u540e\u6240\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u3002\u8fd9\u91cc\u7684\u56de\u8c03\u51fd\u6570\u662f\u901a\u8fc7 then \u65b9\u6cd5\u4f20\u9012\u8fc7\u53bb\u7684"]}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf30 \u6848\u4f8b\uff1a\u4f7f\u7528 Promise \u53bb\u5c01\u88c5\u4e00\u4e2a ajax \u7684\u6848\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function ajax(url) {\n  return new Promise((resolve, rejects) => {\n    // \u521b\u5efa\u4e00\u4e2aXMLHttpRequest\u5bf9\u8c61\u53bb\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\n    const xhr = new XMLHttpRequest();\n    // \u5148\u8bbe\u7f6e\u4e00\u4e0bxhr\u5bf9\u8c61\u7684\u8bf7\u6c42\u65b9\u5f0f\u662fGET\uff0c\u8bf7\u6c42\u7684\u5730\u5740\u5c31\u662f\u53c2\u6570\u4f20\u9012\u7684url\n    xhr.open("GET", url);\n    // \u8bbe\u7f6e\u8fd4\u56de\u7684\u7c7b\u578b\u662fjson\uff0c\u662fHTML5\u7684\u65b0\u7279\u6027\n    // \u6211\u4eec\u5728\u8bf7\u6c42\u4e4b\u540e\u62ff\u5230\u7684\u662fjson\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u5b57\u7b26\u4e32\n    xhr.responseType = "json";\n    // html5\u4e2d\u63d0\u4f9b\u7684\u65b0\u4e8b\u4ef6,\u8bf7\u6c42\u5b8c\u6210\u4e4b\u540e\uff08readyState\u4e3a4\uff09\u624d\u4f1a\u6267\u884c\n    xhr.onload = () => {\n      if (this.status === 200) {\n        // \u8bf7\u6c42\u6210\u529f\u5c06\u8bf7\u6c42\u7ed3\u679c\u8fd4\u56de\n        resolve(this.response);\n      } else {\n        // \u8bf7\u6c42\u5931\u8d25\uff0c\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u5bf9\u8c61\uff0c\u8fd4\u56de\u9519\u8bef\u6587\u672c\n        rejects(new Error(this.statusText));\n      }\n    };\n    // \u5f00\u59cb\u6267\u884c\u5f02\u6b65\u8bf7\u6c42\n    xhr.send();\n  });\n}\n\najax("/api/user.json").then(\n  (res) => {\n    console.log(res);\n  },\n  (error) => {\n    console.log(error);\n  }\n);\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 Promise \u7684\u4f18\u70b9\u662f\u53ef\u4ee5\u5c06\u5f02\u6b65\u64cd\u4f5c\u4ee5\u540c\u6b65\u64cd\u4f5c\u7684\u6d41\u7a0b\u8868\u8fbe\u51fa\u6765\uff0c\u907f\u514d\u4e86\u5c42\u5c42\u5d4c\u5957\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f Promise \u4e5f\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff0c\u5373\u4fbf\u662f\u4f7f\u7528 Promise \u7684\u94fe\u5f0f\u8c03\u7528\uff0c\u5982\u679c\u64cd\u4f5c\u8fc7\u591a\uff0c\u5176\u5b9e\u5e76\u6ca1\u6709\u4ece\u6839\u672c\u4e0a\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"}),"\n",(0,t.jsxs)(n.h3,{id:"3-generator",children:["3. ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators",children:"Generator"})]}),"\n",(0,t.jsx)(n.p,{children:"Generator \u6700\u5927\u7684\u7279\u70b9\u5c31\u662f\u53ef\u4ee5\u4ea4\u51fa\u51fd\u6570\u7684\u6267\u884c\u6743\uff0cGenerator \u51fd\u6570\u53ef\u4ee5\u770b\u51fa\u662f\u5f02\u6b65\u4efb\u52a1\u7684\u5bb9\u5668\uff0c\u9700\u8981\u6682\u505c\u7684\u5730\u65b9\uff0c\u90fd\u7528 yield \u8bed\u6cd5\u6765\u6807\u6ce8\u3002Generator \u51fd\u6570\u4e00\u822c\u914d\u5408 yield \u4f7f\u7528\uff0cGenerator \u51fd\u6570\u6700\u540e\u8fd4\u56de\u7684\u662f\u8fed\u4ee3\u5668\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function* gen() {\n  console.log("enter");\n  let a = yield 1;\n  let b = yield (function () {\n    return 2;\n  })();\n  return 3;\n}\nvar g = gen(); // \u963b\u585e\u4f4f\uff0c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u8bed\u53e5\nconsole.log(typeof g); // \u8fd4\u56de object \u8fd9\u91cc\u4e0d\u662f "function"\nconsole.log(g.next());\nconsole.log(g.next());\nconsole.log(g.next());\nconsole.log(g.next());\n// output:\n// { value: 1, done: false }\n// { value: 2, done: false }\n// { value: 3, done: true }\n// { value: undefined, done: true }\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5b9a\u4e49\u751f\u6210\u5668\u51fd\u6570\u5c31\u662f\u5728 function \u540e\u9762\u8ddf\u4e00\u4e2a *\nGenerator \u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u751f\u6210\u5668\u5bf9\u8c61\uff0c\u8c03\u7528\u5bf9\u8c61\u7684 next \u65b9\u6cd5\u624d\u4f1a\u5f00\u59cb\u6267\u884c\u51fd\u6570\u4f53\u5185\u5bb9\uff0c\u78b0\u5230 yield \u5173\u952e\u8bcd\u5c31\u4f1a\u6682\u505c\u6267\u884c\uff0cyield \u540e\u9762\u7684\u503c\u5c06\u4f1a\u4f5c\u4e3a next \u7684\u7ed3\u679c\u8fd4\u56de"}),"\n",(0,t.jsx)(n.h3,{id:"4-asyncawait",children:"4. async/await"}),"\n",(0,t.jsx)(n.p,{children:"async \u662f Generator \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6\uff0casync/await \u7684\u4f18\u70b9\u662f\u4ee3\u7801\u6e05\u6670\uff08\u4e0d\u50cf\u4f7f\u7528 Promise \u7684\u65f6\u5019\u9700\u8981\u5199\u5f88\u591a then \u7684\u65b9\u6cd5\u94fe\uff09\uff0c\u53ef\u4ee5\u5904\u7406\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function testWait() {\n  return new Promise((resolve, reject) => {\n    setTimeout(function () {\n      console.log("testWait");\n      resolve();\n    }, 1000);\n  });\n}\nasync function testAwaitUse() {\n  await testWait();\n  console.log("hello");\n  return 123;\n  // \u8f93\u51fa\u987a\u5e8f\uff1atestWait\uff0chello\n  // \u7b2c\u5341\u884c\u5982\u679c\u4e0d\u4f7f\u7528await\u8f93\u51fa\u987a\u5e8f\uff1ahello , testWait\n}\nconsole.log(testAwaitUse());\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6307\u5357",children:"\u76f8\u5173\u6307\u5357"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5",children:"\u5f02\u6b65 JavaScript"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",children:"\u5e76\u53d1\u6a21\u578b\u4e0e\u4e8b\u4ef6\u5faa\u73af"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth",children:"Microtasks and the JavaScript runtime environment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide",children:"\u5728 JavaScript \u4e2d\u901a\u8fc7 queueMicrotask() \u4f7f\u7528\u5fae\u4efb\u52a1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",children:"Event loops"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},368:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/res-8a701349544d6119b2fc2ae7500c1d8f.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);