import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import { API_URL, WEATHER_API_KEY } from '@env';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [isLoading, errorMsg, weather] = useGetWeather();
  console.log(isLoading, errorMsg, weather);

  if (weather) {
    console.log(weather);
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
