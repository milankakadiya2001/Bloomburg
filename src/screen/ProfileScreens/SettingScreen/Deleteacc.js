import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';

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

const Deleteacc = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

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
      title: 'Delete Account',
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
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{height: '100%'}}>
          <View>
            <View style={styles.seccontiner}>
              <View style={styles.titlecontiner}>
                <Text style={styles.title}>Verify Phone</Text>
                <Text style={styles.sectitle}>
                  Code is sent to +91 12345 98466
                </Text>
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
              <ModelPoup visible={visible}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.modelheader}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Image source={icons.x} style={{height: 25, width: 25}} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={icons.success}
                    style={{height: 150, width: 150, marginVertical: 25}}
                  />
                </View>

                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  Successfully deleted your account
                </Text>
              </ModelPoup>
              <TouchableOpacity
                style={styles.sendcontainer}
                onPress={() => setVisible(true)}>
                <Text style={styles.send}>VERIFY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Deleteacc;

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
  modalBackGround: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modelcontainer: {
    width: '80%',
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
});
