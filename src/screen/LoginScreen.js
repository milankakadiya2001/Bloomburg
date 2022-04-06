import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PhoneNo from '../Components/PhoneNo';
import Email from '../Components/Email';

const Tab = createMaterialTopTabNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <TouchableOpacity style={styles.downbtn}></TouchableOpacity>

          <View style={styles.upside}></View>
          <View style={styles.content}>
            <Text style={styles.maintitle}>Welcome Back!</Text>

            <View style={styles.secondarycontainer}>
              <View style={{backgroundColor: '#fff', height: 225}}>
                <Tab.Navigator
                  tabBarOptions={{
                    labelStyle: {fontSize: 18, fontWeight: '700', backgroundColor: '#fff', textTransform: 'capitalize'},
                    tabBarActiveTintColor: '#fff',
                    indicatorStyle: { backgroundColor: '#2C5F2D', },
                    tabBarContentContainerStyle: {backgroundColor: '#fff'}
                  }}
                  tabBarItemStyle={{
                    color: 'black',
                  }}>
                  <Tab.Screen name="Phone Number" component={PhoneNo} />
                  <Tab.Screen name="Email Address" component={Email} />
                </Tab.Navigator>
              </View>
            </View>
          </View>
        </View>

        
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  downbtn: {
    height: 25,
    width: 22,
    marginVertical: 53,
    marginHorizontal: 23,
  },
  upside: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  content: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderColor: COLORS.white,
    borderWidth: 20,
    paddingVertical: 20,
    // paddingBottom: 130,
    
  },
  maintitle: {
    fontSize: SIZES.h1,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 33,
    color: 'black',
  },
  secondarycontainer: {
    justifyContent: 'center',
  },
  btnfont: {
    fontSize: SIZES.h2,
    fontWeight: '700',
    color: COLORS.black,
  },  
});
