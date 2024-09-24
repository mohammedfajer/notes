
import W4_UNITY_VERSION from './img/w4_unity_version.png';
import W4_ANDROID_MODULES from './img/w4_android_modules.png';
import W4_ADD_MODULES from './img/w4_add_modules.png';
import W4_SWITCH_PLATFORM from './img/w4_switch_platform.png';
import W4_ANDROID_EXTERNAL_TOOLS from './img/w4_android_external_tools.png';
import W4_BUILD from './img/w4_build.png';

# Building for Android

:::warning
If you do not have an android device, we have a limited amount to loan out. If these are unavailable,
  You can test your apk on an emulator such as bluestacks or nox asst.

  - https://www.bluestacks.com/
  - https://www.bignox.com/ 

They mostly work by just dragging your `.apk` file and running the program.
:::

## 1.0 Installing Unity Correctly

Open `Unity Hub`  and make sure you are running the latest version of the `Hub` (you will be promoted to upgrade if you are not running the latest version - Note, this might not be in the form of a pop-up, and instead may just appear near the top or bottom of the Hub window).

Once you have the latest version of the `Unity Hub` installed, select the cog to the right of the version yo want to install the modules on. In the example below, I am using `2022.3.X`, and you should be using the same, ideally `2022.3.8f1` LTS version. 

<div class="image-container">
<img src={W4_UNITY_VERSION} width={"100%"} alt="Unity Version" />
</div>

Once clicked, if you do not see `Add Modules` in the drop-down list, then you need to uninstall Unity by using the same drop-down list. If you see `Add Modules` please proceed to the next step.

Once you have uninstalled Unity, select the `Add` button (and install the version of Unity you wanted (2022.3.X)). Please untick `Android Build Support` if it is selected; we are going to manually do this.

## 2.0 Installing Android Modules

Now that we all have Unity installed the same way, we can go ahead and install the correct modules. Select the three dots again from the previous step, and select `Add Modules`:

<div class="image-container">
<img src={W4_ADD_MODULES} width={"50%"} alt="Unity Add Modules" />
</div>

Select `Android Build Support` and make sure the two options which are hidden as drop-down entities, then select `Done`. Wait for the module to install, but please be aware that it may take a while dependeing on your connection.

<div class="image-container">
<img src={W4_ANDROID_MODULES} width={"100%"} alt="Unity Version" />
</div>

## 3. Configuring and Checking the Installs

Open the game we are working on and navigate to **File > Build Settings**. From the list under **Platform** select `Android`, and then press `Switch Platform`:

<div class="image-container">
<img src={W4_SWITCH_PLATFORM} width={"60%"} alt="Unity Switch Platform" />
</div>

If you want to build for `PC`, you will need to switch platforms again so that the correct module is loaded. For now, we want to keep the platform set to Android.

Navigate to **Edit > Preferences > External Tools**. Under Android, ensure that yours looks like this:

<div class="image-container">
<img src={W4_ANDROID_EXTERNAL_TOOLS} width={"60%"} alt="Unity Android External Tools" />
</div>

If it does, then proceed to the next step.

## 4.0 Building the Game

Now that we have Unity fully configured to work with Android, we can go ahead and build our game. Android applications come in the file format `.APK`, and that's the same file type we will be creating now. 

Navigate to **File > Build Settings > Android** (like you did earlier). At the top of this screen, you will notice a section for `Scenes in Build`; it is very important that you add your scenes here with the button highlighted in red (they must be saved before you can add them). Additionally, instead of selecting `Switch Platform` you should be able to select `Build`.

<div class="image-container">
<img src={W4_BUILD} width={"50%"} alt="Unity Build" />
</div>

Select `Build` and save the .APK file somewhere memorable.

## 5.O Running the .APK

For those of you with an Android device, it is simply a case of getting the `.APK` file onto the device. You can do this in several ways, ranging from file transfer with a cable, emailing it to yourself and downloading it, or uploading to a file sharing site such as Google Drive (and then downloading it). Using these methods, gets the `.APK` onto your device.

Once the `.APK` file is on your device, simply click the icon. You will be warned not to install `.APK` files from unknown sources, but luckily for us, we how where the `.APK` came from! So, go ahead and authorize the `.APK` file to be installed.

Once installed, you will be able to run and play your game. Congratulations, you have made your first Android game!

:::info
**Additional Notes:**

Building for mobile device in Unity has a bit of a reputation for being a pain, and although Unity have made considerable improvements in recent years in this area, it can still be somewhat unpredictable. If you follow this guide and are still having trouble porting to mobile, please speak with me and we will find the solution.
:::

