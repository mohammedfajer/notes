
import W2_CRASH_COURSE_CUBE from './img/w2_crash_course_cube.jpg'

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


### CRASH COURSE:


The `left / right` movement may differ for your **Player** GameObject as it is dependent on which way it is facing in the world. If your jetpack is not handling the way it should be (i.e. moving backwards instead of to the right), the go to your `Scene Panel` and select the **Player** GameObject.

<div class="image-container">
<img src={W2_CRASH_COURSE_CUBE} width={"50%"} alt="Cube" />
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

  
