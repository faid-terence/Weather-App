import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-bg2.jpg')}
        style={styles.image}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={styles.populationWrapper}>
          <Feather name={'user'} size={50} color={'red'} />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color={'white'} />
          <Text style={styles.riseSetText}>6:45 AM</Text>
          <Feather name={'sunset'} size={50} color={'white'} />
          <Text style={styles.riseSetText}>5:57 PM</Text>
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
});

export default City;
