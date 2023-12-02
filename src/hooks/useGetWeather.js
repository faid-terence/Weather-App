import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { API_URL, WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setErrorMsg(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setLat(coords.latitude);
      setLong(coords.longitude);
      await fetchWeatherData();
    })();
  }, []);

  return [isLoading, errorMsg, weather];
};
