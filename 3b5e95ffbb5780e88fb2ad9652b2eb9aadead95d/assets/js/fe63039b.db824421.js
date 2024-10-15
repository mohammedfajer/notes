"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3555],{6360:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>p});var t=i(4848),o=i(8453);const d=i.p+"assets/images/w4_unity_version-14d68b93f09a5024955e622977ec09d5.png",s=i.p+"assets/images/w4_android_modules-91cb0eda1cb2ce1b9ef0e97b9946e272.png",a=i.p+"assets/images/w4_add_modules-7c5376638fce8b90593403d964e82b38.png",l=i.p+"assets/images/w4_switch_platform-c1a65c433d29888ad62839df40122c0e.png",r=i.p+"assets/images/w4_android_external_tools-d182b713a169b18101f65fca0f256ece.png",c=i.p+"assets/images/w4_build-2ae8e5083731e85996383d5f6b2d476a.png",h={},u="Building for Android",g={id:"GAP5005 Games Hardware Development/tutorial-unity/week4/android_build",title:"Building for Android",description:"If you do not have an android device, we have a limited amount to loan out. If these are unavailable,",source:"@site/docs/GAP5005 Games Hardware Development/tutorial-unity/week4/android_build.md",sourceDirName:"GAP5005 Games Hardware Development/tutorial-unity/week4",slug:"/GAP5005 Games Hardware Development/tutorial-unity/week4/android_build",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5005 Games Hardware Development/tutorial-unity/week4/android_build",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Week 4 - Unity UI and Building for Android",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/category/week-4---unity-ui-and-building-for-android"},next:{title:"Task Sheet 6 - Adding UI To Your Game",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5005 Games Hardware Development/tutorial-unity/week4/ws6"}},m={},p=[{value:"1.0 Installing Unity Correctly",id:"10-installing-unity-correctly",level:2},{value:"2.0 Installing Android Modules",id:"20-installing-android-modules",level:2},{value:"3. Configuring and Checking the Installs",id:"3-configuring-and-checking-the-installs",level:2},{value:"4.0 Building the Game",id:"40-building-the-game",level:2},{value:"5.O Running the .APK",id:"5o-running-the-apk",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"building-for-android",children:"Building for Android"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"If you do not have an android device, we have a limited amount to loan out. If these are unavailable,\nYou can test your apk on an emulator such as bluestacks or nox asst."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.bluestacks.com/",children:"https://www.bluestacks.com/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.bignox.com/",children:"https://www.bignox.com/"})}),"\n"]}),(0,t.jsxs)(n.p,{children:["They mostly work by just dragging your ",(0,t.jsx)(n.code,{children:".apk"})," file and running the program."]})]}),"\n",(0,t.jsx)(n.h2,{id:"10-installing-unity-correctly",children:"1.0 Installing Unity Correctly"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"Unity Hub"}),"  and make sure you are running the latest version of the ",(0,t.jsx)(n.code,{children:"Hub"})," (you will be promoted to upgrade if you are not running the latest version - Note, this might not be in the form of a pop-up, and instead may just appear near the top or bottom of the Hub window)."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have the latest version of the ",(0,t.jsx)(n.code,{children:"Unity Hub"})," installed, select the cog to the right of the version yo want to install the modules on. In the example below, I am using ",(0,t.jsx)(n.code,{children:"2022.3.X"}),", and you should be using the same, ideally ",(0,t.jsx)(n.code,{children:"2022.3.8f1"})," LTS version."]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:d,width:"100%",alt:"Unity Version"})}),"\n",(0,t.jsxs)(n.p,{children:["Once clicked, if you do not see ",(0,t.jsx)(n.code,{children:"Add Modules"})," in the drop-down list, then you need to uninstall Unity by using the same drop-down list. If you see ",(0,t.jsx)(n.code,{children:"Add Modules"})," please proceed to the next step."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have uninstalled Unity, select the ",(0,t.jsx)(n.code,{children:"Add"})," button (and install the version of Unity you wanted (2022.3.X)). Please untick ",(0,t.jsx)(n.code,{children:"Android Build Support"})," if it is selected; we are going to manually do this."]}),"\n",(0,t.jsx)(n.h2,{id:"20-installing-android-modules",children:"2.0 Installing Android Modules"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we all have Unity installed the same way, we can go ahead and install the correct modules. Select the three dots again from the previous step, and select ",(0,t.jsx)(n.code,{children:"Add Modules"}),":"]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:a,width:"50%",alt:"Unity Add Modules"})}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"Android Build Support"})," and make sure the two options which are hidden as drop-down entities, then select ",(0,t.jsx)(n.code,{children:"Done"}),". Wait for the module to install, but please be aware that it may take a while dependeing on your connection."]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:s,width:"100%",alt:"Unity Version"})}),"\n",(0,t.jsx)(n.h2,{id:"3-configuring-and-checking-the-installs",children:"3. Configuring and Checking the Installs"}),"\n",(0,t.jsxs)(n.p,{children:["Open the game we are working on and navigate to ",(0,t.jsx)(n.strong,{children:"File > Build Settings"}),". From the list under ",(0,t.jsx)(n.strong,{children:"Platform"})," select ",(0,t.jsx)(n.code,{children:"Android"}),", and then press ",(0,t.jsx)(n.code,{children:"Switch Platform"}),":"]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:l,width:"60%",alt:"Unity Switch Platform"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to build for ",(0,t.jsx)(n.code,{children:"PC"}),", you will need to switch platforms again so that the correct module is loaded. For now, we want to keep the platform set to Android."]}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Edit > Preferences > External Tools"}),". Under Android, ensure that yours looks like this:"]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:r,width:"60%",alt:"Unity Android External Tools"})}),"\n",(0,t.jsx)(n.p,{children:"If it does, then proceed to the next step."}),"\n",(0,t.jsx)(n.h2,{id:"40-building-the-game",children:"4.0 Building the Game"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have Unity fully configured to work with Android, we can go ahead and build our game. Android applications come in the file format ",(0,t.jsx)(n.code,{children:".APK"}),", and that's the same file type we will be creating now."]}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"File > Build Settings > Android"})," (like you did earlier). At the top of this screen, you will notice a section for ",(0,t.jsx)(n.code,{children:"Scenes in Build"}),"; it is very important that you add your scenes here with the button highlighted in red (they must be saved before you can add them). Additionally, instead of selecting ",(0,t.jsx)(n.code,{children:"Switch Platform"})," you should be able to select ",(0,t.jsx)(n.code,{children:"Build"}),"."]}),"\n",(0,t.jsx)("div",{class:"image-container",children:(0,t.jsx)("img",{src:c,width:"50%",alt:"Unity Build"})}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"Build"})," and save the .APK file somewhere memorable."]}),"\n",(0,t.jsx)(n.h2,{id:"5o-running-the-apk",children:"5.O Running the .APK"}),"\n",(0,t.jsxs)(n.p,{children:["For those of you with an Android device, it is simply a case of getting the ",(0,t.jsx)(n.code,{children:".APK"})," file onto the device. You can do this in several ways, ranging from file transfer with a cable, emailing it to yourself and downloading it, or uploading to a file sharing site such as Google Drive (and then downloading it). Using these methods, gets the ",(0,t.jsx)(n.code,{children:".APK"})," onto your device."]}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:".APK"})," file is on your device, simply click the icon. You will be warned not to install ",(0,t.jsx)(n.code,{children:".APK"})," files from unknown sources, but luckily for us, we how where the ",(0,t.jsx)(n.code,{children:".APK"})," came from! So, go ahead and authorize the ",(0,t.jsx)(n.code,{children:".APK"})," file to be installed."]}),"\n",(0,t.jsx)(n.p,{children:"Once installed, you will be able to run and play your game. Congratulations, you have made your first Android game!"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Additional Notes:"})}),(0,t.jsx)(n.p,{children:"Building for mobile device in Unity has a bit of a reputation for being a pain, and although Unity have made considerable improvements in recent years in this area, it can still be somewhat unpredictable. If you follow this guide and are still having trouble porting to mobile, please speak with me and we will find the solution."})]})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const o={},d=t.createContext(o);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);