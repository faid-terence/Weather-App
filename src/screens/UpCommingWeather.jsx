import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, headerText } = styles;
  return (
    <SafeAreaView style={container}>
      <Text style={headerText}>Upcoming Weather</Text>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 24,
  },
});

export default UpcomingWeather;
