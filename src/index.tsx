import { NativeModules, Platform } from 'react-native';
type Theme = 'dark' | 'light'
interface BarProps {
  statusBarTheme?: Theme,
  statusBarColor?: string | null, // Android  Only, Transparent if not set
  navigationBarTheme?: Theme, // Android  Only
  navigationBarColor?: string | null, // Android  Only, Transparent if not set
  hideStatus?: boolean
}
let SlideAreasModule = NativeModules.SlideAreasModule
class SlideBar {
  private static instance: SlideBar;
  statusBarTheme: Theme | null = 'dark'
  hideStatus: boolean = false
  statusBarColor: string | null = null
  navigationBarColor: string | null = "#ffffff"
  navigationBarTheme: Theme | null = 'dark'
  constructor() { }
  public static getInstance() {
    if (!SlideBar.instance) SlideBar.instance = new SlideBar()
    return SlideBar.instance
  }
  setBar(props: BarProps | null = null) {
    if (props) {
      if (props.statusBarTheme !== undefined) this.statusBarTheme = props.statusBarTheme
      if (props.statusBarColor !== undefined) this.statusBarColor = props.statusBarColor
      if (props.navigationBarTheme !== undefined) this.navigationBarTheme = props.navigationBarTheme
      if (props.navigationBarColor !== undefined) this.navigationBarColor = props.navigationBarColor
      if (props.hideStatus !== undefined) this.hideStatus = props.hideStatus
    }
    let statusBarTheme = this.statusBarTheme
    let statusBarColor = this.statusBarColor
    let navigationBarTheme = this.navigationBarTheme
    let navigationBarColor = this.navigationBarColor
    let hideStatus = this.hideStatus
    // SlideAreasModule.setBar(statusBarTheme, hideStatus)
    Platform.OS === 'android' ? SlideAreasModule.setBar(statusBarTheme, statusBarColor, navigationBarTheme, navigationBarColor, hideStatus) : SlideAreasModule.setBar(statusBarTheme, hideStatus)
  }
}
export default SlideBar;
