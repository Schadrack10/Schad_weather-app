import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (

    <View style={styles.header}>
      <Text style={styles.title}>Favourite Cities</Text>
      <FontAwesome5 name="city" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    // paddingTop: 38,
    backgroundColor: '#000E1C',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    gap: 5
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});