import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';



export default function SearchBar({ fetchWeatherData }) {

  const [cityName, setCityName] = useState('')


  return (
    <View style={styles.SearchBar}>

      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <FontAwesome style={{ marginRight: 30 }} name="search" size={24} color="black" onPress={() => fetchWeatherData(cityName)} />
    </View>
  )
}

const styles = StyleSheet.create({
  SearchBar: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    // width:330,//for mobile width
    borderWidth: 1.5,
    paddingVertical: 5,
    borderRadius: 35,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'lightgrey'

  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    marginLeft:10,
    // borderColor:'red'

  }


}) 