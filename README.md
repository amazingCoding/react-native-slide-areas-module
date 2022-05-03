# slide-areas-module

Modify the theme and color of the top status bar and bottom navigation bar of Android.
Note that SafeAreaView will not work once the module is called.
* change StatusBar need Androi 6.0
* change NavigationBar need Androi 8.0 

用于修改安卓 APP 顶部状态栏和底部导航栏的主题和背景色，  
需要注意的是，一旦启用该模块，SafeAreaView 将不再起作用。

## Installation
add this to your package.json and run `npm i`
```json
{
  "slide-areas-module": "github:amazingCoding/react-native-slide-areas-module"
}
```

## Usage

```js
import SlideAreasModule from "slide-areas-module";
// statusBarTheme : 'dark' | 'light'
// statusBarColor : hex string
// navigationBarTheme : 'dark' | 'light'
// navigationBarColor : hex string
// hideStatus : boolean
SlideAreasModule?.setBar('dark', null, 'light', '#ff00ff', false)
```
## demo
![android](./1.gif)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
