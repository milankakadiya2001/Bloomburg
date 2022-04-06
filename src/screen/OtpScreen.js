import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import {Animated} from 'react-native';
import icons from '../constants/icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpScreen = ({navigation}) => {
  const OnVerifyOtp = () => {
    navigation.navigate('Tab');
  };

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={icons.down}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>

          <View style={styles.upside}></View>
          <View style={styles.content}>
            <Text style={styles.maintitle}>Verify Phone</Text>
            <View style={styles.secondarycontainer}>
              <View style={styles.btncontainer}>
                <Text style={styles.btnfont}>
                  Code is sent to +91 12345 98466
                </Text>
              </View>
              <View style={styles.inputcontiner}>
                <OTPInputView
                  secureTextEntry
                  pinCount={4}
                  placeholderTextColor="#00000099"
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  onCodeFilled={() => OnVerifyOtp()}
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.codecontainer}>
                  <Text style={styles.code}>Didn’t recieve code?</Text>
                  <TouchableOpacity>
                    <Text style={styles.againcode}>Request again</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.sendcontainer}
                  onPress={() => OnVerifyOtp()}>
                  <Text style={styles.send}>VERIFY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default OtpScreen;

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
    // flex: 1,
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
    alignItems: 'center',
  },
  maintitle: {
    fontSize: SIZES.h2,
    fontWeight: '500',
    marginVertical: 23,
    color: COLORS.black
  },
  secondarycontainer: {
    justifyContent: 'center',
    // alignItems: 'center'
  },
  btncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnfont: {
    fontSize: SIZES.h4,
    fontWeight: '700',
    color: '#000000D9',
    color: COLORS.black
  },
  inputcontiner: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  sendcontainer: {
    backgroundColor: COLORS.primary,
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 18,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20
  },
  send: {
    fontSize: SIZES.h4,
    fontWeight: '600',
    color: COLORS.black
  },
  underlineStyleBase: {
    borderWidth: 0,
    borderWidth: 1,
    backgroundColor: '#EAF1F5',
    borderRadius: 10,
    color: '#00000099',
    fontWeight: '600',
    fontSize: 30,
    alignItems: 'center',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  codecontainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  code: {
    fontSize: SIZES.body3,
    color: 'rgba(187, 187, 187, 0.85)',
    fontWeight: '500',
  },
  againcode: {
    fontWeight: '500',
    fontSize: SIZES.body3,
    color: 'black',
    marginLeft: 5,
    color: COLORS.black
  },
});
