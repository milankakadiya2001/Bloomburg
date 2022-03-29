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
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import { TextInputMask } from 'react-native-masked-text'

const ProfileEdit = ({navigation}) => {
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
      title: 'Edit profile',
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
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={{height: 60, backgroundColor: COLORS.primary}}></View>
          <View style={styles.imgcontainer}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/19.jpg',
              }}
              style={styles.storyborder}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <Text style={styles.changepic}>Change profile photo</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={styles.inputcontainer}>
              <View style={styles.labelcontainer}>
                <Text style={styles.lable}>Name</Text>
              </View>

              <TextInput placeholder="Marcus Jorden" style={styles.input} />
              <View style={styles.labelcontainer}>
                <Text style={styles.lable}>Date of Birth</Text>
              </View>

              <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
              <View style={styles.labelcontainer}>
                <Text style={styles.lable}>About you</Text>
              </View>

              <TextInput placeholder="Bio" style={styles.input} />
              <View style={styles.labelcontainer}>
                <Text style={styles.lable}>Social media link</Text>
              </View>

              <TextInput
                placeholder="https://facebook.com"
                style={styles.input}
              />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProfileEdit;

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
  },
  donebtn: {
    fontSize: SIZES.h4,
    marginRight: 15,
  },
  storyborder: {
    borderColor: '#2C5F2D',
    borderRadius: 50,
    width: 75,
    height: 75,
    padding: 2,
    marginHorizontal: 3,
    position: 'absolute',
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  changepic: {
    marginTop: 15,
    color: '#2C5F2D',
    fontWeight: '500',
    fontSize: SIZES.body3,
  },
  inputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  labelcontainer: {
    alignSelf: 'flex-start',
    marginLeft: 43,
    marginVertical: 3,
    marginTop: 20,
  },
  lable: {
    fontSize: SIZES.h4,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 8,
    borderRadius: 12,
  },
});
