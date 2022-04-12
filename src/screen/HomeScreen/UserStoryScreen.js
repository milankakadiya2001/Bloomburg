import {
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../constants/icons';

const UserStoryScreen = ({route, navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  const {name, photo, storyPic} = route.params;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}>
      <SafeAreaView style={styles.root}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
              source={{uri: storyPic}}
              style={styles.storyImg}
              resizeMode="cover">
              <View style={styles.ProcessTime}>
                <Animated.View
                  style={{
                    height: 2,
                    width: progressAnimation,
                    backgroundColor: '#fff',
                    alignContent: 'center',
                    position: 'absolute',
                  }}></Animated.View>
                <View style={styles.userName}>
                  <Image source={{uri: photo}} style={styles.UserImg} />
                  <Text style={{color: '#fff', fontSize: 17}}> {name}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.5}
                    style={styles.cancleContainer}>
                    <Image source={icons.x} style={styles.Canclebtn} />
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={styles.msgInput}
                placeholder="message..."
                placeholderTextColor="#fff"
                keybo
              />
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default UserStoryScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    // justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: '#000',
    height: '100%',
  },
  storyImg: {
    height: '93%',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  ProcessTime: {
    height: 2,
    width: '95%',
    backgroundColor: 'grey',
    top: 10,
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    top: 15,
    left: 10,
    fontSize: 14
  },
  UserImg: {
    height: 32,
    width: 32,
    borderRadius: 20,
    marginRight: 10,
  },
  Canclebtn: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
  cancleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },
  msgInput: {
    // backgroundColor: '#fff',
    fontSize: 19,
    padding: 10,
    paddingLeft: 18,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '95%',
  },
});
