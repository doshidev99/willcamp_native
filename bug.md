## IOS

- Run IOS

- Bug pod install

* [solution] :

- step1: sudo gem install cocoapods
- step2: cd ios && pod install && cd ../ && react-native run-ios
- step3: xcrun -k --sdk iphoneos --show-sdk-path
  if the answer is
  ```
  xcrun:\_ error: SDK "iphoneos" cannot be located
  xcrun: error: SDK "iphoneos" cannot be located
  xcrun: error: unable to lookup item 'Path' in SDK 'iphoneos'
  ```

sudo xcode-select --switch /Applications/Xcode.app
Then install pod again

## Android

- Run on device

- [solution] :
- step 1: mode dev on device
- step 2: transfer file debug on device
- step 3: adb devices ( show list device )
- step 3: yarn android --deviceId=deviceId
- local network : ip:8081

- Task :app:mergeDexRelease FAILED

- [solution]:
  At Path android/app/build.gradle
  defaultConfig {
  multiDexEnabled true //Add this line
  }

### Note

The different android and ios

- Button
