import * as React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import SlideAreasModule from 'slide-areas-module';

export default function App() {
  const [show, setShow] = React.useState(true)
  React.useEffect(() => {
    SlideAreasModule?.setBar('dark', null, 'light', '#ff00ff', false)
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      {Platform.OS === 'android' ? <View style={{ height: StatusBar.currentHeight }}></View> : null}
      <ScrollView>
        <Text style={styles.desc}>Once this module is enabled, the SafeAreaView cannot be used properly to avoid the status bar.</Text>
        <Text style={styles.desc}>Top status bar settings</Text>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('dark', '#ffffff', 'light', '#ff00ff', false)
        }} style={styles.btn}><Text style={styles.btnText}>White status bar and dark theme</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', '#000000', 'light', '#ff00ff', false)
        }} style={styles.btn}><Text style={styles.btnText}>Black status bar and light theme</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', null, 'light', '#ff00ff', false)
        }} style={styles.btn}><Text style={styles.btnText}>Transparent status bar and light theme</Text></TouchableOpacity>

        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', null, 'light', '#ff00ff', show)
          setShow(!show)
        }} style={styles.btn}><Text style={styles.btnText}>{show ? 'hide' : 'show'} status bar</Text></TouchableOpacity>

        <Text style={styles.desc}>Bottom navigation bar settings</Text>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', null, 'light', '#000000', false)
        }} style={styles.btn}><Text style={styles.btnText}>Black navigationBar bar and light theme</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', null, 'dark', '#FFFFFF', false)
        }} style={styles.btn}><Text style={styles.btnText}>White navigationBar bar and dark theme</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          SlideAreasModule?.setBar('light', null, 'light', '#ff00ff', false)
        }} style={styles.btn}><Text style={styles.btnText}>Same background color as parent element and light theme</Text></TouchableOpacity>
      </ScrollView>

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
