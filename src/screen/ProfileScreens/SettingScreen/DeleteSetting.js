import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';

const DeleteSetting = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: COLORS.primary,
      },
      title: 'Change Number',
      headerTitleStyle: {Color: 'black', fontWeight: '700'},
      headerTitleAlign: 'center',
      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.down}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
  
      <KeyboardAvoidingView>
        <View  >
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>Enter your registered number</Text>
            </View>
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
                <TextInput
                  style={styles.inputphone}
                  placeholder="Phone Number"
                  keyboardType='numeric'
                />
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.sendcontainer}
                onPress={() => navigation.navigate('Deleteacc')}>
                <Text style={styles.send}>SEND OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View></View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default DeleteSetting;

const styles = StyleSheet.create({
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
  container: {
    // width: '80%',
    marginHorizontal: 25,
    marginVertical: 8,
    height: '100%'
  },
  primary: {
    fontSize: SIZES.h3,
    fontWeight: '600',
  },
  secondcontainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: SIZES.body2,
    marginVertical: 10,
    fontWeight: '600',
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
