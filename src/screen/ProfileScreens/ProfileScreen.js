import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import MyProfileTab from './MyProfileTab';

const ProfileScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      title: '',
      headerRight: () => (
        <View style={styles.menucontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={icons.menu} style={styles.menu} />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topcontainer}>
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
          <TouchableOpacity
            style={styles.editcontainer}
            onPress={() => navigation.navigate('ProfileEdit')}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Followers')}
              style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{marginRight: 8}}>999</Text>
              <Text style={{color: '#464646'}}>Follwers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{marginLeft: 15, marginRight: 8}}>999</Text>
              <Text style={{color: '#464646'}}>Following</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Save')} >
              <Image source={icons.save} style={styles.save} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MyProfileTab />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topcontainer: {
    backgroundColor: COLORS.primary,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 18,
  },
  menucontainer: {
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
    width: 30,
    height: 30,
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
