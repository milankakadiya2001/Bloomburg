import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import MyProfileTab from './MyProfileTab';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.topcontainer}>
        <View style={styles.menucontainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Setting')}
          >
            <Image source={icons.menu} style={styles.menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgcontainer}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/21.jpg',
            }}
            style={styles.storyimg}
          />
        </View>
        <Text style={styles.name}>Marcus Jorden</Text>
        <View
          style={{
            marginLeft: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.description}>Description here</Text>
          <TouchableOpacity style={styles.editcontainer}
            onPress={() => navigation.navigate('ProfileEdit')}
          >
            <Image source={icons.edit} style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 25,
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{marginRight: 8}}>999</Text>
            <Text style={{color: '#464646'}}>Follwers</Text>
            <Text style={{marginLeft: 15, marginRight: 8}}>999</Text>
            <Text style={{color: '#464646'}}>Following</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={icons.save} style={styles.save} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <MyProfileTab /> */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topcontainer: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  menucontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 80,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  menu: {
    height: 8,
    width: 30,
  },
  imgcontainer: {
    flexDirection: 'row',
    height: 65,
    width: 65,
    margin: 25,
    shadowColor: 'black',
    shadowOffset: {height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  storyimg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  name: {
    fontSize: SIZES.h2,
    marginLeft: 25,
  },
  description: {
    fontSize: SIZES.h4,
    marginVertical: 20,
    color: '#464646',
  },
  editcontainer: {
    backgroundColor: '#2C5F2D',
    width: 31,
    height: 31,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    marginRight: 25,
  },
  edit: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  save: {
    width: 20,
    height: 20,
    marginRight: 30,
  },
});
