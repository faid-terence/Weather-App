import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.cityName}>{name}</Text>
          <Text style={styles.countryName}>{country}</Text>
        </View>

        <View style={styles.infoContainer}>
          <IconText
            iconName="users"
            iconColor="#e74c3c"
            bodyText={`Population: ${population}`}
            bodyTextStyle={styles.populationText}
          />
        </View>

        <View style={styles.sunriseSunsetContainer}>
          <IconText
            iconName="sunrise"
            iconColor="#f39c12"
            bodyText={`Sunrise: ${moment(sunrise).format('h:mm A')}`}
            bodyTextStyle={styles.sunriseSunsetText}
          />
          <IconText
            iconName="sunset"
            iconColor="#e67e22"
            bodyText={`Sunset: ${moment(sunset).format('h:mm A')}`}
            bodyTextStyle={styles.sunriseSunsetText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  backgroundContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  countryName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  populationText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#e74c3c',
  },
  sunriseSunsetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  sunriseSunsetText: {
    fontSize: 18,
    color: 'white',
  },
});

export default City;
