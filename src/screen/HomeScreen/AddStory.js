import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
import {useRoute} from '@react-navigation/core';
const {height, width} = Dimensions.get('window');
import user from '../../Components/PostPic.json';

const AddStory = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      headerTitleStyle: {
        color: 'white',
      },
      title: 'Add to Story',

      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.x}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  renderImages = item => {
    return (
      <TouchableOpacity style={{flex: 1, alignItems: 'center'}} activeOpacity={0.7} >
        <Image
          source={{uri: item.item.image}}
          style={{height: 215,width: 126, marginTop: 5}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={{backgroundColor: '#000', height: '100%'}}>
        <View style={styles.recentContainer}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={styles.textRecent}>Recents</Text>

            <Image source={icons.down} style={styles.recentBtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textRecent}>Select</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={[styles.cameraContainer, {backgroundColor: 'rgba(21, 21, 21, 1)', position: 'relative'}]}>
              <Image source={icons.camara} style={styles.camera} />
              <Text style={styles.textCamera} >Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={{
                  uri: 'https://images.theconversation.com/files/427100/original/file-20211018-17-7bf8no.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                }}
                style={styles.cameraContainer}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={{
                  uri: 'https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg',
                }}
                style={styles.cameraContainer}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={user}
              renderItem={this.renderImages}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              numColumns={'3'}
              keyExtractor={(item, index) => index.toString}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
    tintColor: '#fff',
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  recentBtn: {
    height: 15,
    width: 15,
    transform: [{rotateY: '0deg'}, {rotateZ: '270deg'}],
    marginHorizontal: 5,
    tintColor: '#fff',
    marginTop: 5,
  },
  textRecent: {
    fontSize: 17,
    color: '#fff',
  },
  camera: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
  cameraContainer: {
    height: 215,
    width: 127,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCamera: {
    color: '#fff',
    position: 'absolute',
    bottom: 2,
    left: 6
  }
});
