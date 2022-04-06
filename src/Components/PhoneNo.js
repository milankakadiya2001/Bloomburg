import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES, COLORS} from '../constants/theme';
import icons from '../constants/icons';
import country from '../screen/countryCode.json';

const ModelPoup = ({visible, children}) => {
  const [showModel, setShowModel] = React.useState(visible);
  React.useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowModel(true);
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

const PhoneNo = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [filterName, setFilterName] = useState(country);

  useEffect(() => {
    const searchUser = country.filter(users =>
      users.name.toLowerCase().includes(countryCode.toLowerCase()),
    );
    setFilterName(searchUser);
  }, [countryCode]);

  const selectCountry = country => {
    console.log(country);
  };

  return (
    <View>
      <View style={styles.secondarycontainer}>
        <View style={styles.continer}>
          <View style={styles.inputcontainers}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Text style={styles.countrycode}>+91</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: '#838383',
                marginHorizontal: 10,
              }}>
              |
            </Text>
            <TextInput
              style={styles.inputphone}
              placeholder="Phone Number"
              keyboardType="numeric"
              placeholderTextColor="#838383"
            />
          </View>

          <TouchableOpacity
            style={styles.sendcontainer}
            onPress={() => navigation.navigate('Otp')}>
            <Text style={styles.send}>SEND OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView behavior="position">
        <ModelPoup visible={visible}>
          <View style={styles.inputcontainer}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <TextInput
                placeholder="Search"
                style={styles.input}
                value={countryCode}
                onChangeText={setCountryCode}
              />
              <Image source={icons.search} style={styles.icon} />

              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image source={icons.x} style={styles.iconx} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: 'column',
                width: '80%',
                justifyContent: 'center',
                marginHorizontal: 35,
              }}>
              {filterName.map((item, index) => (
                <View>
                  <TouchableOpacity
                    onPress={selectCountry(item)}
                    style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontSize: 18, width: 58}}>
                      {item.dial_code}
                    </Text>
                    <Text style={{fontSize: 18, marginHorizontal: 10}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </ModelPoup>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PhoneNo;

const styles = StyleSheet.create({
  secondarycontainer: {
    justifyContent: 'center',
  },
  btncontainer: {
    // flex: 1,
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
  continer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainers: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#838383',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: '88%',
    paddingLeft: 15,
    padding: 12,
    marginTop: 29,
    borderColor: 'rgba(63, 63, 63, 0.4)',
  },
  countrycode: {
    fontSize: SIZES.h3,
    color: '#838383',
  },
  inputphone: {
    fontSize: SIZES.h3,
    color: '#838383',
  },
  phonecontainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sendcontainer: {
    backgroundColor: COLORS.primary,
    width: '88%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20
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
    height: '60%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    width: '85%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 33,
    marginRight: 45,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 6,
    tintColor: 'grey',
  },
  iconx: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
    tintColor: 'grey',
    top: -10,
  },
});
