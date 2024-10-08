import W3_PADDLE from './img/w3_paddle.png';
import W3_PADDLE_BALL from './img/w3_paddle_ball.png';
import W3_PADDLE_PARENT from './img/w3_paddle_parent.png';
import W3_PHYSICS_MATERIAL from './img/w3_physics_material.png';
import W3_PADDLE_SCENE_VIEW  from './img/w3_paddle_scene_view.png';
import W3_PADDLE_WALLS from './img/w3_paddle_walls.png';
import W3_RESOLUTION from './img/w3_resolution.png';
import W3_EXECUTION_ORDER from './img/w3_execution_order.png';
import W3_RESETTING_BALL  from './img/w3_resetting_ball.png';
import W3_LAYER from './img/w3_layer.png';
import W3_LAYER_COLLISION_MATRIX from './img/w3_layer_collision_matrix.png';

# Task Sheet 5 - Creating Your First Game

## Getting Set Up

1. Create a new Unity project in the Temp folder found on the `C:` drive, make sure you copy it to an external drive at the end of the session (make sure you select 3D project this week).

2. Open your newly created project, create a cube `GameObject`, and position it at `(0,0,0)`. Rename the cube to `Paddle`, and set its size to resemble the following:

<div class="image-container">
<img src={W3_PADDLE} width={"50%"} alt="Paddle" />
</div>

3. Create a cylinder `GameObject` and position/scale it like in the below image; make sure it is a child of the **Paddle** `GameObject`, and name it **Ball**. Add a `Rigidbody` component to the ball.

<div class="image-container">
<img src={W3_PADDLE_BALL} width={"50%"} alt="Paddle and Ball" />
</div>

4. Create an empty `GameObject` named **SpawnPoint** and position it at the same position as the ball and make it a child of your Paddle `GameObject`.

<div class="image-container">
<img src={W3_PADDLE_PARENT} width={"20%"} alt="Paddle Parent Hierarchy" />
</div>

5. We are now going to create new physics material, which will change how our objects behave when they collide. Remember,  to detect collision, at least one of the objects needs a `Rigidbody` component.

  Create a new folder in your Project Panel called **Physics Materials**. Inside the folder, Right click **Create > Physics Material**. Name the new material **Bounce**. Select your new material and ensure bounciness is set to 1.

6. Independently select your Ball and Paddle `GameObjects` and drag your new physics material to the following slot (can be found on the respective `collider component`):

<div class="image-container">
<img src={W3_PHYSICS_MATERIAL} width={"40%"} alt="Bounce Physics Material" />
</div>

7. Select your camera and change `Clear Flags` to solid colour, and then subsequently change the Background colour to black. Set the `projection` to Orthographic. You can change the camera's distance to the paddle by modifying the **size** attribute on the **camera** component.


8. Position your camera / objects in a way which resembles the following:



<div class="image-container">
<img src={W3_PADDLE_SCENE_VIEW} width={"50%"} alt="Paddle Scene View" />
</div>


9. At this point, you have very likely guessed what we are making here, but if not, take a look at this example: https://www.youtube.com/watch?v=Qwe79VJ3e30

  For the next step, we need to create the two vertical walls for the ball to bounce off, otherwise it will never collide with anything, and thus will never return to us. To do this, create two new cube `GameObjects`, and ensure they are high enough to cover the height of the screen.


<div class="image-container">
<img src={W3_PADDLE_WALLS} width={"50%"} alt="Paddle Walls" />
</div>

  Do not worry about the position of them, we are going to dynamically code it so that they update with different screen resolutions; the end goal here is to have this on mobile next week.

 
10. Go ahead and create another cube and bridge the gap at the top of your two pillars. Assign the Bounce material to all of your walls. 

  In terms of setup, we are now complete and ready to code!

## Firing the Ball

1. Create a new class called `FireBall` and attach it to your Paddle `GameObject`.

2. Open the script, create a new variable of type `GameObject` which will be used to hold a <u>reference</u> to the ball.

3. In a suitable place, use `transform.Find(" ").gameObject`; to find and initialize the ball variable (should be set to the ball in your scene).

4. Declare a new variable of type `RigidBody` and set it equal to the Rigidbody which you attached to the ball earlier. Do this via script; all variables should be private here.

5. Create a new method in your `FireBall` class which adds force in a suitable direction to the ball when the left mouse button has been pressed. Make sure you are not hardcoding your force, and instead have a serialized variable in the Inspector Panel which allows you to control the force.

6. Inside your conditional logic, set your ball's parent to be equal to null. Hint: `transform.parent`.

7. Call your function in a suitable place, run the game, and test your code. If you have done everything correctly then the ball should fire off in the direction you instructed it to. However, it is not going to coming back any time soon! So let's fix that.



## Positioning the Walls

1. Taking a slightly more unorthodox approach than what we are used to, I am going to give you a choice here, but I would hope, as programmers, we would choose the correct path (the harder one!). Here is the first option:

  Manually position your walls / ceiling in your scene so that they are set for a specified screen resolution. To set your screen resolution in game you can select the **Game** tab and add new custom resolutions - research the resolution size you need for the Android device you wish to port to:

<div class="image-container">
<img src={W3_RESOLUTION} width={"50%"} alt="Paddle Walls" />
</div>

You second option is as follows, and I encourage you to take this approach; if you do this approach, make sure all your pillars are set to `(0,0,0)`.



  1. Create a new class called `ScreenDimensions` and open the class.

  2. Create two static float variables, one named `screenHeight`, and one named `screenWidth`. Make sure the variables are also public. Static variables can be accessed from any other script without direct reference.

  3. Create an `Awake()` method, and inside that method set the `screenHeight` to equal to the main camera's orthographic size multiplied by 2.

  4. Still in the `Awake()` method, set the `screenWidth` to equal `screenHeight * Screen.width / Screen.height`. We now have static references to our screen height/width which we can use to position our pillars. Create a new `GameObject` called `_utilityScripts` and drag your script on to this object.
 
  5. Create a new class called `PillarPositions`, and attach it to each of your three pillars, and open it.
 
  6. Inside this new class, declare a new private `Vector3` called `pillarStartPos`.

  7. Declare a new private (serialized) enum to store three pillar options: Top Pillar, Right Pillar, Left Pillar. Go back to your scene and respectively tag each of your pillars with the correct name using your enum. Use a suitable search engine to assist with this. If you struggle too much, ask me, but have a go first.

  8. Create a new `Awake()` method and set the `pillarStartPos` to equal the `transform.position` (this is the position of the object the script is attached to).

  9. Create a new method called `SetPillarPos()` and call it at the end of your `Awake` method. Inside your new method, using your mathematical expertise, create three conditional statements (you can use switch statements if you prefer) which checks the assigned enum, and respectively sets the correct axis (x and y most likely) of the `pillarStartPos` variable to the correct value using our static `screenHeight/screenWidth` variables. The idea here is to place the left pillar at the left side of the screen, the right pillar at the right side of the screen, and the top pillar at the top of the screen.

  :::tip
    You might find that you need to do some addition/subtraction based on your pillar's dimensions. To accurately access the size of a `GameObject`, you can use:

    ```cs
    GetComponent<Renderer>().bounds.size.(x, y, z) // with x, y, z being interchangeable. 
    // You can only do this if it has a renderer component!
    ```
  :::

    Have a go at this and let me know if you get stuck.

  10. After your conditional logic has been executed, set the `transform.position` to equal to `pillarStartPos` variable.

  11. We may have a problem here, and that problem arises when we call two `Awake()` functions at the start of the game. Which method runs first? What if our `Awake()` method in the `PillarPosition` class runs first and we have not set the static screen dimension variables yet?

      Luckily for us, we can manage the script execution order. Navigate to:

      **Edit > Project Settings > Script Execution Order**



<div class="image-container">
<img src={W3_EXECUTION_ORDER} width={"70%"} alt="Execution Order" />
</div>


Make sure `ScreenDimensions` is called before your `PillarPosition` class.

Test your game and see if things are working. if they are, you should be able to fire your ball, and it should bounce off the correctly placed walls/ceiling.

:::note
  It is useful to know that Script Execution Order exists, but try to avoid creating situations where you need it! In this situation, another valid solution would be to use the `Start()` function rather than `Awake()` for the  `PillarPosition` class. A good general tip is to do internal initializations in `Awake()` and anything involving external components in `Start()`.

  If your pillars aren't positioning correctly you can check they are on the correct axis (x, y, and z) and the camera's y position is set to 0.
:::

## Controlling the Paddle

1. Create a new class called `PaddleMovement` and attach it to your Paddle `GameObject`. More maths is on its way!

2. We know that our screen dimension will change, so we need to find a way to clamp our paddle's position to the edge of the screen. If you're not using multiple resolutions, you can manually set these values, but we don't want to do that here. Regardless of the method you chose in the previous step, we should all implement the movement this way.

3. Open your `PaddleMovement` class. Create a new variable of type float which holds the width of your paddle.

4. In a suitable place, set this float variable to equal half of the size of your paddle's width (remember the bounds.size technique).

5. Create a new method which returns type `Vector3` and call it `MouseWorldPos`. We are going to be returning the position of our mouse so that our paddle follows the mouse.

6. Create a new local `Vector3` variable which is equal to the mouse position in world space. As I have never shown you this function, I'm going provide it to you for free!

  ```cs
  Camera.main.ScreenToWorldPoint(Input.mousePosition);
  ```

  `Camera.main`: The main camera in the scene - make sure it is tagged as main camera in the Inspector Panel (at the top). You can also create an independent reference to this if you prefer.

  `ScreenToWorldPoint`: Does what it says on the tin. Converts a screen point, to a world position.

  `mousePosition`: The screen point you wish to convert.


7. Underneath this variable assignment, set your local `Vector3`'s `y` position to equal the current `y` position of the object it is attached to (the paddle) so that it never changes, and do the same for the `z`. We only want the paddle's `x` position to update (left and right). We don't want it to move up/down/into the screen unless you have some very elaborate plans.

8. New math function! `Clamp` your local `Vector3`'s `x` position to the left and right of the screen. Unity's `Mathf` class comes with a handle function called `Mathf.Clamp(value to clamp, clampValue1, clampValue2)`. Here's how you'd clamp an `x` axis between world points 0 and 1.

    ```cs
      localVector3.x = Mathf.Clamp(localVector3.x, 0, 1);
    ```

    Make sure you clamp to the sides of the screen using your static screen dimension floats, and perhaps the `paddleWidth` variable you declared at the top of the class? You could add an additional buffer variable if you don't want the paddle to go all the way to the sides.

9. Once you have constructed your local `Vector3`, return it to your function. In the Update method, set your paddle's position to equal the `MouseWorldPos` function, remembering that it returns a `Vector3`.

## Resetting the Ball

1. Create a new class called `ResetBall` amd attach it to the ball. Open the class.

2. Create two variables of type `GameObject`, one for your paddle, and one for your `spawnPoint`. Set these to be private and serialize them - assign them via the Inspector Panel. Alternatively, assign them via the `Start` function and keep them private by using `GameObject.Find("GameObjectName");`.

3. Create a new method which returns a float of the `transform.position.y`.

4. Create a new float variable (private and serialized) called `minY`. This variable will be the value which we use to check if the ball has fallen too far down the y-axis.

5. Create a new function which checks to see if the float value your method is returning is less than the `minY` variable. If it is, implement the following:

    - Set the ball's position equal to the spawnPoint's position.
    - Set the ball's Rigidbody's velocity to equal `Vector3.zero`.
    - Set the ball's parent to be the paddle.

6. Test your game. Let the ball fall, and if you have done everything correctly your ball should reset if it falls too far down - make sure to set a suitable value for your `minY` variable.


:::caution

**A few polishing techniques for the ball:**

- Locate the Rigidbody on the ball and set freeze its x, y and z rotation in the Constraints section. Also change it so it does not use **Gravity** and set the **Angular Drag** to 0.

- Locate your Bounce physics material and set **Bounce Combine** to multiply, **Dynamic and Static Friction** both to 0, and finally, **Friction Combine** to minimum.

:::



<div class="image-container">
<img src={W3_RESETTING_BALL} width={"70%"} alt="Resetting Ball" />
</div>


## Creating the Bricks

1. Create a new cube `GameObject` called brick and position it in a suitable place so that your ball can realistically hit it. Scale it to be a suitable size, and add your Bounce material to it.

2. Create a new class called **DestroyBlock** and attach it to your brick `GameObject`. Open the class.

3. I'm now going to explain to you how we detect collision. Create a new method like so: 

  ```cs
    void OnCollisionEnter(Collision other) {}
  ```

  Make sure you name it exactly like that, as it derives from `MonoBehaviour`. Any deviation in spelling will result in a custom function. This function is used to detect collision. 

  Remember, at least one of the colliding objects needs a `Rigidbody` for collision to be detected, and luckily for us, our ball has one!

4. Inside your `OnCollisionEnter` function, we can check for objects which have hit whatever the script is attached to like so:

  ```cs
    void OnEnterCollision(Collision other)
    {
      if(other.gameObject.name.Contains("all"))
      {
        Destroy(gameObject);
      }
    }
  ```

  The conditional logic in this method checks to see if the object's name which collided with us contains "all", and we know that it does, because the `GameObject` that collided with us is called `Ball`. It's a good technique to check against part of the string, because it's case sensitive and if you don't do this, you can easily produce bugs.

  If you wanted to destroy the object which collided with us (i.e. the ball), we could simply call `Destroy(other.gameObject)`. But you should not want to do that here, but if you had bullets hitting an enemy, you would almost certainly want that!

5.  Implement a new variable of type `int` called `hitsBeforeDestroyed` (serialized and private!) and implement a way to make some bricks take more hits than others before they are destroyed. 

6. Colour your bricks accordingly by creating new materials.

## Bonus Tasks

1. We put a lot of work into making our game usable by different resolutions, but we just manually placed the bricks, which kind of defeats the whole purpose of multi-resoltuion support. Create a new class called **CreateBricks** and automatically produce a grid of bricks which get positioned to the centre of the screen. Nested for loops will be required!

2. Add a powerup to your game. If you break a special brick then you should spawn two more balls at the current position of the ball. The balls should NOT collide with each other. To do this, create a new layer called `Ball`, and set your ball to be on that layer:

<div class="image-container">
<img src={W3_LAYER} width={"50%"} alt="Ball Layer" />
</div>
  

  Navigate to **Edit > Project settings > Physics**

  

<div class="image-container">
<img src={W3_LAYER_COLLISION_MATRIX} width={"50%"} alt="Ball Layer Collision Matrix" />
</div>
  

  Here we can manage which layers collide with each other, so untick the colum/row which lines up with Ball.

  Next week, we are going to look at refactoring certain parts of this game, implementing a user interface, a score system, and getting it to run on an Android device!

    

