import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';

const ProfileEdit = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Edit profile</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.donebtn}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/med/women/19.jpg'}}
          style={styles.storyborder}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity>
          <Text style={styles.changepic}>Change profile photo</Text>
        </TouchableOpacity>
      </View>
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

        <TextInput placeholder="https://facebook.com" style={styles.input} />
      </View>
    </View>
  );
};

export default ProfileEdit;

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
    paddingBottom: 45,
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
    marginTop: 20
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
