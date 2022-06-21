import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Dimensions } from 'react-native' //avoid the keyboard
import { TouchableOpacity } from 'react-native'
import { passwordReset } from '../firebaseSDK/index'
// import firebase from "firebase/app";
import "firebase/auth";
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const img = require('../assets/rain-branch.webp')
const icon = require('../assets/brand.png')


// const icon = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}




const ResetScreen = ({ navigation }) => {

  // form handling
  const [email, setEmail] = useState('')

  
  const handleReset = async () => { 
       passwordReset(email)
      console.log('password reset')
  }



  return (
    <ImageBackground source={img} style={styles.backImage} >

      <View
        style={styles.btnLink}
      >
        <Text style={styles.header}>
          Reset password
        </Text>
        <Image source={icon} style={styles.icon} />
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* emai; */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Email</Text>
            <MaterialIcons name="email" size={24} color="#fff" style={styles.vectorIcons} />

          </View>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          {/* password */}
          {/* <View style={styles.labelContainer}>
          <Text style={styles.label}>password</Text>
          <Entypo name="lock" size={24} color="white" style={styles.vectorIcons}/>
          </View>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          /> */}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => handleReset()}
            style={styles.btn}
          >
            <Text style={styles.btnText}>
              Reset Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.btn, styles.btnOutlined]}
          >
            <Text style={styles.btnOutlinedText}>
              Dont need password reset ?
            </Text>
            <Text style={styles.btnOutlinedText}>
              Login here
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </ImageBackground>

  )
}

export default ResetScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    // flexDirection:'row',
    // justifyContent:'space-around'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  btnContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40

  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },
  btn: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 2
  },
  btnOutlined: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 10,
    borderColor: '#777',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnOutlinedText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'

  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  label: {
    color: "#fff",
    fontSize: 20,
    textTransform: "capitalize",
    // marginTop: 25,
    fontWeight: "bold"
  },
  header: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  btnLink: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.4)',
    // width: '100%',
    padding: 15,
    borderRadius: 0,
    borderColor: "#777",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: Dimensions.get('screen').width,
    flexDirection: 'row'

  },

  icon: {
    height: 50,
    width: 50
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    // width: 135,
    marginTop: 10
  },
  vectorIcons: {
    marginLeft: 5
  }

}) 