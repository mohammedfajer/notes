
import W6_FOLDERS from './img/wk6_folders.jpg';

# Task Sheet 7 - Data Persistence

This worksheet will help you understand the following
- Storing data using **PlayerPrefs**
- Writing / **Serializing** our Data to Custom Files
- Saving  / Loading Data Using **JSON**



## Step 1 Using Unity's Player Preferences

As mentioned in today's presentation, Unity comes with a build in `save/load` system called **Player Preferences (PlayerPrefs)**. The data which is stored using this system is saved to the registry on Windows, which isn't always ideal, but it is great for storing singular values such as integers, bools, and floats. In this task sheet, I will guide you through three types of data persistence: PlayerPrefs, loading/writing to custom files and JSON.


1. Download the project from `Week 06` on the Moodle page and open it up. If it asks you to upgrade, please do so. I have created a very simple game for us to test our data persistence with today; we'll be saving/loading: health, level, and position.

2. Once Unity is open, create a new folder insides the **Scripts** folder called **Save and Load**. Create a new C# class inside there called `PersistenceManager` and open it up (make sure to add it to your scene somewhere).

3. Inside your script, declare a new global variable of type `PlayerMetrics` and name it **playerMetrics**. The `PlayerMetrics` data type is a class I have made for us which very simply keeps track of the player's position, stores a health variable, and a level variable. This is it:

```cs
public int level    = 0;
public float health = 100;
public Vector3 position;

public void Update()
{
  position = transform.position;
}
```

As promised, nothing too complex going on in there! These are the variables we are going to be using today.

4. In the `Start()` method,  initialize your `playerMetrics` variable. Note, the **PlayerMetrics** class is addded to the `Player` GameObject in the Hierarchy.

5. Create a new method called `SavePlayer()` and call it in the Update method.

6. Inside this method, implement some conditional logic which checks to see if the user has pressed the `T` key; this will be used to save the data. We would use `S`, but the movement is mapped to that key.

7. First off, we are going to save the player's position. Inside your conditional logic which is checking to see if the player has pressed the `T` key, create a local `Vector3` variable with the name `playerPosition`, and set it to equal the position variable which is stored in the `PlayerMetrics` class.

8. Under this declaration, add the following:

```cs
PlayerPrefs.SetFloat("PlayerPosX", playerPosition.x);
```

What this line is doing is creating a key for us with the name `PlayerPosX`, which stores a float value. This key is then assigned the x position of our player, and saved to the registry.

9. Do the same for the `Y` and the `Z` position.

10. In the same section of your script, find a way to store the level variable from the `PlayerMetric` class, and set its key name to equal `PlayerLevel`. Remember, this is an int.

:::note

It is handled in the exact same way as the first example.

:::

11. Do the same for player health and set its key name to equal  **PlayerHealth**. Remember, this is a float

12. Finally, once you have constructed your `PlayerPref` keys, call the following underneath them:

```cs
PlayerPrefs.Save();
```

As you are likely guessed, this saves the keys. Our save function is 100% complete now.

13. Create yourself a `LoadPlayer()` method and call it in the `Start()` method; alternatively, you can hook it up to a button press if you prefer.

14. Inside your method, add the following:

```cs
float playerPositionX = PlayerPrefs.GetFloat("PlayerPosX");
```

This locally declares a float variable and sets it to equal to `PlayerPosX` key we created/saved earlier.


15. Do the same for the `Y` and `Z` positions.

16. Underneath this, construct a new `Vector3`, and set its x,y, and z values to equal your three locally declared floats.

17. Set your `playerMetrics.transform.position` to equal your new `Vector3`.

18. Find a way to load the level variable from **PlayerMetrics**. Note: It is handled in the same way as the first example,  but it's an int.

19. Find a way to load the health variable.

20. Ensuring your load/save methods are being called somewhere, give your game a test. Run around, collect some green/red orbs and note the variables. Exit playmode, and re-enter. Your player should remember where they were, what level they were, and what health they had.


## Step 2 Custom Saving (Manual Serialization / Parsing)

:::info

Although `PlayerPrefs` seem great at first, they are not exactly robust, and as your game grows, managing data in that manner can become cumbersome and expensive. `PlayerPrefs` are great for storing player preferences - single values which can be used to configure basic settings. Even for something such as positions, like we just used in the previous example, I would recommend using a different approach, which we will experiment with now.

:::

1. Before we can write and read from a file, we need to include the following namespace at the top of our script: `using System.IO` - you may remember this from C++, and what it stands for is input and output. Without this, we cannot read or write to files.

2. In your `Save()` method, comment out your `Player Prefs` data, so there is nothing compiled inside your `T` input check.

3. Under the commented out code, add the following:

  ```cs
  File.WriteAllText(Application.dataPath + "/PlayerSave.txt", "This text will appear in our file!");
  ```

  Run your game, move around, and save your game by pressing `T`. Minimize Unity Editor, and then open it again - take a look in your `Assets` folder.

 <div class="image-container">
<img src={W6_FOLDERS} width={"70%"} alt="Unity Folders" />
</div>

  If you open that file then you will see the string which we told it to save. Note, you can create your own custom file type here, so if you didn't wamt `.txt`, you could instead use `.playerSave` (or anything you like).

4.	Let’s take a look at saving some actual data. In today’s presentation, when we covered custom formats, I mentioned that this wasn’t really the way we do things, as we’re going to have to `serialize/deserialize` the data ourselves, and as you’ve likely guessed, that’s what we’re going to be doing now. This is the hardest thing we will do today.

    From the code which is commented out above your line of code which is using `File.WriteAllText`, uncomment the local Vector3, int, and float declarations (the ones which are set to equal the respective values in the `PlayerMetrics` class).


5. Above your line of code which is using `File.WriteAllText`, create a local string called `saveValue`, and set it to equal your `playerLevel` variable and add `.ToString();` onto the end. This will convert your int into a string, so it can be stored as text.

6. Next, instead of passing: `“This text will appear in our file”` into our file, pass in your `saveValue` variable. Go ahead and save your game and open up the file once you’ve done.
 
  You should notice that our variable has saved to our file.


7. To load this data, go to your Load method and comment everything out like you did for the Save method. Add the following code:

  ```cs
  if(File.Exists(Application.dataPath + "/PlayerSave.txt"))
  {
    string saveString = File.ReadAllText(Application.dataPath + "/PlayerSave.txt");
    int level = int.Parse(saveString);
    playerMetrics.level = level;
  }
  ```
  This is how we load data from a file.

  The if statement is checking to see if a save file exists (you’d get an error if you didn’t have
  this check and a file did not exist).

  The local string declaration is reading from our path and storing our saveString ready for use (the string we generated in our save function).

  The line after that is then parsing (reading one type to create another – in our case it’s a
  string to an int), and storing it in a local variable called level.


  Finally, we’re then assigning the player’s level (PlayerMetrics class) to equal the level
  variable. We have successfully loaded data from a text file. Go ahead and give this a try.



8. We now need to find a way to store all of our values in string format. The typical way to achieve this is to create a string array which consists of all the data we want to save. Then, we combine the strings in this array to form a longer ‘master’ version of our saveString variable which we used in the previous task. To do this, go back to your `Save()` method and declare a new local string array called `saveValues`. Construct your array so that it holds the following data:

  ```cs
  level.ToString();
  health.ToString();
  playerPosition.x.ToString();
  playerPosition.y.ToString();
  playerPosition.z.ToString();
  ```

9. Once you have your array of save values (strings), we need to construct the string to form a master string. To do this, go to the line which declares the `saveString` variable in your `Save()` method, and set it to equal the following:

  ```cs
  string saveString = string.Join("##", saveValues);
  ```

  What this is doing is joining all of our strings from our array together, and assigning them to the `saveString` value, so we can call them all with a single value/variable. The `##` can be
  
  anything you want – this will separate the entries in your files, but make sure it’s something that’s not going to occur naturally in your game like a number.


10. The last thing we need to do now is to load our data from our file. This is a little tricky, so please bear with me. Go to your `Load()` method. We need to now deconstruct our string, back into multiple strings so we can read them (this is the same as deserializing, which is why it seems like a huge pain).

11. In your load method, under your saveString declaration, add the following:

```cs
string[] saveValues = saveString.Split(new[] {"##"}, System.StringSplitOptions.None);
```

This is doing the opposite of what we did when we built our singular string and is now splitting our string down (into an array); it uses `“##”` separator to identify the next string, and never includes `##` in the built strings - thus resulting in a nice array of readable data, ready for us to manually parse – yay! 

12. Directly underneath your newly constructed string array, declare 5 variables, 3 of type float, 2 of type int. Here’s the first one:

  ```cs
  float playerPositionX = float.Parse(saveValues[0]);
  ```

  what we are doing here is creating a local variable of type float, and we are parsing the first string in our string array so that it becomes a float. It’s very important that you parse your values in the order you saved them:

  If you saved the `player’s` x position first, make sure you load the `player’s` x position first (make sure the index value [0] is consistent). If you don’t do this, you could end up with your player in the air or have a negative level.




13. Declare and parse the other values.

14.	Assign the values to the variables in the **PlayerMetrics** class. Delete your old save file and give your game a test.

:::note
  Final Note: This is all well and good as it currently stands, however, if we were to build out onto Android device, or IOS, you’d likely encounter some trouble with saving the game, and that’s because the `‘dataPath’` path isn’t valid outside of Windows. So, to fix this, we simply change Application.dataPath to: **Application.persistentDataPath**.
:::

  This will make our games save correctly regardless of the platform we build for, but bear in mind, you won’t be able to see the file in your Assets folder anymore. So I’d recommend doing this at the end of the task sheet, so you can still see your JSON files being generated.

## Step 3 JSON

:::tip
The previous section was much harder than this section, as we had to manually **serialize** and **deserialize** our data, which is cumbersome, especially when languages such as `JSON` do most of the work for us! Imagine doing that for an MMORPG… However, it was very important to understand what is going on behind the scenes before doing things the easier way – that’s the nature of being a programmer!
:::


1. Create a copy of your class so you don’t lose what you’ve done – it’s important to have a reference to this. We’re going to hollow out the class so we can begin work on our JSON implementation. Here’s what my skeleton looks like:

  ```cs
  void SavePlayer()
  {
    if(Input.GetKeyDown(KeyCode.T))
    {
      // File.WriteAllText(Application.dataPath + "/PlayerSave.txt", saveString);

    }
  }

  void LoadPlayer()
  {
    if(File.Exists(Application.dataPath + "/PlayerSave.txt"))
    {
      string saveString = File.ReadAllText(Application.dataPath + "/PlayerSave.txt");
    }
  }
  ```
  
  Make yours look the same.

2.	Inside the same class, create a new struct called `‘PlayerDetails’` and make sure it contains a float for <u>health</u>, an int for <u>level</u>, and a Vector3 for <u>position</u>. JSON supports Vector3! So no need to go and create yourself an array of floats this time.  If you don’t know what a struct is, a struct is a composite data type which allows us to store multiple (grouped) variables under a single name.


  ```cs
  private struct PlayerDetails
  {
    public int level;
    public float health;
    public Vector3 position;
  }
  ```

3. Inside your `Save()` method, go ahead and create a new instance of your struct:

  ```cs
  PlayerDetails playerDetails = new PlayerDetails
  {
      health = playerMetrics.health,
      level = playerMetrics.level,
      position = playerMetrics.position
  };
  ```
  If you’ve never used struts before, they can be really useful, especially for what we’re about
  to use them for!

4. Underneath your new `PlayerDetails` instance, create yourself a local string called **jsonString**, and set it to equal:  `JsonUtility.ToJson(playerDetails);`

  This is absolutely magic compared to what we were doing earlier – it’s taking all of our variables (health, level, and position) at once, and just converting them into a readable string value for us. No need to manually do it!

5.	To get this to save to your file, uncomment the `File.WriteAllText` line, and pass in your new **jsonString** variable. Also, make sure you save to a `.json` file and note a text/custom format.

    Delete your save file, run your game, save it, exit play, and check out your save file. Look how much tidier it is, with much less effort.

6. Go to your `LoadPlayer()` method. Underneath your string declaration, enter the following:

  ```cs
  PlayerDetails playerDetails = JsonUtility.FromJson<PlayerDetails>(saveString);
  ```

  This converts the string in your `JSON` file, back into data which can be assigned to our `Vector3`, float, and int variables (stored in a struct again - just like it was before we converted it into a string). To build your struct again:

7. Under the new **PlayerDetails** instance above, you can set your `playerMetrics.transform.position` to equal `playerDetails.position`.

8.	Do the same for health and level and then give your game a try. Your data should be saving/loading perfectly at this point. Take note of how much cleaner the code is. If it’s not, make sure the file your loading is of type `.json` and not txt/custom.

  In a few weeks’ time, we’ll look at saving more complex data types, such as lists, as well as creating binary files to store our data. Remember, data persistence is worth **20%** of the assignment!

  Remember to update your data paths to **persistantDataPath**!





## Step 4 Additional Task

If you have finished the other tasks, have a go at implementing some form of data persistence into your breaker game. Perhaps create a system which remembers the highest score. Alternatively, if you want to implement it into your own assignment project, that is absolutely fine.


