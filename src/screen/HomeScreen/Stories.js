import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import user from './UserList.json';
import icons from '../../constants/icons';

const Stories = () => {
  return (
    <ScrollView style={{flex: 1, marginVertical: 14}} horizontal showsHorizontalScrollIndicator= {false} >
        <View style={[styles.storyborder, {padding: 5, marginLeft: 10}]}>
        <Image source={{uri: "https://randomuser.me/api/portraits/med/women/3.jpg"}} style={styles.storyimg} />
        <View style={{position: 'absolute'}}>
            <View style= {styles.addcontainer} >
                <Image source= {icons.add} style= {styles.addbtn} />
                
            </View>
            <Text>Add story</Text>
        </View>
        </View>
      {user.map((item, index) => (
        <View style={styles.story}>
            <View style={[styles.storyborder, {borderWidth: 3}]}>
            <Image source={{uri: item.photo}} style={styles.storyimg} />
            </View>
          <Text style= {styles.username}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyborder: {
    borderColor: 'green',    
    borderRadius: 50,
    width: 75,
    height: 75,
    padding: 2,
    marginHorizontal: 3  
  },
  storyimg: {
      width: '100%',
      height: '100%',
      borderRadius: 50,    
  },
  username: {
      textAlign: 'center'
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
    borderRadius: 20


    
  },
  addbtn: {
      height: 20,
      width: 30,
      tintColor: '#2C5F2D'
  }
});
