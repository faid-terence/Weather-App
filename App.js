import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import {API_URL} from '@env';
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  console.log(API_URL)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('permission to access location was denied');
        return;
      }
      let { location } = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (location) {
    console.log(location);
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
      {/* <Counter /> */}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
