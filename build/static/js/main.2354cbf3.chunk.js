(this["webpackJsonponline-ide"]=this["webpackJsonponline-ide"]||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),l=n(16),a=n.n(l),o=(n(22),n(2)),j=(n(7),n(8),n(4)),d=n.n(j),u=(n(30),n(11),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],l=Object(i.useState)(),a=Object(o.a)(l,2),j=a[0],u=a[1],r=Object(i.useState)(),h=Object(o.a)(r,2),b=h[0],O=h[1],x=Object(i.useState)(null),p=Object(o.a)(x,2),f=p[0],v=p[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"java",theme:"monokai",placeholder:"write your code here",onChange:function(e){s(String(e))},className:"editor",fontSize:"20px"}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/java",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:j})}).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){O(e)})),O(null),v("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){v(null),O(null)},children:"Clear Output"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))}}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:b?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(b.output)})}):f})]})]})})}),r=(n(31),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],l=Object(i.useState)(),a=Object(o.a)(l,2),j=a[0],u=a[1],r=Object(i.useState)(),h=Object(o.a)(r,2),b=h[0],O=h[1],x=Object(i.useState)(null),p=Object(o.a)(x,2),f=p[0],v=p[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"c_cpp",theme:"monokai",placeholder:"write your code here",onChange:function(e){s(String(e))},className:"editor",fontSize:"20px"}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/cpp",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:j})}).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){O(e)})),O(null),v("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){v(null),O(null)},children:"Clear Output"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))}}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:b?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(b.output)})}):f})]})]})})}),h=(n(32),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],l=Object(i.useState)(),a=Object(o.a)(l,2),j=a[0],u=a[1],r=Object(i.useState)(),h=Object(o.a)(r,2),b=h[0],O=h[1],x=Object(i.useState)(null),p=Object(o.a)(x,2),f=p[0],v=p[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"python",theme:"monokai",placeholder:"write your code here",onChange:function(e){s(String(e))},className:"editor",fontSize:"20px"}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/python",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:j})}).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){O(e)})),O(null),v("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){v(null),O(null)},children:"Clear Output"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))}}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:b?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(b.output)})}):f})]})]})})});var b=function(){var e=Object(i.useState)("C++"),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{style:{display:"flex",margin:"30px",textAlign:"center",justifyContent:"center"},children:[Object(c.jsxs)("div",{style:{fontWeight:"800",fontSize:"30px"},children:["Online ",n," IDE"]}),Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsxs)("div",{className:"container",children:["Language: ",n]}),Object(c.jsxs)("div",{className:"dropdown-content",children:[Object(c.jsx)("div",{className:"lang",onClick:function(){s("C++")},children:"C++"}),Object(c.jsx)("div",{className:"lang",onClick:function(){s("Java")},children:"Java"}),Object(c.jsx)("div",{className:"lang",onClick:function(){s("Python")},children:"Python"})]})]})]}),Object(c.jsx)("div",{style:{display:"flex"},children:Object(c.jsx)("div",{children:"C++"==n?Object(c.jsx)(r,{}):"Java"==n?Object(c.jsx)(u,{}):Object(c.jsx)(h,{})})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),s(e),l(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),O()},7:function(e,t,n){},8:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.2354cbf3.chunk.js.map