import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import user from '../HomeScreen/UserList.json';

const Followers = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: COLORS.primary,
      },
      title: 'Marcus Jorden',
      headerTitleStyle: {Color: 'black', fontWeight: '700'},
      headerTitleAlign: 'center',
      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.down}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <View>
      {user.map((item, index) => (

        <View style={styles.recent}>
          <Image source={{uri: item.photo}} style={styles.img} />
          <TouchableOpacity style={{width: 200}}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.textother}>Sent a post. 5min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dot}>
              <Text style={styles.remove} >Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Followers;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  recent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 8,
    borderColor: '#BBBBBB',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 15,
  },
  textother: {
    fontSize: 13,
    color: 'grey',
  },
  dot: {
    flexDirection: 'row',
    right: 2,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 11
  },
  remove: {
      fontSize: 13
  }
});