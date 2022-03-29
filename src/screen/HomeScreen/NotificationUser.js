import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
const {height, width} = Dimensions.get('window');

const NotificationUser = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderWidth: 5,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Notification',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    <View style={styles.container}>
     
      <ScrollView>
        <View style={styles.recent}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/6.jpg',
            }}
            style={styles.img}
          />
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/32.jpg',
            }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              position: 'absolute',
              borderWidth: 3,
              borderColor: 'white',
              left: 35,
              top: 20,
            }}
          />
          <View>
            <Text style={styles.title}>Follow requests </Text>
            <Text style={styles.textother}>Adem john + 90 others</Text>
          </View>
          <View>
            <Image source={icons.Right} style={styles.navibtn} />
          </View>
        </View>
        <Text style={styles.day}>Today</Text>
        <View style={styles.recent}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/8.jpg',
            }}
            style={styles.img}
          />
          <View style={{width: 150}}>
            <Text style={styles.textother}>
              Adem john requested to follow you. 5min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '37%',
              marginLeft: 10,
            }}>
            <TouchableOpacity style={styles.btnhigh}>
              <Text style={styles.btnfont}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnfont}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.day}>Yesterday</Text>
        <View style={[styles.recent, {borderBottomWidth: 0, paddingBottom: 0}]}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/8.jpg',
            }}
            style={styles.img}
          />
          <View style={{width: 200}}>
            <Text style={styles.textother}>
              Adem john requested to follow you. 5min
            </Text>
          </View>
          <View style={{flexDirection: 'row', left: width / 12}}>
            <TouchableOpacity style={styles.btnhigh}>
              <Text style={styles.btnfont}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recent}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/8.jpg',
            }}
            style={styles.img}
          />
          <View style={{width: 200}}>
            <Text style={styles.textother}>Adem john liked your photo. 1d</Text>
          </View>
          <View style={{flexDirection: 'row', left: width / 9}}>
            <Image source={icons.r1} style={{height: 40, width: 40}} />
          </View>
        </View>
        <Text style={styles.day}>This week</Text>
        <View style={[styles.recent, {borderBottomWidth: 0, paddingBottom: 0}]}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/10.jpg',
            }}
            style={styles.img}
          />
          <View style={{width: 200}}>
            <Text style={styles.textother}>
              Adem john requested to follow you. 5min
            </Text>
          </View>
          <View style={{flexDirection: 'row', left: width / 12}}>
            <TouchableOpacity style={styles.btnhigh}>
              <Text style={styles.btnfont}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recent}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/28.jpg',
            }}
            style={styles.img}
          />
          <View style={{width: 200}}>
            <Text style={styles.textother}>Adem john liked your photo. 1d</Text>
          </View>
          <View style={{flexDirection: 'row', left: width / 9}}>
            <Image source={icons.r2} style={{height: 40, width: 40}} />
          </View>
        </View>
      </ScrollView>
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
    // justifyContent: 'space-between',
  },
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1,
  },
  notify: {
    height: 30,
    width: 30,
  },
  chat: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
  },
  recent: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingVertical: 10,
    paddingBottom: 18,
    borderColor: '#BBBBBB',
  },
  day: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 25,
    marginTop: 10,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 15,
  },
  textother: {
    fontSize: 13,
    color: 'grey',
  },
  navibtn: {
    height: 22,
    width: 22,
    left: width / 2.8,
  },
  btnhigh: {
    backgroundColor: '#FED642',
    width: 65,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FED642',
  },
  btn: {
    width: 65,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  btnfont: {
    fontSize: 12,
  },
});
