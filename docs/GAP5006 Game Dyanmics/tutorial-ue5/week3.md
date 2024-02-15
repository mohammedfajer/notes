# Week 3 - Using C++ and Blueprint


:::info

Task Sheet 3 - Creating Blueprints and Integrating with C++

:::

## Using C++ and Blueprint

We are going to extend the project made in previous worksheets to include UE5's visual scripting language, called **Blueprint**, to make our projects easier to edit.


## Using a Cursor to Direct a Projectile's Initial Velocity

At present, a projectile can be fired in the direction the pawn object is rotated, but it is fired at a **‘fixed’** height.  It would be useful to have a cursor position, so that a projectile can be fired in the **‘facing’** direction, but at a **‘variable’** height. Do the following:


1. Firstly, we need an image for the crosshair cursor to be used.  From Moodle, download the **crosshairs.tga** file to the Contents folder of your project. (To find the folder, In UE5, right-click over Content in the Content Browser panel, and then select Show in Explorer).

2. Within the Content Browser panel, click on the **Import** icon, and select the **crosshairs.tga** file from the Contents folder of your project. The image should be imported to your content folder. (**Note**: you may be prompted to import as soon as the file is copied to the project).

3. Right-click over the icon and Save it.


:::note

To use the crosshair, we are going to include it as part of a Head-Up display, (HUD), for the game. Do the following:

:::


4. Create a new C++ class and select HUD as the Parent class. Call it **CrossHairHUD** and click on the Create class button.

5. Within VS, open`CrossHairHUD.h` and add a member variable of type **UTexture2D** called `_crosshairTex`, a float for the aim distance (initialise this to 500), and an `FVector` for the 3D position of the crosshair. 

6. We need the texture to be set via the editor, so add the **UPROPERTY** flags in the appropriate place to enable this.

7. Finally, we need a couple of functions. On is going to update the crosshair position. This function should take in an `FVector2D` as a parameter. Call it **ctr**. The other function is going to override an existing function. The latter function is called **`DrawHUD()`**. Make sure to override it correctly.

8. We’re going to use a built in Unreal global called Canvas. To use it, we need to include the appropriate file. Use google to find the header you need to include and add it. 

9. In the function body for your crosshair update function, first check to see if **Canvas** is null. If it is, return as we cannot draw our crosshair!

10. Next, create a local variable for the 3D world direction of the crosshair. You don’t need to initialise it to anything as we are immediately going to pass it into a function that will do that for us. It’s a function baked into Canvas called **`Deproject()`**. The idea is that it takes the desired position on the screen of the crosshair, and places it in the game world at the correct location. 

    This is the function:

    ```cpp
    Canvas->Deproject(ctr, _crossHair3DPos, worldDirectionOfCrossHair2D);
    ```

    :::note
    Remember **ctr** is the value that you pass into the update function, and **_crosshair3DPos** is the member variable from earlier.
    :::



11. We’re now going to move the crosshair forward into the world. Do this by adding the 3D world position to the aim distance from earlier multiplied by the 2D world location. It should be roughly: 

    ```cpp
    _crosshair3D += dir.GetSafeNormal() * _aimDist
    ```

12. The **DrawHUD()** function of the class **ACrossHairHuD** should:
- Call the `DrawHUD()` function of the parent class Super to inherit its functionality.
- Checks if `_crosshairTex` is not null. If it isn’t:
- Calculate the center of the canvas using `Canvas->ClipX / 2` and `Canvas->ClipY / 2`. Store the result as a **FVector2D** called `ctr`.
- Calculate the position of the crosshair texture based on the center and the texture's dimensions.
    - Create a 2D vector named **`crosshairPos`**.
    - Set `crosshairPos.X` to the result of subtracting half of the surface width of `_crosshairTex` from the x value of  ctr.
    - Set `crosshairPos.Y` to the result of subtracting half of the surface height of `_crosshairTex` from the y value of the ctr.
- Call the **`update3DCrossHairPos()`** function with the center of the canvas as an argument.
- Create a `FCanvasTileItem` object using the desired position, `_crossHairTex->Resource`, and the static variable **`FLinearColour::White`** as parameters.
- Set the <u>BlendMode</u> of the FCanvasTileItem to `SE_BLEND_Translucent`.
- Draw the `FCanvasTileItem` object on the canvas. (The function is a member of Canvas)


## Points to Consider

:::tip
As the cross hair is on a 2D canvas, we need to calculate the 3D position of the cursor. To do this, the **`Deproject()`** function uses the current cursor position, the camera position and the viewport settings, along with a **‘ray’**, of length `AIM_DISTANCE` in this case, from the camera to the cursor position, to calculate the 3D position of the cursor.  The **`Deproject()`** function is sometimes used for `‘picking’` objects with the mouse cursor over objects too.

The value we are calculating for the 3D Crosshair Position isn’t currently being used, but we will use it later!

:::


## Using a C++ class as Blueprint

The UE5 Editor is particularly useful when projects need to be changed. This is especially useful when working in a team.  It may be that **‘base C++ code’** is created, but changes are made using <u>Blueprints</u>, to allow, particularly, non-programmers to amend objects, as they see fit.  
Blueprint is a more visual development language, which is particularly useful for prototyping, as no code  is required. Blueprint, though, is slower to run than compiled C++ code. However, the UE5 Editor expects some options / settings to be used as Blueprints.


We are now going to use the HUD, we have initially created in C++, as a Blueprint. Do the following:

1. Open the UE5 Editor, if it’s not already open, click on Compile.

2. Within the Content Browser, right-click over the Content folder, and select New Folder. Change the name to <u>Blueprints</u> and press the enter key.

3. Right-click over the CrosshairHUD C++ class,  , and select Create Blueprint class based on `CrosshairHUD`.

4. Change the name to: **BP_CrossHairHUD** and click on the Blueprints folder and then click on the Create Blueprint class button.

5. A Blueprint editor should be displayed. Select the `crosshair` icon, from within the `X Hair Texture option`, in the <u>Details</u> panel, often on the right, by changing `None` to the crosshair texture.

6. Compile and Save the Blueprint and close the Blueprint editor.

    To be able to use the Blueprint HUD, we need a Blueprint Game mode to be created and **‘set’** for the project. 


7. Right-click over the **GDyn1** GameModeBase C++ class, and select Create Blueprint class based on **GDyn1** <u>GameModeBase</u>.  Change the name to: `BP_GDyn3GameMode` and click on the Blueprints folder and then click on the Create Blueprint class button.

8. Select `BP_CrossHairHUD` within the HUD class option, using the arrow button.

9. Compile and Save the Blueprint and close the Blueprint editor.

10. We now need to change the `project settings` to use the default HUD. Click on **Edit**, **Project Settings** … and select `Maps & Modes`. 

11. Change the Default GameMode to `BP_GDyn3GameMode`, using the arrow button.

12. Close the `Project settings` window. Click Save Current.

13. Run the game, and the crosshair should be displayed within the PIE.


:::note
You may want to change the lower, and higher, pitch values in function lookup, in GD_Pawn.cpp, to say -40 and 20, so that the cursor is easier to see, and the range of the camera is better.  
:::


## Using the C++ Enemy Class as a Blueprint


At present, the enemies are spawned, based, purely, on C++ code.  It would be useful to be able to change values, such as what meshes an enemy uses, from within the UE5 Editor.  

For example, we **'hard-coded'** paths to meshes, and materials, within the C++ code.  If we wanted to change the meshes / materials, programmers would need to amend C++ code and re-build it.  It would be more flexible, and easier for non-programmers, to be able to change meshes, for example, without having to change the C++ code.

To do this, it is best to create Blueprints from the C++ code, which can then be edited within the UE5 Editor, without changing the C++ code.


Firstly, we are going to make some changes to the C++ Enemy class. Do the following:

1. Within VS, open `Enemy.h`.

2. Just before the line with **staticMeshComponent** Add the code:

    ```cpp
    UPROPERTY(EditAnywhere)
    ```

3. Remove any code relating to **dynMaterial1** (except in OnHit – we’ll change that later) and add the following code:

    ```cpp
    UPROPERTY(EditAnywhere, Category = "Gameplay")
    UMaterial *material1;
    ```

4. Within the `Enemy.cpp` file, change the constructor code to:  

    -	Set the `PrimaryActorTick` property to true.

    -	Initialise the collision component using **CreateDefaultSubObject** and set the size of the capsule component to have a radius of 20.0 and a height of 50.0.

    -	Enable physics simulation on the capsule component.

    -	Set the collision profile of the capsule component to `"BlockAll"`.

    -	Set the collision of the capsule component to `"QueryAndPhysics"`.

    -	Make the capsule component the root component.

    -	Initialise your **UStaticMeshComponent**.

    -	Set the collision profile of the static mesh component to `"NoCollision"`.

    -	Attach the static mesh component to the root component.

    :::note
    Mostly this is just deleting the bounds code we added for the static mesh!
    :::


5. Within the `OnHit()` function change the lines of code containing `dynMaterial1` to use `material1`.

6. Build the program, to check the code has no errors.


## Making the C++ Enemy Class into a Blueprint Class

1.	Open the UE5 Editor, if it’s not already open.

2.	Right-click over the C++ Enemy class, within the Content Browser,  and create a Blueprint class from it, named `BP_Enemy` and store it in the Blueprints folder.

3.	The Blueprint editor should be displayed. Click on `staticMeshComponent`.

4.	Within the Details panel, and in the Static Mesh partition, change None, to a `Cylinder mesh`, (it should be `100x100x100` size).

5.	Click on Rendering and then Override Materials and click the + (plus) button, or, in Element 0, select and change None to `WidgetMaterial_Y`.

6.	Within the Collisions panel, set Collision presets to `No Collision`, if required.

7.	Within the Transform partition, set the scale to `0.3` for X and Y axes.

8.	Go back to the Components panel, and select `BP_Enemy(self`).

9.	Within the Details panel, and the `Gameplay` partition, for `Material 1`, change None, to `WidgetMaterial_X`.

10.	 Click on Compile and then Save the Blueprint and close the window.


## Making the C++ SpawnEnemy class Spawn a Blueprint Class


To be able to use Blueprint classes such as the `BP_Enemy` one, we need to be able set it to be a class that can be spawned.  To do this requires that a class be a Blueprint. As for the above C++ class, we can use the `SpawnEnemy` C++ class to use a Blueprint class.

Firstly, a few changes are needed to make the SpawnEnemy C++ class more flexible to use.  Do the following:


1. Within VS, open `SpawnEnemy.h`.

2. Add the following code:

    ```cpp
    // Enemy class to spawn
    UPROPERTY (EditDefaultsOnly, Category = "Enemy")
    TSubclassOf<class AEnemy> _enemyClass;
    ```

3. Within the `AP_SpawnEnemy.cpp` file, and within the `spawnAnEnemy` function, change the SpawnActor code to:

    ```cpp
    GetWorld()->SpawnActor<AEnemy>(_enemyClass, spawnLoc, rot, spawnParams);
    ```

4. Build the program, to check the code has no errors.


:::note
Now in the editor you can set what type of enemy you want to spawn. `_enemyClass` can be set in editor to anything that inherits from `AEnemy`. The specified **enemyClass** type will be spawned!

:::


## Making the C++ SpawnEnemy class into a Blueprint Class

1.	Open the UE5 Editor, if it’s not already open.

2.	Right-click over the C++ `SpawnEnemy` class, within the Content Browser,  and create a Blueprint class from it, named `BP_SpawnEnemy` and store it in the Blueprints folder.

3.	Go back to the Components panel, and select `BP_SpawnEnemy` (self).

4.	Within the Details panel, and the `Enemy` partition, for Enemy Class, change `None`, to `BP_Enemy`.  This will be used when spawning the enemies.

5.	Click on Compile and then Save the Blueprint, and close the window.

6.	Save the level using the Save Current button.

    We now want to remove the **'old'** SpawnEnemy object and create a new one, using the Blueprint version.

7.	Within the UE5 Editor, delete the `SpawnEnemy` object from the **World Outliner** panel.

8.	Drag the `BP_SpawnEnemy` icon from the Content Browser to the main Editor window.

9.	As with Week 2's worksheet, set the Location of the Transform of `BP_SpawnEnemy`, as required.

10.	Save the level using the Save button. Run and check enemies are spawned.



## Adjusting the Projectile Trajectory using the Crosshair

We need to change the projectile’s trajectory based on the crosshair position. We are going to use the 3D position of the crosshair cursor.

Do the following:

1. Amend the `fire` function, in GD_Pawn.cpp, so that the if (proj) statement is as follows:

- Get a pointer to the Cross Hair HUD You should use Unreal’s `Cast<>()` function to:
    - Get an `APlayerController` from the result of `GetController`.
    - Then Cast the result of `playerController->GetHUD()` to an `ACrosshairHUD`.
    **(Use online reference if you don’t understand how to use the Cast function)**.


- Check if the pointer to the Cross Hair HUD object is valid.
- If the pointer to the Cross Hair HUD object is valid, call the **`FireInDirection()`** method on the proj object and pass in the result of subtracting projection location from the **crossHair3DPos** property of the Cross Hair HUD object.


2. Add any required includes!

3. Build, to check for errors, and then go back to the UE5 Editor and Run the program.



**Note how the HUD is accessed by firstly obtaining the `PlayerController`, from which a HUD object can be retrieved.  We then directly access the public `crossHair3DPos` attribute that stores the 3D cursor position, which has been calculated from the 2D cursor.**

The path of the projectile is now variable, depending on where the crosshair is, but it does not always closely follow the crosshair, as the projectile will **‘realistically’** drop before **‘reaching’** the crosshair cursor, due to the projectile being affected by acceleration due to gravity. 

Increase the Projectile’s Initial speed value, to say `3000`, to see how close it would follow the cursor position.  Reset it, as required.


## Points to Consider

:::tip
It should be clear that it is not very efficient / flexible changing hard-coded values, such as a Projectile’s Initial speed, as a programmer must change code, and then re-compile, before the game can be re-played in the UE5 editor!  

This is why it is better to create the C++ classes, make appropriate attributes / values editable, using appropriate **UPROPERTY** constants, and create Blueprints from the C++ class!

At present, the game does not look very impressive, and collisions could be handled in a better way.  We will see in future worksheets, how templates can be used to ease development, and how code for moving characters can be simplified by using a `Character class`!.
:::

