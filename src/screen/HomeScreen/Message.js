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
  TouchableHighlight
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
import {useRoute} from '@react-navigation/core';
const {height, width} = Dimensions.get('window');

const ModelPoup = ({visible, children}) => {
  const [showModel, setShowModel] = React.useState(false);
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

const MessageScreen = ({navigation}) => {
  const [muteAction, setMuteAction] = useState(false)
  const [visible, setVisible] = React.useState(false);
  const route = useRoute();
  const user = route?.params?.user;

  const PressMute = () => {
    setMuteAction(!muteAction)
  }

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: '',

      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.down}
              resizeMode="contain"
              style={styles.downbtn}
            />
          </TouchableOpacity>

          <Image
            source={{
              uri: user.photo,
            }}
            style={styles.imgmsg}
          />
          <Text style={styles.header}>{user?.name}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.menucontainer}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image source={icons.menu} style={styles.menu} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <View style={styles.container}>
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
        <TextInput placeholder="message..." style={styles.msginput} />
        <TouchableOpacity style={styles.btncontainer}>
          <Text style={styles.sendbtn}>Send</Text>
        </TouchableOpacity>
      </View>
      <ModelPoup visible={visible}>
            <TouchableOpacity onPress={() => setVisible(false)} >
        <View>
          <TouchableOpacity
            style={{right: 260, marginVertical: 10, position: 'absolute'}}
            onPress={() => setVisible(false)}>
            <Image source={icons.x} style={{height: 25, width: 25}} />
          </TouchableOpacity>
        </View>
        <TouchableHighlight>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.modelheader}>
            <View style={styles.textcontainer}>
              <TouchableOpacity onPress={PressMute}
                style={styles.rowmodal}>
                <Image source={muteAction ? icons.unmute : icons.Mute} style={styles.modaleicon} />
                <Text style={styles.modaltext}>{muteAction ? 'Unmute' : 'Mute'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textcontainer}>
              <TouchableOpacity
                style={styles.rowmodal}>
                <Image
                  source={icons.Block}
                  style={[styles.modaleicon, {height: 20, width: 20}]}
                />
                <Text style={[styles.modaltext, {color: 'red'}]}>Block</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.rowmodal}>
              <Image source={icons.Report} style={styles.modaleicon} />
              <Text style={styles.modaltext}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableHighlight>
        </TouchableOpacity>
      </ModelPoup>
    </View>
  );
};

export default MessageScreen;

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
    marginLeft: 5,
    marginRight: 15,
  },
  header: {
    fontSize: SIZES.h3,
    fontWeight: '700',
    letterSpacing: 1,
  },
  menucontainer: {
    marginRight: 20,
  },
  menu: {
    height: 8,
    width: 30,
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
  imgmsg: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 8,
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
    bottom: 70,
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
    paddingTop: height / 10,
    paddingLeft: height / 9,
    transparent: true,
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
    justifyContent: 'center',
  },
  modaltext: {
    fontSize: 16,
    marginVertical: 14,
  },
  modaleicon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  rowmodal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
