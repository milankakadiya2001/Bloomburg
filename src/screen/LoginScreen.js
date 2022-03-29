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
  Platform,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import CountryPicker from './../Components/countryPicker';
import {CountryCode} from '../../src/Components/countryCode';
import icons from '../constants/icons';

const ModelPoup = ({visible, children}) => {
  const [showModel, setShowModel] = React.useState(visible);
  React.useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowModel(false);
    } else {
      setShowModel(false);
    }
  };
  return (
    <Modal transparent visible={showModel}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modelcontainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const LoginScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [countryCodePicker, setCountryCodePicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <KeyboardAvoidingView behavior="position">
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
                <View style={styles.contrycode}>
                  <TextInput
                    placeholder="+91"
                    placeholderTextColor="#000000D9"
                    maxLength={3}
                    keyboardType="numeric"
                    style={styles.code}
                  />
                  <TextInput
                    style={styles.inputNo}
                    placeholder="Phone Number"
                    placeholderTextColor="#000000D9"
                    maxLength={10}
                    keyboardType="numeric"
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
        {/* {countryCodePicker ? (
          <CountryPicker data={CountryCode} isVisible={countryCodePicker} />
        ) : null} */}
        <View>
          <ModelPoup visible={visible}>
            {/* <View style={{alignItems: 'center'}}>
            <View style={styles.modelheader}>
              <TouchableOpacity onPress={() => setVisible(false)} ><Image source={icons.x} style={{height: 25, width: 25}} /></TouchableOpacity> 
            </View>
          </View> */}
            <View style={styles.inputcontainer}>
              <Image source={icons.search} style={styles.icon} />
              <TextInput placeholder="Search" style={styles.input} />
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image source={icons.x} style={styles.iconx} />
              </TouchableOpacity>
              <ScrollView>
                <View style={{flexDirection: 'row'}}>
                  <Text></Text>
                  <Text></Text>
                </View>
              </ScrollView>
            </View>
          </ModelPoup>
        </View>
      </KeyboardAvoidingView>
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
    color: 'black',
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
    color: COLORS.black,
  },
  inputcontiner: {
    flex: 1,
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
    marginRight: 10,
    flexDirection: 'row',
    width: '90%',
  },
  code: {
    width: '100%',
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 2,
    width: '23%',
    padding: 15,
    marginRight: 10
  },
  inputNo: {
    fontSize: SIZES.h4,
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: '78%',
  },
  sendcontainer: {
    backgroundColor: COLORS.primary,
    width: '88%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 18,
  },
  send: {
    fontSize: SIZES.h4,
    fontWeight: '600',
    color: COLORS.black,
  },
  modalBackGround: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modelcontainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    elevation: 20,
  },
  modelheader: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  inputcontainer: {
    marginVertical: 15,
    justifyContent: 'center',
    marginLeft: 45,
  },
  input: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 33,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    tintColor: 'grey',
  },
  iconx: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 25,
    tintColor: 'grey',
    top: -30,
  },
});
