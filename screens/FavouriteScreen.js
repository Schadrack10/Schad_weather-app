
import React, { useState, useContext } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header';
import CityItem from '../components/CityItem'
import AddCity from '../components/AddCity';
import { userContext } from '../components/app/userContext';
import {addFavCityToDatabase} from '../firebaseSDK/index'
// import "firebase/firestore";
// import firebase from 'firebase';
// import {userContext} from '../components/content/userContext'


// const db = firebase.firestore();
// const colRef = db.collection('favourite-cities')

// console.log(colRef)



export default function FavouriteScreen({ navigation }) {

  const [city, setCity] = useState([
    { text: 'johannesburg', key: '1' },
    { text: 'Cape Town', key: '2' },
    { text: 'pretoria', key: '3' },
  ]);

  const { cityContext, setCityContext, getFavCityTemp, userName } = useContext(userContext)


  const pressHandler = (key) => {
    setCity(prevTodos => {
      return prevTodos.filter(city => city.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setCity(prevCities => {
        return [
          { text, key: Math.random().toString() },
          ...prevCities
        ];
      });
      // add cities to firestore
       addFavCityToDatabase(text)
    } else {
      Alert.alert('error', 'city name must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  const getFavouriteCity = (cityName) => {
    navigation.navigate('searchScreen')
    setCityContext(cityName)
  }



  return (
    <TouchableWithoutFeedback onPress={() => {
      // Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddCity submitHandler={submitHandler} />

          <View style={styles.list}>

            <FlatList
              data={city}
              renderItem={({ item }) => (
                <CityItem item={item} pressHandler={pressHandler} func={getFavouriteCity} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});