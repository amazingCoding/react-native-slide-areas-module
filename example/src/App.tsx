import * as React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import SlideBar from 'slide-areas-module';

export default function App() {
  const [show, setShow] = React.useState(true)
  const slideBar = React.useMemo(() => SlideBar.getInstance(), [])
  const isAndroid = Platform.OS === 'android'
  React.useEffect(() => {
    if (isAndroid) slideBar.setBar({ navigationBarColor: '#ff00ff', navigationBarTheme: 'light' })
    else slideBar.setBar()
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      {isAndroid ? <>
        <View style={{ height: StatusBar.currentHeight }}></View>
        <ScrollView>
          <Text style={styles.desc}>Once this module is enabled, the SafeAreaView cannot be used properly to avoid the status bar.</Text>
          <Text style={styles.desc}>Top status bar settings</Text>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              statusBarTheme: 'dark',
              statusBarColor: '#ffffff'
            })
          }} style={styles.btn}><Text style={styles.btnText}>White status bar and dark theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              statusBarTheme: 'light',
              statusBarColor: '#000000'
            })
          }} style={styles.btn}><Text style={styles.btnText}>Black status bar and light theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              statusBarTheme: 'light',
              statusBarColor: null
            })
          }} style={styles.btn}><Text style={styles.btnText}>Transparent status bar and light theme</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => {
            slideBar.setBar({ hideStatus: show })
            setShow(!show)
          }} style={styles.btn}><Text style={styles.btnText}>{show ? 'hide' : 'show'} status bar</Text></TouchableOpacity>

          <Text style={styles.desc}>Bottom navigation bar settings</Text>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              navigationBarTheme: 'light',
              navigationBarColor: '#000000'
            })
          }} style={styles.btn}><Text style={styles.btnText}>Black navigationBar bar and light theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              navigationBarTheme: 'dark',
              navigationBarColor: '#FFFFFF'
            })
          }} style={styles.btn}><Text style={styles.btnText}>White navigationBar bar and dark theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({
              navigationBarTheme: 'light',
              navigationBarColor: '#ff00ff'
            })
          }} style={styles.btn}><Text style={styles.btnText}>Same background color as parent element and light theme</Text></TouchableOpacity>
        </ScrollView>
      </> :
        <ScrollView>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({ statusBarTheme: 'dark' })
          }} style={styles.btn}><Text style={styles.btnText}>White status bar and dark theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({ statusBarTheme: 'light' })
          }} style={styles.btn}><Text style={styles.btnText}>Black status bar and light theme</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            slideBar.setBar({ hideStatus: show })
            setShow(!show)
          }} style={styles.btn}><Text style={styles.btnText}>{show ? 'hide' : 'show'} status bar</Text></TouchableOpacity>
        </ScrollView>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff00ff",
  },
  btn: {
    marginHorizontal: 20,
    padding: 15,
    // height: 50,
    backgroundColor: "#00FF00",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 16,
    color: "#333",
  },
  desc: {
    padding: 10,
    margin: 20,
    fontSize: 14,
    color: "#333",
    borderRadius: 4,
    backgroundColor: "#fff"
  }
});
