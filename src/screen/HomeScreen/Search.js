import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'
import { COLORS, SIZES } from '../../constants/theme'

const Search = ({ navigation }) => {
  return (
    <View>
    <View style={styles.topcontainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        source={icons.down}
        resizeMode="contain"
        style={styles.downbtn}
      />
    </TouchableOpacity>
    <Text style={styles.header}>search</Text>
    <View></View>
  </View>
  <View style={styles.inputcontainer}>
    <Image source={icons.search}  style={styles.icon}/>
    <TextInput placeholder="Search" style= {styles.input}/>

  </View>
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    topcontainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        paddingTop: 30,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        justifyContent: 'space-between',
        marginBottom: 25,
      },
      downbtn: {
        height: 25,
        width: 22,
        marginVertical: 20,
        marginHorizontal: 15,
      },
      header: {
        fontSize: SIZES.h3,
        marginVertical: 20,
        marginRight: 39,
        fontWeight: '700',
        letterSpacing: 1
      },
      inputcontainer:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      input:{
        fontSize: 20,
        fontWeight:'600',
        width: '80%',
        borderColor: 'grey',
        borderRadius: 10,
        borderWidth:2,
        padding:5,
        paddingLeft: 33
        
      },
      icon :{
        width: 20,
        height: 20,
        position: 'absolute',
        left: 50,
        tintColor: 'grey'
      }
})