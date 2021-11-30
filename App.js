import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState ('')

  const speak = () => {
    const thingToSay = text
    Speech.speak(thingToSay)
  };

  const clear = () => {

    setText('')
  }

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}          
      />
      <Button title="Press to hear text" onPress={speak} />

      <View style={styles.space} />

      <Button title="Clear" onPress={clear} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  input: {
    width: 300,
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10      
  },
  space: {
    width: 10, 
    height: 10,
  },
});

