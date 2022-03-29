import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants/theme'


const ChalengeScreen = ({navigation}) => {
  useEffect (() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Challenge',
      headerTitleStyle: {Color: 'black', fontWeight: '700'},
      headerTitleAlign: 'center',
    })
})

  return (
       <ScrollView style={{ marginVertical: 14, flex: 1}} horizontal showsHorizontalScrollIndicator= {false} >
        <View style={styles.container}>
          <TouchableOpacity style={styles.box} ><Text style={styles.BoxText} >Energy</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box} ><Text style={styles.BoxText} >Fuel</Text></TouchableOpacity>
          <TouchableOpacity style={styles.highlightbox} ><Text style={[styles.BoxText, {color: 'white'}]} >Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box} ><Text style={styles.BoxText} >Kids</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box} ><Text style={styles.BoxText} >Trees</Text></TouchableOpacity>
        </View>
    </ScrollView>
   
  )
}

export default ChalengeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '8%'
    
  },
  BoxText: {
    fontSize: 16,
    padding: 5,
    fontWeight: '500',
    paddingHorizontal: 10,
    color: '#59494980'
    
  },
  box: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlightbox: {
    margin: 10,
    backgroundColor: '#2C5F2D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
   
  }
})