import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import user from './UserList.json';
import icons from '../../constants/icons';
import {COLORS, FONTS} from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
    const navigation = useNavigation(); 
  return (
    <ScrollView
      style={{flex: 1, marginVertical: 14}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('AddStory')} style={[styles.storyborder, {padding: 5, marginLeft: 10}]}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/med/women/3.jpg'}}
          style={styles.storyimg}
        />
        <View style={{position: 'absolute'}}>
          <View style={styles.addcontainer}>
            <Image source={icons.add} style={styles.addbtn} />
          </View>
          <Text></Text>
        </View>
      </TouchableOpacity>
      {user.map((item, index) => (
        <View style={styles.story}>
          <View style={[styles.storyborder, {borderWidth: 2.5}]}>
            <Image source={{uri: item.photo}} style={styles.storyimg} />
          </View>
          <Text style={styles.username}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyborder: {
    borderColor: '#2C5F2D',
    borderRadius: 50,
    width: 70,
    height: 70,
    padding: 2,
    marginHorizontal: 4,
  },
  storyimg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  username: {
    textAlign: 'center',
    color: COLORS.black,
    marginTop: 5,
  },
  addcontainer: {
    marginTop: 50,
    backgroundColor: 'white',
    marginLeft: 45,
    borderWidth: 1.5,
    borderColor: 'white',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addbtn: {
    height: 20,
    width: 30,
    tintColor: '#2C5F2D',
  },
});
