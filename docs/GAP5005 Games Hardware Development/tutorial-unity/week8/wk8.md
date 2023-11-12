
import W8_VISUAL from './img/w8_visual.png';

# Task Sheet 8 - Binary Serialisation and Deserialisation

:::info 

Writing/Serializing our data using `.NET` Binary Formatter.

:::

![Alt text](.\img\image.png)

## Step 1 .NET Binary Formatter (Save)

Last week, we have looked at saving files using Unity's **PlayerPref** sytem, custom file formats, and `.JSON` files. This week, we are going to be looking at another way to store and load our data; that method will be using binary files (or `.NET's` Binary Formatter).

1. Download the project from **Week 08** on the Moodle page and open it up. If it asks you to upgrade, please do so. We’re going to be using the same project which we used the other week, as it’s a familiar, well-suited environment to use. Note, a few small changes have been added to the game.

2. Once Unity is open, create a new folder inside the `Scripts` folder called **‘Save and Load’** if it doesn’t already exist. Create a new C# class inside there called **‘PersistenceManager’** and open it up (make sure to add it to your scene somewhere).

3. The other week, we established that I had created class which stored the player’s level, their health, and their position; this week, I’ve removed the health value, and in its place I’ve added a new variable of type `List<string>`, which stores a list of strings relating to all the enemies the player has killed.

  ```cs
  public int level = 0;
  public Vector3 position;
  public List<string> enemiesKilled = new List<string>();

  public void Update()
  {
    position = transform.position;
  }
  ```

  For the list, each time you collide with an enemy, the name of the enemy will be added to the list; the name can be either pig, goblin, orc, or a human.


4. In your class, import the `System.IO` namespace at the top; remember, this allows us to use the input/output system to write and read from files. Additionally, add the .NET binary formatter library. **You should use Google or other means of search to find out how to do this!**

5. Create a new method called `Save()`.

6. Inside the method, create a new local variable of type `BinaryFormatter` named **‘bf’** and make it equal a new instance of `BinaryFormatter`, so that we can call upon **‘bf’** throughout the save method to make things easier.

7. Underneath this declaration, you need to create a new variable of type `FileStream` named **‘stream’**; this is slightly different than what we used the other week. Once you’ve declared your `FileStream` variable, you need to set it equal to a file path, or in our case, create one.

8. Make your `FileStream` variable equal: 

  ```cs 
  File.Create(Application.persistentDataPath + "/playerData.dat")
  ```

  This creates a file at the specified location, ready for us to write to. Notice the `.dat` file – custom format, just like we did the other week! You’ve very likely seen these files before if you’ve checked out local game files – it’s kind of a standard notation for data containing files.

  Remember, `Application.persistentDataPath` is a path chosen by Unity which is specific to each device. If we were to explicitly save to `AppData` on PC, and then went on to build our game for Android, AppData would not exist; `Application.persistentDataPath` resolves this issue by having a constant directory for each device.

9. At this point we’ve created a file with our specified name, but we’ve got nothing to `serialize/save`. In the same class, create a new struct named **‘PlayerData’**. Inside the struct, create three variables, one of type `int` for the <u>level</u>, one of type `float[]` for the <u>position</u>, and one of type `List<string>` for the <u>names</u> of the enemies we have killed. Before moving on, remember to use `[System.Serializable]` above the struct to ensure we can serialize the data.

  Just to reiterate, if you are confused about what a `list` is, it’s basically a <u>dynamic array</u>; you use it the way you would use a `Vector` in C++ - you can dynamically **`add/remove/insert`** elements at runtime.


10. Create a class member of type `PlayerMetrics` with the name **‘m_playerMetrics’**. In the `Start()` function, set it to equal the `PlayerMetrics` component which can be found on the **‘Player’** `GameObject` in the Hierarchy Panel – we’re going to use this to access the player variables which I mentioned earlier (the `int`, the `Vector3`, and the `list` of strings).

11. Go back to your `Save()` method and create a new instance of `PlayerData` (your struct) underneath your `FileStream` declaration.

12. Underneath this declaration, respectively set the variables stored in your struct to equal the counterpart variable found inside the `PlayerMetrics` class (use your **‘m_playerMetrics’** reference).

  `Float[]` : Remember, the `BinaryFormatter` does not take native Unity types, and instead only takes the standard types such as <u>float</u>, <u>int</u>, and <u>string</u>. So, if we want to create a `Vector3`, we instead use three floats – your struct should already have a float array, so in the `Save()` method, set the size of the float array to equal 3, then respectively assign the x, y, and z [0, 1, 2] positions to respective array element.

  `List<T>` : You can simply set the list you are loading to equal the list from the save file. We’re going to experiment with some harder techniques in a moment relating to lists.


13. Once your data has been set in the struct instance, call the following:

  ```cs
  bf.Serialize(nameOfYourFileStream, nameOfYourStructInstance);
  ```

  This serializes the struct we initialized at the specified path, using the Binary Formatter.

14. Finally, call **`stream.Close()`** to end the `FileStream` process. Our `Save()` function has now been completed, and we are now able to save using <u>binary formatting</u>.

15. Create an input which calls the `Save()` method when the **‘P’** key is pressed.



## Step 2 .NET Binary Formatter (Load)

:::info

Loading from a binary file follows the same process as `JSON` – using **deserialisation**. We’re going to need to load the player’s last known position, the level they are currently on, as well as a list of all the enemies they have slain! However, before we do that, there’s some groundwork we need to implement.
:::

1. Create a **`LoadPlayer()`** method and call it i the `Start()` method.

2. Inside the method, create an if statement which checks to see if the save file exists – we don’t want to load from a file that doesn’t exist!

  **Hint:**
  ```cs
  if(File.Exists(dataPath))
  {
  }
  ```

3. Inside your if statement, create a new instance of `BinaryFormatter` called **‘bf’**.

4. Underneath this, create a new instance of `FileStream` called **‘file’**, just like we did for the `Save()` method. However, this time, we’re not going to use **`File.Create`**, we’re instead going to use:

  ```cs
  File.Open(dataPath, FileMode.Open);
  ```

  Implement this.

5. Next, create a new local variable of type `PlayerData` in your `LoadPlayer()` method called **‘data’** and set it to equal:

  ```cs
  (PlayerData)bf.Deserialize(file);
  ```

  What this is doing is casting our struct so that the binary formatter knows what object it’s dealing with (PlayerData, or the name of your struct).


6. Underneath, call **‘file.Close()’**. We have successfully pulled all the data from our save file, so we close the stream as we have stored all information in our local struct declaration (data).

7. Using the variables stored in your local **‘data’** struct, set the respective variable in the **`m_playerMetrics`** reference to equal the corresponding value in the struct. Remember, we need to set the position, the level, and the enemies killed.


8. Once you think you’ve done this, give your game a test. If you’ve done everything correctly, the game should remember where your player was when they saved, what level they were, and all the enemies they have slain!


## Step 3 Saving More Complex Data

:::info

Ok, so at this point you’ve been exposed quite heavily to data persistence, and if you’ve got this far, you should have a pretty strong indication of how this is all handled. However, we’ve only really covered top level saving with single values, such as the level a player is on, the health etc. We did implement a list, but it was very easy and one-dimensional compared to some of the curveballs which could quite easily be thrown our way in `AAA` development; picture this:

**`Use Case:`**
Your boss comes along and mentions that it’d be a great idea to have a feature which compliments the current ‘enemies slain’ list, and he believes we should also display the position which the enemy died at.

Now you need to store a list of enemies, and a list of positions, and then reassign them – all whilst making sure it’s the correct enemy/position, whilst using serialization, deserialization as well a binary/JSON formatter…. Quite a pain, as you can imagine!

Luckily for us, someone saw your boss coming, and coded you a system which tracks the position of all enemies when they die. To enable it, locate the ‘UI Canvas’ GameObject and tick the conveniently placed **‘Track Enemy Death Position’** Boolean.
:::


1. Open up your **save/load** script again. Create a new method called **`SaveEnemies()`** (we don’t want to bloat the `SavePlayer()` method with enemy data). Note: You could quite easily create
a global `Save()` method with a single argument of your struct type to make this cleaner (or similar), but for the sake of clarity, we’re going to duplicate methods. Once you have a **`SaveEnemies()`** method, move on.


2. In the method, create a new `BinaryFormatter` instance.

3. Create a new `FileStream` variable, and create the file path (I called  my path `/EnemyData.dat`) - Hopefully you're staring to see how file structures are build by this point.

4.	Create a new struct called **‘EnemyData’** – this is where things get a little different. We only want a single variable in this struct, and it will be used to store the death position of each enemy. However, as I mentioned earlier, that means we need a list of enemy positions and we can’t use `Vector3` with the binary formatter so we’re going to need an array of floats which we can use later to build our `Vector3`. 

    Inside your struct should be:

    ```cs
    public List<float[]> deathPositions;
    ```

    This creates a list of float arrays, stored under the name of **`deathPositions`**; here's a visualization of what this does:
    
    <div class="image-container">
    <img src={W8_VISUAL} width={"50%"} alt="Unity Version" />
    </div>

    The elements represent the `List<>` part of the declaration.

    The `[0, 0, 0]` represents the `float[]` part of the declaration (we’re going to manually set this size to equal 3, so it can be assigned to a `Vector3`.

    This method allows us to successfully wrap multiple float values together and store them at a specific index of an array/list. This will make more sense as we progress through the next steps.

5. Go back to your **`SaveEnemies()`** function and declare a new variable of type `EnemyData` (your struct) called **‘data’**.

 
6. Underneath that, we need to initialise our list, to do this, we type:

  ```cs
  data.deathPosition = new List<float[]>();
  ```

  Where data is the name of our struct instance, and **`deathPosition`** is the name of our `List<float[]>`.


7. Create a new global variable of type `EnemyMetrics` called **‘m_enemyMetrics’** – Assign this in the `Start()` method (the class is attached to the **‘Enemy’** `GameObject` for you to reference). Note, the best way to do this with the current system is:

  ```cs
  variableName = GameObject.FindObjectOfType<EnemyMetrics>();
  ```

8. Go back to your **`SaveEnemies()`** method and create a `for loop` which loops through the length of `m_enemyMetrics.deathPosition.Count` (remember, for a list, we use `.Count`, not .Length like we do for an array).

9. Inside your loop, declare a new float array called **`‘latestPos’`** and set its size to equal 3.

10. Find a way, using Google, to set each respective [0, 1, 2] element of your local float array to equal `m_enemyMetrics.deathPosition[i].AXIS` (where 0 is x, 1 is y, 2 is z).


11. Add `latestPos` to your list which is stored in your **‘data’** variable – use **`YourListName.Insert(0, latestPos)`** to achieve this.

12. Finally, serialie your file and struct like you did in the other `Save()` function, and close the stream You’re now successfully saving your enemy positions.

## Step 4 Loading More Complex Data

1. Copy your **`LoadPlayer()`**  method and store it in a new method called **‘LoadEnemies()’**. Clear out all duplicate data which appears after **`‘file.Close();’`** and update the paths so that they
correspond with the correct file you’re loading. Make sure to update the struct type.


2. Underneath this, create a `for loop` which loops through the length of your **`deathPosition`** list which is stored in your locally declared struct.

3. Declare a new float variable called `xVal`, and set it to equal:

  ```cs
  float xVal = data.deathPosition[i][0];
  ```

  What we’re doing here is creating a local float variable, and setting it to equal the first element of our float array which is stored in the specified (i) index of our list. This is how we can build more complex structures, and I’ve found it to be a very reliable method over the years.

  Do the same for the y /z values.



4. Using these three float variables, declare yourself a new local `Vector3`, ready to be assigned back to the **EnemyMetrics** class which I created (the class I created wants a `Vector3`).

5. Using **`List.Insert()`** again, insert your newly constructed `Vector3` into the **`‘deathPosition’`** list which can be found in the **‘_enemyMetrics’** reference.

6. Call your **`SaveEnemies()`** method on the `P` press if it’s not already being called and call your **`LoadEnemies()`** method in the `Start()` function.

7. Navigate to: **`C:\\Users\\**USER**\\AppData\\LocalLow\\DefaultCompany\\ProjectName`** or similar, and delete the save files which are stored there (this is `Application.persistenceData`). Ensure the Boolean is checked on the `UI Canvas` object and test the game.



### Closing Remarks


Hopefully you have a much greater understanding of how **`saving/loading`** is handled in games now, and I hope you feel comfortable implementing this into your projects. **Remember**, this is worth a good number of marks for the assignment, so it’s so important that we spent so long covering it. Not only that, but this is an extremely valuable skill which will be incorporated into practically every project which you will ever work on in the future – it might even be an interview question.

These methods allow you to save pretty much anything you need. The last method we looked at could be used to store tree structures for `MMORPGS` – Where our enemy is `Warrior/Ranger/Mage`, and the float positions are the stat points in each respective skill. Obviously, it’d need a little bit of tweaking, but you get the idea.


