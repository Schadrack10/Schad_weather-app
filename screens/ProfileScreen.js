import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import firebase from "firebase/app";
import "firebase/auth";
const icon = require('../assets/brand.png')
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';





const ProfileScreen = ({ navigation }) => {

  const user = firebase.auth().currentUser?.email;
  const firstLetter = user[0].toUpperCase();

  const handleSignOut = () => {
    firebase.auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }



  return (
    <View style={styles.container}>

      {/* <View style={styles.cover}> */}
      {/* <View style={{ width:300 ,  }}>
         <Text style={styles.userEmail}>Profile</Text>
      </View> */}
      <View style={styles.userCard}>
        <View style={styles.borderInitial}>
          <Text style={styles.userInitial}>{firstLetter}</Text>
        </View>
        <Text style={styles.userEmail}>{user}</Text>
      </View>

      <View style={styles.profileBody}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.block}>
          <Text style={styles.whiteText}>Home</Text>
          <Entypo name="home" size={24} color="white" style={styles.vectorIcons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.block}>
          <Text style={styles.whiteText}>About us</Text>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.block}>
          <Text style={styles.whiteText}>Favourites</Text>
          <FontAwesome name="heartbeat" size={24} color="white" style={styles.vectorIcons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSignOut()} style={styles.block}>
          <Text style={styles.whiteText}>Logout</Text>
          <MaterialIcons name="logout" size={24} color="white" style={styles.vectorIcons} />
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'

  },

  whiteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    // margin: 30
  },
  block: {
    height: 40,
    width: 300,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'red' , 
    paddingRight: 50,
    paddingLeft: 50,

  },

  userCard: {
    backgroundColor: '#000E1C',
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    boxShadow: '2px 10px 0px 0px #000',
    position: 'absolute',
    zIndex: 1,
    marginTop: 100

  },
  userEmail: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20
  },
  userInitial: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  borderInitial: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBody: {
    height: 500,
    width: Dimensions.get('screen').width - 10,
    // width:200,
    backgroundColor: '#000814',
    marginTop: 200,
    borderRadius: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    // marginLeft: 10
  },
  vectorIcons: {
    marginRight: 5
  }
})