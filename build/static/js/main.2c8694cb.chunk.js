(this["webpackJsonponline-ide"]=this["webpackJsonponline-ide"]||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),s=n(16),a=n.n(s),o=(n(22),n(2)),r=(n(7),n(8),n(4)),d=n.n(r),u=(n(30),n(11),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(i.useState)(),a=Object(o.a)(s,2),r=a[0],u=a[1],j=Object(i.useState)(),b=Object(o.a)(j,2),h=b[0],p=b[1],O=Object(i.useState)(null),x=Object(o.a)(O,2),m=x[0],f=x[1],v=1,g=function(e){l(String(e))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"java",theme:"monokai",value:n,placeholder:"write your code here",onChange:g,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},className:"editor",fontSize:"20px"}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/java",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:r})}).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){p(e)})),p(null),f("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){f(null),p(null)},children:"Clear Output"}),Object(c.jsx)("button",{className:"clearEditorButton",onClick:function(){g("")},children:"Clear Editor"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))},placeholder:"Enter Input here"}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:h?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(h.output)})}):m})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Some Practice Codes"}),Object(c.jsxs)("div",{className:"practice-code",children:[Object(c.jsxs)("div",{className:"practice-text",children:[v++,"] Starting Hello World Program"]}),Object(c.jsx)("button",{className:"practice-view-button",onClick:function(){g('public class Hello{\n    public static void main(String args[]){\n        System.out.println("Hello World");\n    }\n}'),f(null),p(null)},children:"CLICK TO VIEW"})]})]})]})}),j=(n(31),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(i.useState)(),a=Object(o.a)(s,2),r=a[0],u=a[1],j=Object(i.useState)(),b=Object(o.a)(j,2),h=b[0],p=b[1],O=Object(i.useState)(null),x=Object(o.a)(O,2),m=x[0],f=x[1],v=1,g=function(e){l(String(e)),n&&console.log(n)};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"c_cpp",theme:"monokai",placeholder:"write your code here",value:n,onChange:g,className:"editor",fontSize:"20px",setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0}}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/cpp",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:r})}).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){p(e)})),p(null),f("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){f(null),p(null)},children:"Clear Output"}),Object(c.jsx)("button",{className:"clearEditorButton",onClick:function(){g("")},children:"Clear Editor"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))},placeholder:"Enter Input here"}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:h?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(h.output)})}):m||""})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Some Practice Codes"}),Object(c.jsxs)("div",{className:"practice-code",children:[Object(c.jsxs)("div",{className:"practice-text",children:[v++,"] Starting Hello World Program"]}),Object(c.jsx)("button",{className:"practice-view-button",onClick:function(){g('#include<bits/stdc++.h>\nusing namespace std;\n\nint main()\n{\n    cout<<"Hello World "<<endl;\n    return 0;\n}'),f(null),p(null)},children:"CLICK TO VIEW"})]}),Object(c.jsxs)("div",{className:"practice-code",children:[Object(c.jsxs)("div",{className:"practice-text",children:[v++,"] Input 2 Numbers and print the Sum of them"]}),Object(c.jsx)("button",{className:"practice-view-button",onClick:function(){g('#include<bits/stdc++.h>\nusing namespace std;\n\nint main()\n{\n    int a,b;\n    cin>>a>>b;\n    cout<<"Sum is "<<(a+b);\n    return 0;\n}'),f(null),p(null)},children:"CLICK TO VIEW"})]}),Object(c.jsxs)("div",{className:"practice-code",children:[Object(c.jsxs)("div",{className:"practice-text",children:[v++,"] Selection Sort Technique Code"]}),Object(c.jsx)("button",{className:"practice-view-button",onClick:function(){g('#include<bits/stdc++.h>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio();\n    cin.tie(NULL);\n\n    int n,i,j;\n    cin>>n;\n\n    int a[n];\n    for(i=0;i<n;i++)\n    {\n        cin>>a[i];\n    }\n\n    for(i=0;i<n;i++)\n    {\n        int temp = a[i];\n        int minimum = a[i];\n        int pos = i;\n        for(j=i+1;j<n;j++)\n        {\n            if(a[j]<minimum){\n                minimum = a[j];\n                pos = j;\n            }\n        }\n        a[i] = a[pos];\n        a[pos] = temp;\n    }\n\n\n    cout<<"Array sorted in ascending Order"<<endl;\n    for(i=0;i<n;i++)\n    {\n        cout<<a[i]<<" ";\n    }\n    cout<<endl;\n}\n'),f(null),p(null)},children:"CLICK TO VIEW"})]})]})]})}),b=(n(32),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(i.useState)(),a=Object(o.a)(s,2),r=a[0],u=a[1],j=Object(i.useState)(),b=Object(o.a)(j,2),h=b[0],p=b[1],O=Object(i.useState)(null),x=Object(o.a)(O,2),m=x[0],f=x[1],v=1,g=function(e){l(String(e))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:" Type your code here"}),Object(c.jsx)(d.a,{mode:"python",theme:"monokai",value:n,placeholder:"write your code here",onChange:function(e){l(String(e))},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},className:"editor",fontSize:"20px"}),Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"30px"},children:[Object(c.jsx)("button",{className:"build-button",onClick:function(){fetch("/python",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,input:r})}).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){p(e)})),p(null),f("Loading...")},children:"Build and Run"}),Object(c.jsx)("button",{className:"clearButton",onClick:function(){f(null),p(null)},children:"Clear Output"}),Object(c.jsx)("button",{className:"clearEditorButton",onClick:function(){g("")},children:"Clear Editor"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Input"}),Object(c.jsx)("textarea",{className:"input",onChange:function(e){u(String(e.target.value))},placeholder:"Enter Input here"}),Object(c.jsx)("div",{style:{fontWeight:"800"},children:"Output"}),Object(c.jsx)("div",{className:"output",placeholder:"output",children:h?Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:String(h.output)})}):m})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Some Practice Codes"}),Object(c.jsxs)("div",{className:"practice-code",children:[Object(c.jsxs)("div",{className:"practice-text",children:[v++,"] Starting Hello World Program"]}),Object(c.jsx)("button",{className:"practice-view-button",onClick:function(){g("print('Hello world')"),f(null),p(null)},children:"CLICK TO VIEW"})]})]})]})});var h=function(){var e=Object(i.useState)("C++"),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{style:{display:"flex",margin:"30px",textAlign:"center",justifyContent:"center"},children:[Object(c.jsxs)("div",{style:{fontWeight:"800",fontSize:"30px"},children:["Online ",n," IDE"]}),Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsxs)("div",{className:"container",children:["Language: ",n]}),Object(c.jsxs)("div",{className:"dropdown-content",children:[Object(c.jsx)("div",{className:"lang",onClick:function(){l("C++")},children:"C++"}),Object(c.jsx)("div",{className:"lang",onClick:function(){l("Java")},children:"Java"}),Object(c.jsx)("div",{className:"lang",onClick:function(){l("Python")},children:"Python"})]})]})]}),Object(c.jsx)("div",{style:{display:"flex"},children:Object(c.jsx)("div",{children:"C++"==n?Object(c.jsx)(j,{}):"Java"==n?Object(c.jsx)(u,{}):Object(c.jsx)(b,{})})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),l(e),s(e)}))};a.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),p()},7:function(e,t,n){},8:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.2c8694cb.chunk.js.map