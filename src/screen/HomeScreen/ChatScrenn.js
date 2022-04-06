import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
const {height, width} = Dimensions.get('window');
import userDetail from '../HomeScreen/UserList.json';
import { SwipeListView } from 'react-native-swipe-list-view';

const ChatScreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [filterName, setFilterName] = useState(userDetail);

  useEffect(() => {
    const searchUser = userDetail.filter(users =>
      users.name.toLowerCase().includes(username.toLowerCase()),
    );
    setFilterName(searchUser);
  }, [username]);

  useEffect (() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Messages',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
        style={{
          flexDirection: 'row',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={styles.notify}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <Image
              source={icons.chatgreen}
              resizeMode="contain"
              style={styles.chat}
            />
          </TouchableOpacity>
        </View>
        )
    })
})

const pressMessage = user => {
  navigation.navigate('MessageScreen', {user})
}

  
  return (
    <View style={styles.container}>
      
      <View style={styles.inputcontainer}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput
          placeholder="Search"
          value={username}
          onChangeText={setUserName}
          style={styles.input}
        />
      </View>
      {/* <SwipeListView
            // data={}
            renderItem={ (data, rowMap) => (
                <View style={{padding: 10, borderWidth: 1, width: '100%'}}>
                    <Text>I am  in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        /> */}
      <View>
        <ScrollView>
          <View style={{marginBottom: 150}}>
            {filterName.map((item, index) => (
              <View style={styles.recent}>
                <Image source={{uri: item.photo}} style={styles.img} />
                <TouchableOpacity onPress={() => pressMessage(item)} style={{width: 200}}>
                  <Text style={styles.title} >
                    {item.name}
                  </Text>
                  <Text style={styles.textother}>Sent a post. 5min</Text>
                </TouchableOpacity>
                <View style={styles.dot}></View>
              </View>
            ))}
          </View>
          <View  ></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1,
  },
  notify: {
    height: 25,
    width: 25,
  },
  chat: {
    height: 25,
    width: 25,
    marginHorizontal: 15,
  },
  inputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
    borderRadius: 10,
    padding: 8,
    paddingLeft: 33,
    backgroundColor: '#FFC9013B',
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 50,
    tintColor: 'grey',
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
    left: width / 12,
    height: 10,
    width: 10,
    backgroundColor: '#FFC901',
    borderRadius: 10,
  },
});
