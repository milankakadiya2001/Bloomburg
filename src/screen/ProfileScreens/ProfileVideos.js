import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

let user = require('../../Components/PostPic.json')

const ProfileVideos = () => {
    renderImages = item => {
      return (
        <View style={{flex: 1, alignItems: "center", }}>
          <Image source={{uri: item.item.image}} style={{height: 215,width: 125, marginTop: 5}} />
          <Text style={{position: 'absolute', bottom: 2, left: 6, color: '#FFFFFF'}} >{item.item.View}</Text>
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
        />
      </View>
    );
  };

export default ProfileVideos

const styles = StyleSheet.create({})