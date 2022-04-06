import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
import {useRoute} from '@react-navigation/core';
const {height, width} = Dimensions.get('window');

const AddStory = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      headerTitleStyle: {
        color: 'white',
      },
      title: 'Add to Story',

      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.x}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={{backgroundColor: 'grey', height: '100%', }}>
        <View style={styles.recentContainer}>
          <View style={{flexDirection: 'row'}} >
            <Text style={styles.textRecent} >Recents</Text>
            <Image  source={icons.down} style={styles.recentBtn}  />
          </View>
          <View>
            <Text>Select</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
    tintColor: '#fff',
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recentBtn: {
      height: 25,
      width: 25,
      transform: [
        { rotateY: "0deg" },
        { rotateZ: "270deg" }
      ]
  },
  textRecent: {
      fontSize: 17,

  }
});
