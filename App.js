import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import AboutScreen from './screens/AboutScreen'
import ResetScreen from './screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchHome from './screens/SearchHome';
import firebase from "firebase/app";
import { userContext } from './components/app/userContext';
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHclOSnkKWf94GXrnPK7BM04lH3YjUhzU",
  authDomain: "schad-weatherpro.firebaseapp.com",
  projectId: "schad-weatherpro",
  storageBucket: "schad-weatherpro.appspot.com",
  messagingSenderId: "275933266086",
  appId: "1:275933266086:web:5167ee64b4869882223467"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('schad => "firebase initialised succesfully":)')
} else {
  firebase.app(); // if already initialized, use that one
}



const Stack = createNativeStackNavigator();

export default function App() {

  // favourite city check
  const [cityContext, setCityContext] = useState('johannesburg')


  return (
    <userContext.Provider value={{ cityContext, setCityContext }}>
      <View style={styles.container}>
        {/* stack navigationnnn!  tooo cool :)    */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Register" component={SignupScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Reset" component={ResetScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="About" component={AboutScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="Favourite" component={FavouriteScreen} />
            <Stack.Screen options={{ headerShown: false }} name="searchScreen" component={SearchHome} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </userContext.Provider>
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
  }
});
