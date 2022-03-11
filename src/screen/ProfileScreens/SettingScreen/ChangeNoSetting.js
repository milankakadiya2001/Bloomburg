import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';

const ChangeNoSetting = ({navigation}) => {
  
  return (
    <View>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Change Number</Text>
        <View></View>
      </View>
      <View>
        <View style={styles.container}>
          <View style={styles.secondcontainer}>
            <Text style={styles.maintext}>
              Old Mobile Number and Country Code
            </Text>
            <View style={styles.inputcontainer}>
              <Text style={styles.countrycode}>+91</Text>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  color: '#838383',
                  marginHorizontal: 10,
                  marginBottom: 12,
                }}>
                |
              </Text>
              <TextInput style={styles.inputphone} placeholder="Phone Number" />
            </View>
          </View>
          <View style={styles.secondcontainer}>
            <Text style={styles.maintext}>
              New Mobile Number and Country Code
            </Text>
            <View style={styles.inputcontainer}>
              <Text style={styles.countrycode}>+91</Text>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  color: '#838383',
                  marginHorizontal: 10,
                  marginBottom: 12,
                }}>
                |
              </Text>
              <TextInput style={styles.inputphone} placeholder="Phone Number" />
            </View>
          </View>
          <View style={{alignItems: 'center'}} >
          <TouchableOpacity style={styles.sendcontainer}
               onPress={() => navigation.navigate('OtpSetting')}
               >
                <Text style={styles.send}>SEND OTP</Text>
              </TouchableOpacity>
        </View></View>
      </View>
      <View></View>
    </View>
  );
};

export default ChangeNoSetting;

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
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1,
  },
  container: {
    // width: '80%',
    marginHorizontal: 25,
    marginVertical: 8,
  },
  primary: {
    fontSize: SIZES.h3,
    fontWeight: '600',
  },
  secondcontainer: {
    marginVertical: 10,
  },
  maintext: {
    fontSize: SIZES.h4,
    marginVertical: 10,
    fontWeight: '500',
  },
  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#838383',
    marginHorizontal: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#BBBBBB',
  },
  countrycode: {
    fontSize: SIZES.h3,
    color: '#838383',
    marginBottom: 12,
  },
  inputphone: {
    fontSize: SIZES.h3,
    color: '#838383',
    marginBottom: 12,
  },
  sendcontainer: {
    backgroundColor: COLORS.primary,
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 18,
  },
  send: {
    fontSize: SIZES.h4,
    fontWeight: '600',
  },
});
