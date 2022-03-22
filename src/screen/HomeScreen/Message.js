import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import React, {Children, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
const {height, width} = Dimensions.get('window');

const ModelPoup = ({visible, children}) => {
  const [showModel, setShowModel] = React.useState(true);
  React.useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowModel(true);
    } else {
      setShowModel(false);
    }
  };

  return (
    <Modal visible={showModel} transparent>
      <View style={styles.modalBackGround}>
        <View style={[styles.modelcontainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const Message = ({navigation}) => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/med/women/28.jpg',
          }}
          style={styles.img}
        />
        <Text style={styles.header}>Kadin Lipshutz</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            left: width / 9,
          }}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={styles.chat}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.user}>
          <Text style={styles.usermsg}>Hi, How are you?</Text>
        </View>
        <View style={styles.msgcontainer}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/med/women/28.jpg',
            }}
            style={styles.img}
          />
          <View style={styles.send}>
            <Text style={styles.sendermsg}>Hello, Marcus I am fine.</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Text style={styles.usermsg}>
            I am not able to come in morning but after 3 I will come
          </Text>
        </View>
      </ScrollView>
      <View style={styles.msginputcontianer}>
        <TextInput placeholder='message...' style={styles.msginput} />
        <TouchableOpacity style={styles.btncontainer}>
          <Text style={styles.sendbtn}>Send</Text>
        </TouchableOpacity>
      </View>
      <ModelPoup visible={visible}>
        <View>
        <TouchableOpacity
          style={{left: 10, marginVertical: 10}}
          onPress={() => setVisible(false)}>
          <Image source={icons.x} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.modelheader}>
          <View style={styles.textcontainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.rowmodal}>
                <Image source={icons.Mute} style={styles.modaleicon}/>
                <Text style={styles.modaltext}>Mute</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textcontainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.rowmodal}>
              <Image source={icons.Mute} style={styles.modaleicon}/>
                <Text style={[styles.modaltext, {color: 'red'}]}>Block</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.rowmodal} >
            <Image source={icons.Report} style={styles.modaleicon}/>
              <Text style={styles.modaltext}>Report</Text>
            </TouchableOpacity>
          
          </View>
        </View>
      </ModelPoup>
    </View>
  );
};

export default Message;

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
    marginHorizontal: 10,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1,
    width: '40%',
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
  img: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  user: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 18,
  },
  usermsg: {
    padding: 10,
    backgroundColor: '#FED642',
    borderRadius: 20,
    overflow: 'hidden',
    maxWidth: '80%',
  },
  sendermsg: {
    padding: 10,
    backgroundColor: '#FFF2C2',
    borderRadius: 20,
    overflow: 'hidden',
  },
  send: {
    maxWidth: '70%',
    marginLeft: 5,
  },
  msgcontainer: {
    flexDirection: 'row',
  },
  msginput: {
    backgroundColor: 'rgba(187, 187, 187, 0.54);',
    fontSize: 18,
    padding: 12,
    borderRadius: 25,
    width: '100%',
    paddingLeft: 28,
  },
  msginputcontianer: {
    bottom: height / 5.25,
    marginHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendbtn: {
    position: 'absolute',
    fontSize: 15,
    borderRadius: 16,
    padding: 7,
    backgroundColor: '#FFC901',
    overflow: 'hidden',
    paddingHorizontal: 13,
  },
  btncontainer: {
    right: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackGround: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: height / 9,
  },
  modelcontainer: {
    width: '55%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
  },
  modelheader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 15,
  },
  textcontainer: {
    borderBottomWidth: 1,
    borderColor: '#BBBBBB',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  modaltext: {
    fontSize: 16,
    marginVertical: 14,
  },
  modaleicon :{
    height: 25,
    width: 25,
    marginHorizontal: 10
  },
  rowmodal: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});
