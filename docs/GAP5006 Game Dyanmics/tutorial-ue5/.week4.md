

import W4Pic0 from './img/W4Pic0.png';
import PIC1 from './img/pic1.png';
import PIC2 from './img/pic2.png';
import PIC3 from './img/pic3.png';
import PIC4 from './img/pic4.png';
import PIC5 from './img/pic5.png';
import PIC6 from './img/pic6.png';
import PIC7 from './img/pic7.png';
import PIC8 from './img/pic8.png';
import PIC9 from './img/pic9.png';
import PIC10 from './img/pic10.png';
import PIC11 from './img/pic11.png';
import PIC12 from './img/pic12.png';
import PIC13 from './img/pic13.png';
import PIC14 from './img/pic14.png';


# Week 4 - Animation Blueprints 

:::info

Task Sheet 4 - Using **Animation Blueprints** by creating logic in **Anim Graph** and **Event Graph**.

:::

<div class="image-container">
<img src={W4Pic0} width={"90%"} alt="Picture 0" />
</div>



## Adding 3D Models and Objects

:::tip

It is good practice for programmers to use ‘placeholder’ models, such as cubes and cylinders, whilst building a game, but to make a game more playable, the addition of 3D models is useful.  

To simplify development, we are going to create a project based upon the Third-Person C++ Template and modify it, as required.  

:::

This is a standard technique for game development, as many aspects of a game are pre-built, hastening development and testing.  Do the following:


1.	Open UE5 and create a new C++ Project using the Third Person template. Call is **Project007** or any name you like.

2.	Play the game, and you should be able to move the player using the WASD keys, and use the mouse too.  So, a significant amount of settings / code has been created, thus reducing development time.

Now, we want to add some models to our game. We are going to use freely available models available from **`UE5’s Marketplace`**.

**Do the following**:

3.	Open the Epic Launcher.  If you haven’t already, setup an Epic account, so you can access the Marketplace, and sign in, with your account.

4.	Click on Marketplace.

5.	Within the Search Products text box, type in: **Infinity Blade** and press the enter key.

6.	A list of potential options should be displayed.  Click on **“Infinity Blade: Warriors”**.

7.	Click on the Add to Project button.

8.	Select your project, e.g. Project007 and select the Add to Project button.

9.	Within the Marketplace, add the **“Animation Starter Pack”** to your project too.

10.	Close the Epic Launcher window.

11.	Open the UE5 Editor, for your selected project and within the Content Browser, an additional folder, labelled: InfinityBladeWarriors should be available. Make sure the Character sub-folders are present.

:::note
(Alternatively, from Moodle, download the ZIP file with the animation pack and models, and Extract the folders to the Content folder of your project, using File Explorer).
:::


## Adding an Enemy

:::tip
At present, we have a `ThirdPersonCharacter` Blueprint, (BP), based on the `Project007Character` C++ class – generated when the project was created.
:::

We want to create an Enemy based on a Character too, as it has code included for walking, similar to the Player.

1.	Within the C++ Classes/Project007 folder, right-click and select New C++ Class.

2.	Inherit from the Character class and call it Enemy.
 
3.	Compile the class from within the UE5 editor.

4.	Click on the Contents folder, in the Content browser. Right-click and select New Folder and rename it Blueprints. 

5.	Right-click over the Enemy class and select Create Blueprint based on Enemy.  Call it BP_Enemy.


## Adding Skeletal Models to the Enemy


Now that we have a number of models available, let’s add them to our objects. Previously, we have used simple static mesh models, such as cubes, for our objects. The warrior models we have imported, are **‘skeletal’** models, so we need to add them, as such.  Do the following:

1.	Within the UE5 Editor, Open the Blueprints folder and double-click on BP_Enemy.

2.	Click on the Mesh (Skeletal Mesh) component.

3.	Within the Details panel, within the Mesh partition, change the Skeletal Mesh to **SK_CharM_Forge**, by clicking on None and selecting it. (**Note**: the Materials partition should automatically show M_Char_Forge materials).

4.	Change the `Z` location value to `-90`, to approximately **‘match’** the collision capsule.

5.	Double–click on the SkeletalMesh component, within the Components panel, to view the model and collision capsule. At present, the mesh points in the Y direction.  It is usual for models to be placed in the X direction.  Set the Z Rotation value, within the Transform panel, to -90.

6.	Click on Compile and Save and then Close the Blueprint Editor.

7.	Drag two BP_Enemy objects to the viewport

8.	Play the game.

The skeletal meshes should be added to the Enemy objects.  Firstly, you may note that they are not facing the direction of the player.  


## Changing the Enemy to Face the Pawn Object


At present, the Enemies are not facing the Player when the game starts. It would be useful to rotate the Enemies so that they face the pawn object when the game starts.

**Do the following**:

1.	Within the `Enemy.cpp` **BeginPlay()** function, do the following:

    - Get the location of the player character. To find the Player you can use the following line: `GetWorld()->GetFirstPlayerController()->GetPawn()`. From there, you can get the location as you have in previous task sheets.

    - Calculate the difference between the player's location and the enemy's location. Store this as the `requiredDirection`.

    - Zero out the `Z` component of the `requiredDirection`. This is so the enemy doesn’t pitch when they rotate!

    - Calculate the difference between the required direction and the current direction of the enemy. Unreal helps us here by allowing use to subtract FRotators from each other. 

    - Normalize the rotation calculation so it becomes a unit vector.

    - Set the actor rotation of the enemy to the calculated rotation.

    - Draw a debug line to visualize the direction the enemy is looking. You can use the **`DebugDrawLine()`** function here, and you will need the World, the Enemy’s location, their forward vector and a FColor. I recommend `FColor::Red`. You will need to include **"DrawDebugHelpers.h"**.

2.	In UE5, click on the Compile button and save in the editor.



### Points to Consider

:::tip
Note how the required rotation of the Enemy to the pawn location is calculated.  We need to perform a rotation, based upon the current facing vector, which we have made in the positive `X` direction, and the difference in position between the pawn and the Enemy, with both changed to rotation values.  Note also, how a debug line can be added, which is good when debugging, to view how objects are orientated.
:::

## Amending the Player

1.	Open the `ThirdPersonCharacter` Blueprint, (in folder `ThirdPersonCPP/Blueprints`), and click on the Mesh component and set Skeletal Mesh to **SK_CharM_Warrior** (which should include material **M_Char_Warrior_B**).  Set the Skeletal MeshTransform `Z` value and `Z` rotation, if required. 

2.	Compile, Save and exit the BP editor.


## Animating the Player Model

:::tip 
Theoretically, the character assets should use animations based on its own skeleton.  The included 'warrior' assets may not have their animations working, for version 5.2 or 5.3.  The most widely used skeleton animation asset is `UE4_Mannequin_Skeleton`, which is part of the **Animation Starter pack**, available in UE5s Marketplace.  The skeletal asset has a series of animations based upon the bones setup within a skeletal mesh.
:::

1.	Within the Content Browser, (in the `InfinityBladeWarriors`, `Character`, `CompleteCharacters` folder), right-click on the `SK_CharM_Warrior` asset and select, Skeleton, then Assign Skeleton and then select `UE4_Mannequin_Skeleton`, (in AnimStarterPack), and click on the Accept button.

2.	Save the SK_CharM_Warrior asset, right-clicking it and select Save.

3.	Double-click on the SK_CharM_Warrior asset, and the Persona Animation Editor should be opened.  (Alternatively, double-click on the Skeleton mesh in ThirdPersonCharacter, to open the animation editor).
4.	Click on the <img src={PIC1} width={"50%"} alt="Picture 1" />  icon shown under the `Preview Scene Settings` to the right-hand size and a list of animations should be listed within the Asset Browser (usually at the bottom right-hand part of the screen. Save and then Close the Persona Animation editor.


<div class="image-container">

</div>

### Creating a Blend Space

We want to be able to deal with 2 animations, namely when an enemy is idle, or when it is walking.  For a change of animation state, we should blend the animations.  To do this in UE5, we create a Blend space.  Do the following:

1.	Within the Content Browser, Right-click on the `SK_CharM_Warrior` asset and select Create and then select Blend Space 1D.

2.	Change the name of the icon to `WarriorBlendSpace`.

3.	Double-click on **WarriorBlendSpace** to open the Animation editor.  The screen should show the Blend space area and a list of animation assets, in the Asset Browser, similar to below.

<div class="image-container">
<img src={PIC2} width={"70%"} alt="Picture 2" />
</div>

4.	Drag the `Idle_Rifle_Hip_Break1` animation to the left of the Blend space line, by [0.0], until a yellow diamond is on the blend line.

5.	Drag the `Walk_Fwd_Rifle_Ironsights` animation to the right of the Blend space line, by 100.0], until a yellow circle is on the blend line.

    If you move the green icon, <img src={PIC3} width={"2%"} alt="Picture 3" /> , along the blend line, you should note that the animation changes from idle to walking.

6.	Save and Close the editor.

The next stage of this process is to setup an Animation Blueprint that changes animations depending on a relevant **'state'**.



### Creating an Animation Blueprint

1.	Within the Content Browser, Right-click on the `SK_CharM_Warrior` (in `InfinityBladeWarriors/Character/CompleteCharacters`)  asset and select Create and then select Anim Blueprint.

2.	Change the name to `WarriorAnimBP` and press enter.

3.	Double-click on `WarriorAnimBP`.


### Adding a State Machine

1.	Click on the Anim Graph tab.

2.	Right-click within the AnimGraph area, <img src={PIC4} width={"20%"} alt="Picture 4" /> , and type / select Add new state machine or just type `State Machine`.

3.	Click on the name and reset it to Idle_Walk.
4.	Drag from the 'actor’ icon, <img src={PIC5} width={"3%"} alt="Picture 5" /> , to the Result node, in the Output Pose node.

5.	Double-click on the Idle_Walk state machine and you should be shown a panel, which has Entry shown.

6.	Drag from the arrow and click on `Add State...`and set it to `Idle`.  Your display should look similar to below:

<div class="image-container">
<img src={PIC6} width={"30%"} alt="Picture 6" />
</div>
 
7.	Double-click on the Idle state.  An Output Animation pose should be shown.  We would like to use the WarriorBlend we created before.  From the Asset Browser, (typically on the right-hand of the screen), drag WarriorBlendSpace on to the main panel.

8.	Drag from the 'actor’ icon, of WarriorBlendSpace, to the Result, of Output animation Pose.

9.	Right-click over the pin (with None shown) in WarriorBlendSpace and select Promote to variable. Change the name to isWalking and change it to a Boolean, in the Details panel, on the right.

10.	Drag the pin on isWalking to WarriorBlendSpace and accept the node that converts from Boolean to float. Your display should look similar to below:

    <div class="image-container">
    <img src={PIC7} width={"80%"} alt="Picture 7" />
    </div>
    
11.	Click on Idle_Walk (from within WarriorAnimBP>Anim Graph >Idle_Walk at the top of the window).

12.	Right-click within the panel, and select Add State... and type in Walk.

13.	Move the mouse cursor to within Idle, it should change colour around the state, and drag a transition arrow to the Walk state, similar to below.

    <div class="image-container">
    <img src={PIC8} width={"30%"} alt="Picture 8" />
    </div>
 

 
14.	Double-click on Walk and add WarriorBlendSpace, as above. Drag from the 'actor icon' to the Result node.

15.	Right-click over the panel and type in get is walking. Select isWalking variable.

16.	Drag from the pin on isWalking and choose ToFloat.

17.	Drag from the pin on ToFloat and type in multiply and change 0 to 100.

18.	Drag from the pin on multiply to the WarriorBlendSpace node. Your display should look similar to below:

    <div class="image-container">
    <img src={PIC9} width={"90%"} alt="Picture 9" />
    </div>
 
 

19.	Click back on Idle_Walk (within WarriorAnimBP>Anim Graph >Idle_Walk) and double click on the transition <img src={PIC10} width={"6%"} alt="Picture 10" /> .

20.	Right-click over the panel and select get is walking and drag from the pin to the Result, as below.

    <div class="image-continer">
    <img src={PIC11} width={"60%"} alt="Picture 11" />
    </div>
 
 
21.	Click on Idle_Walk (from within WarriorAnimBP>Anim Graph >Idle_Walk at the top of the window).

22.	Add a transition from Walk to Idle, and double-click the transition so that get is walking is selected and then from the output pin, select a `Not Boolean` node, and then set it linked to the Result, as shown below.

    <div class="image-container">
    <img src={PIC12} width={"60%"} alt="Picture 12" />
    </div>
 
23.	Your Idle_Walk display should look similar to below:

     <div class="image-cotainer">
    <img src={PIC13} width={"60%"} alt="Picture 13" />
    </div>

We now need to get values from `ThirdPersonCharacter` to set whether it should be idle or moving.  We need to add an event graph.




### Adding the Event Graph


1.	Click on the Event Graph tab.
2.	Drag the output pin, from Event Blueprint Update Animation, and select isValid.
3.	Within the panel, right-click and type / select Try Get Pawn Owner, drag from the Return value pin to the Input Object of IsValid.

Add the nodes shown below and connect as shown.

<div class="image-container">
<img src={PIC14} width={"90%"} alt="Picture 14" />
</div>

4.	Compile, Save and Close the editor.

Most of this graph is simply getting the `Project007Character`. We try to get the anim owner and then cast it to a `Project007Character` so we can get the values we need. We then check if the velocity in the Project007Character’s **`CharacterMovement`** component is less than `0.1`. We then set the **`IsWalking`** bool based on that. Hopefully you can see how we might extend this to have a different animation for running. 



### Running the Animation Blueprint

Finally, we need to assign the animation blueprint to the skeletal mesh.

1.	Double-click on the **`ThirdPersonCharacter`** blueprint.
2.	Click on the Mesh and within the Details panel, select **`WarriorAnimBP`** from within Anim Class.
3.	Compile and Save.
4.	Play the game.

When not moving, the **`ThirdPersonCharacter`** object should be animating in Idle mode, but when it is moved, the animations should change to walking forwards.


### Points to Consider

:::tip
It would be useful if the enemies could sense when the player is close to it, so that they could move towards them, to provide some jeopardy for the player, to enhance gameplay.

Also, the rotation of the enemy to the player could be better.  

In the next worksheet, sight sense perception will be added to the enemies and rotations will be interpolated to improve the enemy rotation.

:::