"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r=n.p+"assets/images/refresh_vs-96137ec6ddf15fa250914a25d929749c.png",a={},s="Week 2 - Mouse Input and Spawning Game Objects",l={unversionedId:"course/tutorial-ue5/week2",id:"course/tutorial-ue5/week2",title:"Week 2 - Mouse Input and Spawning Game Objects",description:"Task Sheet 2 - Working with UE5",source:"@site/docs/course/tutorial-ue5/week2.md",sourceDirName:"course/tutorial-ue5",slug:"/course/tutorial-ue5/week2",permalink:"/docs/course/tutorial-ue5/week2",draft:!1,editUrl:"https://github.com/mohammedfajer/notes/docs/course/tutorial-ue5/week2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Week 1 - Introduction to UE5",permalink:"/docs/course/tutorial-ue5/week1"},next:{title:"Week 3 - Using C++ and Blueprint",permalink:"/docs/course/tutorial-ue5/week3"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Mouse Input",id:"mouse-input",level:2},{value:"Using Mouse Input",id:"using-mouse-input",level:3},{value:"Responding to Mouse Inputs",id:"responding-to-mouse-inputs",level:3},{value:"Moving an Object in a Rotated Direction",id:"moving-an-object-in-a-rotated-direction",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Debugging C++ Code in UE5",id:"debugging-c-code-in-ue5",level:3},{value:"Using UE5&#39;s Log Output",id:"using-ue5s-log-output",level:3},{value:"Using VS2022&#39;s Debugging Tools",id:"using-vs2022s-debugging-tools",level:3},{value:"Spawning Objects",id:"spawning-objects",level:2},{value:"Spawning Enemies within a Spawn Volume",id:"spawning-enemies-within-a-spawn-volume",level:2},{value:"Handling Collisions",id:"handling-collisions",level:2},{value:"Dynamically Changing A Material Instance",id:"dynamically-changing-a-material-instance",level:2},{value:"Points to Considers",id:"points-to-considers",level:2},{value:"Exercises",id:"exercises",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"week-2---mouse-input-and-spawning-game-objects"},"Week 2 - Mouse Input and Spawning Game Objects"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Task Sheet 2 - Working with UE5")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"THis week we are going to extend the simple object we created in Task sheet 1, so that a mouse can be used with input, and projectiles can be fired."),(0,o.kt)("p",null,"Do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Epic Games Launcher"),", to load UE5 and click on the Launch button for ",(0,o.kt)("strong",{parentName:"p"},"Version 5.2.1")," (or select the down arrow to select the version required). The UE5 ",(0,o.kt)("strong",{parentName:"p"},"project browser")," should be displayed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open project ",(0,o.kt)("strong",{parentName:"p"},"GDyn1"),". (Alternatively, double-click on the ",(0,o.kt)("strong",{parentName:"p"},"GDyn1.uproject")," file, in the folder where you stored the project from the previous worksheet). The previous UE5 project should be opened with the default ",(0,o.kt)("strong",{parentName:"p"},"GDMap")," setup displayed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It is good practice to refresh the ",(0,o.kt)("strong",{parentName:"p"},"VS")," files, on openning a UE5 C++ project. Do this through ",(0,o.kt)("strong",{parentName:"p"},"Tools -> Refresh Visual Studio Project"),"."))),(0,o.kt)("div",{class:"image-container"},(0,o.kt)("img",{src:r,width:"60%",alt:"Refresh VS"})),(0,o.kt)("h2",{id:"mouse-input"},"Mouse Input"),(0,o.kt)("p",null,"here"),(0,o.kt)("h3",{id:"using-mouse-input"},"Using Mouse Input"),(0,o.kt)("p",null,"here"),(0,o.kt)("h3",{id:"responding-to-mouse-inputs"},"Responding to Mouse Inputs"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"moving-an-object-in-a-rotated-direction"},"Moving an Object in a Rotated Direction"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("h3",{id:"debugging-c-code-in-ue5"},"Debugging C++ Code in UE5"),(0,o.kt)("p",null,"here"),(0,o.kt)("h3",{id:"using-ue5s-log-output"},"Using UE5's Log Output"),(0,o.kt)("p",null,"here"),(0,o.kt)("h3",{id:"using-vs2022s-debugging-tools"},"Using VS2022's Debugging Tools"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"spawning-objects"},"Spawning Objects"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"spawning-enemies-within-a-spawn-volume"},"Spawning Enemies within a Spawn Volume"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"handling-collisions"},"Handling Collisions"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"dynamically-changing-a-material-instance"},"Dynamically Changing A Material Instance"),(0,o.kt)("p",null,"here"),(0,o.kt)("h2",{id:"points-to-considers"},"Points to Considers"),(0,o.kt)("h2",{id:"exercises"},"Exercises"),(0,o.kt)("p",null,"here"))}g.isMDXComponent=!0}}]);