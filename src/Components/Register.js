import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useEffect, useState} from 'react';
import {SIZES, COLORS} from '../constants/theme';
import icons from '../constants/icons';

const Register = ({navigation}) => {
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
          title: 'Register',
    
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
    <KeyboardAvoidingView behavior='position' >
      <View style={styles.secondarycontainer}>
        <View style={styles.inputcontiner}>
        <View style={styles.contrycode}>
            <TextInput
              style={styles.inputNo}
              placeholder="Name"
              placeholderTextColor="#838383"
            />
          </View>
          <View style={styles.contrycode}>
            <TextInput
              style={styles.inputNo}
              placeholder="Email Address"
              placeholderTextColor="#838383"
            />
          </View>
          <View style={styles.contrycode}>
            <TextInput
              style={styles.inputNo}
              placeholder="Password"
              placeholderTextColor="#838383"
            />
          </View>
          <View style={styles.contrycode}>
            <TextInput
              style={styles.inputNo}
              placeholder="Confirm Password"
              placeholderTextColor="#838383"
            />
          </View>

          <TouchableOpacity
            style={styles.sendcontainer}
            onPress={() => navigation.navigate('Otp')}>
            <Text style={styles.send}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    downbtn: {
        height: 25,
        width: 22,
        marginLeft: 5,
        marginRight: 15,
      },
      secondarycontainer: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingBottom: -35,
        height: '100%'
      },
      btncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 20,
        // marginBottom: 33,
      },
      btnfont: {
        fontSize: SIZES.h2,
        fontWeight: '700',
        color: COLORS.black,
      },
      inputcontiner: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      phonecontainer: {
        marginVertical: 22,
        flexDirection: 'row',
        marginHorizontal: 20,
      },
      contrycode: {
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        width: '100%',
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputNo: {
        fontSize: SIZES.h4,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        width: '90%',
        borderColor: 'rgba(63, 63, 63, 0.4)',
      },
      sendcontainer: {
        backgroundColor: COLORS.primary,
        width: '84%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginTop: 18,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      },
      send: {
        fontSize: SIZES.h4,
        fontWeight: '600',
        color: COLORS.black,
      },
     
})