"use strict";(self.webpackChunkcrystal_docs=self.webpackChunkcrystal_docs||[]).push([[9461],{5733:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(5893),s=r(1151);const t={},c="\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf",l={id:"typescript/advance_type_enhance",title:"\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf",description:"\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf\uff0c\u987e\u540d\u601d\u4e49\u5c31\u662f\u5bf9 TypeScript \u7c7b\u578b\u7cfb\u7edf\u7684\u589e\u5f3a\u3002\u5728 npm \u4e2d\uff0c\u6709\u5f88\u591a\u5386\u53f2\u60a0\u4e45\u7684\u5e93\u90fd\u662f\u4f7f\u7528 JavaScript \u7f16\u5199\u7684\uff0c\u800c TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u8bbe\u8ba1\u76ee\u6807\u4e4b\u4e00\u5c31\u662f\u80fd\u5728 TypeScript \u4e2d\u5b89\u5168\u3001\u65b9\u4fbf\u5730\u4f7f\u7528 JavaScript \u5e93\u3002",source:"@site/docs/typescript/advance_type_enhance.md",sourceDirName:"typescript",slug:"/typescript/advance_type_enhance",permalink:"/docs/typescript/advance_type_enhance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u517c\u5bb9",permalink:"/docs/typescript/advance_type_compatible"},next:{title:"\u5168\u5c40\u5de5\u5177\u7c7b\u578b",permalink:"/docs/typescript/advance_global"}},a={},d=[{value:"\u58f0\u660e",id:"\u58f0\u660e",level:2},{value:"declare \u53d8\u91cf",id:"declare-\u53d8\u91cf",level:3},{value:"\u58f0\u660e\u51fd\u6570",id:"\u58f0\u660e\u51fd\u6570",level:3},{value:"\u58f0\u660e\u7c7b",id:"\u58f0\u660e\u7c7b",level:3},{value:"\u58f0\u660e\u679a\u4e3e",id:"\u58f0\u660e\u679a\u4e3e",level:3},{value:"declare \u6a21\u5757",id:"declare-\u6a21\u5757",level:3},{value:"declare \u6587\u4ef6",id:"declare-\u6587\u4ef6",level:3},{value:"declare namespace",id:"declare-namespace",level:3},{value:"\u58f0\u660e\u6587\u4ef6",id:"\u58f0\u660e\u6587\u4ef6",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:3},{value:"\u503c",id:"\u503c",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:3},{value:"Demo",id:"demo",level:3},{value:"\u4f7f\u7528\u58f0\u660e\u6587\u4ef6",id:"\u4f7f\u7528\u58f0\u660e\u6587\u4ef6",level:4},{value:"\u4f7f\u7528 @types",id:"\u4f7f\u7528-types",level:4},{value:"\u7c7b\u578b\u5408\u5e76",id:"\u7c7b\u578b\u5408\u5e76",level:2},{value:"\u5408\u5e76\u63a5\u53e3",id:"\u5408\u5e76\u63a5\u53e3",level:2},{value:"\u5408\u5e76 namespace",id:"\u5408\u5e76-namespace",level:2},{value:"\u4e0d\u53ef\u5408\u5e76",id:"\u4e0d\u53ef\u5408\u5e76",level:2},{value:"\u6269\u5145\u6a21\u5757",id:"\u6269\u5145\u6a21\u5757",level:2},{value:"\u6269\u5145\u5168\u5c40",id:"\u6269\u5145\u5168\u5c40",level:2}];function p(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf",children:"\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf"}),"\n",(0,i.jsx)(n.p,{children:"\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf\uff0c\u987e\u540d\u601d\u4e49\u5c31\u662f\u5bf9 TypeScript \u7c7b\u578b\u7cfb\u7edf\u7684\u589e\u5f3a\u3002\u5728 npm \u4e2d\uff0c\u6709\u5f88\u591a\u5386\u53f2\u60a0\u4e45\u7684\u5e93\u90fd\u662f\u4f7f\u7528 JavaScript \u7f16\u5199\u7684\uff0c\u800c TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u8bbe\u8ba1\u76ee\u6807\u4e4b\u4e00\u5c31\u662f\u80fd\u5728 TypeScript \u4e2d\u5b89\u5168\u3001\u65b9\u4fbf\u5730\u4f7f\u7528 JavaScript \u5e93\u3002"}),"\n",(0,i.jsx)(n.p,{children:"TypeScript \u76f8\u8f83\u4e8e JavaScript \u800c\u8a00\uff0c\u5176\u4e00\u5927\u7279\u70b9\u5c31\u662f\u7c7b\u578b\u3002\u5173\u4e8e\u7c7b\u578b\u7684\u5b9a\u4e49\u65b9\u6cd5\uff0c\u9664\u4e86\u4e4b\u524d\u7684\u5185\u5bb9\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6269\u5c55\u7c7b\u578b\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u58f0\u660e",children:"\u58f0\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\uff0c\u6211\u4eec\u5982\u4f55\u5728 TypeScript \u4e2d\u5b89\u5168\u5730\u4f7f\u7528 JavaScript \u7684\u5e93\u5462\uff1f\u5173\u952e\u7684\u6b65\u9aa4\u5c31\u662f\u4f7f\u7528 TypeScript \u4e2d\u7684\u4e00\u4e2a declare \u5173\u952e\u5b57\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528 declare \u5173\u952e\u5b57\uff0c\u6211\u4eec\u53ef\u4ee5\u58f0\u660e\u5168\u5c40\u7684\u53d8\u91cf\u3001\u65b9\u6cd5\u3001\u7c7b\u3001\u5bf9\u8c61\u3002\u4e0b\u9762\u6211\u4eec\u5148\u8bf4\u4e00\u4e0b\u5982\u4f55\u58f0\u660e\u5168\u5c40\u7684\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"declare-\u53d8\u91cf",children:"declare \u53d8\u91cf"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u65f6\uff0c\u524d\u7aef\u4ee3\u7801 <script> \u6807\u7b7e\u4f1a\u5f15\u5165\u4e00\u4e2a\u5168\u5c40\u7684\u5e93\uff0c\u518d\u5bfc\u5165\u5168\u5c40\u53d8\u91cf\u3002\u6b64\u65f6\uff0c\u5982\u679c\u4f60\u60f3\u5b89\u5168\u5730\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5bf9\u53d8\u91cf\u7684\u7c7b\u578b\u8fdb\u884c\u58f0\u660e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u58f0\u660e\u53d8\u91cf\u7684\u8bed\u6cd5\uff1a declare (var|let|const) \u53d8\u91cf\u540d\u79f0: \u53d8\u91cf\u7c7b\u578b \uff0c\u5177\u4f53\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare var val1: string;\ndeclare let val2: number;\ndeclare const val3: boolean;\nval1 = '1';\nval1 = '2';\nval2 = 1;\nval2 = '2'; // TS2322: Type 'string' is not assignable to type 'number'.\nval3 = true; // TS2588: Cannot assign to 'val3' because it is a constant.\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5206\u522b\u4f7f\u7528 var\u3001let\u3001const \u58f0\u660e\u4e86 3 \u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u53d8\u91cf\u3002\u5176\u4e2d\uff0c\u4f7f\u7528 var\u3001let \u58f0\u660e\u7684\u53d8\u91cf\u662f\u53ef\u4ee5\u66f4\u6539\u53d8\u91cf\u8d4b\u503c\u7684\uff0c\u800c\u4f7f\u7528 const \u58f0\u660e\u7684\u53d8\u91cf\u5219\u4e0d\u53ef\u4ee5\u3002\u540c\u65f6\uff0c\u5bf9\u4e8e\u53d8\u91cf\u7c7b\u578b\u4e0d\u6b63\u786e\u7684\u9519\u8bef\uff0cTypeScript \u4e5f\u53ef\u4ee5\u6b63\u5e38\u68c0\u6d4b\u51fa\u6765\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u7136\uff0c declare \u5173\u952e\u5b57\u8fd8\u53ef\u4ee5\u7528\u6765\u58f0\u660e\u51fd\u6570\u3001\u7c7b\u3001\u679a\u4e3e\u7c7b\u578b"}),"\n",(0,i.jsx)(n.h3,{id:"\u58f0\u660e\u51fd\u6570",children:"\u58f0\u660e\u51fd\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u58f0\u660e\u51fd\u6570\u7684\u8bed\u6cd5\u4e0e\u58f0\u660e\u53d8\u91cf\u7c7b\u578b\u7684\u8bed\u6cd5\u76f8\u540c\uff0c\u4e0d\u540c\u7684\u662f declare \u5173\u952e\u5b57\u540e\u9700\u8981\u8ddf function \u5173\u952e\u5b57"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function toString(x: number): string;\nconst x = toString(1); // => string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\uff1a",(0,i.jsx)(n.strong,{children:"\u4f7f\u7528 declare\u5173\u952e\u5b57\u65f6\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u7f16\u5199\u58f0\u660e\u7684\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7c7b\u7684\u5177\u4f53\u5b9e\u73b0\uff08\u56e0\u4e3a\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7c7b\u5728\u5176\u4ed6\u5e93\u4e2d\u5df2\u7ecf\u5b9e\u73b0\u4e86\uff09\uff0c\u53ea\u9700\u8981\u58f0\u660e\u5176\u7c7b\u578b\u5373\u53ef"}),"\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// TS1183: An implementation cannot be declared in ambient contexts.\ndeclare function toString(x: number) {\n  return String(x);\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cTypeScript \u7684\u62a5\u9519\u4fe1\u606f\u63d0\u793a\uff1a\u73af\u5883\u58f0\u660e\u7684\u4e0a\u4e0b\u6587\u4e0d\u9700\u8981\u5b9e\u73b0\u3002\u4e5f\u5c31\u662f\u8bf4 declare \u58f0\u660e\u7684\u6240\u6709\u7c7b\u578b\u53ea\u9700\u8981\u8868\u660e\u7c7b\u578b\uff0c\u4e0d\u9700\u8981\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u58f0\u660e\u7c7b",children:"\u58f0\u660e\u7c7b"}),"\n",(0,i.jsx)(n.p,{children:"\u58f0\u660e\u7c7b\u65f6\uff0c\u6211\u4eec\u53ea\u9700\u8981\u58f0\u660e\u7c7b\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u7684\u7c7b\u578b\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u5173\u4e8e\u7c7b\u7684\u53ef\u89c1\u6027\u4fee\u9970\u7b26\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u6b64\u8fdb\u884c\u58f0\u660e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare class Person {\n  public name: string;\n  private age: number;\n  constructor(name: string);\n  getAge(): number;\n}\nconst person = new Person('Mike');\nperson.name; // => string\nperson.age; // TS2341: Property 'age' is private and only accessible within class 'Person'.\nperson.getAge(); // => number\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u516c\u5171\u5c5e\u6027 name \u4ee5\u53ca\u79c1\u6709\u5c5e\u6027 age\uff0c\u6b64\u65f6\u6211\u4eec\u770b\u5230\u65e0\u6cd5\u8bbf\u95ee\u79c1\u6709\u5c5e\u6027 age\u3002\u53e6\u5916\uff0c\u6211\u4eec\u8fd8\u58f0\u660e\u4e86\u65b9\u6cd5 getAge \uff0c\u5e76\u4e14 getAge \u7684\u8fd4\u56de\u503c\u662f number \u7c7b\u578b\uff0c\u6240\u4ee5 Person \u5b9e\u4f8b\u8c03\u7528\u540e\u8fd4\u56de\u7684\u7c7b\u578b\u4e5f\u662f number \u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u58f0\u660e\u679a\u4e3e",children:"\u58f0\u660e\u679a\u4e3e"}),"\n",(0,i.jsx)(n.p,{children:"\u58f0\u660e\u679a\u4e3e\u53ea\u9700\u8981\u5b9a\u4e49\u679a\u4e3e\u7684\u7c7b\u578b\uff0c\u5e76\u4e0d\u9700\u8981\u5b9a\u4e49\u679a\u4e3e\u7684\u503c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare enum Direction {\n  Up,\n  Down,\n  Left,\n  Right,\n}\nconst directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u7684\u7b2c 1~6 \u884c\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u5728\u5176\u4ed6\u5730\u65b9\u5b9a\u4e49\u7684\u679a\u4e3e Direction \u7c7b\u578b\u7ed3\u6784\uff0c\u7136\u540e\u5728\u7b2c 8 \u884c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u679a\u4e3e\u7684\u6210\u5458\u4e86"}),"\n",(0,i.jsx)(n.p,{children:"**\u6ce8\u610f\uff1a\u58f0\u660e\u679a\u4e3e\u4ec5\u7528\u4e8e\u7f16\u8bd1\u65f6\u7684\u68c0\u67e5\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u58f0\u660e\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u5728\u7f16\u8bd1\u7ed3\u679c\u4e2d\u4f1a\u88ab\u5220\u9664\uff0c **\u76f8\u5f53\u4e8e\u4ec5\u5269\u4e0b\u9762\u4f7f\u7528\u7684\u8bed\u53e5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 Direction \u8868\u793a\u5f15\u5165\u7684\u5168\u5c40\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4e86\u58f0\u660e\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7c7b\u578b\u3001\u679a\u4e3e\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 declare \u589e\u5f3a\u6587\u4ef6\u3001\u6a21\u5757\u7684\u7c7b\u578b\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"declare-\u6a21\u5757",children:"declare \u6a21\u5757"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 JavaScript \u8fd8\u6ca1\u6709\u5347\u7ea7\u81f3 ES6 \u7684\u65f6\u5019\uff0cTypeScript \u5c31\u63d0\u4f9b\u4e86\u4e00\u79cd\u6a21\u5757\u5316\u65b9\u6848\uff0c\u6bd4\u5982\u901a\u8fc7\u4f7f\u7528 module \u5173\u952e\u5b57\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u5185\u90e8\u6a21\u5757\u3002\u4f46\u662f\u7531\u4e8e ES6 \u540e\u6765\u4e5f\u4f7f\u7528\u4e86 module \u5173\u952e\u5b57\uff0c\u4e3a\u4e86\u517c\u5bb9 ES6\uff0c\u6240\u4ee5 TypeScript \u4f7f\u7528 namespace \u66ff\u4ee3\u4e86\u539f\u6765\u7684 module\uff0c\u5e76\u66f4\u540d\u4e3a\u547d\u540d\u7a7a\u95f4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"TypeScript \u4e0e ES6 \u4e00\u6837\uff0c\u4efb\u4f55\u5305\u542b\u9876\u7ea7 import \u6216 export \u7684\u6587\u4ef6\u90fd\u4f1a\u88ab\u5f53\u4f5c\u4e00\u4e2a\u6a21\u5757\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u58f0\u660e\u6a21\u5757\u7c7b\u578b\uff0c\u4e3a\u7f3a\u5c11 TypeScript \u7c7b\u578b\u5b9a\u4e49\u7684\u4e09\u65b9\u5e93\u6216\u8005\u6587\u4ef6\u8865\u9f50\u7c7b\u578b\u5b9a\u4e49\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// lodash.d.ts\ndeclare module 'lodash' {\n  export function first<T extends unknown>(array: T[]): T;\n}\n// index.ts\nimport { first } from 'lodash';\nfirst([1, 2, 3]); // => number;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0clodash.d.ts \u58f0\u660e\u4e86\u6a21\u5757 lodash \u5bfc\u51fa\u7684 first \u65b9\u6cd5\uff0c\u7136\u540e\u5728 TypeScript \u6587\u4ef6\u4e2d\u4f7f\u7528\u4e86\u6a21\u5757 lodash \u4e2d\u7684 first \u65b9\u6cd5\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u58f0\u660e\u6a21\u5757\u7684\u8bed\u6cd5: ",(0,i.jsx)(n.code,{children:"declare module '\u6a21\u5757\u540d' {}"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6a21\u5757\u58f0\u660e\u7684\u5185\u90e8\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528 export \u5bfc\u51fa\u5bf9\u5e94\u5e93\u7684\u7c7b\u3001\u51fd\u6570\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"declare-\u6587\u4ef6",children:"declare \u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4f7f\u7528 TypeScript \u5f00\u53d1\u524d\u7aef\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 import \u5173\u952e\u5b57\u5bfc\u5165\u6587\u4ef6\uff0c\u6bd4\u5982\u5148\u4f7f\u7528 import \u5bfc\u5165\u56fe\u7247\u6587\u4ef6\uff0c\u518d\u901a\u8fc7 webpack \u7b49\u5de5\u5177\u5904\u7406\u5bfc\u5165\u7684\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u56e0\u4e3a TypeScript \u5e76\u4e0d\u77e5\u9053\u6211\u4eec\u901a\u8fc7 import \u5bfc\u5165\u7684\u6587\u4ef6\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 declare \u58f0\u660e\u5bfc\u5165\u7684\u6587\u4ef6\u7c7b\u578b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare module '*.jpg' {\n  const src: string;\n  export default src;\n}\ndeclare module '*.png' {\n  const src: string;\n  export default src;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 *.xxx \u6a21\u5757\u901a\u914d\u7b26\u5339\u914d\u4e00\u7c7b\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6807\u8bb0\u7684\u56fe\u7247\u6587\u4ef6\u7684\u9ed8\u8ba4\u5bfc\u51fa\u7684\u7c7b\u578b\u662f string \uff0c\u901a\u8fc7 import \u4f7f\u7528\u56fe\u7247\u8d44\u6e90\u65f6\uff0cTypeScript \u4f1a\u5c06\u5bfc\u5165\u7684\u56fe\u7247\u8bc6\u522b\u4e3a string \u7c7b\u578b\uff0c\u56e0\u6b64\u4e5f\u5c31\u53ef\u4ee5\u628a import \u7684\u56fe\u7247\u8d4b\u503c\u7ed9 \u7684 src \u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c7b\u578b\u90fd\u662f string\uff0c\u662f\u5339\u914d\u7684\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"declare-namespace",children:"declare namespace"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u540c\u4e8e\u58f0\u660e\u6a21\u5757\uff0c\u547d\u540d\u7a7a\u95f4\u4e00\u822c\u7528\u6765\u8868\u793a\u5177\u6709\u5f88\u591a\u5b50\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\u7684\u5168\u5c40\u5bf9\u8c61\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5c06\u58f0\u660e\u547d\u540d\u7a7a\u95f4\u7b80\u5355\u770b\u4f5c\u662f\u58f0\u660e\u4e00\u4e2a\u66f4\u590d\u6742\u7684\u53d8\u91cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare namespace $ {\n  const version: number;\n  function ajax(settings?: any): void;\n}\n$.version; // => number\n$.ajax();\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u56e0\u4e3a\u6211\u4eec\u58f0\u660e\u4e86\u5168\u5c40\u5bfc\u5165\u7684 jQuery \u53d8\u91cf $\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 $ \u53d8\u91cf\u7684 version \u5c5e\u6027\u4ee5\u53ca ajax \u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 TypeScript \u4e2d\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u7f16\u5199\u4ee5 .d.ts \u4e3a\u540e\u7f00\u7684\u58f0\u660e\u6587\u4ef6\u6765\u589e\u5f3a\uff08\u8865\u9f50\uff09\u7c7b\u578b\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u58f0\u660e\u6587\u4ef6",children:"\u58f0\u660e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 TypeScript \u4e2d\uff0c\u4ee5 .d.ts \u4e3a\u540e\u7f00\u7684\u6587\u4ef6\u4e3a\u58f0\u660e\u6587\u4ef6\u3002\u5982\u679c\u4f60\u719f\u6089 C/C++\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u5b83\u5f53\u4f5c .h \u6587\u4ef6\u3002 \u5728\u58f0\u660e\u6587\u4ef6\u65f6\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5b9a\u4e49\u4e09\u65b9\u7c7b\u5e93\u6240\u66b4\u9732\u7684 API \u63a5\u53e3\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 TypeScript \u4e2d\uff0c\u5b58\u5728\u7c7b\u578b\u3001\u503c\u3001\u547d\u540d\u7a7a\u95f4\u8fd9 3 \u4e2a\u6838\u5fc3\u6982\u5ff5\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7c7b\u578b",children:"\u7c7b\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7c7b\u578b\u522b\u540d\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u63a5\u53e3\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7c7b\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u679a\u4e3e\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bfc\u5165\u7684\u7c7b\u578b\u58f0\u660e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u6bcf\u4e00\u4e2a\u58f0\u660e\u90fd\u521b\u5efa\u4e86\u4e00\u4e2a\u7c7b\u578b\u540d\u79f0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u503c",children:"\u503c"}),"\n",(0,i.jsx)(n.p,{children:"\u503c\u5c31\u662f\u5728\u8fd0\u884c\u65f6\u8868\u8fbe\u5f0f\u53ef\u4ee5\u8d4b\u4e88\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b 6 \u79cd\u65b9\u5f0f\u521b\u5efa\u503c\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"var\u3001let\u3001const \u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"namespace\u3001module \u5305\u542b\u503c\u7684\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u679a\u4e3e\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7c7b\u58f0\u660e\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bfc\u5165\u7684\u503c\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u51fd\u6570\u58f0\u660e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u547d\u540d\u7a7a\u95f4",children:"\u547d\u540d\u7a7a\u95f4"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u58f0\u660e\u7c7b\u578b\u3002\u6bd4\u5982 const x: A.B.C \u8fd9\u4e2a\u58f0\u660e\uff0c\u8fd9\u91cc\u7684\u7c7b\u578b C \u5c31\u662f\u5728 A.B \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\ud83d\udc41 \u8bf4\u660e\uff1a\u8fd9\u79cd\u533a\u522b\u5fae\u5999\u800c\u91cd\u8981\uff0c\u8fd9\u91cc\u7684A.B\u53ef\u80fd\u4ee3\u8868\u4e00\u4e2a\u503c\uff0c\u4e5f\u53ef\u80fd\u4ee3\u8868\u4e00\u4e2a\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u540d\u79f0 A\uff0c \u5728 TypeScript \u4e2d\u53ef\u80fd\u8868\u793a\u4e00\u4e2a\u7c7b\u578b\u3001\u4e00\u4e2a\u503c\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u901a\u8fc7\u7c7b\u578b\u3001\u503c\u3001\u547d\u540d\u7a7a\u95f4\u7684\u7ec4\u5408\uff0c\u6211\u4eec\u4e5f\u5c31\u62e5\u6709\u4e86\u8868\u8fbe\u4efb\u610f\u7c7b\u578b\u7684\u80fd\u529b\u3002\u5982\u679c\u4f60\u60f3\u77e5\u9053\u540d\u79f0A \u4ee3\u8868\u7684\u5b9e\u9645\u610f\u4e49\uff0c\u5219\u9700\u8981\u770b\u5b83\u6240\u5728\u7684\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(n.h4,{id:"\u4f7f\u7528\u58f0\u660e\u6587\u4ef6",children:"\u4f7f\u7528\u58f0\u660e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5 TypeScript \u4f9d\u8d56\u540e\uff0c\u4e00\u822c\u6211\u4eec\u4f1a\u987a\u5e26\u5b89\u88c5\u4e00\u4e2a lib.d.ts \u58f0\u660e\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u4e86 JavaScript \u8fd0\u884c\u65f6\u4ee5\u53ca DOM \u4e2d\u5404\u79cd\u5168\u5c40\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// typescript/lib/lib.d.ts\n/// <reference no-default-lib="true"/>\n/// <reference lib="es5" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u793a\u4f8b\u5176\u5b9e\u5c31\u662f TypeScript \u4e2d\u7684 lib.d.ts \u6587\u4ef6\u7684\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(n.p,{children:'\u5176\u4e2d\uff0c/// \u662f TypeScript \u4e2d\u4e09\u659c\u7ebf\u6307\u4ee4\uff0c\u540e\u9762\u7684\u5185\u5bb9\u7c7b\u4f3c\u4e8e XML \u6807\u7b7e\u7684\u8bed\u6cd5\uff0c\u7528\u6765\u6307\u4ee3\u5f15\u7528\u5176\u4ed6\u7684\u58f0\u660e\u6587\u4ef6\u3002\u901a\u8fc7\u4e09\u659c\u7ebf\u6307\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u597d\u5730\u590d\u7528\u548c\u62c6\u5206\u7c7b\u578b\u58f0\u660e\u3002no-default-lib="true" \u8868\u793a\u8fd9\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a\u9ed8\u8ba4\u5e93\u3002\u800c\u6700\u540e 4 \u884c\u7684lib="..." \u8868\u793a\u5f15\u7528\u5185\u90e8\u7684\u5e93\u7c7b\u578b\u58f0\u660e\u3002'}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4e8e\u66f4\u591a\u4e09\u659c\u7ebf\u6307\u4ee4\u7684\u5185\u5bb9\uff0c\u67e5\u770b",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html?fileGuid=xxQTRXtVcqtHK6j8",children:"\u94fe\u63a5"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f7f\u7528-types",children:"\u4f7f\u7528 @types"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u5e93\u7f16\u5199\u7c7b\u578b\u58f0\u660e\u975e\u5e38\u8017\u8d39\u7cbe\u529b\uff0c\u4e14\u96be\u4ee5\u5728\u591a\u4e2a\u9879\u76ee\u4e2d\u590d\u7528\u3002",(0,i.jsx)(n.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped?fileGuid=xxQTRXtVcqtHK6j8",children:"Definitely Typed"}),"\u662f\u6700\u6d41\u884c\u6027\u7684\u9ad8\u8d28\u91cf TypeScript \u58f0\u660e\u6587\u4ef6\u7c7b\u5e93\uff0c\u6b63\u662f\u56e0\u4e3a\u6709\u793e\u533a\u7ef4\u62a4\u7684\u8fd9\u4e2a\u58f0\u660e\u6587\u4ef6\u7c7b\u5e93\uff0c\u5927\u5927\u7b80\u5316\u4e86 JavaScript \u9879\u76ee\u8fc1\u79fb TypeScript \u7684\u96be\u5ea6\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u793e\u533a\u5df2\u7ecf\u8bb0\u5f55\u4e86 90% \u7684 JavaScript \u5e93\u7684\u7c7b\u578b\u58f0\u660e\uff0c\u610f\u5473\u7740\u5982\u679c\u6211\u4eec\u60f3\u4f7f\u7528\u7684\u5e93\u6709\u793e\u533a\u7ef4\u62a4\u7684\u7c7b\u578b\u58f0\u660e\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\u76f4\u63a5\u4f7f\u7528 JavaScript \u7f16\u5199\u7684\u7c7b\u5e93\u4e86\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5177\u4f53\u64cd\u4f5c\uff1a\u9996\u5148\uff0c",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/dt/search?search=&fileGuid=xxQTRXtVcqtHK6j8",children:"\u70b9\u51fb\u8fd9\u91cc\u7684\u94fe\u63a5"}),"\u641c\u7d22\u4f60\u60f3\u8981\u5bfc\u5165\u7684\u7c7b\u5e93\u7684\u7c7b\u578b\u58f0\u660e\uff0c\u5982\u679c\u6709\u793e\u533a\u7ef4\u62a4\u7684\u58f0\u660e\u6587\u4ef6\u3002\u7136\u540e\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5b89\u88c5 @types/xxx \u5c31\u53ef\u4ee5\u5728 TypeScript \u4e2d\u76f4\u63a5\u4f7f\u7528\u5b83\u4e86\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u800c\uff0c\u56e0\u4e3a Definitely Typed \u662f\u7531\u793e\u533a\u4eba\u5458\u7ef4\u62a4\u7684\uff0c\u5982\u679c\u539f\u6765\u7684\u4e09\u65b9\u5e93\u5347\u7ea7\uff0c\u90a3\u4e48 Definitely Typed \u6240\u5bfc\u51fa\u7684\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49\u60f3\u8981\u5347\u7ea7\u8fd8\u9700\u8981\u7ecf\u8fc7 PR\u3001\u53d1\u5e03\u7684\u6d41\u7a0b\uff0c\u5c31\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4e0e\u539f\u5e93\u4fdd\u6301\u5b8c\u5168\u540c\u6b65\u3002\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728 TypeScript \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u5408\u5e76\u3001\u6269\u5145\u7c7b\u578b\u5b9a\u4e49\u7684\u6280\u5de7\u4e34\u65f6\u89e3\u51b3\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7c7b\u578b\u5408\u5e76",children:"\u7c7b\u578b\u5408\u5e76"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 TypeScript \u4e2d\uff0c\u76f8\u540c\u7684\u63a5\u53e3\u3001\u547d\u540d\u7a7a\u95f4\u4f1a\u4f9d\u636e\u4e00\u5b9a\u7684\u89c4\u5219\u8fdb\u884c\u5408\u5e76\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5408\u5e76\u63a5\u53e3",children:"\u5408\u5e76\u63a5\u53e3"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u7b80\u5355\u3001\u5e38\u89c1\u7684\u58f0\u660e\u5408\u5e76\u662f\u63a5\u53e3\u5408\u5e76\uff0c\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface Person {\n  name: string;\n}\ninterface Person {\n  age: number;\n}\n// \u76f8\u5f53\u4e8e\ninterface Person {\n  name: string;\n  age: number;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c55\u793a\u4e86\u63a5\u53e3\u5408\u5e76\u6700\u7b80\u5355\u7684\u60c5\u51b5\uff0c\u8fd9\u91cc\u7684\u5408\u5e76\u76f8\u5f53\u4e8e\u628a\u63a5\u53e3\u7684\u5c5e\u6027\u653e\u5165\u4e86\u4e00\u4e2a\u540c\u540d\u7684\u63a5\u53e3\u4e2d\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\u63a5\u53e3\u7684\u975e\u51fd\u6570\u6210\u5458\u7c7b\u578b\u5fc5\u987b\u5b8c\u5168\u4e00\u6837"}),"\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface Person {\n  age: string;\n}\ninterface Person {\n  // TS2717: Subsequent property declarations must have the same type.\n  // Property 'age' must be of type 'string', but here has type 'number'.\n  age: number;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u56e0\u4e3a\u5b58\u5728\u4e24\u4e2a\u5c5e\u6027\u76f8\u540c\u800c\u7c7b\u578b\u4e0d\u540c\u7684\u63a5\u53e3\uff0c\u6240\u4ee5\u7f16\u8bd1\u5668\u62a5\u4e86\u4e00\u4e2a ts(2717) \u9519\u8bef \u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u51fd\u6570\u6210\u5458\u800c\u8a00\uff0c\u6bcf\u4e2a\u540c\u540d\u7684\u51fd\u6570\u58f0\u660e\u90fd\u4f1a\u88ab\u5f53\u4f5c\u8fd9\u4e2a\u51fd\u6570\u7684\u91cd\u8f7d\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\u540e\u9762\u58f0\u660e\u7684\u63a5\u53e3\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7"}),"\uff0c\u4e0b\u9762\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'interface\xa0Obj\xa0{\n\xa0\xa0\xa0\xa0identity(val:\xa0any):\xa0any;\n}\ninterface\xa0Obj\xa0{\n\xa0\xa0\xa0\xa0identity(val:\xa0number):\xa0number;\n}\ninterface\xa0Obj\xa0{\n\xa0\xa0\xa0\xa0identity(val:\xa0boolean):\xa0boolean;\n}\n//\xa0\u76f8\u5f53\u4e8e\ninterface\xa0Obj\xa0{\n\xa0\xa0identity(val:\xa0boolean):\xa0boolean;\n\xa0\xa0identity(val:\xa0number):\xa0number;\n\xa0\xa0identity(val:\xa0any):\xa0any;\n}\nconst\xa0obj:\xa0Obj\xa0=\xa0{\n\xa0\xa0\xa0\xa0identity(val:\xa0any)\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return\xa0val;\n\xa0\xa0\xa0\xa0}\n};\nconst\xa0t1\xa0=\xa0obj.identity(1);\xa0//\xa0=>\xa0number\nconst\xa0t2\xa0=\xa0obj.identity(true);\xa0//\xa0=>\xa0boolean\nconst\xa0t3\xa0=\xa0obj.identity("t3");\xa0//\xa0=>\xa0any\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0cObj \u7c7b\u578b\u7684 identity \u51fd\u6570\u6210\u5458\u6709 3 \u4e2a\u91cd\u8f7d\uff0c\u4e0e\u51fd\u6570\u91cd\u8f7d\u7684\u987a\u5e8f\u76f8\u540c\uff0c\u58f0\u660e\u5728\u524d\u9762\u7684\u91cd\u8f7d\u7c7b\u578b\u4f1a\u5339\u914d\u3002\u6211\u4eec\u5206\u5f00\u58f0\u660e\u63a5\u53e3\u7684 3 \u4e2a\u51fd\u6570\u6210\u5458\uff0c\u76f8\u5f53\u4e8e 12~16 \u884c\u7684\u58f0\u660e\uff0c\u56e0\u4e3a\u540e\u58f0\u660e\u7684\u63a5\u53e3\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\uff0c\u6240\u4ee5 t1\u3001t2 \u7684\u7c7b\u578b\u53ef\u4ee5\u88ab\u91cd\u8f7d\u4e3a\u5176\u5bf9\u5e94\u7684\u7c7b\u578b\uff0c\u800c\u4e0d\u662f any\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u66f4\u6539\u4e00\u4e0b\u987a\u5e8f\uff0c\u518d\u770b\u770b\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'interface Obj {\n  identity(val: boolean): boolean;\n}\ninterface Obj {\n  identity(val: number): number;\n}\ninterface Obj {\n  identity(val: any): any;\n}\n//\xa0\u76f8\u5f53\u4e8e\ninterface\xa0Obj\xa0{\n\xa0\xa0identity(val:\xa0any):\xa0any;\n\xa0\xa0identity(val:\xa0number):\xa0number;\n\xa0\xa0identity(val:\xa0boolean):\xa0boolean;\n}\nconst obj: Obj = {\n  identity(val: any) {\n      return val;\n  }\n};\nconst t1 = obj.identity(1); // => any\nconst t2 = obj.identity(true); // => any\nconst t3 = obj.identity("t3"); // => any\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0cidentity \u51fd\u6570\u53c2\u6570\u4e3a any \u7684\u91cd\u8f7d\u5728\u7b2c\u4e00\u4f4d\uff0c\u56e0\u6b64 t1\u3001t2\u3001t3 \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u90fd\u88ab\u91cd\u8f7d\u6210\u4e86 any\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5408\u5e76-namespace",children:"\u5408\u5e76 namespace"}),"\n",(0,i.jsx)(n.p,{children:"\u5408\u5e76 namespace \u4e0e\u5408\u5e76\u63a5\u53e3\u7c7b\u4f3c\uff0c\u547d\u540d\u7a7a\u95f4\u7684\u5408\u5e76\u4e5f\u4f1a\u5408\u5e76\u5176\u5bfc\u51fa\u6210\u5458\u7684\u5c5e\u6027\u3002\u4e0d\u540c\u7684\u662f\uff0c\u975e\u5bfc\u51fa\u6210\u5458\u4ec5\u5728\u539f\u547d\u540d\u7a7a\u95f4\u5185\u53ef\u89c1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"namespace Person {\n  const age = 18;\n  export function getAge() {\n    return age;\n  }\n}\nnamespace Person {\n  export function getMyAge() {\n    return age; // TS2304: Cannot find name 'age'.\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u540c\u540d\u7684\u547d\u540d\u7a7a\u95f4 Person \u4e2d\uff0c\u6709\u4e00\u4e2a\u975e\u5bfc\u51fa\u7684\u5c5e\u6027 age\uff0c\u5728\u7b2c\u4e8c\u4e2a\u547d\u540d\u7a7a\u95f4 Person \u4e2d\u6ca1\u6709 age \u5c5e\u6027\u5374\u5f15\u7528\u4e86 age\uff0c\u6240\u4ee5 TypeScript \u62a5\u51fa\u4e86\u627e\u4e0d\u5230 age \u7684\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a\u975e\u5bfc\u51fa\u6210\u5458\u4ec5\u5728\u5408\u5e76\u524d\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u89c1\uff0c\u4e0a\u4f8b\u4e2d\u5373 1",(0,i.jsx)(n.del,{children:"6 \u884c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u8bbf\u95ee age \u5c5e\u6027\u3002\u4f46\u662f\u5bf9\u4e8e 8"}),"12 \u884c\u4e2d\u7684\u540c\u540d\u547d\u540d\u7a7a\u95f4\u662f\u4e0d\u53ef\u4ee5\u8bbf\u95ee age \u5c5e\u6027\u7684\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e0d\u53ef\u5408\u5e76",children:"\u4e0d\u53ef\u5408\u5e76"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5728ts\u57fa\u7840 \u4e2d\u77e5\u9053\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u7c7b\u578b\uff0c\u76f8\u5f53\u4e8e\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7c7b\uff0c\u53c8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7c7b\u7684\u7c7b\u578b\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u7c7b\u8fd9\u4e2a\u65e2\u662f\u503c\u53c8\u662f\u7c7b\u578b\u7684\u7279\u6b8a\u5bf9\u8c61\u4e0d\u80fd\u5408\u5e76\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u548c\u547d\u540d\u7a7a\u95f4\u5408\u5e76\u7684\u65b9\u5f0f\u6269\u5c55\u539f\u6765\u58f0\u660e\u7684\u7c7b\u578b\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55\u6a21\u5757\u6216\u6269\u5c55\u5168\u5c40\u5bf9\u8c61\u6765\u589e\u5f3a\u7c7b\u578b\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6269\u5145\u6a21\u5757",children:"\u6269\u5145\u6a21\u5757"}),"\n",(0,i.jsx)(n.p,{children:"JavaScript \u662f\u4e00\u95e8\u52a8\u6001\u7c7b\u578b\u7684\u8bed\u8a00\uff0c\u901a\u8fc7 prototype \u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u6269\u5c55\u539f\u6765\u7684\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u76f4\u63a5\u6269\u5c55\u5bfc\u5165\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u5c5e\u6027\uff0cTypeScript \u4f1a\u63d0\u793a\u6ca1\u6709\u8be5\u5c5e\u6027\u7684\u9519\u8bef\uff0c\u56e0\u6b64\u6211\u4eec\u5c31\u9700\u8981\u6269\u5c55\u539f\u6a21\u5757\u7684\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// person.ts\nexport class Person {}\n// index.ts\nimport { Person } from './person';\ndeclare module './person' {\n  interface Person {\n    greet: () => void;\n  }\n}\nPerson.prototype.greet = () => {\n  console.log('Hi!');\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u5bfc\u5165\u6a21\u5757 person \u4e2d Person \u7684\u5c5e\u6027\uff0cTypeScript \u4f1a\u4e0e\u539f\u6a21\u5757\u7684\u7c7b\u578b\u5408\u5e76\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6211\u4eec\u53ef\u4ee5\u6269\u5c55\u5bfc\u5165\u6a21\u5757\u7684\u7c7b\u578b\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e3a\u5bfc\u5165\u7684 Person \u7c7b\u589e\u52a0\u4e86\u539f\u578b\u94fe\u4e0a\u7684 greet \u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// person.ts\nexport class Person {}\n\n// index.ts\nimport { Person } from './person';\n\ndeclare module './person' {\n  interface Person {\n \xa0  greet: () => void;\n  }\n}\n\n- declare module './person' {\n- \xa0 interface Person {\n- \xa0 \xa0 greet: () => void;\n- \xa0 }\n- }\n\n+ // TS2339: Property 'greet' does not exist on type 'Person'.\nPerson.prototype.greet = () => {\n  console.log('Hi!');\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c\u6211\u4eec\u5220\u9664\u4e86\u6269\u5c55\u6a21\u5757\u7684\u58f0\u660e\uff0c\u7b2c 20 \u884c\u5219\u4f1a\u62a5\u51fa ts(2339) \u4e0d\u5b58\u5728 greet \u5c5e\u6027\u7684\u7c7b\u578b\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u5bfc\u5165\u7684\u4e09\u65b9\u6a21\u5757\uff0c\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6269\u5145\u539f\u6a21\u5757\u7684\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6269\u5145\u5168\u5c40",children:"\u6269\u5145\u5168\u5c40"}),"\n",(0,i.jsx)(n.p,{children:"\u5168\u5c40\u6a21\u5757\u6307\u7684\u662f\u4e0d\u9700\u8981\u901a\u8fc7 import \u5bfc\u5165\u5373\u53ef\u4f7f\u7528\u7684\u6a21\u5757\uff0c\u5982\u5168\u5c40\u7684 window\u3001document \u7b49\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u5168\u5c40\u5bf9\u8c61\u7684\u6269\u5145\u4e0e\u5bf9\u6a21\u5757\u7684\u6269\u5145\u662f\u4e00\u6837\u7684\uff0c\u4e0b\u9762\u770b\u4e00\u4e2a\u5177\u4f53\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare global {\n  interface Array<T extends unknown> {\n    getLen(): number;\n  }\n}\nArray.prototype.getLen = function () {\n  return this.length;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u56e0\u4e3a\u6211\u4eec\u58f0\u660e\u4e86\u5168\u5c40\u7684 Array \u5bf9\u8c61\u6709\u4e00\u4e2a getLen \u65b9\u6cd5\uff0c\u6240\u4ee5\u4e3a Array \u5bf9\u8c61\u5b9e\u73b0 getLen \u65b9\u6cd5\u65f6\uff0cTypeScript \u4e0d\u4f1a\u62a5\u9519\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(7294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);