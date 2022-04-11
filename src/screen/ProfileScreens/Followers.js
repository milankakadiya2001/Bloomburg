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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const FollowerList = () => {
 return (
   <ScrollView style={styles.root}  >
     {user.map((item, index) => (
        <View style={styles.recent}>
          <Image source={{uri: item.photo}} style={styles.img} />
          <TouchableOpacity  style={{width: '55%'}}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.textother}>Sent a post. 5min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dot}>
              <Text style={styles.remove} >Remove</Text>
          </TouchableOpacity>
        </View>
       
      ))}
   </ScrollView>
 )
}

const FollowingList = () => {
  return (
    <ScrollView  style={styles.root} >
      {user.map((item, index) => (
         <View style={styles.recent}>
           <Image source={{uri: item.photo}} style={styles.img} />
           <TouchableOpacity style={{width: '52%'}}>
             <Text style={styles.title}>{item.name}</Text>
             <Text style={styles.textother}>Sent a post. 5min</Text>
           </TouchableOpacity>
 
           <TouchableOpacity style={styles.dot}>
               <Text style={styles.remove} >Following</Text>
           </TouchableOpacity>
         </View>
       ))}
    </ScrollView>
  )
 }

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
      <View style={{height: '100%', backgroundColor: '#fff'}}>
                <Tab.Navigator
                  tabBarOptions={{
                    tintColor: 'black',
                    labelStyle: {fontSize: 16, fontWeight: '700', textTransform: 'capitalize' },
                    tabBarActiveTintColor: '#fff',
                    indicatorStyle: { backgroundColor: '#2C5F2D',  },
                    style: {marginHorizontal: 35, marginTop: 20, marginBottom: 15}
                  }}
                  tabBarItemStyle={{
                    color: 'black',
                  }}>
                  <Tab.Screen name="Followers" component={FollowerList} />
                  <Tab.Screen name="Following" component={FollowingList}  />
                 
                </Tab.Navigator>
              </View>
      
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
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderColor: '#BBBBBB',
    // position: 'relative'
    
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
    // right: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 12,
    // position: 'absolute'
    
  },
  remove: {
      fontSize: 13
  },
  root: {
    backgroundColor: '#fff',
    height: '100%'
  }
});
