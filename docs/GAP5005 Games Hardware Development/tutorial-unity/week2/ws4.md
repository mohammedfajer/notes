
import W2_CRASH_COURSE_CUBE from './img/w2_crash_course_cube.jpg'
import W2_SHOOTING_SCRIPT   from './img/w2_shooting_script.jpg'
import W2_PLAYER_TOGGLE     from './img/w2_player_toggle.jpg'
import W2_CANNON_OBJ        from './img/w2_cannon_obj.jpg'
import W2_CAMERA_PREVIEW    from './img/w2_camera_preview.jpg';
import CANNON_SCENE         from './img/cannon_scene.png';
import W2_CONSTRAINTS       from './img/w2_constraints.jpg';
import W2_MAX_ONPLAY        from './img/w2_max_onplay.jpg';
import W2_PLAYER_BEHAVIOUR  from './img/w2_player_behaviour.jpg';

# Task Sheet 4 - Creating Gameplay Mechanics 

## Getting Set Up
1. Create a new Unity project in the Temp folder found on the `C:` drive; make sure you copy it to an external drive at the end of the session (make sure you select 3D project this week).

2. Open your newly created project, create a cube **GameObject**, and change its position in the **Inspector Panel** to equal `(0,0,0)`.

3. Rename your new object to **Player**.

4. Create another **GameObject** of type plane and stretch it out to be underneath your **Player** GameObject; rename the plane to **Floor**.

5. Make sure your camera is positioned so that it can see the **Player** GameObject clearly.

6. Create a new folder in your Project Panel called **Scripts** and create a new C# script inside with the name **Jetpack**; add the script as a component to your **Player** GameObject.

7. Our **Player** GameObject is going to be controlled by physics, so we also need to add a **Rigidbody** component to it; go ahead and do this.

8. Before we begin coding, create a new folder in your Project Panel called **Material**. Right-click inside that folder and navigate:

    `Create > Material`

9. Select the material and in the **Inspector Panel**, set the **Albedo** colour to a light blue; drag the material onto your **Floor** GameObject - this will make it much  easier to see your work today.

Once that's done, open your **Jetpack** script.



## JETPACK FUNCTIONALITY:

### Step 1: Creating Functions, Variables & Conditional Logic

- **a)** Create a new private variable of type **Rigidbody** and give it a name of `m_rigidBody`. Initialize the variable in the `Start()` method.

- **b)** Create a new function called **IsJetpackButtonDown** which returns a bool.

- **c)** Inside your **IsJetpackButtonDown** function, create some conditional logic which checks to see if the spacebar is being held down continuously; if it is, return true; if its not, return false.

- **d)** Create a new function in the same class and give it a name of **JetpackMovement**. Inside this function, create a conditional statement which checks to see if the function **IsJetpackButtonDown** is returning true. Nest two if statements inside this check; one to see if the user is continuously holding down the A key, and another to check if the user is continuously holding down the D key. Ensure your function is being called in the correct place (Start/Update).


### Step 2: Applying the Physics

- **a)** Inside the if statement which is checking to see if **IsJetpackButtonDown** returns true, add upwards force to your `m_rigidBody` variable. Refer to today's presentation near the end if you are struggling. Once that is down, run your game and hold down the spacebar - if everything has been implemented correctly, your player should start to move upwards, and when you let go, it should fall. Please make sure you added the script to your cube if it's not working.

- **b)** Inside the if statement which is checking to see if the `D` key is held, add right force to your `m_rigidBody` variable. Run your game and see how your player is behaving; if it's not behaving as expected, refer to: `CRASH COURSE` below.

- **c)** Inside the if statement which is checking to see if the `A` key is held, add left force to your `m_rigidBody` variable. Run your game and see how your player is behaving; if it's not behaving as expected, refer to: `CRASH COURSE` below.


### CRASH COURSE


The `left / right` movement may differ for your **Player** GameObject as it is dependent on which way it is facing in the world. If your jetpack is not handling the way it should be (i.e. moving backwards instead of to the right), the go to your `Scene Panel` and select the **Player** GameObject.

<div class="image-container">
<img src={W2_CRASH_COURSE_CUBE} width={"30%"} alt="Cube" />
</div>

- **Blue arrow is forward.**
- **Green arrow is up.**
- **Red arrow is right.**

Modify your code so that your player is moving in the right direction.

- **d)** Run your game and test your jetpack - if everything is working correctly then you should be able to move `up / down / left / right` without much issue.


### Step 3: Adding Rotation

- **a)** As it stands, we have a relatively smooth jetpack system, but it's a little bland. What we are going to do now is make our object rotate towards the direction its moving when we move `left/right`. Inside your if statement which makes your jetpack move to the right, add the following piece of code:

  ```cs
  transform.Rotate(0,0,-1);
  ```

  Take note of how we are rotating the object here. Get a feel for what this does (remember "transform" without a reference before it refers to the object the script is attached to). This Rotate function is manipulating the object's orientation, which can be seen in the Inspector Panel.

- **b)** Add the ability for the player to also rotate to the left in your code.

- **c)** In the above image take note for the -1 value. This means we want to rotate the object `1 unit` per frame (providing our method is called in then Update function), which, if we are running at 60 FPS, might be a lot of movement. In order to make aspects of your game framerate <u>independent</u>, we can multiply the value by **Time.deltaTime**. Go ahead and do this. Your rotation movement will then move `1 unit` per second, instead of each frame. You will use this **EXTENSIVELY** in your games; get used to using it.

    You may wish to tweak the `-1` and `1` values to increase the speed.



### Step 4: Hierarchy Behaviour

- **a)** Comment out your rotation code. Go the the Inspector Panel with your **Player** GameObject selected and under the **Constraints** section of your Rigidbody component, set the `X`,`Y` and `Z` rotations to be constrained; also freeze the `Z` position (which is into the screen in world space). The boxes you need to tick may differ dependent on your player's orientation, so have a play around with these values. Notice now how your player does not topple over and is <u>constrained</u> to set axis.

<div class="image-container">
<img src={W2_CONSTRAINTS} width={"30%"} alt="Constraints" />
</div>

- **b)** In your `Hierarchy Panel`, drag the `Main Camera` object onto your player so it becomes a child of your player, and give the game a play, just to see how we can get different results from our code based on our setup.

### Step 5: Avoiding Hardcoding

Hardcoding can be defined as using absolute values in places where variables could be used. Hardcoded values are difficult to modify by designers as they are embedded into the code. So, for example, you may have a player movement speed variable set to 10, and designers have access to this value to tweak as they please. However, if you never make this variable and simply use the **hardcoded** value of 10, the only way a designer could modify the value is by modifying your function. This is not ideal!

- **a)** Uncomment your rotation code so that it's working again and drag your camera out of your **Player** GameObject in the Hierarchy Panel so that it is no longer a child.

- **b)** Create two new private float variables at the top of your **Jetpack** script with the name **rotationSpeed** and one with the name **thrust**.

    **IMPORTANT 1**: The reason why we make variables private by default is to encapsulate our code. We do not want any other class to manipulate what's in this class. Whilst this might not seem like a problem at the moment, it can quickly build up and become problematic - Always declare private unless you specifically need a public function / variable.

    **IMPORTANT 2**: Your private variables will not appear in the Inspector Panel, which sometimes isn't what we want to happen. In order to keep your variables private and have them appear in the Inspector Panel, we can place: `[SerializeField]` above the variable declaration. Please do this and get used to using it.

- **c)** In your script, navigate to the code which is rotating the player; it should be something like the following:

```cs
  transform.Rotate(0, 0, 1 * Time.deltaTime);
```

Change the code so that it uses your `rotationSpeed` variable instead of a hard coded value.

Do the same for the opposite direction, using the same `rotationSpeed` variable.

- **d)** Go back to your game and select your **Player** GameObject in the Hierarchy Panel and take a look at the inspector panel; you will notice the following:

<div class="">
<img src={W2_PLAYER_BEHAVIOUR} width={"30%"} alt="Player Behaviour" />
</div>

We can now control the **rotationSpeed** variable via the Inspector Panel to make iteration/getting the best value easier. Change the value and run the game to see how the rotation behaves.

- **e)** Open up your script again and go to the code which is applying force to your `Rigidbody` when the space bar is held; you will notice we are multiplying the direction by a hard value (perhaps 10, for example). Instead of multiplying it by a number, multiply it be your **thrust** variable. Go to the Inspector Panel and manipulate the value to see how it behaves.

- **f)** Add another variable of type float with the name **directionSpeed** and make it so that you jetpack uses this value when moving left and right. This will give you extra movement if you feel your system requires it.

#### Top Tip:

Changing values and running your game can be cumbersome, especially when fine-tunning a varaible like thrust and rotation speed. To speed up the process, select your Game Panel and make sure **Maximize On Play** is disabled:


<div class="image-container">
<img src={W2_MAX_ONPLAY} width={"40%"} alt="Max On Play" />
</div>


Run your game and you will notice that if your **Player** GameObject is still selected in the Hierarchy Panel you will be able to see the Inspector Panel and the values - these values update in real time so go ahead and play with them like this. Remember though, once you exit the game, your values will be forgotten, so after you have made changes, right-click cog found on the script component in the Inspect Panel, click **Copy Component**, and paste them in the same manner with **Paste Component Values** once the game has been stopped. This makes iteration MUCH faster.



## SHOOTING FUNCTIONALITY:

### Getting Set Up

We are going to use the same environment for our shooting mechanic, so before we go ahead and put objects in place, we're going to disable our **Player** GameObject which we sued in the previous task; to do this, select the object you want to disable in the Hierarchy Panel, look over to the Inspector Panel and use this check-box:

<div class="image-container">
<img src={W2_PLAYER_TOGGLE} width={"30%"} alt="Player Toggle On/Off" />
</div>


Make sure it's toggled off. Once that is done, we are ready to build an environment for our shooting mechanic.

1. Create a cylinder and a sphere `GameObject` and position them like so (use the navigation tools at the top to achieve this result):

<div class="image-container">
<img src={W2_CANNON_OBJ} width={"30%"} alt="Cannon GameObject" />
</div>

2. Make sure the object is positioned to the left-side of your camera's viewport - to do this, select the Main Camera and take a look at the preview window that appears in the bottom-right of the Scene Panel:

<div class="image-container">
<img src={W2_CAMERA_PREVIEW} width={"30%"} alt="Camera Preview" />
</div>

3. Before we dive into the code, there is a couple of things we need to do; we need to create a bullet prefab, and also a spawn point for our bullet tp spawn at; we'll start with the former.

    a. Create a new folder in your Project Panel called **Prefabs**. Create a new sphere `GameObject` in your scene and add a `Rigidbody` component to it. Store the newly created cube as a prefab in your new **Prefabs** folder - name the prefab: **Bullet**

    b. We now need to make a spawn point for our bullet, so we need to know where to spawn it in our game. Create an empty `GameObject` and name it to **spawnPoint**. Position your new object like so:

<div class="image-container">
<img src={CANNON_SCENE} width={"30%"} alt="Cannon Scene" />
</div>

  
In short, position it exactly where you want the bullet to spawn from, and make sure the blue arrow is facing in the direction you expect the bullet to travel (remember, blue arrow = forwards). We are now ready to code.

### Step 1: Input and Bullet Spawning

- **a)** Create a new script called **Shooting** in your `Scripts` folder. Attach it as a component to the base of your cannon (the sphere `GameObject`).

- **b)** Open up your new script and create a variable with the name `bullet` of type `GameObject`; make sure it is private and use `[SerializeField]`.

- **c)** Create another variable of type `GameObject` and give it the name **spawnPoint**. Use the same method as above.

- **d)** Go back to your game and select the sphere GameObject; you should see the following in the Inspector Panel:


<div class="image-container">
<img src={W2_SHOOTING_SCRIPT} width={"40%"} alt="Shooting Script" />
</div>



- **e)** Drag your **bullet** prefab into the `Bullet` slot from your Project Panel. Once that's done, drag your **spawnPoint** GameObject from the Hierarchy Panel onto the `SpawnPoint` slot.

- **f)** Open up your **Shooting** script and create a new function called **IsShooting()**; make sure the function return a bool.

- **g)** Inside your **ShootingInput** function add some logic which checks to see if the left mouse button is pressed once; if it is, return true; if it's not, return false. Remember, we only want to check for one press, not continuous.

- **h)** In a suitable place, check to see if **IsShooting** is true, and if it is, instantiate your bullet variable at the position and rotation of your **spawnPoint** variable. Run your game and shoot the cannon - if everything is correct your bullet should spawn at the **spawnPoint** GameObject and fall gracefully to the ground; make the cube prefab smaller if you need to.



### Step 2: Bullet Force
  
- **a)** Create a new script with a name `BulletForce`. Select your `bullet` prefab from the Project Panel and add your new script as a component.

- **b)** Open up your script, and declare a variable of type `RigidBody`, and give it the name `m_rigidBody`.

- **c)** Initialize the `m_rigidBody` variable in the Start function.

- **d)** Create another variable of type float with the name **force**.

- **e)** Create a new function called **ApplyForce()** and call it somewhere suitable (`Start()` or `Update()`) - remember, we want to add force to it once, not continuously.

- **f)**  Using today's presentation as guidance, add force to your bullet inside your newly created function, and multiply the direction by your **force** variable.. Once you think you're done, go to your Project Panel and select the **bullet** prefab to modify the **force** variable in the Inspector Panel - make sre it's not 0 or it will not move.

- **g)** Run your game and if you've done everything correctly you should be able to fire bullets / cannonballs by pressing the left mouse button. You may or may not notice that there's some drag on your bullets at the end of their flightpath though, which looks unnatural; to rectify this, select your **bullet** prefab in the **Prefabs** folder and set the drag and angular drag to 0 on the **Rigidbody** component.

### Step 3: Tidying the Scene

- **a)** if we were to continue firing the cannon for a long period of time our game would crash, because it would run out of memory (too many objects). A handy little feature which unity has is the `Destroy()` function, we can use to help clear our scene up. Inside your `BulletForce` script, create a new function called `DestroyBullet()` and call it in the `Start()` function.

- **b)** At the top of your script create a new variable of type `float` with the name `destroyDelay`.

- **c)** Inside your newly created `DestroyBullet()` function add the following:

    ```cs
      Destroy(gameObject, destroyDelay);
    ```

- **d)** Select your bullet prefab from the `Project Panel` and modify the `destroyDelay` variable to be how long in seconds you want to wait before the bullet is removed from our scene. Give this a test.



### Additional Tasks

- **a)** Ensure all public variables are encapsulated within their respective class by using private modifiers and `[SerializeField]`.

- **b)** Experiment with the techniques we have learned over the past 2 weeks to try and achieve the following:

  - a. The camera should take on a top-down view point which follows the GameObject around (use multiple GameObjects to create a tank).

  - b. Your tank should be able to move backwards and forwards when the up and down arrows are pressed respectively; this should be achieved with physics.

  - c. Your tank should be able to rotate `left/right` with `A/D/LeftArrow/RightArrow`.

  - d. Your tank should fire projectiles when the left mouse button is pressed from a cannon which is mounted on the front.

  - e. Your tank should have a reload system which requires the user to reload the cannon after 3 shots have been fired.

  - f. Take a look at Unity's UI system. Have a go at displaying how many bullets the tank has fired in the top-left corner.


