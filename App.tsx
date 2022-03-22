import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  React.useEffect(() => {
    changeScreenOrientation()
  }, []);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light'
      />
      <WebView
        style={styles.container}
        source={{ uri: 'https://carteira.discoverycripto.com.br/totem/form/' }}
      />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
