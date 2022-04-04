import { StyleSheet, Text, View, TouchableOpacity
  ,Image, } from 'react-native'
import React, { useEffect } from 'react'
import icons from '../../constants/icons';
import { COLORS, SIZES } from '../../constants/theme';

const BloomTrees = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Actions',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Boom')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View>
      <Text style={styles.title} >Trees</Text>
      <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('Trees')} >
        <Image source={{uri: 'https://www.qmul.ac.uk/media/qmul/media/news/items/se/2021-/World-Environment-Day_700x410.jpg'}} style={styles.img} />
        <Text style={styles.titleText} >Plant a Tree</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BloomTrees

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 20,
    marginVertical: 18,
    letterSpacing: 1
  },
  img: {
    width: '90%',
    height: 180, 
    borderRadius: 15, 
    position: 'relative'
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20, 
    bottom: 15,
    left: 30
  }
})