"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[285],{1778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(4848),s=t(8453);const o=t.p+"assets/images/w5_pic1-7448ad542f1a4cd6cdae22e588301050.png",r=t.p+"assets/images/w5_pic2-459a5a97379068bae010be870826f3ea.png",l={},c="Week 5 - Artificial Intelligence",d={id:"GAP5006 Game Dyanmics/tutorial-ue5/week5",title:"Week 5 - Artificial Intelligence",description:"Task Sheet 5 - Describes the systems available within Unreal Engine that can be use to create believable AI entities in your projects.",source:"@site/docs/GAP5006 Game Dyanmics/tutorial-ue5/week5.md",sourceDirName:"GAP5006 Game Dyanmics/tutorial-ue5",slug:"/GAP5006 Game Dyanmics/tutorial-ue5/week5",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5006 Game Dyanmics/tutorial-ue5/week5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Week 4 - Animation Blueprints",permalink:"/notes/3b5e95ffbb5780e88fb2ad9652b2eb9aadead95d/docs/GAP5006 Game Dyanmics/tutorial-ue5/week4"}},h={},a=[{value:"Using Perception Sensing",id:"using-perception-sensing",level:2},{value:"Rotating the Enemies",id:"rotating-the-enemies",level:2},{value:"Animating the Enemies",id:"animating-the-enemies",level:2},{value:"Exercise",id:"exercise",level:3},{value:"Improving the Enemy Rotation",id:"improving-the-enemy-rotation",level:2},{value:"Points to Consider",id:"points-to-consider",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"week-5---artificial-intelligence",children:"Week 5 - Artificial Intelligence"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Task Sheet 5 - Describes the systems available within Unreal Engine that can be use to create believable AI entities in your projects."})}),"\n",(0,i.jsx)(n.h2,{id:"using-perception-sensing",children:"Using Perception Sensing"}),"\n",(0,i.jsx)(n.p,{children:"At present, we have Enemies and a player / pawn object.  It would be useful if we could get the Enemies to respond when the player gets near.  UE5 has a sophisticated perception / sensing system.  The most simple approach is to sense when a player is within \u2018sight\u2019 and within a certain radius of the player."}),"\n",(0,i.jsxs)(n.p,{children:["We are going to add sensing to the Enemy objects, to achieve this. It would be useful if an ",(0,i.jsx)(n.strong,{children:"Enemy"})," could move towards a player, if a ",(0,i.jsx)(n.strong,{children:"\u2018sensed\u2019"})," object is in its line of sight, and close enough to it."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Do the following"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the Project007 project in the UE5 Editor, then use menu option ",(0,i.jsx)(n.strong,{children:"File"}),", ",(0,i.jsx)(n.strong,{children:"Refresh Visual Studio"}),", and then ",(0,i.jsx)(n.strong,{children:"File"}),", ",(0,i.jsx)(n.strong,{children:"Open Visual Studio"})," option."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Within the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Project007.Build.cs"})})," file, or similar, ",(0,i.jsx)("u",{children:"change"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'\nPublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine",\n\t\t\t"InputCore", "HeadMountedDisplay", "EnhancedInput" });\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By ",(0,i.jsx)("u",{children:"adding"})," ",(0,i.jsx)(n.strong,{children:"AIModule"})," to the dependency module name, as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'\nPublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine",\n\t\t\t"InputCore", "HeadMountedDisplay", "EnhancedInput", "AIModule" });\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AIModule"})," is used for perception sensing."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the following code towards the bottom of the Enemy class header:"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Declare and define the following member variables within the class:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_aiPercComp"})})," - a pointer to a ",(0,i.jsx)(n.code,{children:"UAIPerceptionComponent"}),", visible in defaults only and belonging to the ",(0,i.jsx)(n.strong,{children:'"Enemy"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_sightConfig"})})," - a pointer to a ",(0,i.jsx)(n.code,{children:"UAISenseConfig_Sight"}),", visible in defaults only and belonging to the ",(0,i.jsx)(n.strong,{children:'"Enemy"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_baseLoc"})})," - an ",(0,i.jsx)(n.code,{children:"FVector"})," visible anywhere and belonging to the ",(0,i.jsx)(n.strong,{children:'"Movement"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_currVelocity"})})," - an ",(0,i.jsx)(n.code,{children:"FVector"})," visible and writable in blueprints and belonging to the ",(0,i.jsx)(n.strong,{children:'"Movement"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_speed"})})," - a float visible anywhere and belonging to the ",(0,i.jsx)(n.strong,{children:'"Movement"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_Radius"})})," - a float editable anywhere and belonging to the ",(0,i.jsx)(n.strong,{children:'"Enemy"'})," category."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_distSquared"})}),", a float that we\u2019re going to use for back to base calculations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_backToBase"})})," - a bool indicating whether the enemy should return to its base location."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Declare a ",(0,i.jsx)(n.code,{children:"UFUNCTION"})," called ",(0,i.jsx)(n.strong,{children:'"OnSensed()"'})," with a parameter of const ",(0,i.jsx)(n.code,{children:"TArray<AActor*>&"})," called ",(0,i.jsx)(n.strong,{children:"\u201ctestActors\u201d"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["We are adding an AI Perception component, with a config attribute, ",(0,i.jsx)(n.code,{children:"sightConfig"}),", that stores the settings for the sight sensing.  In addition, the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"OnSensed()"})})," function will run when an object has been sensed."]}),(0,i.jsx)(n.p,{children:"The other attributes are used to store where the start / base location of the Enemy is, and the current velocity direction, and speed, that the Enemy is moving at, if at all."})]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Within ",(0,i.jsx)(n.code,{children:"Enemy.cpp"}),", add the required includes for ",(0,i.jsx)(n.strong,{children:"UAIPerceptionComponent"})," and ",(0,i.jsx)(n.strong,{children:"UAISenseConfig"}),". Forward declare in the ",(0,i.jsx)(n.code,{children:".h"}),"!"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Also, ",(0,i.jsx)(n.strong,{children:"add"})," the following code to the ",(0,i.jsx)(n.strong,{children:"constructor"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the following properties to the constructor:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_currVelocity"}),"\t: initialized as a zero vector"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_speed"}),"\t\t: set to 30.0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_radius"}),"\t\t: set to 500.0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_distSquared"}),"\t: set to a defined big number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_backToBase:"}),"\t: set to false"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Create an AI Perception component within the constructor."}),"\n",(0,i.jsxs)(n.li,{children:["Create a sight configuration for the AI Perception component with the following settings:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SightRadius"}),": set to the previously defined radius value"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LoseSightRadius"}),": set to the radius plus 100.0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PeripheralVisionAngleDegrees"}),": set to 90.0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DetectionByAffiliation"}),": set to detect enemies, neutrals, and friendlies"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SetMaxAge"}),": set to 0.5f"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Configure the AI Perception component with the sight configuration using ",(0,i.jsx)(n.code,{children:"\u201cConfigureSense\u201d"}),", a member function of AIPerceptionComponent."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the dominant sense of the AI Perception component to be the sight configuration's implementation using ",(0,i.jsx)(n.code,{children:"\u201cSetDominamtSense\u201d"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the following dynamic delegate to the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"OnPerceptionUpdated"})})," event of the AI Perception:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"\taiPercComp->OnPerceptionUpdated.AddDynamic(this, &AEnemy::OnSensed);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This should create an AI Perception component with line of sight values set.  Note too that when an object is sensed, the OnSensed function will be called. That is the result of the above line of code. It works the same way you have bound input previously."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:'"OnSensed()"'})," function:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Iterate through the ",(0,i.jsx)(n.strong,{children:'"testActors"'})," array using a ",(0,i.jsx)(n.strong,{children:'"for"'})," loop."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Get the name of the ",(0,i.jsx)(n.code,{children:'"i-th"'}),' actor in the "testActors" array using the ',(0,i.jsx)(n.strong,{children:'"GetName()"'})," function and store it in a ",(0,i.jsx)(n.code,{children:"FString"})," variable ",(0,i.jsx)(n.strong,{children:'"n"'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:'"FActorPerceptionBlueprintInfo"'})," variable ",(0,i.jsx)(n.strong,{children:'"info"'})," and call the ",(0,i.jsx)(n.strong,{children:'"GetActorsPerception()"'})," function of ",(0,i.jsx)(n.code,{children:'"_aiPercComp"'})," using ",(0,i.jsx)(n.code,{children:"testActors[i]"})," and info as parameters to get the perception information of the ",(0,i.jsx)(n.strong,{children:'"i-th"'})," actor."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check if the ",(0,i.jsx)(n.strong,{children:'"LastSensedStimuli"'}),' array in "info" is not empty and the first element of the array was successfully sensed using its ',(0,i.jsx)(n.strong,{children:'"WasSuccessfullySensed()"'})," function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the above condition is true, calculate the direction vector ",(0,i.jsx)(n.code,{children:'"dir"'})," by subtracting the location of the ",(0,i.jsx)(n.strong,{children:'"i-th"'})," actor from the location of the Enemy and set the ",(0,i.jsx)("u",{children:"Z"})," component of ",(0,i.jsx)(n.strong,{children:'"dir"'})," to 0.0f."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Normalize the ",(0,i.jsx)(n.code,{children:'"dir"'})," vector using the ",(0,i.jsx)(n.strong,{children:'"GetSafeNormal()"'})," function and multiply it with the ",(0,i.jsx)(n.code,{children:'"_speed"'})," variable to get the current velocity of the Enemy."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the ",(0,i.jsx)(n.strong,{children:'"_currVelocity"'})," variable to the current velocity calculated in step (f)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the condition in step (d) is false, calculate the direction vector ",(0,i.jsx)(n.code,{children:'"dir"'})," by subtracting the ",(0,i.jsx)(n.strong,{children:'"_baseLoc"'})," variable from the location of the Enemy and set the ",(0,i.jsx)(n.code,{children:"Z"})," component of ",(0,i.jsx)(n.strong,{children:'"dir"'})," to 0.0f."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check if the squared 2D distance between ",(0,i.jsx)(n.code,{children:'"dir"'})," and the Enemy is greater than ",(0,i.jsx)(n.strong,{children:"1.0f"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the above condition is true, normalize the ",(0,i.jsx)(n.code,{children:'"dir"'})," vector using the ",(0,i.jsx)(n.strong,{children:'"GetSafeNormal()"'})," function and multiply it with the ",(0,i.jsx)(n.code,{children:'"_speed"'})," variable to get the current velocity of the Enemy."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the ",(0,i.jsx)(n.strong,{children:'"_currVelocity"'})," variable to the current velocity calculated in the previous step and set the ",(0,i.jsx)(n.code,{children:'"_backToBase"'})," variable to true."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Note how an array of actors, that are sensed, is made available to the ",(0,i.jsx)(n.code,{children:"OnSensed()"})," function. The function ",(0,i.jsx)(n.code,{children:"WasSuccessfullySensed()"})," is true when an appropriate object is in sight and within a certain radius of the Enemy.  When an object then moves out of sight, or outside of the required radius, ",(0,i.jsx)(n.code,{children:"WasSuccessfullySensed()"})," will be false.  At present, a velocity is set for the Enemy to move towards a sensed object, and then return to its base location, if a sensed object \u2018leaves\u2019 its \u2018proximity\u2019."]})}),"\n",(0,i.jsx)(n.p,{children:"We can now use the velocity within the Tick function, to move appropriately."}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Tick"})," function:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Add an `"if"`` statement to check if ',(0,i.jsx)(n.strong,{children:'"_currVelocity"'})," is not zero."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:'"_currVelocity"'})," is not zero, calculate the new loc ation of the Enemy by adding ",(0,i.jsx)(n.code,{children:"_currVelocity"}),' multiplied by "DeltaTime" to the current location of the Enemy. (Think about your brackets!)']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:'"_backToBase"'})," is true, check if the squared 2D distance between the new location and ",(0,i.jsx)(n.code,{children:'"_baseLoc"'})," is less than ",(0,i.jsx)(n.code,{children:'"_distSquared"'}),". The ",(0,i.jsx)(n.strong,{children:"\u201cSizeSquared2D()\u201d"})," function will help here."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the squared 2D distance is less than ",(0,i.jsx)(n.code,{children:"_distSquared"}),", update ",(0,i.jsx)(n.code,{children:"_distSquared"})," to be equal to the squared 2D distance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the squared 2D distance is greater than ",(0,i.jsx)(n.code,{children:"_distSquared"}),", set ",(0,i.jsx)(n.code,{children:"_currVelocity"})," to be a zero vector, set ",(0,i.jsx)(n.code,{children:"_distSquared"})," to be ",(0,i.jsx)(n.strong,{children:"BIG_NUMBER"}),", and set ",(0,i.jsx)(n.code,{children:"_backToBase"})," to false."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the location of the Enemy to the new location calculated in step 5 using the ",(0,i.jsx)(n.code,{children:"SetActorLocation()"})," function."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.strong,{children:"SizeSquared2D()"}),", for efficiency, does not use the ",(0,i.jsx)(n.code,{children:"Z"})," direction, and doesn\u2019t use a square root calculation, as we are only considering X and Y differences in position."]}),(0,i.jsxs)(n.p,{children:["Finally, ",(0,i.jsx)(n.strong,{children:"_baseLoc"})," needs to be set for each Enemy."]})]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["Within ",(0,i.jsx)(n.strong,{children:"BeginPlay"}),", ",(0,i.jsx)("u",{children:"add"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"_baseLoc = GetActorLocation();\n"})}),"\n",(0,i.jsx)(n.p,{children:"So that the base location is the starting pos of the AI."}),"\n",(0,i.jsx)(n.p,{children:"Finally, we need to \u2018register\u2019 the Player as an object to be sensed."}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Within ",(0,i.jsx)(n.code,{children:"Project007Character.h"})," we would like the ",(0,i.jsx)(n.strong,{children:"BeginPlay()"})," function to run. Add the function. It should return void, take no parameters and should use the virtual and override keywords."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add"})," the following include line, just after the other include files in ",(0,i.jsx)(n.strong,{children:"Project007Character.cpp"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include "Perception/AISense_Sight.h" // To Register Sight Sense\n#include "Perception/AIPerceptionSystem.h" // To Register This Pawn\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["Add the following code for the ",(0,i.jsx)(n.strong,{children:"BeginPlay()"})," function:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void AProject007Character::BeginPlay() {\n\tSuper::BeginPlay();\n\tUAIPerceptionSystem::RegisterPerceptionStimuliSource(GetWorld(), UAISense_Sight::StaticClass(), this);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Super::BeginPlay()"})," just tells the code to run the base class ",(0,i.jsx)(n.strong,{children:"BeginPlay()"})," function, as well as our own, and the ",(0,i.jsx)(n.code,{children:"RegisterPerceptionStimuliSource"})," is how we tell the perception system that we care about sight."]}),"\n",(0,i.jsxs)(n.ol,{start:"14",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build the VS2022 project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the game and Play the game in the UE5 Editor."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"When the Player object moves to within a certain radius of an Enemy, the Enemy should move towards it.  When the Player object moves far enough away, the Enemy should move back to its base location."}),(0,i.jsx)(n.p,{children:"Move the Player \u2018behind\u2019 an Enemy.  You should note that the Enemy does not respond to it!  At present, we have set an Enemy\u2019s peripheral vision to 90\xb0 only.  Obviously, this can be changed, as required."})]}),"\n",(0,i.jsx)(n.h2,{id:"rotating-the-enemies",children:"Rotating the Enemies"}),"\n",(0,i.jsx)(n.p,{children:"At present, an Enemy will move towards a sensed object, within its field of view arc, or back to its base location, but it would be better if an Enemy rotated towards a player, in the direction it is moving in."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Do the following"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Enemy.h"})," file, add a new public function called ",(0,i.jsx)(n.strong,{children:"SetNewRotation()"})," that takes two ",(0,i.jsx)(n.code,{children:"FVector"})," parameters: one for target position and one for current position. Also, add a new member variable called ",(0,i.jsx)(n.strong,{children:"_enemyRotator"})," that will store the new rotation for the Enemy object."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Enemy.cpp"})," file, define the ",(0,i.jsx)(n.strong,{children:"SetNewRotation()"})," function. Subtract the current position from the target position to get a direction vector. Set the ",(0,i.jsx)(n.code,{children:"Z"})," value of the new direction to 0 to remove any vertical component. Compute the rotation needed to face the new direction by subtracting the current rotation from ",(0,i.jsx)(n.code,{children:"newDir.Rotation()"}),". Store this new rotation in ",(0,i.jsx)(n.strong,{children:"_enemyRotator"})," and set the actor's rotation to it using ",(0,i.jsx)(n.code,{children:"SetActorRotation()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"OnSensed()"})," function, call ",(0,i.jsx)(n.code,{children:"SetNewRotation()"})," with the location of the sensed actor and the current location of the Enemy object just before the end of the if statement."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the else statement of the ",(0,i.jsx)(n.code,{children:"OnSensed()"})," function, call ",(0,i.jsx)(n.code,{children:"SetNewRotation()"})," with the location of the base and the current location of the Enemy object just before the end of the else statement."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build and run the game in the UE5 Editor."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The Enemy should now move towards the Player object and the Enemy should rotate to the initial ",(0,i.jsx)(n.strong,{children:"\u2018sensed\u2019"})," position.  In addition, when moving back to the base location, the Enemy rotates in the direction it is moving back to."]}),"\n",(0,i.jsx)(n.p,{children:"The \u2018full\u2019 rotations are performed immediately, which is not ideal.  We will see that we can use interpolation to improve the rotations."}),"\n",(0,i.jsx)(n.h2,{id:"animating-the-enemies",children:"Animating the Enemies"}),"\n",(0,i.jsx)(n.p,{children:"It would be useful to have the Enemies animated so that in an idle state, one set of animations is performed, but when an Enemy moves, it would be useful if we could use the \u2018walk forward\u2019 animations."}),"\n",(0,i.jsx)(n.h3,{id:"exercise",children:"Exercise"}),"\n",(0,i.jsxs)(n.p,{children:["Please review ",(0,i.jsx)(n.strong,{children:"worksheet 4 from week (4)"})," regarding setting animations."]}),"\n",(0,i.jsxs)(n.p,{children:["Within the ",(0,i.jsx)(n.strong,{children:"Content Browser"}),", (in the ",(0,i.jsx)(n.strong,{children:"InfinityBladeWarriors"}),", ",(0,i.jsx)(n.strong,{children:"Character"}),", ",(0,i.jsx)(n.strong,{children:"CompleteCharacters"})," folder), ",(0,i.jsx)(n.strong,{children:"right-click"})," on the ",(0,i.jsx)(n.strong,{children:"SK_CharM_Forge"})," asset and select, ",(0,i.jsx)(n.strong,{children:"Skeleton"}),", then ",(0,i.jsx)(n.strong,{children:"Assign Skeleton"})," and then select ",(0,i.jsx)(n.strong,{children:"UE4_Mannequin_Skeleton"}),", (in AnimStarterPack) and click on the ",(0,i.jsx)(n.strong,{children:"Accept"})," button."]}),"\n",(0,i.jsxs)(n.p,{children:["Within the ",(0,i.jsx)(n.strong,{children:"Content Browser"}),", ",(0,i.jsx)(n.strong,{children:"Right-click"})," on the ",(0,i.jsx)(n.strong,{children:"SK_CharM_Forge"})," asset and select Create and then select ",(0,i.jsx)(n.strong,{children:"Blend Space 1D"}),". Change the ",(0,i.jsx)(n.strong,{children:"name"})," to ",(0,i.jsx)(n.strong,{children:"ForgeBlendSpace"}),". ",(0,i.jsx)(n.strong,{children:"Double-click"})," on ",(0,i.jsx)(n.strong,{children:"ForgeBlendSpace"})," to open the Animation editor. Blend between animations: ",(0,i.jsx)(n.strong,{children:"Idle_Rifle_Hip"})," and ",(0,i.jsx)(n.strong,{children:"Walk_Fwd_Rifle_ironsights"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Right-click"})," on the ",(0,i.jsx)(n.strong,{children:"SK_CharM_Forge"})," asset and select ",(0,i.jsx)(n.strong,{children:"Create"})," and then select ",(0,i.jsx)(n.strong,{children:"Anim Blueprint"}),". ",(0,i.jsx)("u",{children:"Change"})," the name to ",(0,i.jsx)(n.strong,{children:"EnemyAnimBP"})," and then ",(0,i.jsx)(n.strong,{children:"Double-click"})," it."]}),"\n",(0,i.jsxs)(n.p,{children:["Create an ",(0,i.jsx)(n.strong,{children:"AnimGraph"}),", with a ",(0,i.jsx)(n.strong,{children:"State machine"})," labelled ",(0,i.jsx)(n.strong,{children:"Idle_Walk"}),", connect to the ",(0,i.jsx)(n.strong,{children:"Output Pose"})," node, ",(0,i.jsx)("u",{children:"double-click"})," it and change it to look as follows:"]}),"\n",(0,i.jsx)("div",{class:"image-container",children:(0,i.jsx)("img",{src:o,width:"50%",alt:"Picture 0"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Note: Create a ",(0,i.jsx)(n.strong,{children:"new variable"})," named: ",(0,i.jsx)(n.strong,{children:"isWalking"})," and ensure the transitions between the Idle state and walk state, use the ",(0,i.jsx)(n.strong,{children:"isWalking"})," variable, to set the result nodes, appropriately."]})}),"\n",(0,i.jsxs)(n.p,{children:["Ensure the ",(0,i.jsx)(n.strong,{children:"Idle"})," and ",(0,i.jsx)(n.strong,{children:"Walk"})," states have ",(0,i.jsx)(n.strong,{children:"ForgeBlendSpace"})," blend spaces ",(0,i.jsx)("u",{children:"connected"})," to their ",(0,i.jsx)("u",{children:"respective"})," ",(0,i.jsx)(n.strong,{children:"Output Animation Pose"})," nodes (remember to multiply by 100 for the Walk state)."]}),"\n",(0,i.jsxs)(n.p,{children:["We now need to update the animation based on whether the enemy is moving.  Click on the ",(0,i.jsx)(n.strong,{children:"Event Graph"})," panel, and like before, add the BP nodes, below:"]}),"\n",(0,i.jsx)("div",{class:"image-container",children:(0,i.jsx)("img",{src:r,width:"100%",alt:"Picture 1"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compile"})," and ",(0,i.jsx)(n.strong,{children:"Save"})," and ",(0,i.jsx)("u",{children:"close"})," the window."]}),"\n",(0,i.jsx)(n.p,{children:"Finally, we need to amend the Enemy blueprint."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Double-click"})," on the ",(0,i.jsx)(n.strong,{children:"BP_Enemy"})," blueprint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Click"})," on the ",(0,i.jsx)("u",{children:"Skeletal"})," ",(0,i.jsx)(n.strong,{children:"Mesh"})," in ",(0,i.jsx)(n.strong,{children:"Components"}),", and within the ",(0,i.jsx)(n.strong,{children:"Details"})," panel, select ",(0,i.jsx)(n.strong,{children:"EnemyAnimBP"})," from within ",(0,i.jsx)(n.strong,{children:"Anim Class"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compile"})," and ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Run"})," the game, and enemies should move and be animated too."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your enemies, should, initially, be in Idle state, and use the Idle animation.  When the pawn object is within an enemy\u2019s radius and within sight, then the respective enemy should move towards the pawn object and use the walking animation."}),"\n",(0,i.jsx)(n.h2,{id:"improving-the-enemy-rotation",children:"Improving the Enemy Rotation"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"At present, the Enemy objects move to / from a base location, and also rotate in the direction of the Enemy's velocity. The rotation is completed, as soon as a 'new' rotation is required, i.e. in one frame.  It would look better if the rotation was more slowly completed."}),(0,i.jsx)(n.p,{children:"It would be useful if it could rotate to a position in a few frames, rather than in one frame.  What if we could calculate a series of rotations so that the final rotation is achieved in a series of steps.  As such, the rotations look much more realistic and appealing."}),(0,i.jsx)(n.p,{children:"This is the idea of interpolation.  We calculate position / rotation stages between an initial and final position / rotation!"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Do the following"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Within ",(0,i.jsx)(n.code,{children:"Enemy.h"}),", add the following variables to the public section:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["float ",(0,i.jsx)(n.strong,{children:"_rotationSpeed"})," \u2013 this should be editable from anywhere."]}),"\n",(0,i.jsxs)(n.li,{children:["bool ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," \u2013 this shouldn\u2019t be accessed outside of code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["In the constructor of ",(0,i.jsx)(n.code,{children:"Enemy.cpp"}),", set ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," to be false and ",(0,i.jsx)(n.strong,{children:"_rotationSpeed"})," to be 1."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"OnSensed()"})," function, set ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," to true just before the if statement that checks if the actor was successfully sensed."]}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.strong,{children:"SetNewRotation()"})," function to the following:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get the difference vector between the target position and the current position and ignore any difference in the Z-axis."}),"\n",(0,i.jsxs)(n.li,{children:["Set the ",(0,i.jsx)(n.strong,{children:"_enemyRotator"})," variable to this rotation."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," is true, set the rotation using ",(0,i.jsx)(n.strong,{children:"RInterpTo"})," function with the current rotation, ",(0,i.jsx)(n.strong,{children:"_enemyRotator"}),", and ",(0,i.jsx)(n.strong,{children:"DeltaTime"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," is false, set the rotation directly using ",(0,i.jsx)(n.strong,{children:"SetActorRotation()"})," function, like you are currently doing."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Tick()"})," function, if ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," is true, calculate the new rotation using ",(0,i.jsx)(n.strong,{children:"RInterpTo"})," function with the current rotation, ",(0,i.jsx)(n.strong,{children:"_enemyRotator"}),", DeltaTime, and ",(0,i.jsx)(n.strong,{children:"_rotationSpeed"}),". If the new rotation is nearly equal to ",(0,i.jsx)(n.strong,{children:"_enemyRotator"}),", set ",(0,i.jsx)(n.strong,{children:"_interpRotation"})," to false and set the rotation directly using ",(0,i.jsx)(n.strong,{children:"SetActorRotation"})," function."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note how an Enemy object now rotates to the required orientation, over a ",(0,i.jsx)("u",{children:"number"})," of frames, using the ",(0,i.jsx)(n.strong,{children:"RInterpTo()"})," function.  Whilst playing the game, press the ",(0,i.jsx)(n.strong,{children:"F8"})," key to stop 'playing', but be able to edit within the UE5 Editor.  Click on an ",(0,i.jsx)(n.strong,{children:"Enemy"})," object and ",(0,i.jsx)("u",{children:"adjust"})," the 'rotation speed' value.  Set 'rotation speed' values ranging from 0.1 to 5.0, for different Enemies. Consider the 'best' value for your game."]}),"\n",(0,i.jsx)(n.p,{children:"Interpolation, essentially, calculates different points between a start and end value.  For example, 20 different positions may be calculated, based upon the speed value selected."}),"\n",(0,i.jsxs)(n.p,{children:["Interpolation can also be applied to linear values, in fact that is how a blend space is calculated, where numerous values between ",(0,i.jsx)(n.code,{children:"0.0"})," and ",(0,i.jsx)(n.code,{children:"100.0"})," are calculated, which changes which animation frames are selected."]}),"\n",(0,i.jsx)(n.h2,{id:"points-to-consider",children:"Points to Consider"}),"\n",(0,i.jsx)(n.p,{children:"Some AI perception values are hard-coded.  Would it be better if such values were set as editable properties in the UE5 editor?"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);