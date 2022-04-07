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
import ChalangeHome from './src/screen/ChalengeScreens/ChalangeHome';
import BloomTrees from './src/screen/BoomScreens/BloomTrees';
import ChalangeBtn from './src/screen/ChalengeScreens/ChalangeBtn';
import Trees from './src/screen/BoomScreens/Trees';
import Followers from './src/screen/ProfileScreens/Followers';
import Save from './src/screen/ProfileScreens/Save';
import OfferCard from './src/screen/RewaedsScreen/OfferCard';
import Comments from './src/Components/Comment';
import CommentScreen from './src/Components/Comment';
import AddStory from './src/screen/HomeScreen/AddStory';
import Camera from './src/screen/HomeScreen/Camera.js';
import SignIn from './src/Components/SignIn';
import Register from './src/Components/Register';

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
          <Stack.Screen name="BloomTrees" component={BloomTrees} />
          <Stack.Screen name="ChalangeBtn" component={ChalangeBtn} />
          <Stack.Screen name="Trees" component={Trees} />
          <Stack.Screen name="Followers" component={Followers} />
          <Stack.Screen name="Save" component={Save} />
          <Stack.Screen name="OfferCard" component={OfferCard} />
          <Stack.Screen name="CommentScreen" component={CommentScreen} />
          <Stack.Screen name="CameraScreen" component={Camera} />
          <Stack.Screen name="AddStory" component={AddStory} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
