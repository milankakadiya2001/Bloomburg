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
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
const {height, width} = Dimensions.get('window');

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Messages</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            left: width / 3.5,
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
      </View>
      <View style={styles.inputcontainer}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <ScrollView>
        <View>
          <View style={styles.recent} onPress={navigation.navigate('Message')} >
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/28.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/2.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/25.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/8.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/27.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/38.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View>
          <View style={styles.recent}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/women/30.jpg',
              }}
              style={styles.img}
            />
            <View style={{width: 200}}>
              <Text style={styles.title}>Kadin Lipshutz</Text>
              <Text style={styles.textother}>Sent a post. 5min</Text>
            </View>
            <View style={styles.dot}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  topcontainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingTop: 30,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  downbtn: {
    height: 25,
    width: 22,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1,
  },
  notify: {
    height: 30,
    width: 30,
  },
  chat: {
    height: 30,
    width: 30,
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
    // marginTop: 15,
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 8,
    // paddingBottom: 18,
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
