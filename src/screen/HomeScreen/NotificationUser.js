import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';


const NotificationUser = ({navigation}) => {
  return (
    
      <View style={styles.container}>
        <View style={styles.topcontainer}>
        
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Notification</Text>   
        </View>
      </View>
      
   
  );
};

export default NotificationUser;

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
  },
  downbtn: {
    height: 25,
    width: 22,
    marginVertical: 20,
    marginHorizontal: 15
  },
  header: {
    fontSize: SIZES.h3,
      marginVertical: 20,
      marginRight: 28,
      fontWeight: '700',
      letterSpacing: 1,
  },
});
