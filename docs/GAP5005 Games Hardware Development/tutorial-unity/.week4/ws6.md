import W4_TEXT_MESH_PRO from './img/w4_textmeshpro.png';
import W4_TEXT_MESH_RPO_OBJECT from './img/w4_tmpro_obj.png';
import W4_TEXT_ADJUST from './img/w4_text_adjust.png'; 
import W4_BUTTONS from './img/w4_buttons.png';
import W4_ANCHOR_CENTER from './img/w4_anchor_center.png';
import W4_CREDITS_BUTTON from './img/w4_credits_button.png';
import W4_SCENES_IN_BUILD from './img/w4_scenes_in_build.png';
import W4_ON_CLICK from './img/w4_onclick.png';
import W4_BUTTON_SELECT_METHOD from './img/w4_button_select_method.png';
import W4_OPTIONS_PAUSE_MENU from './img/w4_options_pause_menu.png';
import W4_SCORE from './img/w4_score.png';

# Task Sheet 6 - Adding UI To Your Game

:::info

Please do not start this task shee if you have not completed the work from the week three, as it will make little to no sense in some areas. If you have completed the work from week three, please open that project and continue working through this task sheet.
:::


## Adding a Menu

1. Create a new scene by navigating to **File > New Scene**. Save the scene as `MainMenu`.

2. Create a new Canvas object by navigating to **GameObject > UI > Canvas**. 

  :::note
    Although without a canvas, we cannot render any UI elements, Unity will helpfully create one for us automatically when we add a UI element. I still recommend adding one manually for now, just so you consider the canvas as a key element, and remember it needs to be configured.
  :::

3. Right click on the Canvas in your Hierarchy and create a **UI > Button - Text Mesh Pro**. The reason we use `Text Mesh Pro` is because we don't want to use Unity's text system; although cheaper to use, it lacks functionality, so we use a `plugin`... which Unity themselves package and recommend !

  :::note
    The package should already be installed, but if for some reason it is not; navigate to `Window > Package Manager`. Select All Packages and install `Text Mesh Pro` (the install button can be found in the bottom-right of the window). If Unity asks you to install any `essentials` relatin to `TMPro`, make sure you do so.
  :::

  

<div class="image-container">
<img src={W4_TEXT_MESH_PRO} width={"70%"} alt="Unity Text Mesh Pro" />
</div>

  In the Inspector Panel, you will notice lots of settings in the Text Mesh Pro UI component (these are very similar to MS word). Go ahead and configure your text so that it says `Start Game`, and play with alignment settings/sizes.


4. If, while playing with your `TextMeshPro` object, you extend the bounds outside the button (the yellow outline), you will end up with text in completely the wrong place:

<div class="image-container">
<img src={W4_TEXT_MESH_RPO_OBJECT} width={"50%"} alt="Unity Text Mesh Pro Object" />
</div>

To rectify this, rather than manually fixing it, hold down the alt key and select the anchor icon from the Inspector Panel (make sure your text is selected). Select the bottom-rightmost icon. This will automatically scale the bounds of your UI element to its parent - really simple but effective! Make sure your text is suitably placed inside your bottom. **Note: Holding Alt sets the width and height values for you. If you don't hold Alt, you will need to change those yourself**.


<div class="image-container">
<img src={W4_TEXT_ADJUST} width={"30%"} alt="Unity Text Mesh Pro Adjust" />
</div>


5. Create two more buttons, one for `Credits`, and another for `Quit`. Go ahead and modify your snap settings to get accurate spacing (`Increment Snapping`). Hold control to move and snap objects. Once done, you should have something which resembles the following:


<div class="image-container">
<img src={W4_BUTTONS} width={"30%"} alt="Unity Text Mesh Pro Adjust" />
</div>


6. Right-click your canvas and create an empyt `GameObject`. Make sure your three buttons are children of this `GameObject` and rename the `GameObject` to `MenuElements`.
 
7. In today's presentation, I discussed anchor points, and it is important that we anchor our buttons to the center of the screen. To do this select your `MenuElements` `GameObject`, hold down the alt key, and select the `rect transform` tool you selected before to se the bounds of your text element:

<div class="image-container">
<img src={W4_ANCHOR_CENTER} width={"30%"} alt="Unity Anchor Center Menu Elements" />
</div>

  Continuing from the note on task 5, with `alt` held down, select some of the options to see how your text moves around (notice how the anchor points follow it). If we do not hold alt down, the position of the objects will not change, only the anchor points will. **Note, your UI should be huge - this is normal for screen space UI**.

8. Create a new empyt `GameObject` called `Credits` and add a **TextMeshPro** element as a child which says : `Game Created By: Your Name` or something to that effect. Using anchor points, position your text accordingly. Make sure it is a child of the canvas.

9. Create a back button just below the credits text, which is also a child of `Credits` GameObject.

<div class="image-container">
<img src={W4_CREDITS_BUTTON} width={"30%"} alt="Credits GameObject" />
</div>


10. In the Inspector Panel, toggle the `Credits` GameObject off. **Note: This is done using the checkbox next to the name of the Game Object!**.

11. Create a new class called `MainMenu` and assign it to a new `GameObject` called `MenuScripts`. You can change the name of this if you find something more fitting. It is now time to code some button functions, so open the class you just created.

12. Create three public methods named: `StartGame()`, `ToggleCredits()` and `Quit()`. Make sure they are all public, or else you will not be able to assign the methods to a button! They do not need to be called in `Update/Start` and should all have a return type of void.

13. Add the following namespace to the top of your script:

```cs
using UnityEngine.SceneManagement;
```

This will give you the ability to load different scenes via script.

14. Go back to your scene and navigate to **File > Build Settings**. Make sure both of your scenes are added to the section at the top (take note of the number / index to the right, as it is very important for the next step).You can use the `Add Open Scenes` button to add scenes.


<div class="image-container">
<img src={W4_SCENES_IN_BUILD} width={"30%"} alt="Unity Scenes in Build" />
</div>


15. Go back to your class, and in the `StartGame()` method, enter the following: 
```cs 
SceneManager.LoadScene(1);
```

Where `1` is the respective index of your main scene. This is how we can load different scenes/levels.

**Note: We can also pass in our level name directly. Depending on our use case, there are good reasons for using either**.

16. Go back to your scene and select the `Start Game` button and scroll down in the Inspector Panel until you see the `OnClick()` event as the following:

<div class="image-container">
<img src={W4_ON_CLICK} width={"45%"} alt="Unity Button OnClick()" />
</div>

17. Drag the object which you attached your `MainMenu` class to onto the empty slot which just appeared, and from the drop down menu, select your class name, and select the relevant method (`StartGame()`). This is how we link methods up to button presses. If you didn't make your function public, it would not appear here!


<div class="image-container">
<img src={W4_BUTTON_SELECT_METHOD} width={"45%"} alt="Unity Button Select Method" />
</div>


18.	Go back to your script and declare two new `GameObjects` (serialized private) called `CreditsObj` and `MenuObj`; Go back to your scene and assign the two objects to the respective variable slot (the two parent objects which hold your UI elements).

19.	In your script, inside your `ToggleCredits()` method, implement some conditional logic which checks to see if the `CreditsObJ` variable is active in the hierarchy (`.activeInHierarchy`). If it is, set the `CreditsObj` to inactive - `.SetActive(false)` – and the `MenuObj` to true. Do the opposite if the `CreditsObj` is not active in the hierarchy. Hook this function up to your Credits button.

20.	In your Quit function, add the following: 

```cs
Application.Quit();
``` 

Hook the method up to your Quit button.

21.	Hook your `ToggleCredits()` method up to your back button. Give the game a play and test your buttons. **Note: Your quit button will not work until you build the application out. We don’t want to quit Unity while in editor mode!**


## Adding a Pause Menu

1.	Go back to your main scene and create a new class called **‘Pause Game’**. Create a public static bool called paused. Make sure the script/class is added to a suitable object in your scene. The reason we can use a static variable here is because we will only ever want a single instance of this variable. It would make no sense to have multiple paused booleans. We can call static variables from anywhere without the need to directly reference.

2.	Create a new variable of type `GameObject` called **pauseMenu** (this will be used to hold the UI elements in the pause menu).

3.	In the `Start()` method, set paused to equal false. The reason we do this is because static variables persist when we change scenes, so if we were to go to the main menu in a paused state, and then come back into the main scene, the game would remain paused.

4.	Create a method and implement some logic which toggles the paused variable to true/false when the `escape` key is pressed. I wouldn’t normally give you code, but this could be very helpful for you; when you’re creating a toggle, use:

 ```cs 
 paused = !paused
 ``` 
 this will make the Boolean equal its opposite value.

5.	If paused is true, set `Time.timeScale` to 0. If it’s false, set it to equal 1.

6.	Create two new **public** methods called **‘ReturnToMainMenu()’** and **‘Resume()’**.

7.	Go back to your scene and construct a user interface for a pause menu; you should have a `‘Return to Main Menu’` button and a `‘Resume’` button. Assign this `GameObject` to the variable you created in step 2. When the game is paused, make the UI visible, and when it’s not paused, hide it again.

8.	Find away to create some logic which makes these buttons work as you’d expect.

:::tip
 To create a nice overlay feature when you’re in a pause menu, store all of your UI elements (pause related elements that is) in a `GameObject`. The first child in the GameObject should be a panel (UI > Panel) that is scaled to fit the screen. Select the panel and change its alpha value in the colour to be around 75%. This will create a dimmed effect for your pause menu, like so:
:::

<div class="image-container">
<img src={W4_OPTIONS_PAUSE_MENU} width={"30%"} alt="Unity Pause Menu" />
</div>


9.	You will likely notice that not all of your game assets freeze (your paddle), and the reason behind this is because they’re not scaled by time. If we multiply something by Time.deltaTime, when we set Time.timeScale to equal 0, we are effectively setting Time.deltaTime to equal 0, and when we multiply by 0, we return 0, thus resulting in no movement.

10.	Find a way to stop objects such as the paddle moving when the game is paused. **Hint, you have a static Boolean which you can check against!**





## Adding a Score/Life/Game Over System

1.	Create a new class called `ScoreSystem` and attach it to a suitable object in the scene.

2.	Create two public static int variables: `score/lives`.

3.	Set these variables to equal suitable values in the `Start()` function (I set lives to 3, and score to 0), because that’s what I want my game to start with.

4.	Go back to your scene and add a new canvas with two children; the children should be `TextMeshPro` elements called Score and Lives. Make sure the text field is completely blank.

5. Go back to your class and add the following namespace: 

```cs
  using TMPro;
```
This allows us to access the text objects via script, and we can update / manipulate them as we feel fit.

 
6. Create two new variables of type `TextMeshProUGUI` (the type used to manipulate the `Text Mesh Pro` objects in your scene) and initialize them. Make sure you name the variables scoreUI and livesUI respecively.

7. Create a new method called `DrawScore()`, call it in a suitable place, and add the following: 

```cs
  scoreUI.text = "SCORE:" + score.ToString();
```
Do the same for the **lives** variable. The `ToString()` method in this instances is being used to convert an int to a string, so that we can pass it into our text fields.

8.	Implement some logic in a pre-existing script which adds score when a brick is destroyed. If you have different coloured bricks, make sure the score varies. Remember, out static score variable can be accessed anywhere.

9.	Take a life if the ball needs to be reset.

10.	Position your UI elements in a place which you feel fits your game. When you run the game, your UI should now automatically update to represent your variables – make sure you’ve initialised all your variables and are calling your DrawScore method in the Update loop.

11.	Create a new Canvas which holds UI elements for a game over screen. Your game over screen should have the option to return to the main menu, and your game should pause. Implement some logic which makes this UI element appear when you run out of lives. Make sure the game enters a paused state when the game over UI appears.

 
## World Space UI


1.	Add a canvas which is a child to your brick prefabs and add a `TextMeshPro` object to the canvas. Make sure when you select the canvas that it’s set to world space (Render Mode in the Inspector Panel). Scale your canvas down to fit on the brick (use the width and height sliders in the Inspector Panel, and ensure scale is equal to 1, 1, 1), and position your text element so that it overlays around ¼ of the brick (set the text to nothing – not zero like shown below). Here’s an example (note my text is 0, but that’s only so you can see!). You may need to adjust the z position so that it appears in front.


<div class="image-container">
<img src={W4_SCORE} width={"30%"} alt="Unity Score UI" />
</div>


2.	Create a new class called `AnimateText` and attach it to this `TextMeshPro` object.

3.	In your class which destroys your blocks, create a `TextMeshProUGUI` reference to the `TextMeshPro` element which is stored as a child of the brick, and also store a `GameObject` reference of the canvas which holds the text. Make sure you add the relevant namespace.

4.	Find a way to set the text which is overlaying the brick to equal the score value which the brick is worth just before the brick is destroyed.

5.	Set the canvas object you created a reference to have no parent (null) just after you set the score text.

6.	Finally, after you set the parent to equal null, set the canvas object’s position to equal the brick’s position. Test your game, a score should appear now when a brick is destroyed.

7.	Go back to your `AnimateText` class and implement some logic which achieves the following:

  a.	Tests if the text is not equal to nothing.

  b.	Store a local variable of type **Color** which holds the **faceColor** of the text.
  
  c.	Using `transform.Translate`, make the text move upwards overtime.
  
  d.	Reduce your local variable’s alpha (`colourVariableName.a`) over time.
  
  e.	Set your `TextMeshProUGUI` variable’s face colour to equal your local colour variable.

This will make the score you receive appear when a brick is destroyed, and the text will move slowly upwards and fade out over time. It’s a really nice polished effect, and perfectly demonstrates how world UI works. Destroy the text after 2 seconds.




## Bonus Tasks

1. Test your game and fix any issues which you find. These will be some minor bugs at this point (such as being able to fire the ball in a paused state). Test your game and fix these minor hiccups up - this is good practice.

2. When we port to mobile, the finger placement is going to be awkward as our paddle is too small. Create two buttons (one on each side of the lower screen) which moves the platform left and right respectively when held. You will want to move your walls in a bit by creating a buffer.



