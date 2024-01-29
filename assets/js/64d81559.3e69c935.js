"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[5584],{1876:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=l(5893),r=l(1151);const s={},c="JS \u6027\u80fd\u4f18\u5316",d={id:"javascript/perform_optimization",title:"JS \u6027\u80fd\u4f18\u5316",description:"Memory Management",source:"@site/docs/javascript/perform_optimization.md",sourceDirName:"javascript",slug:"/javascript/perform_optimization",permalink:"/docs/javascript/perform_optimization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},t={},o=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Performance",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-performance",level:2},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u5185\u5b58\u95ee\u9898",id:"\u5185\u5b58\u95ee\u9898",level:2},{value:"\u5916\u5728\u8868\u73b0",id:"\u5916\u5728\u8868\u73b0",level:3},{value:"\u754c\u5b9a\u5185\u5b58\u95ee\u9898\u7684\u6807\u51c6",id:"\u754c\u5b9a\u5185\u5b58\u95ee\u9898\u7684\u6807\u51c6",level:3},{value:"\u76d1\u63a7\u5185\u5b58\u7684\u51e0\u79cd\u65b9\u5f0f",id:"\u76d1\u63a7\u5185\u5b58\u7684\u51e0\u79cd\u65b9\u5f0f",level:3},{value:"\u6d4f\u89c8\u5668\u4efb\u52a1\u7ba1\u7406\u5668",id:"\u6d4f\u89c8\u5668\u4efb\u52a1\u7ba1\u7406\u5668",level:4},{value:"Timeline \u65f6\u5e8f\u56fe\u8bb0\u5f55",id:"timeline-\u65f6\u5e8f\u56fe\u8bb0\u5f55",level:4},{value:"\u5806\u5feb\u7167\u67e5\u627e\u5206\u79bb DOM",id:"\u5806\u5feb\u7167\u67e5\u627e\u5206\u79bb-dom",level:4},{value:"\u5224\u65ad\u662f\u5426\u5b58\u5728\u9891\u7e41\u7684\u5783\u573e\u56de\u6536",id:"\u5224\u65ad\u662f\u5426\u5b58\u5728\u9891\u7e41\u7684\u5783\u573e\u56de\u6536",level:4},{value:"\u5982\u4f55\u7cbe\u51c6\u6d4b\u8bd5 JS \u6027\u80fd",id:"\u5982\u4f55\u7cbe\u51c6\u6d4b\u8bd5-js-\u6027\u80fd",level:2},{value:"\u614e\u7528\u5168\u5c40\u53d8\u91cf",id:"\u614e\u7528\u5168\u5c40\u53d8\u91cf",level:2},{value:"\u7f13\u5b58\u5168\u5c40\u53d8\u91cf",id:"\u7f13\u5b58\u5168\u5c40\u53d8\u91cf",level:2},{value:"\u901a\u8fc7\u539f\u578b\u65b0\u589e\u65b9\u6cd5",id:"\u901a\u8fc7\u539f\u578b\u65b0\u589e\u65b9\u6cd5",level:2},{value:"\u907f\u5f00\u95ed\u5305\u9677\u9631",id:"\u907f\u5f00\u95ed\u5305\u9677\u9631",level:2},{value:"\u907f\u514d\u5c5e\u6027\u8bbf\u95ee\u65b9\u6cd5\u4f7f\u7528",id:"\u907f\u514d\u5c5e\u6027\u8bbf\u95ee\u65b9\u6cd5\u4f7f\u7528",level:2},{value:"for \u5faa\u73af\u4f18\u5316",id:"for-\u5faa\u73af\u4f18\u5316",level:2},{value:"\u91c7\u7528\u6700\u4f18\u5faa\u73af\u65b9\u5f0f",id:"\u91c7\u7528\u6700\u4f18\u5faa\u73af\u65b9\u5f0f",level:2},{value:"\u8282\u70b9\u6dfb\u52a0\u4f18\u5316",id:"\u8282\u70b9\u6dfb\u52a0\u4f18\u5316",level:2},{value:"\u514b\u9686\u4f18\u5316\u8282\u70b9\u64cd\u4f5c",id:"\u514b\u9686\u4f18\u5316\u8282\u70b9\u64cd\u4f5c",level:2},{value:"\u5b57\u9762\u91cf\u66ff\u6362 Object \u64cd\u4f5c",id:"\u5b57\u9762\u91cf\u66ff\u6362-object-\u64cd\u4f5c",level:2},{value:"\u51cf\u5c11\u5224\u65ad\u5c42\u7ea7",id:"\u51cf\u5c11\u5224\u65ad\u5c42\u7ea7",level:2},{value:"\u51cf\u5c11\u58f0\u660e\u53ca\u8bed\u53e5\u6570",id:"\u51cf\u5c11\u58f0\u660e\u53ca\u8bed\u53e5\u6570",level:2},{value:"\u91c7\u7528\u4e8b\u4ef6\u59d4\u6258",id:"\u91c7\u7528\u4e8b\u4ef6\u59d4\u6258",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"js-\u6027\u80fd\u4f18\u5316",children:"JS \u6027\u80fd\u4f18\u5316"}),"\n",(0,i.jsx)(e.h1,{id:"js-\u5185\u5b58\u7ba1\u7406",children:"JS \u5185\u5b58\u7ba1\u7406"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Memory Management"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u2764 WHAT \u5185\u5b58\u7ba1\u7406\u4ecb\u7ecd"})}),"\n",(0,i.jsx)(e.p,{children:"\u5185\u5b58\uff1a\u7531\u53ef\u8bfb\u5199\u5355\u5143\u7ec4\u6210\uff0c\u8868\u793a\u4e00\u7247\u53ef\u64cd\u4f5c\u7a7a\u95f4"}),"\n",(0,i.jsx)(e.p,{children:"\u7ba1\u7406\uff1a\u4eba\u4e3a\u7684\u53bb\u64cd\u4f5c\u4e00\u7247\u7a7a\u95f4\u7684\u7533\u8bf7\u3001\u4f7f\u7528\u548c\u91ca\u653e"}),"\n",(0,i.jsx)(e.p,{children:"\u5185\u5b58\u7ba1\u7406\uff1a\u5f00\u53d1\u8005\u4e3b\u52a8\u7533\u8bf7\u7a7a\u95f4\u3001\u4f7f\u7528\u7a7a\u95f4\u3001\u91ca\u653e\u7a7a\u95f4"}),"\n",(0,i.jsx)(e.p,{children:"\u7ba1\u7406\u6d41\u7a0b\uff1a\u7533\u8bf7-\u4f7f\u7528-\u91ca\u653e"}),"\n",(0,i.jsxs)(e.p,{children:["\u2606 ",(0,i.jsx)(e.strong,{children:"JS \u4e2d\u7684\u5185\u5b58\u7ba1\u7406"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7533\u8bf7\u5185\u5b58\u7a7a\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u5185\u5b58\u7a7a\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"\u91ca\u653e\u5185\u5b58\u7a7a\u95f4"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'// \u7533\u8bf7\nlet obj = {};\n// \u4f7f\u7528\nobj.name = "obj";\n// \u91ca\u653e\nobj = null;\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u7ba1\u662f\u4ec0\u4e48\u6837\u7684\u8ba1\u7b97\u673a\u7a0b\u5e8f\u8bed\u8a00\uff0c\u8fd0\u884c\u5728\u5bf9\u5e94\u7684\u4ee3\u7801\u5f15\u64ce\u4e0a\uff0c\u5bf9\u5e94\u7684\u4f7f\u7528\u5185\u5b58\u8fc7\u7a0b\u5927\u81f4\u903b\u8f91\u662f\u4e00\u6837\u7684\uff0c\u53ef\u4ee5\u5206\u4e3a\u8fd9\u4e09\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5206\u914d\u4f60\u6240\u9700\u8981\u7684\u7cfb\u7edf\u5185\u5b58\u7a7a\u95f4\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u5206\u914d\u5230\u7684\u5185\u5b58\u8fdb\u884c\u8bfb\u6216\u8005\u5199\u7b49\u64cd\u4f5c\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0d\u9700\u8981\u4f7f\u7528\u5185\u5b58\u65f6\uff0c\u5c06\u5176\u7a7a\u95f4\u91ca\u653e\u6216\u8005\u5f52\u8fd8\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0e\u5176\u4ed6\u9700\u8981\u624b\u52a8\u7ba1\u7406\u5185\u5b58\u7684\u8bed\u8a00\u4e0d\u592a\u4e00\u6837\u7684\u5730\u65b9\u662f\uff0c\u5728 JavaScript \u4e2d\uff0c\u5f53\u6211\u4eec\u521b\u5efa\u53d8\u91cf\uff08\u5bf9\u8c61\uff0c\u5b57\u7b26\u4e32\u7b49\uff09\u7684\u65f6\u5019\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u7ed9\u5bf9\u8c61\u5206\u914d\u5bf9\u5e94\u7684\u5185\u5b58\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\ud83c\udf30 Demo"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'var a = 123; // \u7ed9\u6570\u503c\u53d8\u91cf\u5206\u914d\u6808\u5185\u5b58\nvar etf = "ARK"; // \u7ed9\u5b57\u7b26\u4e32\u5206\u914d\u6808\u5185\u5b58\n// \u7ed9\u5bf9\u8c61\u53ca\u5176\u5305\u542b\u7684\u503c\u5206\u914d\u5806\u5185\u5b58\nvar obj = {\n  name: "tom",\n  age: 13,\n};\n// \u7ed9\u6570\u7ec4\u53ca\u5176\u5305\u542b\u7684\u503c\u5206\u914d\u5185\u5b58\uff08\u5c31\u50cf\u5bf9\u8c61\u4e00\u6837\uff09\nvar a = [1, null, "PSAC"];\n// \u7ed9\u51fd\u6570\uff08\u53ef\u8c03\u7528\u7684\u5bf9\u8c61\uff09\u5206\u914d\u5185\u5b58\nfunction sum(a, b) {\n  return a + b;\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u7cfb\u7edf\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u53d1\u73b0\u8fd9\u4e9b\u53d8\u91cf\u4e0d\u4f1a\u518d\u88ab\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7\u5783\u573e\u56de\u6536\u673a\u5236\u7684\u65b9\u5f0f\u6765\u5904\u7406\u6389\u8fd9\u4e9b\u53d8\u91cf\u6240\u5360\u7528\u7684\u5185\u5b58\uff0c\u5176\u5b9e\u5f00\u53d1\u8005\u4e0d\u7528\u8fc7\u591a\u5173\u5fc3\u5185\u5b58\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u7b80\u5355\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5185\u5b58\u662f\u4fdd\u5b58\u5728\u6808\uff08stack\uff09\u7a7a\u95f4\u4e2d\u7684\uff1b\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u5185\u5b58\u4fdd\u5b58\u5728\u5806\uff08heap\uff09\u7a7a\u95f4\u4e2d\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u57fa\u672c\u5c31\u662f\u8bf4\u660e\u4ee5\u4e0b\u4e24\u70b9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u57fa\u672c\u7c7b\u578b\uff1a\u8fd9\u4e9b\u7c7b\u578b\u5728\u5185\u5b58\u4e2d\u4f1a\u5360\u636e\u56fa\u5b9a\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u5b83\u4eec\u7684\u503c\u90fd\u4fdd\u5b58\u5728\u6808\u7a7a\u95f4\u4e2d\uff0c\u76f4\u63a5\u53ef\u4ee5\u901a\u8fc7\u503c\u6765\u8bbf\u95ee\u8fd9\u4e9b\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u5f15\u7528\u7c7b\u578b\uff1a\u7531\u4e8e\u5f15\u7528\u7c7b\u578b\u503c\u5927\u5c0f\u4e0d\u56fa\u5b9a\uff08\u6bd4\u5982\u4e0a\u9762\u7684\u5bf9\u8c61\u53ef\u4ee5\u6dfb\u52a0\u5c5e\u6027\u7b49\uff09\uff0c\u6808\u5185\u5b58\u4e2d\u5b58\u653e\u5730\u5740\u6307\u5411\u5806\u5185\u5b58\u4e2d\u7684\u5bf9\u8c61\uff0c\u662f\u901a\u8fc7\u5f15\u7528\u6765\u8bbf\u95ee\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6808\u5185\u5b58\u4e2d\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u76f4\u63a5\u5904\u7406\uff1b\u800c\u5806\u5185\u5b58\u4e2d\u7684\u5f15\u7528\u7c7b\u578b\uff0c\u6b63\u662f\u7531\u4e8e\u53ef\u4ee5\u7ecf\u5e38\u53d8\u5316\uff0c\u5927\u5c0f\u4e0d\u56fa\u5b9a\uff0c\u56e0\u6b64\u9700\u8981 JavaScript \u7684\u5f15\u64ce\u901a\u8fc7\u5783\u573e\u56de\u6536\u673a\u5236\u6765\u5904\u7406"}),"\u3002"]}),"\n",(0,i.jsx)(e.h1,{id:"performance-\u5de5\u5177",children:"Performance \u5de5\u5177"}),"\n",(0,i.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-performance",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Performance"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7 Performance \u65f6\u523b\u76d1\u63a7\u5185\u5b58"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"GC \u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u5185\u5b58\u7a7a\u95f4\u7684\u826f\u6027\u5faa\u73af"}),"\n",(0,i.jsx)(e.li,{children:"\u826f\u6027\u5faa\u73af\u7684\u57fa\u77f3\u662f\u5408\u7406\u4f7f\u7528"}),"\n",(0,i.jsx)(e.li,{children:"\u65f6\u523b\u5173\u6ce8\u624d\u80fd\u786e\u5b9a\u662f\u5426\u5408\u7406"}),"\n",(0,i.jsx)(e.li,{children:"Performance \u63d0\u4f9b\u591a\u79cd\u76d1\u63a7\u65b9\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u6b65\u9aa4",children:"\u4f7f\u7528\u6b65\u9aa4"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u76ee\u6807\u7f51\u5740"}),"\n",(0,i.jsx)(e.li,{children:"\u8fdb\u5165\u5f00\u53d1\u4eba\u5458\u5de5\u5177\u9762\u677f\uff0c\u9009\u62e9\u6027\u80fd"}),"\n",(0,i.jsx)(e.li,{children:"\u5f00\u542f\u5f55\u5236\u529f\u80fd\uff0c\u8bbf\u95ee\u5177\u4f53\u9875\u9762"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u6237\u884c\u4e3a\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\u505c\u6b62\u5f55\u5236"}),"\n",(0,i.jsx)(e.li,{children:"\u5206\u6790\u754c\u9762\u4e2d\u8bb0\u5f55\u7684\u5185\u5b58\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5185\u5b58\u95ee\u9898",children:"\u5185\u5b58\u95ee\u9898"}),"\n",(0,i.jsx)(e.h3,{id:"\u5916\u5728\u8868\u73b0",children:"\u5916\u5728\u8868\u73b0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9875\u9762\u51fa\u73b0\u5ef6\u8fdf\u52a0\u8f7d\u6216\u7ecf\u5e38\u6027\u6682\u505c\u3010\u9891\u7e41\u5783\u573e\u56de\u6536\u3011"}),"\n",(0,i.jsx)(e.li,{children:"\u9875\u9762\u6301\u7eed\u6027\u51fa\u73b0\u7cdf\u7cd5\u7684\u6027\u80fd\uff08\u4e00\u76f4\u611f\u89c9\u4e0d\u592a\u597d\u7528\uff09\u3010\u5b58\u5728\u5185\u5b58\u81a8\u80c0\u3011"}),"\n",(0,i.jsx)(e.li,{children:"\u9875\u9762\u7684\u6027\u80fd\u968f\u65f6\u95f4\u5ef6\u957f\u8d8a\u6765\u8d8a\u5dee\u3010\u5185\u5b58\u6cc4\u6f0f\u3011"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u754c\u5b9a\u5185\u5b58\u95ee\u9898\u7684\u6807\u51c6",children:"\u754c\u5b9a\u5185\u5b58\u95ee\u9898\u7684\u6807\u51c6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6cc4\u6f0f\uff1a\u5185\u5b58\u4f7f\u7528\u6301\u7eed\u5347\u9ad8"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u81a8\u80c0\uff1a\u5728\u591a\u6570\u8bbe\u5907\u4e0a\u90fd\u5b58\u5728\u6027\u80fd\u95ee\u9898"}),"\n",(0,i.jsx)(e.li,{children:"\u9891\u7e41\u5783\u573e\u56de\u6536\uff1a\u901a\u8fc7\u5185\u5b58\u53d8\u5316\u56fe\u8fdb\u884c\u5206\u6790"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tex",children:"\u5185\u5b58\u6cc4\u6f0f\u662f\u6307 JavaScript \u4e2d\uff0c\u5df2\u7ecf\u5206\u914d\u5806\u5185\u5b58\u5730\u5740\u7684\u5bf9\u8c61\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u91ca\u653e\u6216\u8005\u65e0\u6cd5\u91ca\u653e\uff0c\u9020\u6210\u4e86\u957f\u671f\u5360\u7528\u5185\u5b58\uff0c\u4f7f\u5185\u5b58\u6d6a\u8d39\uff0c\u6700\u7ec8\u4f1a\u5bfc\u81f4\u8fd0\u884c\u7684\u5e94\u7528\u54cd\u5e94\u901f\u5ea6\u53d8\u6162\u4ee5\u53ca\u6700\u7ec8\u5d29\u6e83\u7684\u60c5\u51b5\u3002\n\u5185\u5b58\u6cc4\u6f0f\u7684\u573a\u666f\uff1a\n1. \u8fc7\u591a\u7684\u7f13\u5b58\u672a\u91ca\u653e\uff1b\n2. \u95ed\u5305\u592a\u591a\u672a\u91ca\u653e\uff1b\n3. \u5b9a\u65f6\u5668\u6216\u8005\u56de\u8c03\u592a\u591a\u672a\u91ca\u653e\uff1b\n4. \u592a\u591a\u65e0\u6548\u7684 DOM \u672a\u91ca\u653e\uff1b\n5. \u5168\u5c40\u53d8\u91cf\u592a\u591a\u672a\u88ab\u53d1\u73b0\u3002\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u76d1\u63a7\u5185\u5b58\u7684\u51e0\u79cd\u65b9\u5f0f",children:"\u76d1\u63a7\u5185\u5b58\u7684\u51e0\u79cd\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.h4,{id:"\u6d4f\u89c8\u5668\u4efb\u52a1\u7ba1\u7406\u5668",children:"\u6d4f\u89c8\u5668\u4efb\u52a1\u7ba1\u7406\u5668"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u4ee5\u6570\u503c\u7684\u5f62\u5f0f\u5c06\u5f53\u524d\u5e94\u7528\u7a0b\u5e8f\u6267\u884c\u8fc7\u7a0b\u4e2d\u5185\u5b58\u7684\u53d8\u5316\u4f53\u73b0\u51fa\u6765"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5feb\u6377\u952e\uff1ashift + esc"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\uff1a\u539f\u751f\u5185\u5b58\uff0c DOM \u8282\u70b9\u6240\u5360\u636e\u7684\u5185\u5b58"}),"\n",(0,i.jsx)(e.li,{children:"JS \u5185\u5b58\uff1a\u8868\u793a JS \u7684\u5806\uff0c\u5c0f\u62ec\u53f7\u91cc\u9762\u7684\u503c\u8868\u793a\u5f53\u524d\u73af\u5883\u4e0b\u53ef\u8fbe\u5bf9\u8c61\u7684\u4f7f\u7528\u7a7a\u95f4\u5927\u5c0f\uff0c\u5982\u679c\u5c0f\u62ec\u53f7\u91cc\u9762\u7684\u503c\u6301\u7eed\u589e\u5927\uff0c\u8bf4\u660e\u5f53\u524d\u4ee3\u7801\u6709\u95ee\u9898"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"timeline-\u65f6\u5e8f\u56fe\u8bb0\u5f55",children:"Timeline \u65f6\u5e8f\u56fe\u8bb0\u5f55"}),"\n",(0,i.jsx)(e.p,{children:"\u5c06\u5f53\u524d\u5e94\u7528\u4e2d\u6240\u6709\u6267\u884c\u5185\u5b58\u7684\u8d70\u52bf\u90fd\u4ee5\u65f6\u95f4\u70b9\u7684\u65b9\u5f0f\u5448\u73b0\u51fa\u6765"}),"\n",(0,i.jsx)(e.h4,{id:"\u5806\u5feb\u7167\u67e5\u627e\u5206\u79bb-dom",children:"\u5806\u5feb\u7167\u67e5\u627e\u5206\u79bb DOM"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u5806\u5feb\u7167\u7559\u5b58 JS \u5806\u7167\u7247"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5206\u79bb DOM"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u754c\u9762\u5143\u7d20\u5b58\u6d3b\u5728 DOM \u6811\u4e0a"}),"\n",(0,i.jsx)(e.li,{children:"\u5783\u573e\u5bf9\u8c61\u7684 DOM \u8282\u70b9\uff08\u5982\u679c\u5f53\u524d\u7684\u8282\u70b9\u4ece\u5f53\u524d\u7684 DOM \u6811\u4e0a\u8fdb\u884c\u4e86\u8131\u79bb\uff0c\u5e76\u4e14\u5728 JS \u4ee3\u7801\u4e2d\u6ca1\u6709\u518d\u6b21\u5f15\u7528\u7684\u8282\u70b9\uff0c\u5f53\u524d DOM \u4e3a\u5783\u573e DOM\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u5206\u79bb\u72b6\u6001\u7684 DOM \u8282\u70b9\uff08\u5982\u679c\u5f53\u524d\u7684\u8282\u70b9\u53ea\u662f\u4ece DOM \u6811\u4e0a\u8131\u79bb\u4e86\uff0c\u4f46\u5728 JS \u4e2d\u8fd8\u6709\u5f15\u7528\u7684\u5730\u65b9\uff0c\u5f53\u524d DOM \u6210\u4e3a\u5206\u79bb DOM\uff0c \u5728\u754c\u9762\u4e2d\u770b\u4e0d\u89c1\uff0c\u4f46\u662f\u5728 JS \u4e2d\u5360\u636e\u4e86\u5185\u5b58\uff0c \u4f1a\u5b58\u5728\u5185\u5b58\u6cc4\u9732\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6253\u5f00\u5f00\u53d1\u4eba\u5458\u5de5\u5177\uff0c\u9009\u62e9\u5185\u5b58\uff08Memory\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u7ed9\u5f53\u524d\u64cd\u4f5c\u62cd\u7167"}),"\n",(0,i.jsx)(e.li,{children:"deta \u53bb\u67e5\u8be2\u5f53\u524d\u64cd\u4f5c\u4e0b\u7684\u5206\u79bb dom"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u5224\u65ad\u662f\u5426\u5b58\u5728\u9891\u7e41\u7684\u5783\u573e\u56de\u6536",children:"\u5224\u65ad\u662f\u5426\u5b58\u5728\u9891\u7e41\u7684\u5783\u573e\u56de\u6536"}),"\n",(0,i.jsx)(e.p,{children:"\u501f\u52a9\u4e0d\u540c\u7684\u5de5\u5177"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"why"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"GC \u5de5\u4f5c\u65f6\u5e94\u7528\u7a0b\u5e8f\u662f\u505c\u6b62\u7684"}),"\n",(0,i.jsx)(e.li,{children:"\u9891\u7e41\u4e14\u8fc7\u957f\u7684 GC \u4f1a\u5bfc\u81f4\u5e94\u7528\u5047\u6b7b"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u6237\u4f7f\u7528\u4e2d\u611f\u77e5\u5e94\u7528\u5361\u987f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"how"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Timeline \u4e2d\u9891\u7e41\u7684\u4e0a\u5347\u4e0b\u964d"}),"\n",(0,i.jsx)(e.li,{children:"\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u6570\u636e\u9891\u7e41\u7684\u589e\u52a0\u51cf\u5c0f"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"\u5185\u5b58\u95ee\u9898\u4f18\u5316",children:"\u5185\u5b58\u95ee\u9898\u4f18\u5316"}),"\n",(0,i.jsx)(e.h2,{id:"\u5982\u4f55\u7cbe\u51c6\u6d4b\u8bd5-js-\u6027\u80fd",children:"\u5982\u4f55\u7cbe\u51c6\u6d4b\u8bd5 JS \u6027\u80fd"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u672c\u8d28\u4e0a\u5c31\u662f\u91c7\u96c6\u5927\u91cf\u7684\u6267\u884c\u6837\u672c\u8fdb\u884c\u6570\u5b66\u7edf\u8ba1\u548c\u5206\u6790"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528\u57fa\u4e8e ",(0,i.jsx)(e.a,{href:"https://jsbench.me/",children:"JSBench"})," \u5b8c\u6210\u3010",(0,i.jsx)(e.a,{href:"https://kaiwu.lagou.com/xunlianying/index.html?courseId=17#/detail?weekId=765&lessonId=2309",children:"\u70b9\u51fb\u67e5\u770b\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5"}),"\u3011"]}),"\n",(0,i.jsx)(e.h2,{id:"\u614e\u7528\u5168\u5c40\u53d8\u91cf",children:"\u614e\u7528\u5168\u5c40\u53d8\u91cf"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5168\u5c40\u53d8\u91cf\u5b9a\u4e49\u5728\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u662f\u6240\u6709\u4f5c\u7528\u57df\u94fe\u7684\u9876\u7aef\uff08\u6309\u7167\u5c42\u7ea7\u5f80\u4e0a\u67e5\u627e\u7684\u8fc7\u7a0b\uff0c\u5c40\u90e8\u4f5c\u7528\u57df\u4e2d\u6ca1\u6709\u627e\u5230\u7684\u53d8\u91cf\u90fd\u4f1a\u67e5\u627e\u5230\u6700\u9876\u7aef\u7684\u5168\u5c40\u4e0a\u4e0b\u6587\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u65f6\u95f4\u6d88\u8017\u6bd4\u8f83\u5927\uff0c\u964d\u4f4e\u4e86\u4ee3\u7801\u7684\u6267\u884c\u6548\u7387\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u4e00\u76f4\u5b58\u5728\u4e0e\u4e0a\u4e0b\u6587\u6267\u884c\u6808\uff0c\u76f4\u5230\u7a0b\u5e8f\u9000\u51fa\uff08\u5bf9\u4e8e GC \u5de5\u4f5c\u975e\u5e38\u4e0d\u5229\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u67d0\u4e2a\u5c40\u90e8\u4f5c\u7528\u4e8e\u51fa\u73b0\u4e86\u540c\u540d\u53d8\u91cf\u5219\u4f1a\u906e\u853d\u6216\u6c61\u67d3\u5168\u5c40"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u907f\u514d\u610f\u5916\u521b\u5efa\u5168\u5c40\u53d8\u91cf"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'var i,\n  str = "";\nfunction func() {\n  for (i = 0; i < 1000; i++) {\n    str += i;\n  }\n}\n\n// better\nfunction func() {\n  let str = "";\n  for (let i = 0; i < 1000; i++) {\n    str += i;\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u7f13\u5b58\u5168\u5c40\u53d8\u91cf",children:"\u7f13\u5b58\u5168\u5c40\u53d8\u91cf"}),"\n",(0,i.jsx)(e.p,{children:"\u5c06\u4f7f\u7528\u4e2d\u65e0\u6cd5\u907f\u514d\u7684\u5168\u5c40\u53d8\u91cf\u7f13\u5b58\u5230\u5c40\u90e8"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u51cf\u5c11\u58f0\u660e\u548c\u8bed\u53e5\u6570\uff08\u8bcd\u6cd5 \u8bed\u6cd5\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u4f5c\u7528\u57df\u94fe\u67e5\u627e\u53d8\u5feb"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'function getBtn() {\n  let oBtn1 = document.getElementById("btn1");\n  let oBtn3 = document.getElementById("btn3");\n  let oBtn5 = document.getElementById("btn5");\n  let oBtn7 = document.getElementById("btn7");\n  let oBtn9 = document.getElementById("btn9");\n}\n\n// better\nfunction getBtn() {\n  let obj = document;\n  let oBtn1 = obj.getElementById("btn1");\n  let oBtn3 = obj.getElementById("btn3");\n  let oBtn5 = obj.getElementById("btn5");\n  let oBtn7 = obj.getElementById("btn7");\n  let oBtn9 = obj.getElementById("btn9");\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u901a\u8fc7\u539f\u578b\u65b0\u589e\u65b9\u6cd5",children:"\u901a\u8fc7\u539f\u578b\u65b0\u589e\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u539f\u578b\u5bf9\u8c61\u4e0a\u65b0\u589e\u5b9e\u4f8b\u5bf9\u8c61\u9700\u8981\u7684\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"var fn1 = function () {\n  this.foo = function () {\n    console.log(11111);\n  };\n};\nlet f1 = new fn1();\n\n// faster\nvar fn2 = function () {};\nfn2.prototype.foo = function () {\n  console.log(11111);\n};\nlet f2 = new fn2();\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u907f\u5f00\u95ed\u5305\u9677\u9631",children:"\u907f\u5f00\u95ed\u5305\u9677\u9631"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u95ed\u5305: \u95ed\u5305\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u8bed\u6cd5, \u4f7f\u7528\u4e0d\u5f53\u5f88\u5bb9\u6613\u51fa\u73b0\u5185\u5b58\u6cc4\u6f0f, \u4e0d\u8981\u4e3a\u4e86\u95ed\u5305\u800c\u95ed\u5305 \u95ed\u5305\u7279\u70b9\uff1a - \u5916\u90e8\u5177\u6709\u6307\u5411\u5185\u90e8\u7684\u5f15\u7528 - \u5728\u201c\u5916\u201d\u90e8\u4f5c\u7528\u57df\u8bbf\u95ee\u201c\u5185\u90e8\u201d\u4f5c\u7528\u57df\u7684\u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'// before\nfunction foo() {\n  var el = document.getElementById("btn");\n  el.onclick = function () {\n    console.log(el.id);\n  };\n}\nfoo();\n\n// after\nfunction foo() {\n  var el = document.getElementById("btn");\n  el.onclick = function () {\n    console.log(el.id);\n  };\n  el = null;\n}\nfoo();\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u907f\u514d\u5c5e\u6027\u8bbf\u95ee\u65b9\u6cd5\u4f7f\u7528",children:"\u907f\u514d\u5c5e\u6027\u8bbf\u95ee\u65b9\u6cd5\u4f7f\u7528"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"JS \u7684\u9762\u5411\u5bf9\u8c61 JS \u4e0d\u9700\u8981\u5c5e\u6027\u7684\u8bbf\u95ee\u65b9\u6cd5\uff0c\u6240\u6709\u5c5e\u6027\u90fd\u662f\u5916\u90e8\u53ef\u89c1\u7684 \u4f7f\u7528\u5c5e\u6027\u8bbf\u95ee\u65b9\u6cd5\u53ea\u4f1a\u589e\u52a0\u4e00\u5c42\u91cd\u5b9a\u4e49\uff0c\u6ca1\u6709\u8bbf\u95ee\u7684\u63a7\u5236\u529b"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'function Person() {\n  this.name = "icoder";\n  this.age = 18;\n  this.getAge = function () {\n    return this.age;\n  };\n}\nconst p1 = new Person();\nconst a = p1.getAge();\n\n// faster\nfunction Person() {\n  this.name = "icoder";\n  this.age = 18;\n}\nconst p2 = new Person();\nconst b = p2.age;\n'})}),"\n",(0,i.jsx)(e.h2,{id:"for-\u5faa\u73af\u4f18\u5316",children:"for \u5faa\u73af\u4f18\u5316"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"use while more better"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'var arrList = [];\narrList[10000] = "icoder";\nfor (var i = 0; i < arrList.length; i++) {\n  console.log(arrList[i]);\n}\n\n// faster\nvar arrList = [];\narrList[10000] = "icoder";\nfor (var i = 0, len = arrList.length; i < len; i++) {\n  console.log(arrList[i]);\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u91c7\u7528\u6700\u4f18\u5faa\u73af\u65b9\u5f0f",children:"\u91c7\u7528\u6700\u4f18\u5faa\u73af\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"forEach \u3010faster\u3011"}),"\n",(0,i.jsx)(e.p,{children:"for\u3010second\u3011"}),"\n",(0,i.jsx)(e.p,{children:"for-in\u3010last\u3011"}),"\n",(0,i.jsx)(e.h2,{id:"\u8282\u70b9\u6dfb\u52a0\u4f18\u5316",children:"\u8282\u70b9\u6dfb\u52a0\u4f18\u5316"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u8282\u70b9\u7684\u6dfb\u52a0\u64cd\u4f5c\u5fc5\u7136\u4f1a\u6709\u56de\u6d41\u548c\u91cd\u7ed8"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'for (var i = 0; i < 10; i++) {\n  var oP = document.createElement("p");\n  oP.innerHTML = i;\n  document.body.appendChild(oP);\n}\n\n// more better\nconst fragEle = document.createDocumentFragment();\nfor (var i = 0; i < 10; i++) {\n  var oP = document.createElement("p");\n  oP.innerHTML = i;\n  fragEle.appendChild(oP);\n}\n\ndocument.body.appendChild(fragEle);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u514b\u9686\u4f18\u5316\u8282\u70b9\u64cd\u4f5c",children:"\u514b\u9686\u4f18\u5316\u8282\u70b9\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'for (var i = 0; i < 3; i++) {\n  var oP = document.createElement("p");\n  oP.innerHTML = i;\n  document.body.appendChild(oP);\n}\n\n// more better\nvar oldP = document.getElementById("box1");\nfor (var i = 0; i < 3; i++) {\n  var newP = oldP.cloneNode(false);\n  newP.innerHTML = i;\n  document.body.appendChild(newP);\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b57\u9762\u91cf\u66ff\u6362-object-\u64cd\u4f5c",children:"\u5b57\u9762\u91cf\u66ff\u6362 Object \u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 new \u5173\u952e\u5b57\u8c03\u7528\u4e86\u65b9\u6cd5\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u9700\u8981\u6d88\u8017\u4e00\u5b9a\u7684\u65f6\u95f4\u3002\u540e\u7eed\u5982\u679c\u6709\u6269\u5bb9\u7684\u9700\u6c42\uff0c\u66f4\u65b9\u4fbf\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u5b57\u9762\u91cf\u76f4\u63a5\u5f00\u8f9f\u5185\u5b58\u5b58\u653e\u5185\u5bb9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"var a = [1, 2, 3]; // faster\n\nvar a1 = new Array(3);\na1[0] = 1;\na1[1] = 2;\na1[2] = 3;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u51cf\u5c11\u5224\u65ad\u5c42\u7ea7",children:"\u51cf\u5c11\u5224\u65ad\u5c42\u7ea7"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'function doSomething(part, chapter) {\n  const parts = ["ES2016", "Vue", "react", "node"];\n  if (part) {\n    if (parts.includes(part)) {\n      console.log("\u5c5e\u4e8e\u5f53\u524d\u8bfe\u7a0b");\n      if (chapter > 5) {\n        console.log("\u60a8\u9700\u8981\u63d0\u4f9bVIP");\n      }\n    }\n  } else {\n    console.log("\u8bf7\u786e\u8ba4\u6a21\u5757\u4fe1\u606f");\n  }\n}\n\n// faster\nfunction doSomething(part, chapter) {\n  const parts = ["ES2016", "Vue", "react", "node"];\n  if (!part) {\n    console.log("\u8bf7\u786e\u8ba4\u6a21\u5757\u4fe1\u606f");\n    return;\n  }\n  if (!parts.includes(part)) return;\n  console.log("\u5c5e\u4e8e\u5f53\u524d\u8bfe\u7a0b");\n  if (chapter > 5) {\n    console.log("\u60a8\u9700\u8981\u63d0\u4f9bVIP");\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u51cf\u5c11\u58f0\u660e\u53ca\u8bed\u53e5\u6570",children:"\u51cf\u5c11\u58f0\u660e\u53ca\u8bed\u53e5\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"// faster\nvar test = (ele) => {\n  return ele.offsetWidth * ele.offsetHeight;\n};\n\nvar test = (ele) => {\n  let w = ele.offsetWidth;\n  let h = ele.offsetHeight;\n  return w * h;\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u91c7\u7528\u4e8b\u4ef6\u59d4\u6258",children:"\u91c7\u7528\u4e8b\u4ef6\u59d4\u6258"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'item.onclick = showText;\n\n// \u63a8\u8350\nvar oul = document.getElementById("ul");\noul.addEventListener("click", showText, true);\n'})}),"\n",(0,i.jsx)(e.h1,{id:"\u5173\u8054\u6587\u6863",children:"\u5173\u8054\u6587\u6863"})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>d,a:()=>c});var i=l(7294);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);