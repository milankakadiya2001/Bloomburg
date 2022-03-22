import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import CountryPicker from './../Components/countryPicker';
import {CountryCode} from '../../src/Components/countryCode';

const LoginScreen = ({navigation}) => {
  const [countryCodePicker, setCountryCodePicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+91')
 
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.downbtn}></TouchableOpacity>
        <View style={styles.upside}></View>
        <View style={styles.content}>
          <Text style={styles.maintitle}>Welcome Back!</Text>
          <View style={styles.secondarycontainer}>
            <View style={styles.btncontainer}>
              <Text style={styles.btnfont}>Login</Text>
            </View>
            <View style={styles.inputcontiner}>
              <View style={styles.phonecontainer}>
                <TouchableOpacity
                onPress={() => setCountryCodePicker(true)}
                >
                  <Text style={styles.contrycode}>{countryCode}</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#000000D9"
                />
              </View>
              <TouchableOpacity
                style={styles.sendcontainer}
                onPress={() => navigation.navigate('Otp')}>
                <Text style={styles.send}>SEND OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {countryCodePicker ?
      <CountryPicker data={CountryCode} isVisible={countryCodePicker} />: null
      }
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  downbtn: {
    height: 25,
    width: 22,
    marginVertical: 53,
    marginHorizontal: 23,
  },
  upside: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  content: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderColor: COLORS.white,
    borderWidth: 20,
    paddingVertical: 20,
    paddingBottom: 100,
  },
  maintitle: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 33,
  },
  secondarycontainer: {
    justifyContent: 'center',
  },
  btncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginVertical: 20,
    marginBottom: 33,
  },
  btnfont: {
    fontSize: SIZES.h2,
    fontWeight: '700',
  },
  inputcontiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phonecontainer: {
    marginVertical: 22,
    flexDirection: 'row',
  },
  contrycode: {
    fontSize: SIZES.h4,
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  input: {
    fontSize: SIZES.h4,
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: '70%',
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
