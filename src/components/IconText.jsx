import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
  const { iconName, bodyText, iconColor, bodyTextStyle } = props;
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  },
});

export default IconText;
