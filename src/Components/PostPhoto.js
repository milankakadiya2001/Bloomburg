import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import icons from '../constants/icons';
let user = require('../screen/HomeScreen/UserList.json');

const PostPhoto = () => {
    renderImages = item => {
      return (
        <View style={{flex: 1, alignItems: "center",  }}>
          <Image source={{uri: item.item.postpic}} style={{height: 125,width: '95%', marginTop: 5}} />
        </View>
      );
    };
    return (
      <View>
        <FlatList
          data={user}
          renderItem={this.renderImages}
          horizontal={false}
          numColumns={'3'}
          keyExtractor={(item, index) => index.toString}
          style={{height: '100%'}}
        />
      </View>
    );
  };

export default PostPhoto;

const styles = StyleSheet.create({
  imgcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgbox: {
    flexDirection: 'column',
    width: '33%',
    height: '66%',
  },
});
