import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator , ImageBackground , Dimensions} from 'react-native';
import React, { useState, useEffect , useContext } from 'react';
import Weather from '../components/Weather';
import SearchBar from '../components/SearchBar';
const backImg = require('../assets/leave.jpg')
import { userContext } from '../components/app/userContext';

const API_KEY = '12fbbf7c2b2d7229a1d5e999ee237057';

export default function SearchHome({navigation}) {
  
  const [weatherData, setWeatherData] = useState(null)
  const [loaded, setLoaded] = useState(true)
  const {cityContext, setCityContext} = useContext(userContext)


  async function fetchWeatherData(cityName) {
    setLoaded(false)

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    try {
      const response = await fetch(API)
      if (response.status == 200) {
        const data = await response.json()
        setWeatherData(data)
      } else {
        setWeatherData(null)
      }
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchWeatherData(cityContext)
    console.log(weatherData)
    
  }, [])

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='grey' size={36} />
      </View>
    )
  } else if (weatherData === null) {
    return (
      <ImageBackground
      source={backImg}
      style={styles.backgroundImg}
      resizeMode='cover'
      >
      <View style={styles.container}>
         <SearchBar fetchWeatherData={fetchWeatherData}/>
         <Text style={styles.primaryText}>City Not found!</Text>
         <Text style={styles.primaryText}>Try a Different city</Text>
      </View>
      </ImageBackground>
    )
  }

  return (
    <View style={styles.container}>
      <Weather navigation={navigation} weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImg:{
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  container: {
    flex: 1,
    // backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText:{
     margin:10 ,
     fontSize:28,
     color:'white'
  },

});
