import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import HomeScreen from './HomeScreen/HomeScreen';
import ChalengeScreen from './ChalengeScreens/ChalengeScreen';
import ProfileScreen from './ProfileScreens/ProfileScreen';
import RewardsScreen from './RewardsScreen';
import BoomScreen from './BoomScreens/BoomScreen';
import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 75,
        },
      }}
      tabBarOptions={{showLabel: false, style: {backgroundColor: 'black'}}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.homea}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#2C5F2D' : 'black',
                }}
                on
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chalenge"
        component={ChalengeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.trophy}
                resizeMode="contain"
                style={{
                  height: 26,
                  width: 26,
                  tintColor: focused ? '#2C5F2D' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Boom"
        component={BoomScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: '#2C5F2D',
                width: 40,
                height: 40,
                alignItems: 'center',
                borderRadius: 20,
                justifyContent: 'center',
                shadowColor: '#171717',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <Image
                source={icons.B}
                resizeMode="contain"
                style={{
                  height: 38,
                  width: 38,
                  tintColor: 'white',
                  position: 'absolute',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.Gift}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#2C5F2D' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#2C5F2D' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
