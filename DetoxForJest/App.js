import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {Component, useState} from 'react';

export default function TestReact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={styles.forview}>
      <Text style={styles.fortext}> Enter your name </Text>
      <TextInput
        style={styles.input}
        testID='inputname'
        onChangeText={val => setName(val)}
      />
      <Text styles={styles.fortext}>
        Welcome {name} to my React Native test
      </Text>
      <Text style={styles.fortext}> Enter your Age </Text>
      <TextInput
        style={styles.input}
        testID='inputage'
        placeholder="Pls Enter your age here"
        onChangeText={val => setAge(val)}
      />
      <Text style={styles.fortext}> Your age {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fortext: {
    height: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 100,
  },
  forview: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
