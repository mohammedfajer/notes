"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8930],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(a),d=r,h=y["".concat(s,".").concat(d)]||y[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const i=a.p+"assets/images/w2_pixel_grid-398065e183c2706f07c2ff4a261488c9.png",o={},l="Task Sheet 3 - Familiarizing yourself with CSharp",s={unversionedId:"GAP5005 Games Hardware Development/tutorial-unity/week2/ws3",id:"GAP5005 Games Hardware Development/tutorial-unity/week2/ws3",title:"Task Sheet 3 - Familiarizing yourself with CSharp",description:"Tasks",source:"@site/docs/GAP5005 Games Hardware Development/tutorial-unity/week2/ws3.md",sourceDirName:"GAP5005 Games Hardware Development/tutorial-unity/week2",slug:"/GAP5005 Games Hardware Development/tutorial-unity/week2/ws3",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5005 Games Hardware Development/tutorial-unity/week2/ws3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Week 2 - Creating Unity Gameplay Mechanics in C#",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/category/week-2---creating-unity-gameplay-mechanics-in-c"},next:{title:"Task Sheet 4 - Creating Gameplay Mechanics",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5005 Games Hardware Development/tutorial-unity/week2/ws4"}},p={},c=[{value:"Tasks",id:"tasks",level:2}],y={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"task-sheet-3---familiarizing-yourself-with-csharp"},"Task Sheet 3 - Familiarizing yourself with CSharp"),(0,r.yg)("h2",{id:"tasks"},"Tasks"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new Unity Project. We'll call it ",(0,r.yg)("inlineCode",{parentName:"p"},"Pixels"),". Use the 3D project template.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a cube in the editor and name it Pixel. Save it as a prefab."))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"  Recap: The hierarchy is where objects in a ",(0,r.yg)("strong",{parentName:"p"},"Scene")," live. A scene is an isolated pocket of the game, like a level. They do not interact with each other. When you store an object as a prefab, you move it into a global context. You can add it to as many scenes as you like. What's more, if you modify the prefab, all copies in all scenes will be modified too. This is a one-way system. If you change a prefab instance in the scene, it will not change the prefab or any other instances.")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new script and call it ",(0,r.yg)("inlineCode",{parentName:"p"},"PixelComponent"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Double click the prefab in the project view. It should open the prefab directly. Add the PixelComponent to the game object.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We are going to make the game object change when we press a button. However we don't want this to occur on EVERY Pixel using the same input, so we're going to pass into the component which ",(0,r.yg)("inlineCode",{parentName:"p"},"Key")," we want to use. Create a variable of type ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyCode")," and make sure it is visible in the editor. If it is not visible, double check how we make things visible to be in the editor in last week's presentation.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We're going to add an array of ",(0,r.yg)("inlineCode",{parentName:"p"},"Color")," elements to it (spelled like that). Make it visible in the editor. Now add as many colours as you like to the array in the editor."))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"  Hint: Next to the array name in the editor there should be a dropdown that revels a plus button. This will add new elements to the array when you click it.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Defining Arrays in C# is much the same as in C++ with one difference. Where in C++ you would put the square brackets after the variable name, in C# it is after the type name. So in C# an array of ints would look like this: ",(0,r.yg)("inlineCode",{parentName:"p"},"int[] m_myIntArray"),". A multidimensional array will look like this: ",(0,r.yg)("inlineCode",{parentName:"p"},"int[][] m_myMultiArray"),".")),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We need to use this data. Create a function that tests if we pressed the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyCode")," we passed in that frame. It should only trigger the first frame you press the key down. Have it return a bool.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use that function to determine if we should act. If true, we are going to change the colour of the cube. Because we haven't talked about how that works, this is the line of code you will need to add:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cs"},"  GetComponent<MeshRenderer>().material.color = col;\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"col")," in this example going to be a colour from your list. We are going to iterate over the list every time we press the key down, so it cycles through the list of colours. Add code to do this. You'll need to make sure you don't overflow your array! This should also be in a separate function. Call this function in Start() as well as inside the if statement. That way, the game should start with every pixel set to your first colour."),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"Time to test it out! Close the prefab screen (The button is located at the top of the hierarchy panel) and check the Pixel instance you added at the start. All being well it should already have the component added and all the colours set up from the prefab. Drag the prefab in a few more times and create a grid. I suggest 3x3 for testing to start with.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},'In case it\'s unclear, when I refer to an instance, I mean an object in the scene. Because the original version of the object is the Prefab, every copy we create is called an "Instance".')),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"On each instance in the hierarchy, set ",(0,r.yg)("inlineCode",{parentName:"li"},"KeyColor"),". Some of these can be the same if you like, but make sure at least some are different. Run the game and try pressing the keys you set up. All being well you'll have a grid of ",(0,r.yg)("inlineCode",{parentName:"li"},"pixels")," that you can change the colour of!")),(0,r.yg)("div",{class:"image-container"},(0,r.yg)("img",{src:i,width:"50%",alt:"Pixel Grid"})))}d.isMDXComponent=!0}}]);