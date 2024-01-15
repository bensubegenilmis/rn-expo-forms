import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Form = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="username" />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "red",
    width: "100%",
    padding: 20,

  },
  input: {
    borderWidth:1,
    padding: 10,
    fontSize: "100%",


  },
});

export default Form;