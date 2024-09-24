import W5PIC1 from './img/w5_pic1.png';
import W5PIC2 from './img/w5_pic2.png';

# Week 5 - Artificial Intelligence

:::info

Task Sheet 5 - Describes the systems available within Unreal Engine that can be use to create believable AI entities in your projects.

:::

## Using Perception Sensing
At present, we have Enemies and a player / pawn object.  It would be useful if we could get the Enemies to respond when the player gets near.  UE5 has a sophisticated perception / sensing system.  The most simple approach is to sense when a player is within ‘sight’ and within a certain radius of the player.

We are going to add sensing to the Enemy objects, to achieve this. It would be useful if an **Enemy** could move towards a player, if a **‘sensed’** object is in its line of sight, and close enough to it.

**Do the following**:

1.	Open the Project007 project in the UE5 Editor, then use menu option **File**, **Refresh Visual Studio**, and then **File**, **Open Visual Studio** option.

2.	Within the **`Project007.Build.cs`** file, or similar, <u>change</u>:

```cs

PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine",
			"InputCore", "HeadMountedDisplay", "EnhancedInput" });

```

By <u>adding</u> **AIModule** to the dependency module name, as follows:

```cs

PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine",
			"InputCore", "HeadMountedDisplay", "EnhancedInput", "AIModule" });
```

The `AIModule` is used for perception sensing.

3.	Add the following code towards the bottom of the Enemy class header:

4.	Declare and define the following member variables within the class:

	- **`_aiPercComp`** - a pointer to a `UAIPerceptionComponent`, visible in defaults only and belonging to the **"Enemy"** category.

	- **`_sightConfig`** - a pointer to a `UAISenseConfig_Sight`, visible in defaults only and belonging to the **"Enemy"** category.

	- **`_baseLoc`** - an `FVector` visible anywhere and belonging to the **"Movement"** category.

	- **`_currVelocity`** - an `FVector` visible and writable in blueprints and belonging to the **"Movement"** category.

	-	**`_speed`** - a float visible anywhere and belonging to the **"Movement"** category.
	-	**`_Radius`** - a float editable anywhere and belonging to the **"Enemy"** category.
	-	**`_distSquared`**, a float that we’re going to use for back to base calculations.
	-	**`_backToBase`** - a bool indicating whether the enemy should return to its base location.

5.	Declare a `UFUNCTION` called **"OnSensed()"** with a parameter of const `TArray<AActor*>&` called **“testActors”**.

:::info

We are adding an AI Perception component, with a config attribute, `sightConfig`, that stores the settings for the sight sensing.  In addition, the **`OnSensed()`** function will run when an object has been sensed.

The other attributes are used to store where the start / base location of the Enemy is, and the current velocity direction, and speed, that the Enemy is moving at, if at all.

:::

6.	Within `Enemy.cpp`, add the required includes for **UAIPerceptionComponent** and **UAISenseConfig**. Forward declare in the `.h`!

7. Also, **add** the following code to the **constructor**:
	- Add the following properties to the constructor:
		- **_currVelocity**	: initialized as a zero vector
		- **_speed**		: set to 30.0f
		- **_radius**		: set to 500.0f
		- **_distSquared**	: set to a defined big number
		- **_backToBase:**	: set to false
	- Create an AI Perception component within the constructor.
	- Create a sight configuration for the AI Perception component with the following settings:
		- **SightRadius**: set to the previously defined radius value
		- **LoseSightRadius**: set to the radius plus 100.0f	
		- **PeripheralVisionAngleDegrees**: set to 90.0f
		- **DetectionByAffiliation**: set to detect enemies, neutrals, and friendlies
		- **SetMaxAge**: set to 0.5f
	- Configure the AI Perception component with the sight configuration using `“ConfigureSense”`, a member function of AIPerceptionComponent.
	- Set the dominant sense of the AI Perception component to be the sight configuration's implementation using `“SetDominamtSense”`.
	- Add the following dynamic delegate to the **`OnPerceptionUpdated`** event of the AI Perception:
	```cpp
		aiPercComp->OnPerceptionUpdated.AddDynamic(this, &AEnemy::OnSensed);
	```
	:::note
	This should create an AI Perception component with line of sight values set.  Note too that when an object is sensed, the OnSensed function will be called. That is the result of the above line of code. It works the same way you have bound input previously.
	:::


8.	In the **"OnSensed()"** function:

	- Iterate through the **"testActors"** array using a **"for"** loop.

	- Get the name of the `"i-th"` actor in the "testActors" array using the **"GetName()"** function and store it in a `FString` variable **"n"**.

	- Create a `"FActorPerceptionBlueprintInfo"` variable **"info"** and call the **"GetActorsPerception()"** function of `"_aiPercComp"` using `testActors[i]` and info as parameters to get the perception information of the **"i-th"** actor.

	- Check if the **"LastSensedStimuli"** array in "info" is not empty and the first element of the array was successfully sensed using its **"WasSuccessfullySensed()"** function.

	- If the above condition is true, calculate the direction vector `"dir"` by subtracting the location of the **"i-th"** actor from the location of the Enemy and set the <u>Z</u> component of **"dir"** to 0.0f.

	- Normalize the `"dir"` vector using the **"GetSafeNormal()"** function and multiply it with the `"_speed"` variable to get the current velocity of the Enemy.

	- Set the **"_currVelocity"** variable to the current velocity calculated in step (f).

	- If the condition in step (d) is false, calculate the direction vector `"dir"` by subtracting the **"_baseLoc"** variable from the location of the Enemy and set the `Z` component of **"dir"** to 0.0f.

	- Check if the squared 2D distance between `"dir"` and the Enemy is greater than **1.0f**.

	- If the above condition is true, normalize the `"dir"` vector using the **"GetSafeNormal()"** function and multiply it with the `"_speed"` variable to get the current velocity of the Enemy.

	- Set the **"_currVelocity"** variable to the current velocity calculated in the previous step and set the `"_backToBase"` variable to true.


:::tip
Note how an array of actors, that are sensed, is made available to the `OnSensed()` function. The function `WasSuccessfullySensed()` is true when an appropriate object is in sight and within a certain radius of the Enemy.  When an object then moves out of sight, or outside of the required radius, `WasSuccessfullySensed()` will be false.  At present, a velocity is set for the Enemy to move towards a sensed object, and then return to its base location, if a sensed object ‘leaves’ its ‘proximity’.
:::

We can now use the velocity within the Tick function, to move appropriately.


9.	In the **Tick** function:

	- Add an `"if"`` statement to check if **"_currVelocity"** is not zero.

	- If **"_currVelocity"** is not zero, calculate the new loc ation of the Enemy by adding `_currVelocity` multiplied by "DeltaTime" to the current location of the Enemy. (Think about your brackets!)

	- If **"_backToBase"** is true, check if the squared 2D distance between the new location and `"_baseLoc"` is less than `"_distSquared"`. The **“SizeSquared2D()”** function will help here.

	- If the squared 2D distance is less than `_distSquared`, update `_distSquared` to be equal to the squared 2D distance.

	- If the squared 2D distance is greater than `_distSquared`, set `_currVelocity` to be a zero vector, set `_distSquared` to be **BIG_NUMBER**, and set `_backToBase` to false.

	- Set the location of the Enemy to the new location calculated in step 5 using the `SetActorLocation()` function.

:::note

We use **SizeSquared2D()**, for efficiency, does not use the `Z` direction, and doesn’t use a square root calculation, as we are only considering X and Y differences in position.

Finally, **_baseLoc** needs to be set for each Enemy.  
:::


10. Within **BeginPlay**, <u>add</u>:

```cpp
_baseLoc = GetActorLocation();
```

So that the base location is the starting pos of the AI.

Finally, we need to ‘register’ the Player as an object to be sensed.


11.	Within `Project007Character.h` we would like the **BeginPlay()** function to run. Add the function. It should return void, take no parameters and should use the virtual and override keywords.

12.	**Add** the following include line, just after the other include files in **Project007Character.cpp**.

```cpp
#include "Perception/AISense_Sight.h" // To Register Sight Sense
#include "Perception/AIPerceptionSystem.h" // To Register This Pawn
```

13.	Add the following code for the **BeginPlay()** function:

```cpp
void AProject007Character::BeginPlay() {
	Super::BeginPlay();
	UAIPerceptionSystem::RegisterPerceptionStimuliSource(GetWorld(), UAISense_Sight::StaticClass(), this);
}
```
`Super::BeginPlay()` just tells the code to run the base class **BeginPlay()** function, as well as our own, and the `RegisterPerceptionStimuliSource` is how we tell the perception system that we care about sight. 


14.	Build the VS2022 project.

15.	Run the game and Play the game in the UE5 Editor.


:::tip
When the Player object moves to within a certain radius of an Enemy, the Enemy should move towards it.  When the Player object moves far enough away, the Enemy should move back to its base location.  

Move the Player ‘behind’ an Enemy.  You should note that the Enemy does not respond to it!  At present, we have set an Enemy’s peripheral vision to 90° only.  Obviously, this can be changed, as required.

:::


## Rotating the Enemies

At present, an Enemy will move towards a sensed object, within its field of view arc, or back to its base location, but it would be better if an Enemy rotated towards a player, in the direction it is moving in.


**Do the following**:

1.	In the `Enemy.h` file, add a new public function called **SetNewRotation()** that takes two `FVector` parameters: one for target position and one for current position. Also, add a new member variable called **_enemyRotator** that will store the new rotation for the Enemy object.

2.	In the `Enemy.cpp` file, define the **SetNewRotation()** function. Subtract the current position from the target position to get a direction vector. Set the `Z` value of the new direction to 0 to remove any vertical component. Compute the rotation needed to face the new direction by subtracting the current rotation from `newDir.Rotation()`. Store this new rotation in **_enemyRotator** and set the actor's rotation to it using `SetActorRotation()`.

3.	In the `OnSensed()` function, call `SetNewRotation()` with the location of the sensed actor and the current location of the Enemy object just before the end of the if statement.

4.	In the else statement of the `OnSensed()` function, call `SetNewRotation()` with the location of the base and the current location of the Enemy object just before the end of the else statement.

5.	Build and run the game in the UE5 Editor.

The Enemy should now move towards the Player object and the Enemy should rotate to the initial **‘sensed’** position.  In addition, when moving back to the base location, the Enemy rotates in the direction it is moving back to.

The ‘full’ rotations are performed immediately, which is not ideal.  We will see that we can use interpolation to improve the rotations.


## Animating the Enemies

It would be useful to have the Enemies animated so that in an idle state, one set of animations is performed, but when an Enemy moves, it would be useful if we could use the ‘walk forward’ animations.  

### Exercise

Please review **worksheet 4 from week (4)** regarding setting animations.  


Within the **Content Browser**, (in the **InfinityBladeWarriors**, **Character**, **CompleteCharacters** folder), **right-click** on the **SK_CharM_Forge** asset and select, **Skeleton**, then **Assign Skeleton** and then select **UE4_Mannequin_Skeleton**, (in AnimStarterPack) and click on the **Accept** button.

Within the **Content Browser**, **Right-click** on the **SK_CharM_Forge** asset and select Create and then select **Blend Space 1D**. Change the **name** to **ForgeBlendSpace**. **Double-click** on **ForgeBlendSpace** to open the Animation editor. Blend between animations: **Idle_Rifle_Hip** and **Walk_Fwd_Rifle_ironsights**.

**Right-click** on the **SK_CharM_Forge** asset and select **Create** and then select **Anim Blueprint**. <u>Change</u> the name to **EnemyAnimBP** and then **Double-click** it.
 
Create an **AnimGraph**, with a **State machine** labelled **Idle_Walk**, connect to the **Output Pose** node, <u>double-click</u> it and change it to look as follows:


<div class="image-container">
<img src={W5PIC1} width={"50%"} alt="Picture 0" />
</div>

:::note
Note: Create a **new variable** named: **isWalking** and ensure the transitions between the Idle state and walk state, use the **isWalking** variable, to set the result nodes, appropriately. 
:::


Ensure the **Idle** and **Walk** states have **ForgeBlendSpace** blend spaces <u>connected</u> to their <u>respective</u> **Output Animation Pose** nodes (remember to multiply by 100 for the Walk state).  

We now need to update the animation based on whether the enemy is moving.  Click on the **Event Graph** panel, and like before, add the BP nodes, below:
<div class="image-container">
<img src={W5PIC2} width={"100%"} alt="Picture 1" />
</div>

**Compile** and **Save** and <u>close</u> the window.

Finally, we need to amend the Enemy blueprint.

1.	**Double-click** on the **BP_Enemy** blueprint.
2.	**Click** on the <u>Skeletal</u> **Mesh** in **Components**, and within the **Details** panel, select **EnemyAnimBP** from within **Anim Class**.
3.	**Compile** and **Save**.
4.	**Run** the game, and enemies should move and be animated too.

Your enemies, should, initially, be in Idle state, and use the Idle animation.  When the pawn object is within an enemy’s radius and within sight, then the respective enemy should move towards the pawn object and use the walking animation.


## Improving the Enemy Rotation

:::tip
At present, the Enemy objects move to / from a base location, and also rotate in the direction of the Enemy's velocity. The rotation is completed, as soon as a 'new' rotation is required, i.e. in one frame.  It would look better if the rotation was more slowly completed.  

It would be useful if it could rotate to a position in a few frames, rather than in one frame.  What if we could calculate a series of rotations so that the final rotation is achieved in a series of steps.  As such, the rotations look much more realistic and appealing.

This is the idea of interpolation.  We calculate position / rotation stages between an initial and final position / rotation!

:::

**Do the following**:

1.	Within `Enemy.h`, add the following variables to the public section:
	- float **_rotationSpeed** – this should be editable from anywhere.
	- bool **_interpRotation** – this shouldn’t be accessed outside of code.
2.	In the constructor of `Enemy.cpp`, set **_interpRotation** to be false and **_rotationSpeed** to be 1.
3.	In the **OnSensed()** function, set **_interpRotation** to true just before the if statement that checks if the actor was successfully sensed.
4.	Update the **SetNewRotation()** function to the following:
	- Get the difference vector between the target position and the current position and ignore any difference in the Z-axis.
	- Set the **_enemyRotator** variable to this rotation.
	- If **_interpRotation** is true, set the rotation using **RInterpTo** function with the current rotation, **_enemyRotator**, and **DeltaTime**.
	- If **_interpRotation** is false, set the rotation directly using **SetActorRotation()** function, like you are currently doing.
5.	In the **Tick()** function, if **_interpRotation** is true, calculate the new rotation using **RInterpTo** function with the current rotation, **_enemyRotator**, DeltaTime, and **_rotationSpeed**. If the new rotation is nearly equal to **_enemyRotator**, set **_interpRotation** to false and set the rotation directly using **SetActorRotation** function.


Note how an Enemy object now rotates to the required orientation, over a <u>number</u> of frames, using the **RInterpTo()** function.  Whilst playing the game, press the **F8** key to stop 'playing', but be able to edit within the UE5 Editor.  Click on an **Enemy** object and <u>adjust</u> the 'rotation speed' value.  Set 'rotation speed' values ranging from 0.1 to 5.0, for different Enemies. Consider the 'best' value for your game. 

Interpolation, essentially, calculates different points between a start and end value.  For example, 20 different positions may be calculated, based upon the speed value selected.

Interpolation can also be applied to linear values, in fact that is how a blend space is calculated, where numerous values between `0.0` and `100.0` are calculated, which changes which animation frames are selected.



## Points to Consider
Some AI perception values are hard-coded.  Would it be better if such values were set as editable properties in the UE5 editor?
