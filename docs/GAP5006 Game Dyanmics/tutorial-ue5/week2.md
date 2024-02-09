import RefreshVS from './img/refresh_vs.png';
import IA from './img/w2_ue5_ia.png';
import IMC from './img/w2_imc.png';
import IA_Editor from './img/w2_input_action_editor.png';
import LOG_MSG from './img/w2_log.png';
import VS_DEBUG from './img/w2_debug_vs.png';
import BRKPOINT from './img/w2_breakpoint.png';
import VS_PLAY from './img/w2_vs_play.png';

import VS_STOP from './img/w2_vs_stop.png';
import VS_CONDITION from './img/w2_ue5_condition.png';



# Week 2 - Mouse Input and Spawning Game Objects


:::info

Task Sheet 2 - Working with UE5

:::

## Introduction

This week we are going to extend the simple object we created in Worksheet 1, so that a mouse can be used with input, and projectiles can be fired.

Do the following:

1. Open the **Epic Games Launcher**, to load UE5 and click on the Launch button for **Version 5.2.1** (or select the down arrow to select the version required). The UE5 **project browser** should be displayed.

2. Open project **GDyn1**. (Alternatively, double-click on the **GDyn1.uproject** file, in the folder where you stored the project from the previous worksheet). The previous UE5 project should be opened with the default **GDMap** setup displayed.

3. It is good practice to refresh the **VS** files, on openning a UE5 C++ project. Do this through **Tools -> Refresh Visual Studio Project**.



<div class="image-container">
<img src={RefreshVS} width={"60%"} alt="Refresh VS" />
</div>


## Mouse Input
At present, unless you completed the bonus tasks, the cube can only be moved in the world X and Y axes, even when the object is rotated. It would be useful to be able to face a direction we want to move in, using mouse input, and then use the keys to move in the selected direction, or at 90&deg; degrees to it. 

### Using Mouse Input

1. Create two input actions for turn called **IA_Turn** to use **Axis1D (float)** as the value type and one for lookup called **IA_Lookup** to use **Axis1D (float)** as the value type. To create this navigate to the **Content Drawer** under the Input folder (create one if not created). Right-click and select **Input** and then **Input Action**.


<div class="image-container">
<img src={IA} width={"90%"} alt="Refresh VS" />
</div>

2. Next open the **Input Mapping Context (IMC)** and the mapping for turn and lookup as shown below. For the **turn** make sure to select `Mouse X` as the input device and for **lookup** select the `Mouse Y` input device.

<div class="image-container">
<img src={IMC} width={"40%"} alt="Refresh VS" />
</div>

3. Now head to your C++ Visual studio project and open **GD_Pawn.h** header file.  Under the protected access specifier add the code for input actions as shown below.

```cpp
// ...
UPROPERTY(EditAnywhere, Category = "Enhanced Input")
UInputAction *InputTurn;

UPROPERTY(EditAnywhere, Category = "Enhanced Input")
UInputAction *InputLookup;
// ...
```

4. Now define the input callback methods for **turn** and **lookup** input actions as shown below.

```cpp
// ...
void Turn(const FInputActionValue &Value);
void Lookup(const FInputActionValue &Value);
// ...
```

Now open the cpp **GD_Pawn.cpp** source file. Inside **SetupPlayerInputComponent(...)** method setup the function binding for the input actions we have created.

```cpp
// ...
PEI->BindAction(InputTurn, ETriggerEvent::Triggered, this, &AGD_Pawn::Turn);
PEI->BindAction(InputLookup, ETriggerEvent::Triggered, this, &AGD_Pawn::Lookup);
// ...
```

5.  Inside the editor viewport select the **pawn** cube, and inside the **Details** panel under <u>Enhanced Input</u> setup the input actions we just created as shown below.


<div class="image-container">
<img src={IA_Editor} width={"40%"} alt="Refresh VS" />
</div>

### Responding to Mouse Inputs

Now that we've created two methods to respond to mouse movements and bound them to the input action mappings. What left is to code the logic for them.

1. Within the **GD_Pawn.cpp** file, add the following code logic.

#### Turn Method

- **Turn(..)** method should use the **`FInputActionValue`** paramter to receive input and extract the axis value from it using `Value.Get<FInputActionValue::Axis1D>()`. 
- Define a turn rate varaible **TurnRate** to control how fast the pawn turns. Adjust this value as needed.
- Calcuate the amount of turn based on the axis value, turn rate, and the delta time from **`GetWorld()->GetDeltaSeconds()`**.
- Get the current rotation of the pawn using **GetActorRotation()**.
- Update the <u>Yaw</u> component of the rotation (`NewRotation.Yaw`) by adding the calucated turn amount.
- Finally set the new rotation of the pawn using **`SetActorRotation(NewRotation)`**.

The following is a simple **pseudocode** (not real code) to illustrate the points.

```text
Function Turn(Value)
    AxisValue = ExtractAxisValue(Value)
    TurnRate = 100.0 // Adjust as needed
    TurnAmount = AxisValue * TurnRate * DeltaTime
    CurrentRotation = GetPawnRotation()
    NewRotation.Yaw = CurrentRotation.Yaw + TurnAmount
    SetPawnRotation(NewRotation)
End Function
```

#### Lookup Method

- **Lookup(..)** method should use the **`FInputActionValue`** paramter to receive input and extract the axis value from it using `Value.Get<FInputActionValue::Axis1D>()`. 
- Define a look rate variable **LookRate** to control how fast the camera rotates. Adjust this value as needed.
- Calculate the amount of rotation based on the axis value, look rate, and delta time from **`GetWorld()->GetDeltaSeconds()`**.
- Get the current rotation of the camera component using **`Camera->GetComponentRotation()`**.
- Update the <u>Pitch</u> component of the rotation, clamping it between -60 and -20 degrees to limit the camera's vertical movement.
- Set the new rotation of the camera component usinng **`Camera->SetWorldRotation(NewCameraRotation)`**;



The following is a simple **pseudocode** (not real code) to illustrate the points.

```text
Function Look(Value)
    AxisValue: float = ExtractAxisValue(Value)
    LookRate: float = 100.0 // Adjust as needed
    LookAmount: float = AxisValue * LookRate * DeltaTime
    NewCameraRotation: FRotator = GetCameraRotation()
    NewCameraRotation.Pitch = ClampAngle(CurrentCameraRotation.Pitch + LookAmount, -60.0, -20.0)
    SetCameraRotation(NewCameraRotation)
End Function
```


2. Within hte UE5 Editor, **Compile** the program. Play the game and move the mouse to rotate the object and also move the `pitch` rotation of the camera up and down. Make sure to **Save**.


:::info

**Note** how the object's rotation is changed, based on the `mouse X` position. Also, the camera also moves with the pawn object, as it is attached to the object.  Note, also how the camera's **pitch** is changed with `mouse y` position, but the **LookUp()** function does not change the object's rotation / position.

At present, the object still only moves vertically / horizontally.  It would be useful to move the object, based on the direction the object / camera is facing / pointing.
:::

## Moving an Object in a Rotated Direction

We need to know what the object's **direction** is. UE5 stores what is called a **`forward`** vector and a **`right`** vector for an Actor object. A Pawn object is an Actor, so we can use the actor's forward / right vectors to move in the correct directions. Alternatively we can use the `UStaticMeshComponent` i.e. **VisibleComponent** forward and right vectors to achive the same behaviour.

Unreal Engine uses a rare **left-handed**, Z-up coordinate system, this is inconveniently divergent from most other popular 3D software packages and commonly used game engines, but different doesn't mean wrong.


The most important thing to remember is that the virtual space inside your Unreal project is determined by three axes: ** <span style={{ color: 'red' }}> X </span> **, 
** <span style={{ color: 'green' }}>Y</span> **, and ** <span style={{ color: 'blue' }}> Z </span> **. They represent the ** <span style={{ color: 'red' }}> forward/backward </span> **, ** <span style={{ color: 'green' }}> left/right </span> **, and ** <span style={{ color: 'blue' }}> up/down </span> ** directions respectively.


Therefore to move the object alongside the actor forward and right vectors we do the following.

```cpp
// ...

// Get the forward and right movement components from the input
float ForwardInput = Input.Y;
float RightInput = Input.X;

// Calculate the movement direction based on the input
FVector ForwardVector = GetActorForwardsVector();
FVector RightVector = GetActorRightVector();
FVector MovementDirection = ForwardVector * ForwardInput + RightVector * RightInput;

// Calculate the new location for the pawn using the current velocity
FVector NewLocation = GetActorLocation() + 
    (CurrentVelocity * MovementDirection.GetSafeNormal() * GetWorld()->DeltaTimeSeconds);

// Move the pawn to the new location
SetActorLocation(NewLocation);
// ...
```


:::info

It should be noted the use of functions **`GetActorForwardVector()`** and **`GetActorRightVector()`** that return **FVector** objects showing the respective direction an object is 'facing' and the 'right' vector at 90° to the forward vector, which change when an object is rotated.

:::







## Debugging

:::info

We are going to use 3 main techniques for debugging our program in UE. Namely:
- On-Screen `Print` statements
- Output to a `Console-Log` window
- (Most usefully) Using Visual Studio `Debugger`

:::

### Debugging C++ Code in UE5

1. A good way to start debugging, and for use as a rudimentary feedback system, is to use a debug output message. Add the following code to any method you like, for example the `Move()` method, within the **GD_Pawn.cpp** file.

```cpp
if(GEngine)
    GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Green, TEXT("From Move") );
```


2. We also need to include the **Engine** header, as it includes numerous helper attributes / functions, including debug help functions. Add:

```cpp
#include "Engine/Engine.h" // Include this header to access GEngine and for debug msg
```

Just below the other include files in the cpp file.

3. Within the UE5 Editor, **Compile** and Play the game and use the mouse to rotate the object. Press the **W** and **S** keys and check that the debug message is displayed.


:::note

**Note**: The `-1` value in the **`AddOnScreenDebugMessage(...)`** ensures debug messages are added, one after another. The `5.0f` is the time to display the message before it disappear. 

You should note that numerous debug messages are displayed. So, the `Move()` method is being called.

We could continue to use on-screen debug messages, but if there are multiple messages, and if output messages need formatting, a more useful technique can be to use the **`log`** output facility available in UE5.

:::




### Using UE5's Log Output


:::info
UE5 features a useful log facility that provides detailed output on any items set for logging, including additions, changes, and log messages. For instance, it logs changes made to objects within the UE5 editor and provides output as a program runs.
:::


1. It would be useful to output the value of the `CurrentVelocity` member variable, at different stages within the program. Add the following debug message and add this code at the end of the `Move()` method.

```cpp
UE_LOG(LogTemp, Warning, TEXT("Move velocity %s"), *CurrentVelocity.ToString());
```

**Note** how `%s` substitutes a string value into it.  The **`ToString()` function returns a **TCHAR**, but we need the string, so we use the dereference pointer.

2. Copy the above code to the end of the **Tick()** function.  Amend text "Move()" to the respective function names.

3. Within the UE5 Editor, **Compile** the program.

4. We now want to display UE5's log window. Within the UE5 Editor, select menu option Window, Developer Tools, Output Log.  Move the window to an appropriate size / location.  It is recommended that you right-click over the output log and select Clear Log to reduce the current output.

5.	Play the game and use the mouse to rotate the object.  Press the **W** and **S** keys and check that the output log messages are displayed.  Your output should look similar to below.


<div class="image-container">
<img src={LOG_MSG} width={"60%"} alt="Refresh VS" />
</div>


:::info

Firstly, you should note that there are a large number of outputs, as each function is called every frame. 

We know VS is very good for debugging C++ programs.  It would be useful to be able to use VS's debug facilities.

:::


### Using VS2022's Debugging Tools

It would be useful to be able to put breakpoints within the project to check where values are changed.  Do the following to setup the project so that VS is used for debugging.

1. Close the UE5 Editor.

2. Within VS, change the Solution Configuration from Development, or similar, to **DebugGame Editor**, as partially shown below.

<div class="image-container">
<img src={VS_DEBUG} width={"40%"} alt="Refresh VS" />
</div>

3. Place a **Breakpoint** within the **Move()** method or/and **Tick()** method, by using the **F9** key, or equivalent, in each function, as partially shown below.

<div class="image-container">
<img src={BRKPOINT} width={"80%"} alt="Refresh VS" />
</div>

4. Run the program, using Start program green arrow, or by pressing the **F5** key. The program should build the game, if required, and then open the UE5 Editor.

<div class="image-container">
<img src={VS_PLAY} width={"2%"} alt="Refresh VS" />
</div>


:::info
**Note**: if you get error: “Unable to start program...”, or similar, it means that the Engine project is set as the default project.  If so, right-click over the GDyn1 project, from within the Solution Explorer panel, and select Set as StartUp project, and then press F5 to try again.
:::

5. Within the UE5 Editor, press **Play**.  The program should return to VS2022, at the **Breakpoint**, as the **`Move()`** function is called every frame. It would be better if we only 'stop' the program when a **W** or **S** key is pressed.  

6. Firstly, stop the program in VS2022, by pressing **Shift F5**, or by pressing the red square, toolbar icon.

<div class="image-container">
<img src={VS_STOP} width={"2%"} alt="Refresh VS" />
</div>

7. Right-click onver the Breakpoint and select the **Conditions** ... option. 

8. Type in `ForwardVector.X != 0` in the condition field, as show below. This a dummy example, you can set it to different conditions to see its behaviour.

9. Click on Close. Within the UE5 Editor or VS, press Play or run.



<div class="image-container">
<img src={VS_CONDITION} width={"80%"} alt="Refresh VS" />
</div>



## Spawning Objects 

:::info

It would be useful to be able to fire projectiles from the cube. We will need to be able to **spawn** objects within the game.

:::



It would be useful to **`fire`** projectiles in the direction the player object is pointing. We can spawn `actors` directly from classes that have been created in C++. Do the following:

1. Within the UE5 Editor / Content Browser, create a **new C++ Class** that is based on an <u>Actor</u>, and name it **Projectile**.

2. Within the **Projectile** header file, add, after **public:** the following:

    - A function/method to fire in a direction. The shoot direction should be passed in as a `const FVector&`.

    - A member variable for the collision component (we will use a **USphereComponent**) and one for the movement component (**UProjectileMovementComponent**). These are going to be viewable in editor, so add the <u>`UPROPERTY`</u> tag and use **VisibleAnywhere** for them. You should also add them to categories. This is also done in the **UPROPERTY brackets**. The syntax is `“Category = MYCATEGORY”`. Make one the **“Projectile”** category, and the other **“Movement”**.

    - A member variable for the static mesh (check the variable type where you’ve added a static mesh previously if you don’t remember the type).

    - A static float for the **initial radius** the projectile will spawn at, and a float for the **initial speed**. The latter should be **Editable** from Anywhere in the UE5 editor. Use `UPROPERTY` to add that and set a category of **“Gameplay”**.

3. Also, add the includes for a **SphereComponent** and a **ProjectileMovementComponent** just before the `.generated.h` line, so that the component classes are included. You should use the unreal engine docs or google to find these include paths. 

4. Open the *Projectile* **.cpp** file, and just after the `#include "Projectile.h"` line, initialise your static variable for the radius to **15.0f**. If you don’t remember how to do this, think back to how you made a singleton in SDL. You initialise a static variable there. 

5. Within the *Projectile* **.cpp** file, add the following code to the constructor:

    - Set our **initial speed** variable to be 1000.
    - Create the <u>collision component</u>, the <u>static mesh component</u> and the <u>projectile movement component</u> using the **`CreateDefaultSubObject<>()`** function you used last week. Give them suitable names.
    - We’re next going to call **“InitSphereRadius”** on the collision component and pass in the **initial radius** we set up earlier. 
	- Make the collision component the **Root** of the Actor, again, use last week’s code to check how to do this. 
	- We need to tell the static mesh what mesh to use. Rather than pass it in, like we have done previously, we’re going to reference it in code. Generally it’s going to be better to pass this information in, but it’s good to know how we can go about it if that isn’t an option. The line looks like this: 

        ```cpp
        UStaticMesh *meshToUse = Cast<UStaticMesh>(StaticLoadObject(UStaticMesh::StaticClass(),
        NULL, TEXT("/Engine/BasicShapes/Sphere")));
        ```

        It’s pretty ugly, but should get us what we need. We load the object as a generic object type, but tell the engine to look for a static mesh. We then cast the result to a static mesh and store that locally for use. 

    - The next bit is a little bit hard to detail all in one go, so I’m going to give you the snippets. You’ll likely need to change the variable names to match your existing code. 

        If the mesh is valid, we need to: bind it to our static mesh component.

        ```cpp
        if(meshToUse) {
            // Bind static mesh
            staticMeshComponent->SetStaticMesh(meshToUse)
        ```

        Next we set it up with a material.
        
        ```cpp
            // Find and instance a material for the mesh
            static ConstructorHelpers::FObjectFinder <UMaterial> matGreenFinder 
                (TEXT("MaterialInstanceConstant'/Engine/EditorMaterials/WidgetMaterial_Y'"));

            UMaterialInstanceDynamic *dynMaterial = UMaterialInstanceDynamic::Create(matGreenFinder.Object, NULL);
        ```

        Then we set up the dimensions so the projectile is the size of our radius.

            
        ```cpp
            // Use the bounds of the mesh to scale it so that it is the size of our radius
            FVector minB, maxB;
            staticMeshComponent->GetLocalBounds(minB, maxB);
            float scale = initRad / minB.X;
            staticMeshComponent->SetWorldScale3D(FVector(scale, scale, scale));
        ```

        We’ll also disable collision on the static mesh, as that is why we have the simpler sphere collider.
        We finish by attaching the resulting component to the root object.

        ```cpp
            // Disable mesh collision and attach the mesh to our root component (The sphere collider)
            staticMeshComponent->SetCollisionProfileName("NoCollision");
            staticMeshComponent->SetupAttachment(RootComponent);
        }    
        ```
    
    - Now we’re going to setup the **projectile component**. Inside the component class are several variables we’ll need to set. Below are the variables and their values:
    
        | Variable      | Value |
        | ----------- | ----------- |
        | InitialSpeed      | The initial speed variable we stored       |
        | MaxSpeed   | 3000        |
        | bRotationFollowsVelocity | True |
        | bShouldBounce | True |
        | Bounciness | 0.3 |

    - Finally for the constructor, we need to tell the **projectile movement component** what it needs to move! This will be our root component (the collision component). The function you need is **`SetUpdatedComponent()`**. 

6. Add the **`FireInDirection()`** function code, in **Projectile.cpp**. Because you pass in the direction you want to fire in, this is as simple as setting the velocity in the projectile movement component to be the normalised direction multiplied by our speed.

7. Build the project to check the code is valid.  Run the program to open the UE5 Editor.

:::note
**Note**: the static attribute, only stored once no matter how many projectile objects are created, is used so that its value can be accessed before an object is spawned – as shown later!  If you wanted a number of constants, a separate class, or enum class, with constants, would need to be added. 
:::


8.	Add Input Action mapping named Fire, which is activated by a Left Mouse Button click.  

9.	Add code to the **GD_Pawn** that adds a function named void **`Fire()`**; and within the cpp file,  add code to **'bind'** the fire function to the **`SetupPlayerInputComponent()`** function, when a key is Pressed. 

10.	Create an empty definition  for the `Fire()` function in the **GD_Pawn.cpp** file.  Save the changes in the UE5 Editor.

11.	Within the **GD_Pawn.cpp** file, `#include` the Projectile header, just after the GD_Pawn header file include, at the top of the file.  

12. In the `Fire()` function:

- Get the actor bounds and origin using the **GetActorBounds()** function. 
- Define a **projectionLocation** as the `origin + (GetActorForwardVector *` the static radius you set up earlier).
- Create a default **FRotator** using the `FRotator::ZeroRotator` static. 

13.	We’re going to wrap everything else in this function in if(GetWorld()) to make sure we are able to spawn.

14.	Now we need some Spawn Parameters. **`FActorSpawnParams`** is a container for a bunch of values you can set when you spawn an actor. Set `params->Owner` to this and `params->Instigator` to **GetInstigator()**.

15.	After all this time it is time to create the projectile! The **SpawnActor()** function belongs to the World. Call this function like so:

    ```cpp
    AProjectile *proj = GetWorld()->SpawnActor<AProjectile>(AProjectile::StaticClass(),
        projLoca, projRot, SpawnParams);
    ```

16.	If creation is successful (test this by checking if your projectile is null), then call **FireInDirection()** on your new projectile. Pass in the forward vector of the current actor. 

17.	Run the program, to build and run the program, and check that a projectile is fired on a left mouse button press. You may want to add a small offset in the Z axis to move the spawn location a little away from the actor location to move the projectile up a bit.







## Points to Consider

:::info
It should be noted we can, thus, create a 'complete' **actor-based** object that can be spawned, as, when, and where required - in this program, on the press of the left mouse button.
You should note that the static mesh and material paths are hard-coded within the code.  **Is this good practice?**  If not, why not?
You should also note how the projectile static mesh is re-scaled so that it matches the collision sphere.  
At present, the projectiles move, but they do not **'bounce'** off the floor, for instance.
:::






## Exercises

It would be useful to have enemy objects to fire at.

:::info
Firstly, we will revert to having the UE5 Editor separately controlled to VS2022.  Change the Solution Configuration to Development, and right-click over the Solution, in the Solution Explorer, and select Open Folder in File Explorer.  Close down VS2022. Double-click on the **.uproject** file to open the project in the UE5 Editor.
:::


1. Create a **New C++ class** named `Enemy`, based on an <u>Actor</u>. In **Enemy.h**, add:

    ```cpp
    UPROPERTY(VisibleDefaultsOnly, Category = "Projectile")
    UCapsuleComponent *collisionComponent; // Capsule Collision Comp
    UStaticMeshComponent *staticMeshComponent;
    UMaterialInstanceDynamic *dynMaterial1;

    UFUNCTION()
    void OnHit(UPrimitiveComponent *HitComp, AActor *OtherActor,
        UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit);
    ```

2. Add any includes you need.

3. In **Enemy.cpp**, in the constructor:

    - Create the components you just declared using **`CreateDefaultSubObject<>()`**.

    - Set the capsule size of the collision component using the **InitCapsuleSize()** method with a radius of `20.0f` and a height of `50.0f`.

    - Enable physics simulation on your collision component by calling the **SetSimulatePhysics()** method and passing "`true`" as a parameter.

    - Set the collision profile of your collision component to "`BlockAll`" by using the **SetCollisionProfileName()** method. You will need to use the TEXT() macro that Unreal provides.

    - Enable collision detection on your collision component by calling the **SetCollisionEnabled()** method and passing "`ECollisionEnabled::QueryAndPhysics`" as a parameter.

    - Make your collision component the root component.

    - Load a static mesh object named "`/Engine/BasicShapes/Cylinder`" using the **StaticLoadObject()** method and cast it to a "`UStaticMesh`" type. (You did this earlier with the projectile).

    - If the mesh was successfully loaded, perform the following steps: 
        - Assign the mesh to your static mesh component using the **SetStaticMesh()** method. 
        - Load the material “`MaterialInstanceConstant'/Engine/EditorMaterials/WidgetMaterial_Z'`” using the **FObjectFinder()** method and create a dynamic material instance from it (again, see the projectile code).
        - Set the dynamic material on the first material slot of your static mesh component. 
        - Calculate the scale values required to fit the mesh to the capsule size. 
            - Find the bounds using **`GetLocalBounds()`**.
            - `scaleXZ` will be the `radius (20)/the bounds min.x`.
            - `scaleZ` is the `height (50)/ the bounds min.Z`.
        - Apply the scale to your static mesh component using the **SetWorldScale3D()** method. 
        - Set the collision profile of your static mesh component to "`NoCollision`" using the **`SetCollisionProfileName()`** method. 
        - Attach your static mesh component to the root component using the **`SetupAttachment()`** method.
    - Finish by loading a material "`/Engine/EditorMaterials/WidgetMaterial_X`" using the **`FObjectFinder()`** method and initialise `dynMaterial1` with the result.


4. The **OnHit()** function is called a delegate function, i.e. it is dynamically set, and called.  Add the following code in the `BeginPlay` function, after the Super line:

    ```cpp
    collisionComponent->OnComponentHit.AddDynamic(this, &AEnemy::OnHit);
    ```

    This is the same idea as binding your inputs like you have done previously.

    **Note:: Intellisense will not find this, but it does exist. This is because it is a macro, not a function**.


5. Also add a stub function - i.e. defined, but it does NOT do anything - for **OnHit**.


### Spawning Enemies within a Spawn Volume


Next, let’s spawn enemies within a specified area / volume.

1. In the UE5 Editor, create a **New C++ class**, based on <u>Actor</u>, named **SpawnEnemy**.

2. Add the following to *SpawnEnemy.h*:
    - A variable named **spawnArea** of type **`UBoxComponent*`**. The **UPROPERTY** should be <u>EditAnywhere</u>.
    - A function named **`GetRandomPointInVolume()`** that returns a **FVector**.
    - A function named **`SpawnEnemy()`** that returns void.

3. Add any required includes.

4. Within **SpawnEnemy.cpp**, include `enemy.h`.

5. Create spawnArea using **`CreateDefaultSubobject<>()`**.

6. Set the size of the box using the **SetBoxExtent()** method on `spawnArea` with the parameters **600.0, 500.0, 20.0**.

7. Attach `spawnArea` to the **RootComponent** by calling the "`SetupAttachment`" method.

8. Now for `SpawnEnemy`. Start by checking if there is a valid world using the "`GetWorld`" method.


9. Inside the if statement:

    - Create a **FActorSpawnParameters** object named **spawnParams**.
    - Set the **Owner** parameter to "`this`".
    - Set the "`Instigator`" parameter to the result of calling **GetInstigator**.
    - Set the **SpawnCollisionHandlingOverride** parameter of "`spawnParams`" to "`ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn`". This will ensure that, even if the spawn location has to move a little, it will still make sure to create the projectile. 
    - Call the **`GetRandomPointInVolume()`** function and store the result locally as the spawn location.
    - Create a **FRotator** object with a value of **FRotator::ZeroRotator**.
    - Call the **SpawnActor** method on **GetWorld** with parameters:
        - The class type **AEnemy** obtained from "`AEnemy::StaticClass()`".
        - The spawn location value.
        - The zero rotator value.
        - The "`spawnParams`" object.

10. We would like to get a random point in the volume. We’re going to do this using a built in utility function, based on the bounds of our spawn area. Add the following code to **SpawnEnemy.cpp**:

    ```cpp
    FVector ASpawnEnemy::getRandomPtInVolume() {
        FVector spawnOrigin = whereToSpawn->Bounds.Origin;
        Fvector spawnExtent = whereToSpawn->Bounds.BoxExtent;
        return UKismetMathLibrary::RandomPointInBoundingBox(spawnOrigin, spawnExtent);
    }
    ```

    The above function uses a UE5 library, so we need to include it.  Add:
    
    ```cpp
    #include "Kismet/KismetMathLibrary.h" // for random in vol
    ```

    After the other `#include` lines in the cpp file.

11. Within the `SpawnEnemy` source file, in the `BeginPlay()` function, spawn **6** Enemy objects using an appropriate for-loop.



12. Build the project to verify the code.

13. Within the UE5 Editor, compile the program, and drag the **SpawnEnemy** icon, on to the Viewport, to create an object. Press Play, and enemies should be randomly placed.

14. Save the map.


### Handling Collisions

Now we should make the projectile **'bounce'** off objects, and make the Enemy objects respond, as physically realistic objects.


Firstly, we need to make sure **Projectiles** *respond* when they **'hit'** an object.  Do the following:

1. Add the following code, to the **Projectile.cpp** file, in the constructor, just before 'setting' the RootComponent to collisionComponent:

    ```cpp
    collisionComponent->SetCollisionProfileName(TEXT("BlockAll"));
    collisionComponent->SetCollisionEnabled(ECollisionEnabled::QueryAndPhysics);
    ```

2. Within the UE5 Editor, compile and Run the program, to build and run the program.


:::tip
You should note that the projectile now responds when **'hitting'** objects.  Using **'BlockAll'** captures most collisions unless objects are specifically set not to. You should also note that the Enemies respond to being **'hit'** such that any forces / impulses applied to such objects should respond **'realistically'**.
:::


### Dynamically Changing A Material Instance

When an Enemy is **'hit'**, it would be fun if we could change its appearance.  We can use the previously defined delegate function that will run, when a **‘hit’** has been detected.  


:::note
**Note**: An **OnHit** event may be generated if an enemy **‘drops’** to the floor, so we do NOT want to change material for that.  The Floor has a mesh component that is set as static, i.e. it does not move, so if an **OnHit** event is generated, we can check that the component involved in the collision is NOT static, and then change material!
:::

1. Within the **Enemy.cpp** in **OnHit**:

    - Check if the **OtherActor** is not a static root component by using **IsRootComponentStatic**.

    - If the above check is false, call **AddImpulseAtLocation()** on **HitComp** with parameters:
        - The velocity of `OtherActor`.
        - `Hit.ImpactPoint`.

    - Create a **TArray** object named **components** of type **`UStaticMeshComponent*`**.

    - Call **GetComponents** with template parameter **UStaticMeshComponent** pass in components.

    - If the first element of **components** exists and **dynMaterial1** is also not null, call **SetMaterial** on the first element of **components** with parameters:

        - The index 0.
        - The **dynMaterial1** object.

2. Within the UE5 Editor, compile and Run the program, to build and run the program.

    You should note that the Enemies now respond to being **'hit'** such that the material changes from blue to red!  


:::note
**Note** how, in **OnHit**, a `TArray`, in UE5, can store a **‘dynamic’** array.  In this function, an array of static mesh components is stored – there is only 1 static mesh created for this object - and then the first one’s material is changed!
:::



## Bonus Exercise


Add a static variable within **Enemy.h** as a public attribute, that keeps count of the number of hits.
It should display the number of hits on screen when a new hit happens. 

**Note:** In a string building function, such as **`Printf`**, `%s` can substitute strings, and `%f` can substitute float numbers.  You can do a lot of formatting with **`Printf`**. Look for examples online.


## More Points to Consider

- Why is a static needed ? Are there any issues with this approach ?
- It is worth reviewing the UE5 Editor, World Outliner, and Details panel, for each type of object.

