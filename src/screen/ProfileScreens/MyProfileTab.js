import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileBlooms from './ProfileBlooms';
import ProfileChalange from './ProfileChalange';
import ProfileVideos from './ProfileVideos';
import ProfileRewards from './ProfileRewards';

// const Tab = createMaterialTopTabNavigator();

const MyProfileTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blooms" component={ProfileBlooms} />
      <Tab.Screen name="Chalenge" component={ProfileChalange} />
      <Tab.Screen name="Videos" component={ProfileVideos} />
      <Tab.Screen name="Rewards" component={ProfileRewards} />
    </Tab.Navigator>
  );
};

export default MyProfileTab;

const styles = StyleSheet.create({});
