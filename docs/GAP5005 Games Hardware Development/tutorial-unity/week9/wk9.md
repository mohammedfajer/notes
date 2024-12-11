

# Task Sheet 9 - Accelerometer, Gyroscope, Touch Input

:::info
Learn to use accelerometers, gyroscopes, and touch input in Unity
:::

## Step 1 Accelerometers

Download and open the **‘Week 09 Project’** file from Week 09 on Moodle. Open it up. You will notice that there are three scenes, one for accelerometers, one for gyroscope, and one for touch input; I have built these scenes for us and hooked up any relevant objects as to not steal too much time from you.
Feel free to have a look around to see how things are set up, but there’s nothing outside of placement/adding components to objects. Nothing I have done has any bearing on what we’re about to do, outside of adding a rigidbody to the sphere in the Accelerometer scene.


1. Make sure the `Accelerometer` scene is open. Once it is open, open the **`‘Accel’`** script. This script is attached to the sphere which will be reacting to the accelerometer’s output.

2. Declare a new **Rigidbody** variable called **`‘_rb’`**. Assign it via the **`Start()`** method, or via the Inspector Panel.
3. Declare a new float variable called `speed` and set it to equal 5.
4. In the **`Update()`** function, declare a new **Vector3** with the name **`‘tilt’`**. Set it to equal `Input.acceleration`
5. Underneath that declaration, set:
  ```cs
  tilt = Quaternion.Euler(90,0,0) * tilt;
  ```
  Quaternions are used to represent rotation, which is useful for accelerometers, as they return the orientation of the device. We store the device orientation in the tilt variable.
6. Underneath this line, add:
  ```cs
    _rb.AddForce(tilt * speed);
  ```
  This adds force to the Rigidbody, relative to which way the device is facing.

## Step 2 Gyroscopes

Load up the **`‘Gyro’`** scene and open the **`‘Gyro’`** class. This class is added to the main camera, and it will implement the logic required to look around the scene using the gyroscope.

1. Declare a new variable at the top of your script of type Gyroscope and name it **`‘gyro’`**.

2. Declare a new variable at the top of your script of type Quaternion and name it **`‘rot’`**. This will be used to help set the initial orientation of the device to make sure things are **`level`**.

3. In the **`Start()`** method, add the following:

  ```cs
    private void Start()
    {
        if(SystemInfo.supportsGyroscope)
        {
          gyro = Input.gyro;
          gyro.enabled = true;
          
          transform.parent.transform.rotation = Quaternion.Euler(90,90,0);
          rot = new Quaternion(0,0,1,0);
        }
    }
  ```
  **What this is doing**:
  - Checking if our device has a gyroscope.
  - Set our gyro variable to equal the **`Input.gyro`** (returns the values the gyroscope returns).
  - We then enable the gyroscope.
  - We then set the default orientation of the camera to make sure we are facing the right way when we start the game. The camera is a child of an empty **`GameObject`** which is why we use transform.parent.

4. Inside the **Update()** method, create another if statement which checks to see if the system has a gyroscope (just like you did in the Start method).

5. Inside that if statement, check if gyro is not equal to null.

6. If it’s not, set the following:

```cs
  transform.localRotation = gyro.attitude * rot;
```

Here we are setting the rotation of the camera to equal the gyroscopes return values. We use `.attitude` to achieve this.

## Step 3 Touch Input

:::info
This last step will show you how we can detect if multiple fingers are on the screen, if the user is quickly tapping the screen with a specific finger, or if the finger is moving. Open up the **Touch Input** scene and open up the **TouchTracker** class. You will notice I have already declared some variables – these are simply for visual purposes so we can see what’s going on (mainly text output to the screen).
:::

1. In the **`Update()`** method, add the following:
  ```cs
    Touch[] myTouches = Input.touches;
  ```
  This stores an array of every single finger touch that is on the screen. If 4 fingers are on the screen, the array’s length will be 4.


2. Underneath that declaration, check if **`myTouches.Length`** is more than 0. We do this to make sure there is actually a finger on the screen before we go any further.

3. Inside that if statement, set **`noOfQuickTaps`** (an integer) to equal `myTouches[0].tapCount`. This checks to see how many times the first finger on the screen taps in quick succession, and stores it in an integer variable.


4. Underneath this, set the **‘tapCounter’** text to equal `noOfQuickTaps`. Use **ToString(“F0”)** to achieve this.

5. Next, set the `noOfTouches` text to equal the length of your **‘myTouches’** array.

6. Create another if statement like so:

  ```cs
    if(myTouches[0].deltaPosition.magnitude > 1.5f)
    {
      statusOfLatestTouch.text = "Finger is moving across the screen";
    }
    else
    {
      statusOfLatestTouch.text = "Finger is static";
    }
  ```

  What this is doing is checking to see if the first finger that was placed on the screen is moving or not, and it’s respectively setting the text to something which we can understand.

7. Finally, create an `else` statement which comes after your **`myTouches.Length > 0`** check, which sets:
  
  ```cs
  noOfTouches.text = “0”;
  statusOfLatestTouch.text = “No finger detected”.
  ```

  Finally, build your project to your device and test your code. If you have any issues, let me know.
