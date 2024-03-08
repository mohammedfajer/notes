
import W6PIC1 from './img/w6_pic1.png';
import W6PIC2 from './img/w6_pic2.png';
import W6PIC3 from './img/w6_pic3.png';
import W6PIC4 from './img/w6_pic4.png';

# Week 6 - Grabbing and Throwing Objects


## Grabbing and Throwing Objects

It would be useful if, within the previous Project007 project, we had a game feature that enables objects to be picked-up / grabbed, when a player is near to them, and then thrown / propelled, as required.  In UE5, we can use a **`PhysicsHandleComponent`** to hold and move objects.


### Adding a Socket to Hold a Collectable


We want to carry a collectable, if we move over it.  To do this it would be useful to be able to hold the object within the player’s hand.  

The player has a skeleton with numerous bones setup.  We would like to add an extra socket to the skeletal mesh for holding an object.  

**Do the following**:


1.	**Open** the Project007 project.

2.	Double-click on **SK_CharM_Warrior**, (within **InfinityBladeWarriors**, **Character**, **CompleteCharacters** <u>folder</u>), and the Skeletal editor should be displayed.

3.	Click on the **Skeleton Tree** panel, which should show the list of bones for this skeleton. 


We want to add a socket for holding a collectable.


4.	Right-click over the **index_01_l** bone, select **Add Socket** and <u>double-click</u> on it and <u>rename</u> it to **CollSocket**, as shown below.



<div class="image-container">
<img src={W6PIC1} width={"15%"} alt="Picture 0" />
</div>


5. Click on <img src={W6PIC2} width={"8%"} alt="Picture 1" />   and **CollSocket** and within the **Details** panel, set the **Relative location** to, **X = 0** and **Y = -15.5** and **Z = 3.7**.


6. Click on the **Save** button, and **close** the editor(s).


### Adding Inputs for Dropping and Throwing Objects

Later on, we will grab collectables and drop and throw, as required.  We will need input events.  

**Do the following**:

1.	Click on **Edit**, **Project settings** and select **Input** and add **Drop** and **Throw Action Mappings**, using the icon <img src={W6PIC3} width={"5%"} alt="Picture 2" />  , as shown below:


<div class="image-container">
<img src={W6PIC4} width={"30%"} alt="Picture 3" />
</div>

2.	**Close** the Project settings dialog window and **Save** the project.

### Adding a `PhysicsHandleComponent` and Health Attribute

We would like to be able to `grab/pick` up appropriate objects, when we get near them, and then throw them, as required.  Firstly, we need to add a **`PhysicsHandleComponent`** to hold an object, and `disable/enable` physics on it, as required. 


A Health attribute would also be useful.  

**Do the following**:

1.	Load VS2022 (you may wish to use File, Refresh Visual Studio and File, Open Visual Studio in the UE5 editor before loading it), and from it, <u>open</u> the **`Project007Character.h`** file.  **Add**, towards the end of the class,  the following:


```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Health")
float health;

UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "Grab")
class UPhysicsHandleComponent *physicsHandle;
```

2.	Also, add #include **"PhysicsEngine/PhysicsHandleComponent.h"** just before the `.generated` include.


3.	**Open** the **Project007Character.cpp** file. Within the constructor, add:

```cpp
physicsHandle = CreateDefaultSubobject<UPhysicsHandleComponent>(TEXT("PhysicsHandle"));
health = 100.0f;
```

This code adds a **PhysicsHandleComponent** to hold an object.



## Ading a Grabbable Function


:::info
We now want to run an **onGrab()** function when a collectable is hit.  We also need to specify the currently held object’s current collision type, as we need to switch off physics/collision whilst it is held, but need to reset them back, when we drop/throw it, later.
:::



1.	Open the **Project007Character.h** file.

2.	Define the following member variables

	- a.	Define a variable called **grabActor** of type `AActor*`.

	- b.	Define a variable called **grabComp** of type `UPrimitiveComponent*`.

	- c.	Define a variable called **compCollisionType** of type `ECollisionEnabled::Type`.

3.	Define a function called **onGrab** that takes two parameters:

	- a.	an AActor pointer called **a**

	- b.	a UPrimitiveComponent pointer called **HitComp**

4.	Within the constructor, set **grabActor** and **grabComp** to **nullptr**.

We can now add the code for the `onGrab()` function.  


5.	Check if object can be grabbed

	- a.	Check if **grabActor** is null and if **HitComp** is simulating physics. If both conditions are true, continue to the next task.

6.	Set variables and switch off physics and collision

	- a.	Assign "a" to **grabActor** using the **Cast** function.

	- b.	Assign **HitComp** to **grabComp**.
	
	- c.	Get the current collision type of **grabComp** and assign it to **compCollisionType**.
	
	- d.	Switch off physics for **grabComp** using **SetSimulatePhysics(false)**.
	
	- e.	Set the collision for **grabComp** to **NoCollision** using **SetCollisionEnabled(ECollisionEnabled::NoCollision)**.

7.	Grab object and attach to character mesh

	- a.	Use **physicsHandle->GrabComponentAtLocation** to grab **grabComp** and attach it to **grabActor** at its location. For the second parameter, pass in `FName(“None”)`.
	
	- b.	Use **GetMesh()->GetSocketByName(FName)** to get a socket called **CollSocket** from the character mesh.
	
	- c.	If the socket exists, use the following line of code to attach the mesh to the socket:


```cpp
grabActor->AttachToComponent(GetMesh(), 
	FAttachmentTransformRules(EAttachmentRule::SnapToTarget, EAttachmentRule::KeepWorld,
	 EAttachmentRule::KeepWorld, false),
	 TEXT("CollSocket"));
```


:::note
**Note**: `FAttachmentTransformRules` are essentially a list of settings you are passing into the function. They are set using the `enum EAttachmentRule` for the location, rotation and scale, and a bool for whether attached bodies should be welded to the `attacher`. 
:::


8. **Build** to verify the code.

## Releasing the Grabbed Object

We can grab objects, but we also need to release them.  Let’s add some code to release the objects. We need to add functions that will drop an object. 

**Do the following**:

1. <u>Open</u> the `Project007Character.h` file. Add the following functions:

	```cpp
	void dropObject();
	void detachObject();
	```

2. In `dropObject()`:

	a.	Check if object is being held. If it is we’re going to detach the object and add an impulse.

	b.	Call the **detachObject** function to detach **grabActor** from the character.

	c.	Use **AddImpulse** on **grabComp** to apply a forward impulse to the object to simulate dropping it. The impulse is calculated by multiplying the character's forward vector by `10.0f`. For the name pass in `NAME_None` and set the bool for if it should be a change in velocity to true.

3. In `detachObject()`:

	a.	Call the **detachObject** function to detach **grabActor** from the character.

	b.	Use **DetachFromActor** on **grabActor** to detach it from the character mesh using **KeepWorld** as the location rule and **true** for weld simulation.

	c.	Use **SetSimulatePhysics(true)** on **grabComp** to reset the physics for the object.

	d.	Use **SetCollisionEnabled** on **grabComp** to set the collision to the value stored in **compCollisionType**.

	e.	Set **grabActor** to null.

4.	Now, Bind the `dropObject()` function to the Drop input you set up earlier. 


## Throwing the Grabbed Object

We can grab and drop objects, but, at present, we cannot throw them.  

**Do the following**:


1.	In the header add a member variable for the throw velocity. Expose it to blueprint so we can adjust it.
 
2.	Add a function called throw object that works the same as `dropObject()`, but instead of multiplying the velocity by 10, we multiply it by the impulse we just set up.
 
3.	Now, Bind the `ThrowObject` function to the Throw input you set up earlier. 



### Adding Grabble Items that have a Value

Let’s add **'collectables'** that when grabbed could be `thrown/propelled` and have a value associated with them that could be used for gameplay.  

For example, we could use the value of the items to affect the player, such as adjust health.

We also want the items to bounce, as we are going to create a low wall, which stops a player moving to an area, but where collectables could bounce over – we will need to reset coefficient of restitution for a material for the collectable to achieve this! 

**Do the following**:

1.	Within the UE5 Editor, right-click over the `C++ classes/Project007` folder, and select New C++ class.

2.	Create a class called Collectable based on an Actor. 

3.	Within VS2022, add the following attributes to the **Collectable.h** file:

	- a.	A `USphereComponent` pointer for collision that is editable anywhere.

	- b.	A `USoundBase` pointer that **“collects”** sound. This should be editable anywhere, blueprint read and writable and in the **“Gameplay”** category.

	- c.	An integer type for the value of the collectable, editable anywhere.

	- d.	A function callable from blueprint called OnHit. This is going to require a lot of parameters:
		- i.	`UPrimitiveComponent*` HitComp
		- ii.	`AActor*` OtherActor
		- iii.	`UPrimitiveComponent*` OtherComp 
		- iv.	FVector NormalImpulse

	- v.	`const FHitResult&` Hit

4.	Forward declare any classes in the header and add includes in the **.cpp** file.

5.	Add the following code to the constructor within the **Collectable.cpp** file:

	- a.	Use **CreateDefaultSubobject** to initialise the collision component member variable.

	- b.	Set the **RootComponent** to be the collision component.
	
	- c.	Use **SetSimulatePhysics** to enable physics simulation for the collision component.
	
	- d.	Use **SetCollisionProfileName** to set the collision profile of the component to **PhysicsActor**.
	
	- e.	Use **SetCollisionEnabled** to set the collision to be both query and physics enabled.
	
	- f.	Set the value of "value" to 1.

6.	Within BeginPlay add:

```cpp
// Note how a delegate / callback function is set to be dynamically called!
collisionComponent->OnComponentHit.AddDynamic(this, &ACollectable::OnHit);
```

7.	In the **OnHit()** function use **"Cast"** to check if the collided actor is of type **"Project007Character"**. If it is:

	- a.	Check if **"collectSound"** is not null. If it is not null, use **"PlaySoundAtLocation"** to play the sound at the location of the collectible object.
	- b.	Use **"onGrab"** on the character to handle the collection of the object. Pass the current collectible object and **"HitComp"** as parameters.
	- c.	Subtract the value of the collectible object from the character's "health" variable.

Note how the player character’s **onGrab()** function is called, and how the health attribute is directly updated!

8.	Within UE5, click on Compile.

As we have changed the character’s header file, we should also reload its BP.

9.	Right-click over the `ThirdPersonCharacter` BP, (in ThirdPersonCPP/Blueprints folder) and select Asset Actions, Reload.

10.	Within the UE5 Editor, create a Blueprint class, based on the C++ Collectable class, in the C++ classes/Project007 folder, and name it `BP_Collectable`, and save it in the Blueprints folder.

11.	Double-click on `BP_Collectable` and within the editor, click on `collisionComponent` within the Components panel.  

12.	In **Details**, set the **Sphere radius** to 12.0.

13.	In Collision, set Simulation generates **Hit** events to on.

14.	In **Phys Material** override select `PhysMat_Rubber`. 

15.	`Double-click` on **PhysMat_Rubber** to open the Physical Material editor. Click on File, Save As and name it: **PhysMat_Rubber2**.

16.	 Click on Override Restitution Combine Mode to set it on.

17.	Change the Restitution value to 0.9.  This should make it bounce even higher!

18.	Change the Restitution Combine Mode to Max.

19.	Click on Save and Close the Physical Material editor to go back to the **BP_Collectable** BP editor.

20.	In Phys Material override select **PhysMat_Rubber2**. 

21.	Click on the Add Component button, and from the menu, select Static Mesh and leave its name, as it is.

22.	Within the Static Mesh partition, select a **Sphere (100x100x100)**.

23.	Within Materials, select a suitable material, such as `WidgetMaterial_Y`.

24.	Within the **Detail** panel, and Transform partition, set the Location **Z** value as required, and set Scale to: **X = 0.2, Y = 0.2 and Z = 0.2**.

25.	Within the Collision section, set Collision Presets to **NoCollision**.

26.	Click on Class Defaults and Set an appropriate sound for Collect Sound.

27.	**Compile** and Save and Close the editor. 

28.	Drag at least two **BP_Collectable** objects to the Viewport window, and position, as required.

29.	Press the Save Current icon from within the UE5 Editor, and Play the game.

You should note that when the player moves to the collectable items, a sound is played, and it is grabbed to the socket.

Within the UE5 Editor, select one of the collectables, and change its Value property to say 2.  Check that the WS4Character object has 'different' health values, as collectables are grabbed.
