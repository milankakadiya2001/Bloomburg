import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../constants/icons';
import {COLORS, SIZES} from '../constants/theme';

const CommentScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Comments',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/med/women/10.jpg'}}
          style={styles.user}
        />
        <View style={styles.root}>
          <Text style={styles.userComment}>
            {' '}
            <Text style={styles.userName}>Marcus Jorden </Text>Hello, Friends{' '}
          </Text>
          <Text style={styles.commentTime}>2 hr</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/med/women/8.jpg'}}
          style={styles.user}
        />
        <View style={styles.root}>
          <Text style={styles.userComment}>
            <Text style={styles.userName}>Marcus Jorden </Text>Hi, The image is
            so beautiful
          </Text>
          <Text style={styles.commentTime}>30 min</Text>
        </View>
        <Image source={icons.Like} style={styles.like} />
      </View>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/med/women/1.jpg'}}
          style={styles.user}
        />
        <View style={styles.root}>
          <Text style={styles.userComment}>
            <Text style={styles.userName}>Marcus Jorden </Text>Hi, The image is
            so beautiful
          </Text>
          <Text style={styles.commentTime}>30 min</Text>
        </View>
        <Image source={icons.Like} style={styles.like} />
      </View>
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  root: {
    width: 255,
    flexDirection: 'column',
    marginHorizontal: 15,
    // alignItems: 'center'
  },
  user: {
    height: 45,
    width: 45,
    borderRadius: 20,
  },
  userName: {
    // marginHorizontal: 10,
    fontSize: 17,
    fontWeight: '600',
  },
  userComment: {
    fontSize: 15,
    lineHeight: 20,
  },
  commentTime: {
    color: '#808080',
  },
  like: {
    height: 20,
    width: 20,
    marginRight: 20,
    
  },
});
