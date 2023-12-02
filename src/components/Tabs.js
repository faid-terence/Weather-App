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
        tabBarActiveTintColor: '#3498db', // Blue color for active tab
        tabBarInactiveTintColor: '#bdc3c7', // Light gray color for inactive tab
        tabBarStyle: {
          backgroundColor: '#2c3e50', // Dark blue color for the tab bar
        },
        headerStyle: {
          backgroundColor: '#2c3e50', // Dark blue color for the header
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#3498db', // Blue color for header title
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
              color={focused ? '#3498db' : '#bdc3c7'} // Blue for focused, light gray for unfocused
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
              color={focused ? '#3498db' : '#bdc3c7'} // Blue for focused, light gray for unfocused
            />
          ),
        }}
      >
        {() => <UpCommingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? '#3498db' : '#bdc3c7'} // Blue for focused, light gray for unfocused
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
