"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,k=d["".concat(s,".").concat(c)]||d[c]||h[c]||r;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r=a.p+"assets/images/w8_visual-03480966a2af11b8348f54c1c5aa1c17.png",o={},l="Task Sheet 8 - Binary Serialisation and Deserialisation",s={unversionedId:"GAP5005 Games Hardware Development/tutorial-unity/week8/wk8",id:"GAP5005 Games Hardware Development/tutorial-unity/week8/wk8",title:"Task Sheet 8 - Binary Serialisation and Deserialisation",description:"Writing/Serializing our data using .NET Binary Formatter.",source:"@site/docs/GAP5005 Games Hardware Development/tutorial-unity/week8/wk8.md",sourceDirName:"GAP5005 Games Hardware Development/tutorial-unity/week8",slug:"/GAP5005 Games Hardware Development/tutorial-unity/week8/wk8",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5005 Games Hardware Development/tutorial-unity/week8/wk8",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Week 8 - More Data Persistence",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/category/week-8---more-data-persistence"},next:{title:"Week 9 - Developing for Mobile Hardware",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/category/week-9---developing-for-mobile-hardware"}},p={},m=[{value:"Step 1 .NET Binary Formatter (Save)",id:"step-1-net-binary-formatter-save",level:2},{value:"Step 2 .NET Binary Formatter (Load)",id:"step-2-net-binary-formatter-load",level:2},{value:"Step 3 Saving More Complex Data",id:"step-3-saving-more-complex-data",level:2},{value:"Step 4 Loading More Complex Data",id:"step-4-loading-more-complex-data",level:2},{value:"Closing Remarks",id:"closing-remarks",level:3}],d={toc:m},h="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"task-sheet-8---binary-serialisation-and-deserialisation"},"Task Sheet 8 - Binary Serialisation and Deserialisation"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Writing/Serializing our data using ",(0,i.kt)("inlineCode",{parentName:"p"},".NET")," Binary Formatter.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(1125).Z,width:"914",height:"314"})),(0,i.kt)("h2",{id:"step-1-net-binary-formatter-save"},"Step 1 .NET Binary Formatter (Save)"),(0,i.kt)("p",null,"Last week, we have looked at saving files using Unity's ",(0,i.kt)("strong",{parentName:"p"},"PlayerPref")," sytem, custom file formats, and ",(0,i.kt)("inlineCode",{parentName:"p"},".JSON")," files. This week, we are going to be looking at another way to store and load our data; that method will be using binary files (or ",(0,i.kt)("inlineCode",{parentName:"p"},".NET's")," Binary Formatter)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the project from ",(0,i.kt)("strong",{parentName:"p"},"Week 08")," on the Moodle page and open it up. If it asks you to upgrade, please do so. We\u2019re going to be using the same project which we used the other week, as it\u2019s a familiar, well-suited environment to use. Note, a few small changes have been added to the game.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once Unity is open, create a new folder inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Scripts")," folder called ",(0,i.kt)("strong",{parentName:"p"},"\u2018Save and Load\u2019")," if it doesn\u2019t already exist. Create a new C# class inside there called ",(0,i.kt)("strong",{parentName:"p"},"\u2018PersistenceManager\u2019")," and open it up (make sure to add it to your scene somewhere).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The other week, we established that I had created class which stored the player\u2019s level, their health, and their position; this week, I\u2019ve removed the health value, and in its place I\u2019ve added a new variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"List<string>"),", which stores a list of strings relating to all the enemies the player has killed."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public int level = 0;\npublic Vector3 position;\npublic List<string> enemiesKilled = new List<string>();\n\npublic void Update()\n{\n  position = transform.position;\n}\n")),(0,i.kt)("p",{parentName:"li"},"For the list, each time you collide with an enemy, the name of the enemy will be added to the list; the name can be either pig, goblin, orc, or a human."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your class, import the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.IO")," namespace at the top; remember, this allows us to use the input/output system to write and read from files. Additionally, add the .NET binary formatter library. ",(0,i.kt)("strong",{parentName:"p"},"You should use Google or other means of search to find out how to do this!"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new method called ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the method, create a new local variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryFormatter")," named ",(0,i.kt)("strong",{parentName:"p"},"\u2018bf\u2019")," and make it equal a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryFormatter"),", so that we can call upon ",(0,i.kt)("strong",{parentName:"p"},"\u2018bf\u2019")," throughout the save method to make things easier.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath this declaration, you need to create a new variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," named ",(0,i.kt)("strong",{parentName:"p"},"\u2018stream\u2019"),"; this is slightly different than what we used the other week. Once you\u2019ve declared your ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," variable, you need to set it equal to a file path, or in our case, create one.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make your ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," variable equal: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'File.Create(Application.persistentDataPath + "/playerData.dat")\n')),(0,i.kt)("p",{parentName:"li"},"This creates a file at the specified location, ready for us to write to. Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},".dat")," file \u2013 custom format, just like we did the other week! You\u2019ve very likely seen these files before if you\u2019ve checked out local game files \u2013 it\u2019s kind of a standard notation for data containing files."),(0,i.kt)("p",{parentName:"li"},"Remember, ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.persistentDataPath")," is a path chosen by Unity which is specific to each device. If we were to explicitly save to ",(0,i.kt)("inlineCode",{parentName:"p"},"AppData")," on PC, and then went on to build our game for Android, AppData would not exist; ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.persistentDataPath")," resolves this issue by having a constant directory for each device.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At this point we\u2019ve created a file with our specified name, but we\u2019ve got nothing to ",(0,i.kt)("inlineCode",{parentName:"p"},"serialize/save"),". In the same class, create a new struct named ",(0,i.kt)("strong",{parentName:"p"},"\u2018PlayerData\u2019"),". Inside the struct, create three variables, one of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," for the ",(0,i.kt)("u",null,"level"),", one of type ",(0,i.kt)("inlineCode",{parentName:"p"},"float[]")," for the ",(0,i.kt)("u",null,"position"),", and one of type ",(0,i.kt)("inlineCode",{parentName:"p"},"List<string>")," for the ",(0,i.kt)("u",null,"names")," of the enemies we have killed. Before moving on, remember to use ",(0,i.kt)("inlineCode",{parentName:"p"},"[System.Serializable]")," above the struct to ensure we can serialize the data."),(0,i.kt)("p",{parentName:"li"},"Just to reiterate, if you are confused about what a ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," is, it\u2019s basically a ",(0,i.kt)("u",null,"dynamic array"),"; you use it the way you would use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector")," in C++ - you can dynamically ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"add/remove/insert"))," elements at runtime."))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a class member of type ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMetrics")," with the name ",(0,i.kt)("strong",{parentName:"p"},"\u2018m_playerMetrics\u2019"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start()")," function, set it to equal the ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMetrics")," component which can be found on the ",(0,i.kt)("strong",{parentName:"p"},"\u2018Player\u2019")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObject")," in the Hierarchy Panel \u2013 we\u2019re going to use this to access the player variables which I mentioned earlier (the ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," of strings).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method and create a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerData")," (your struct) underneath your ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," declaration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath this declaration, respectively set the variables stored in your struct to equal the counterpart variable found inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerMetrics")," class (use your ",(0,i.kt)("strong",{parentName:"p"},"\u2018m_playerMetrics\u2019")," reference)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Float[]")," : Remember, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryFormatter")," does not take native Unity types, and instead only takes the standard types such as ",(0,i.kt)("u",null,"float"),", ",(0,i.kt)("u",null,"int"),", and ",(0,i.kt)("u",null,"string"),". So, if we want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),", we instead use three floats \u2013 your struct should already have a float array, so in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method, set the size of the float array to equal 3, then respectively assign the x, y, and z ","[0, 1, 2]"," positions to respective array element."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"List<T>")," : You can simply set the list you are loading to equal the list from the save file. We\u2019re going to experiment with some harder techniques in a moment relating to lists."))),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once your data has been set in the struct instance, call the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"bf.Serialize(nameOfYourFileStream, nameOfYourStructInstance);\n")),(0,i.kt)("p",{parentName:"li"},"This serializes the struct we initialized at the specified path, using the Binary Formatter.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, call ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"stream.Close()"))," to end the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," process. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," function has now been completed, and we are now able to save using ",(0,i.kt)("u",null,"binary formatting"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an input which calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method when the ",(0,i.kt)("strong",{parentName:"p"},"\u2018P\u2019")," key is pressed."))),(0,i.kt)("h2",{id:"step-2-net-binary-formatter-load"},"Step 2 .NET Binary Formatter (Load)"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Loading from a binary file follows the same process as ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," \u2013 using ",(0,i.kt)("strong",{parentName:"p"},"deserialisation"),". We\u2019re going to need to load the player\u2019s last known position, the level they are currently on, as well as a list of all the enemies they have slain! However, before we do that, there\u2019s some groundwork we need to implement.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LoadPlayer()"))," method and call it i the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start()")," method.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the method, create an if statement which checks to see if the save file exists \u2013 we don\u2019t want to load from a file that doesn\u2019t exist!"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hint:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"if(File.Exists(dataPath))\n{\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside your if statement, create a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryFormatter")," called ",(0,i.kt)("strong",{parentName:"p"},"\u2018bf\u2019"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath this, create a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," called ",(0,i.kt)("strong",{parentName:"p"},"\u2018file\u2019"),", just like we did for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," method. However, this time, we\u2019re not going to use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"File.Create")),", we\u2019re instead going to use:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"File.Open(dataPath, FileMode.Open);\n")),(0,i.kt)("p",{parentName:"li"},"Implement this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, create a new local variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerData")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadPlayer()")," method called ",(0,i.kt)("strong",{parentName:"p"},"\u2018data\u2019")," and set it to equal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"(PlayerData)bf.Deserialize(file);\n")),(0,i.kt)("p",{parentName:"li"},"What this is doing is casting our struct so that the binary formatter knows what object it\u2019s dealing with (PlayerData, or the name of your struct)."))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath, call ",(0,i.kt)("strong",{parentName:"p"},"\u2018file.Close()\u2019"),". We have successfully pulled all the data from our save file, so we close the stream as we have stored all information in our local struct declaration (data).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using the variables stored in your local ",(0,i.kt)("strong",{parentName:"p"},"\u2018data\u2019")," struct, set the respective variable in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"m_playerMetrics"))," reference to equal the corresponding value in the struct. Remember, we need to set the position, the level, and the enemies killed."))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Once you think you\u2019ve done this, give your game a test. If you\u2019ve done everything correctly, the game should remember where your player was when they saved, what level they were, and all the enemies they have slain!")),(0,i.kt)("h2",{id:"step-3-saving-more-complex-data"},"Step 3 Saving More Complex Data"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ok, so at this point you\u2019ve been exposed quite heavily to data persistence, and if you\u2019ve got this far, you should have a pretty strong indication of how this is all handled. However, we\u2019ve only really covered top level saving with single values, such as the level a player is on, the health etc. We did implement a list, but it was very easy and one-dimensional compared to some of the curveballs which could quite easily be thrown our way in ",(0,i.kt)("inlineCode",{parentName:"p"},"AAA")," development; picture this:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Use Case:")),"\nYour boss comes along and mentions that it\u2019d be a great idea to have a feature which compliments the current \u2018enemies slain\u2019 list, and he believes we should also display the position which the enemy died at."),(0,i.kt)("p",{parentName:"admonition"},"Now you need to store a list of enemies, and a list of positions, and then reassign them \u2013 all whilst making sure it\u2019s the correct enemy/position, whilst using serialization, deserialization as well a binary/JSON formatter\u2026. Quite a pain, as you can imagine!"),(0,i.kt)("p",{parentName:"admonition"},"Luckily for us, someone saw your boss coming, and coded you a system which tracks the position of all enemies when they die. To enable it, locate the \u2018UI Canvas\u2019 GameObject and tick the conveniently placed ",(0,i.kt)("strong",{parentName:"p"},"\u2018Track Enemy Death Position\u2019")," Boolean.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up your ",(0,i.kt)("strong",{parentName:"li"},"save/load")," script again. Create a new method called ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SaveEnemies()"))," (we don\u2019t want to bloat the ",(0,i.kt)("inlineCode",{parentName:"li"},"SavePlayer()")," method with enemy data). Note: You could quite easily create\na global ",(0,i.kt)("inlineCode",{parentName:"li"},"Save()")," method with a single argument of your struct type to make this cleaner (or similar), but for the sake of clarity, we\u2019re going to duplicate methods. Once you have a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SaveEnemies()"))," method, move on.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the method, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryFormatter")," instance.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"FileStream")," variable, and create the file path (I called  my path ",(0,i.kt)("inlineCode",{parentName:"p"},"/EnemyData.dat"),") - Hopefully you're staring to see how file structures are build by this point.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new struct called ",(0,i.kt)("strong",{parentName:"p"},"\u2018EnemyData\u2019")," \u2013 this is where things get a little different. We only want a single variable in this struct, and it will be used to store the death position of each enemy. However, as I mentioned earlier, that means we need a list of enemy positions and we can\u2019t use ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")," with the binary formatter so we\u2019re going to need an array of floats which we can use later to build our ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),". "),(0,i.kt)("p",{parentName:"li"},"Inside your struct should be:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public List<float[]> deathPositions;\n")),(0,i.kt)("p",{parentName:"li"},"This creates a list of float arrays, stored under the name of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deathPositions")),"; here's a visualization of what this does:"),(0,i.kt)("div",{class:"image-container"},(0,i.kt)("img",{src:r,width:"50%",alt:"Unity Version"})),(0,i.kt)("p",{parentName:"li"},"The elements represent the ",(0,i.kt)("inlineCode",{parentName:"p"},"List<>")," part of the declaration."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 0, 0]")," represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"float[]")," part of the declaration (we\u2019re going to manually set this size to equal 3, so it can be assigned to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),"."),(0,i.kt)("p",{parentName:"li"},"This method allows us to successfully wrap multiple float values together and store them at a specific index of an array/list. This will make more sense as we progress through the next steps.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SaveEnemies()"))," function and declare a new variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyData")," (your struct) called ",(0,i.kt)("strong",{parentName:"p"},"\u2018data\u2019"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath that, we need to initialise our list, to do this, we type:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"data.deathPosition = new List<float[]>();\n")),(0,i.kt)("p",{parentName:"li"},"Where data is the name of our struct instance, and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deathPosition"))," is the name of our ",(0,i.kt)("inlineCode",{parentName:"p"},"List<float[]>"),"."))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new global variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyMetrics")," called ",(0,i.kt)("strong",{parentName:"p"},"\u2018m_enemyMetrics\u2019")," \u2013 Assign this in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start()")," method (the class is attached to the ",(0,i.kt)("strong",{parentName:"p"},"\u2018Enemy\u2019")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObject")," for you to reference). Note, the best way to do this with the current system is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"variableName = GameObject.FindObjectOfType<EnemyMetrics>();\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SaveEnemies()"))," method and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"for loop")," which loops through the length of ",(0,i.kt)("inlineCode",{parentName:"p"},"m_enemyMetrics.deathPosition.Count")," (remember, for a list, we use ",(0,i.kt)("inlineCode",{parentName:"p"},".Count"),", not .Length like we do for an array).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside your loop, declare a new float array called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u2018latestPos\u2019"))," and set its size to equal 3.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find a way, using Google, to set each respective ","[0, 1, 2]"," element of your local float array to equal ",(0,i.kt)("inlineCode",{parentName:"p"},"m_enemyMetrics.deathPosition[i].AXIS")," (where 0 is x, 1 is y, 2 is z)."))),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"latestPos")," to your list which is stored in your ",(0,i.kt)("strong",{parentName:"p"},"\u2018data\u2019")," variable \u2013 use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"YourListName.Insert(0, latestPos)"))," to achieve this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, serialie your file and struct like you did in the other ",(0,i.kt)("inlineCode",{parentName:"p"},"Save()")," function, and close the stream You\u2019re now successfully saving your enemy positions."))),(0,i.kt)("h2",{id:"step-4-loading-more-complex-data"},"Step 4 Loading More Complex Data"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy your ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"LoadPlayer()")),"  method and store it in a new method called ",(0,i.kt)("strong",{parentName:"li"},"\u2018LoadEnemies()\u2019"),". Clear out all duplicate data which appears after ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u2018file.Close();\u2019"))," and update the paths so that they\ncorrespond with the correct file you\u2019re loading. Make sure to update the struct type.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Underneath this, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"for loop")," which loops through the length of your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deathPosition"))," list which is stored in your locally declared struct.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Declare a new float variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"xVal"),", and set it to equal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"float xVal = data.deathPosition[i][0];\n")),(0,i.kt)("p",{parentName:"li"},"What we\u2019re doing here is creating a local float variable, and setting it to equal the first element of our float array which is stored in the specified (i) index of our list. This is how we can build more complex structures, and I\u2019ve found it to be a very reliable method over the years."),(0,i.kt)("p",{parentName:"li"},"Do the same for the y /z values."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using these three float variables, declare yourself a new local ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),", ready to be assigned back to the ",(0,i.kt)("strong",{parentName:"p"},"EnemyMetrics")," class which I created (the class I created wants a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"List.Insert()"))," again, insert your newly constructed ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")," into the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u2018deathPosition\u2019"))," list which can be found in the ",(0,i.kt)("strong",{parentName:"p"},"\u2018_enemyMetrics\u2019")," reference.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SaveEnemies()"))," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," press if it\u2019s not already being called and call your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"LoadEnemies()"))," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start()")," function.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to: ",(0,i.kt)("strong",{parentName:"p"},"`C:","\\","Users","\\"),"USER",(0,i.kt)("strong",{parentName:"p"},"\\","AppData","\\","LocalLow","\\","DefaultCompany","\\","ProjectName`")," or similar, and delete the save files which are stored there (this is ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.persistenceData"),"). Ensure the Boolean is checked on the ",(0,i.kt)("inlineCode",{parentName:"p"},"UI Canvas")," object and test the game."))),(0,i.kt)("h3",{id:"closing-remarks"},"Closing Remarks"),(0,i.kt)("p",null,"Hopefully you have a much greater understanding of how ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"saving/loading"))," is handled in games now, and I hope you feel comfortable implementing this into your projects. ",(0,i.kt)("strong",{parentName:"p"},"Remember"),", this is worth a good number of marks for the assignment, so it\u2019s so important that we spent so long covering it. Not only that, but this is an extremely valuable skill which will be incorporated into practically every project which you will ever work on in the future \u2013 it might even be an interview question."),(0,i.kt)("p",null,"These methods allow you to save pretty much anything you need. The last method we looked at could be used to store tree structures for ",(0,i.kt)("inlineCode",{parentName:"p"},"MMORPGS")," \u2013 Where our enemy is ",(0,i.kt)("inlineCode",{parentName:"p"},"Warrior/Ranger/Mage"),", and the float positions are the stat points in each respective skill. Obviously, it\u2019d need a little bit of tweaking, but you get the idea."))}c.isMDXComponent=!0},1125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-9808cfa72ffd11bf9df8c15b34553574.png"}}]);