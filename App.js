import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import UpCommingWeather from './src/components/UpCommingWeather';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpCommingWeather />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
