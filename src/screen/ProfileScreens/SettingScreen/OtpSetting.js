import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpSetting = ({navigation}) => {
    return (
    <View>
      <View style={styles.topcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeNumberSetting')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Change Number</Text>
        <View></View>
      </View>
      <View style={styles.seccontiner}>
        <View style={styles.titlecontiner}>
          <Text style={styles.title}>Verify Phone</Text>
          <Text style={styles.sectitle}>Code is sent to +91 1234 98466</Text>
        </View>
      </View>
      <View style={styles.inputcontiner}>
        <OTPInputView
          pinCount={4}
          placeholderCharacter="*"
          placeholderTextColor="#00000099"
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          // codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
      </View>
      <View style={styles.codecontainer}>
        <Text style={styles.code}>Didn’t recieve code?</Text>
        <TouchableOpacity>
          <Text style={styles.againcode}>Request again</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.sendcontainer}
          onPress={() => navigation.navigate('OtpSetting')}>
          <Text style={styles.send}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpSetting;

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
  seccontiner: {
    // justifyContent: 'center',

    marginVertical: 15,
  },
  titlecontiner: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: SIZES.h3,
    fontWeight: '500',
  },
  sectitle: {
    fontSize: SIZES.h4,
    marginVertical: 15,
    marginTop: 35,
  },
  inputcontiner: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 165,
    alignItems: 'center',
    marginVertical: 30,
  },
  underlineStyleBase: {
    // width: 50,
    // height: 45,
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
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  sendcontainer: {
    backgroundColor: COLORS.primary,
    width: '75%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 28,
  },
  send: {
    fontSize: SIZES.h4,
    fontWeight: '600',
  },
});
