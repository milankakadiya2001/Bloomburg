/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen';
import OtpScreen from './src/screen/OtpScreen';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import TabNavigator from './src/screen/TabNavigator';
import NotificationUser from './src/screen/HomeScreen/NotificationUser';
import ProfileEdit from './src/screen/ProfileScreens/ProfileEdit';
import Setting from './src/screen/ProfileScreens/SettingScreen/Setting';
import NotificationSetting from './src/screen/ProfileScreens/SettingScreen/NotificationSetting';
import PrivacySetting from './src/screen/ProfileScreens/SettingScreen/PrivacySetting';
import ChalengeScreen from './src/screen/ChalengeScreens/ChalengeScreen';
import ChangeNumber from './src/screen/ProfileScreens/SettingScreen/ChangeNoSetting';
import OtpSetting from './src/screen/ProfileScreens/SettingScreen/OtpSetting';
import DeleteSetting from './src/screen/ProfileScreens/SettingScreen/DeleteSetting';
import Deleteacc from './src/screen/ProfileScreens/SettingScreen/Deleteacc';
import Logout from './src/screen/ProfileScreens/SettingScreen/Logout';
import Search from './src/screen/HomeScreen/Search';
import ChatScreen from './src/screen/HomeScreen/ChatScrenn';
import Message from './src/screen/HomeScreen/Message';
import MessageScreen from './src/screen/HomeScreen/Message';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Otp"
            component={OtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Notification" component={NotificationUser} />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen
            name="NotificationSetting"
            component={NotificationSetting}
          />
          <Stack.Screen name="PrivacySetting" component={PrivacySetting} />
          <Stack.Screen name="ChangeNumberSetting" component={ChangeNumber} />
          <Stack.Screen name="OtpSetting" component={OtpSetting} />
          <Stack.Screen name="DeleteSetting" component={DeleteSetting} />
          <Stack.Screen name="Deleteacc" component={Deleteacc} />
          <Stack.Screen name="Logout" component={Logout} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Chats" component={ChatScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
