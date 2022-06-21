import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CityItem({ pressHandler, item , func }) {
  return (
    <TouchableOpacity >

      <View style={styles.item}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name='delete' size={18} color='#333' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => func(item.text)}>
          <MaterialIcons name='search' size={18} color='#333' />
        </TouchableOpacity>

        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});