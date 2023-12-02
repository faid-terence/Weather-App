import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpCommingWeather from '../screens/UpCommingWeather';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
          textAlign: 'center',
        },
      }}
    >
      <Tab.Screen
        name="CurrentWeather"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="UpComingWeather"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <UpCommingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
