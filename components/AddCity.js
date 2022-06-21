import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddCity({ submitHandler }) {
  const [text, setText] = useState('');

  // const changeHandler = (val) => {
  //   setText(val);
  // };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (

    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder='enter city name....'
        onChangeText={val => setText(val)}
      />

      <Button color='#000E1C' onPress={pressHandler} title='add city' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});