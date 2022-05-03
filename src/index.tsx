import { NativeModules, Platform } from 'react-native';
type Theme = 'dark' | 'light'
type SlideAreasModuleType = {
  setBar: (statusBarTheme: Theme, statusBarColor: string | null, navigationBarTheme: Theme, navigationBarColor: string | null, hideStatus: boolean) => void
}
let SlideAreasModule = null
if (Platform.OS === 'android') {
  SlideAreasModule = NativeModules.SlideAreasModule
}
export default SlideAreasModule as SlideAreasModuleType;
