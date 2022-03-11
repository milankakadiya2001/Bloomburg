import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import Stories from './Stories';
import PostScreen from './PostScreen';
import NotificationUser from './NotificationUser';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.header}>BLOOMBUGG</Text>
        </View>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Notification')}
          >
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={styles.notify}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.chat}
              resizeMode="contain"
              style={styles.chat}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Stories />
        <PostScreen />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topcontainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingTop: 30,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  header: {
    fontSize: SIZES.h2,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  notify: {
    height: 30,
    width: 30,
  },
  chat: {
    height: 35,
    width: 40,
    marginHorizontal: 10,
  },
});
