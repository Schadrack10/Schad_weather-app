import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import firebase from "firebase/app";
import "firebase/auth";
import DateTime from '../components/DateTime'
import WeatherScroll from '../components/WeatherScroll'
const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';
const img = require('../assets/home2.jpg')
const icon = require('../assets/brand.png')
import { FontAwesome5 } from '@expo/vector-icons';



export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])



  //  const currentUser = firebase.auth().currentUser ;


  const handleSignOut = () => {
    
    firebase.auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }

  const user = firebase.auth().currentUser?.email
  const firstLetter = user[0].toUpperCase()  // returns the  first letter of the current user emal  :) sweet!!!
  // console.log(firstLetter, ' letter of user')


  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        console.log(data)
        setData(data)
      })
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
        {/* go back */}
        <View style={styles.flexContainer}>
          <TouchableOpacity
            // onPress={() => handleSignOut()}  //firebase signout user users
            style={styles.btnLinkTwo}
          >
            <View>
              <Text style={styles.header}>
                Home
              </Text>
            </View>
            <View>

              <Image source={icon} style={styles.icon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("Profile")} style={styles.profile}>
            <Text style={styles.header}>
              {firstLetter}
            </Text>
          </TouchableOpacity>
        </View>

        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />

        <TouchableOpacity
          onPress={() => navigation.navigate('searchScreen')}  //firebase registering users
          style={styles.btnLink}
        >
          <Text style={styles.header}>
            search more cities
          </Text>
          <FontAwesome5 name="search-location" size={24} color="white" />
        </TouchableOpacity>

        
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  btnLink: {
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    padding: 15,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: 300 ,
    flexDirection:'row',
    justifyContent:'space-around'

  },
  btnLinkTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    height: 40,
    backgroundColor: 'rgba(0,0,0,1)',
    width: '100%',
    // padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 10,
    width: 130
  },
  header: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  profile: {
    borderRadius: 40,
    height: 40,
    width: 40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2

  },
  flexContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7 ,
    // filter:"blur('4px')"


  }
});
