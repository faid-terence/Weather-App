import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpCommingWeather from './src/screens/UpCommingWeather';
import City from './src/screens/City';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <UpCommingWeather /> */}
      <City />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default App;
