import { StyleSheet, Text, View, TextInput, ImageBackground, ActivityIndicator, ScrollView, Image,} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native' //avoids the keyboards
import { TouchableOpacity, Dimensions } from 'react-native'
import { registration } from "./../firebaseSDK/"
const img = require('../assets/forest-hd.jpg');
const icon = require('../assets/brand.png');
import { Alert } from "react-native";
import firebase from "firebase/app";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import "firebase/firestore";
import "firebase/auth";


const SignupScreen = ({ navigation }) => {

  // form handling
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loaded, setLoaded] = useState(false)

  const handleSignup = async () => {
    // if (name, email, password) alert(confirm('Login as ' + email))
    
    // code works perfectly
        if(name , email , password){
          console.log('handleSignup....')
       registration(email,password,name);
      //  navigation.replace('Home')

     }else{
      //  console.log('fill in all fields')
       alert('fill in all fields')
     }
// code that workd but jams the signup process

  // await firebase.auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))

  //   // database storing users
  //   const currentUser = firebase.auth().currentUser;
  //   const db = firebase.firestore();
  
  //   db.collection("users").doc(currentUser.uid).set({
  //     email: currentUser.email,
  //     fullname,
  //     userid: currentUser.uid,
  //   });
  }




  return (
    <ImageBackground source={img} style={styles.backImage} >
      {/* added  */}
      <View
        style={styles.btnLink}
      >
        <Text style={styles.header}>
          {/* Register */}
        </Text>
        <Image source={icon} style={styles.icon} />
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* name; */}
          <View style={styles.labelContainer}>
          <Text style={styles.label}>name</Text>
          <FontAwesome name="user-circle" size={24} color="white" style={styles.vectorIcons}/>
          </View>
          <TextInput
            placeholder="Enter name"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
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
          <View style={styles.labelContainer}>
          <Text style={styles.label}>password</Text>
          <Entypo name="lock" size={24} color="white" style={styles.vectorIcons}/>
          </View>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => handleSignup()}
            style={styles.btn}
          >
            <Text style={styles.btnText}>
              Signup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.btn, styles.btnOutlined]}
          >
            <Text style={styles.btnOutlinedText}>
              Already have an account?
            </Text>
            <Text style={styles.btnOutlinedText}>
              login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  inputContainer: {
    width: '80%',
    // margin:20
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,


  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  btn: {
    backgroundColor: 'rgba(0, 0 ,0 ,0.7)',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',

  },
  btnOutlined: {
    backgroundColor: 'rgba(0, 0 ,0 ,0.7)',
    marginTop: 10,
    // borderColor: '#003616',
    borderColor: '#888',
    borderWidth: 2,

  },
  btnOutlinedText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14 ,
    textAlign:'center'

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
    // marginTop: 15,
    // backgroundColor:'rgba(0, 0,0,0.2)'
    fontWeight: "bold"

  },
  btnLink: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.6)',
    // width: '100%',
    padding: 15,
    borderRadius: 0,
    borderColor: "#777",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    zIndex: 2,
    // filter:'blur(2px)'
  },
  header: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  icon: {
    height: 40,
    width: 40,
  } ,
  
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    // width: 135,
    marginTop:10
    // borderColor: 'red',
    // border:'1px solid '

  },
  vectorIcons:{
     marginLeft:5
  }

}) 