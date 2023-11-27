import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
  },
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
  },
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
  },
];

const UpCommingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather </Text>
      <FlatList data={DATA} renderItem={}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpCommingWeather;
