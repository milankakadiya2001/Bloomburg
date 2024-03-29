import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';

const RewardsScreen = ({navigation}) => {
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
      title: 'My Rewards',
      headerTitleStyle: {Color: 'black', fontWeight: '700'},
      headerTitleAlign: 'center'
    })
})
  return (
    <View>
      
      <View style={styles.titlebox}>
        <Text style={styles.title}>Offers</Text>
      </View>
      <ScrollView>
        <View style={styles.mainimg}>
          <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}} onPress={() => navigation.navigate('OfferCard')} >
            <View style={styles.imgbox}>
              <Image source={icons.cloth} style={styles.img} />
            </View>
            <Text style={styles.imgtext}>Apparels</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.imgbox}>
              <Image source={icons.elec} style={styles.img} />
            </View>
            <Text style={styles.imgtext}>Electronics</Text>
          </View>
        </View>
        <View style={styles.mainimg}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.imgbox}>
              <Image source={icons.Food} style={styles.img} />
            </View>
            <Text style={styles.imgtext}>Food and beverage</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.imgbox}>
              <Image source={icons.elec} style={styles.img} />
            </View>
            <Text style={styles.imgtext} >Toys and baby</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RewardsScreen;

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
    justifyContent: 'center',
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
    fontWeight: '700',
    letterSpacing: 1,
  },
  titlebox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
  mainimg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imgbox: {
    backgroundColor: '#FFF2C2',
    borderRadius: 75,
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  imgtext: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
    width: '70%'
    
  },
});
