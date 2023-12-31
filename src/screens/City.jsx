import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-bg2.jpg')}
        style={styles.image}
      >
        <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
        <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
});

export default City;
