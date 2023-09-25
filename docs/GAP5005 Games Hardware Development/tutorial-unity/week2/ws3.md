
import W2_PIXEL_GRID from './img/w2_pixel_grid.png'



# Task Sheet 3 - Familiarizing yourself with CSharp


## Tasks

1. Create a new Unity Project. We'll call it `Pixels`. Use the 3D project template.

2. Create a cube in the editor and name it Pixel. Save it as a prefab.

:::tip

  Recap: The hierarchy is where objects in a **Scene** live. A scene is an isolated pocket of the game, like a level. They do not interact with each other. When you store an object as a prefab, you move it into a global context. You can add it to as many scenes as you like. What's more, if you modify the prefab, all copies in all scenes will be modified too. This is a one-way system. If you change a prefab instance in the scene, it will not change the prefab or any other instances.

:::

3. Create a new script and call it `PixelComponent`.

4. Double click the prefab in the project view. It should open the prefab directly. Add the PixelComponent to the game object.

5. We are going to make the game object change when we press a button. However we don't want this to occur on EVERY Pixel using the same input, so we're going to pass into the component which `Key` we want to use. Create a variable of type `KeyCode` and make sure it is visible in the editor. If it is not visible, double check how we make things visible to be the editor in last week's presentation.

6. We're going to add an array of `Color` elements to it (spelled like that). Make it visible in the editor. Now add as many colours as you like to the array in the editor.

:::note
  Hint: Next to the array name in the editor there should be a dropdown that revels a plus button. This will add new elements to the array when you click it.
:::

:::tip

Defining Arrays in C# is much the same as in C++ with one difference. Where in C++ you would put the square brackets after the variable name, in C# it is after the type name. So in C# an array of ints would look like this: `int[] m_myIntArray`. A multidimensional array will look like this: `int[][] m_myMultiArray`.
:::

7. We need to use this data. Create a function that tests if we pressed the `KeyCode` we passed in that frame. It should only trigger the first frame you press the key down. Have it return a bool.

8. Use that function to determine if we should act. If true, we are going to change the colour of the cube. Because we haven't talked about how that works, this is the line of code you will need to add:

```cs
  GetComponent<MeshRenderer>().material.color = col;
```

`col` in this example going to be a colour from your list. We are going to iterate over the list every time we press the key down, so it cycles through the list of colours. Add code to do this. You'll need to make sure you don't overflow your array! This should also be in a separate function. Call this function in Start() as well as inside the if statement. That way, the game should start with every pixel set to your first colour.

9. Time to test it out! Close the prefab screen (The button is located at the top of the hierarchy panel) and check the Pixel instance you added at the start. All being well it should already have the component added and all the colours set up from the prefab. Drag the prefab in a few more times and create a grid. I suggest 3x3 for testing to start with.

:::info
In case it's unclear, when I refer to an instance, I mean an object in the scene. Because the orginal version of the object is the Prefab, every copy we create is called an "Instance".
:::

10. On each instance in the hierarchy, set `KeyColor`. Some of these can be the same if you like, but make sure at least some are different. Run the game and try pressing the keys you set up. All being well you'll have a grid of `pixels` that you can change the colour of!

<div class="image-container">
<img src={W2_PIXEL_GRID} width={"50%"} alt="Pixel Grid" />
</div>