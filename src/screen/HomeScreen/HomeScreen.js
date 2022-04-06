import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import Stories from './Stories';
import PostScreen from './PostScreen';

const HomeScreen = ({navigation}) => {
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
      title: '',
      headerLeft: () => (
        <View style={{marginLeft: 15}}>
          <View>
            <Image source={icons.BloombuggLogo} style={styles.header} />
          </View>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.search}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={styles.notify}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
            <Image
              source={icons.chat}
              resizeMode="contain"
              style={styles.chat}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView scrollIndicatorInsets={{left: 2}} showsVerticalScrollIndicator={false}  style={{position: 'relative'}}>
        <View>
          <TouchableOpacity activeOpacity={0.5} style={{}}>
            {/* <Image source={icons.plus} style={styles.plusImg} /> */}
          </TouchableOpacity>
          <Stories />
          <PostScreen />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    width: 195,
    height: 33,
  },
  notify: {
    height: 30,
    width: 30,
  },
  chat: {
    height: 25,
    width: 25,
    marginHorizontal: 15,
  },
  search: {
    height: 30,
    width: 30,
    marginHorizontal: 9,
  },
  plusImg: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: 0,
    bottom: -100,
    backgroundColor: 'transparent',
  },
});
