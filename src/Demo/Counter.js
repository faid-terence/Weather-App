import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log(`Our Cont value is ${count}`);
    return () => {
      console.log('Use effect cleanup');
    };
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Text style={styles.title}>{newCount}</Text>
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
      <Button
        color={'red'}
        title="Increment the Count"
        onPress={() => {
          setNewCount(newCount + 1);
        }}
      />
      <Button
        color={'green'}
        title="Decrement the count"
        onPress={() => {
          setNewCount(count - 1);
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
