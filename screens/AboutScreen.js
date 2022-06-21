import { StyleSheet, Text, View, Image } from 'react-native'
import React , {useState} from 'react'
import { Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Touchable, TouchableOpacity, Modal, Button } from 'react-native'
const creator = require('../assets/shade-covid.jpg')
const brand = require('../assets/brand.png')


const AboutScreen = ({ navigation }) => {

  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>

      <Modal style={styles.modal}  visible={open}>
       
        <Image source={creator} style={{ width: 400, height: 400, }} />
       <TouchableOpacity onPress={()=> setOpen(false)}>
       <MaterialIcons name="cancel" size={24} color="black" />
       </TouchableOpacity>
      </Modal>





      <View style={styles.cover}>
        {/* <Text style={styles.header}>AboutScreen</Text>  */}
        <View style={styles.ownerDetails}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Image source={creator} style={styles.creator} />

          </TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.header}>Created by schadrack Botombe</Text>
            <Text style={styles.header}>contact us : +11 234 333 4567</Text>
            <Text style={styles.header}>weather app </Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.appDetails}>
          <Text style={styles.header}>excellent weather app</Text>
          <Image source={brand} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
  ,
  cover: {
    height: Dimensions.get('screen').height,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  creator: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  ownerDetails: {
    height: 100,
    width: 350,
    flexDirection: 'row',
    borderColor: 'red',
    // backgroundColor:'yellow'

  },
  appDetails: {
    height: 100,
    width: 350,
    flexDirection: 'row',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {

    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 30,
    width: 30
  } , 
  modal:{
    backgroundColor:'red'
  }



})