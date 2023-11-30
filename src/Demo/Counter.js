import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Button
        color={'red'}
        title="Increment the Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        color={'green'}
        title="Decrement the count"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
