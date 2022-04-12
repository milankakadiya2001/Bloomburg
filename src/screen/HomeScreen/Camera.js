import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import icons from '../../constants/icons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const {height, width} = Dimensions.get('window');


const Camera = ({navigation}) => {  
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      headerTitleStyle: {
        color: 'white',
      },
      title: () => (
        <Image
          source={icons.flash}
          style={{height: 25, width: 25, tintColor: '#fff'}}
        />
      ),

      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.x}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });


  const [filePath, setFilePath] = useState({});
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });}
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => chooseFile('mixed')} >
            <Image
              source={{
                uri: 'https://images.theconversation.com/files/427100/original/file-20211018-17-7bf8no.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
              }}
              style={styles.gallery}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nameComponent}>
          <Text style={styles.Active}>Story</Text>
          <Text style={styles.NoneActive}>Post</Text>
          <Text style={styles.NoneActive}>Text</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={icons.CameraRevers} style={styles.revers} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
    tintColor: '#fff',
  },
  root: {
    backgroundColor: 'grey',    
    position: 'relative'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  gallery: {
    height: 30,
    width: 30,
    borderWidth: 1,
    padding: 5,
    borderColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 15,
  },
  nameComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Active: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 5,
  },
  NoneActive: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
  },
  revers: {
    height: 30,
    width: 30,
  },
});


