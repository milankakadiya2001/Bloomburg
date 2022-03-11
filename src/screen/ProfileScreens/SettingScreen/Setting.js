import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';

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
    <Modal transparent visible={showModel}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modelcontainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const Setting = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Edit profile</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.donebtn}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.primary}>
          <View style={styles.nocontainer}>
            <Image source={icons.notification} style={styles.btn} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Notification</Text>
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationSetting')}>
            <Image source={icons.Right} style={styles.right} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.primary}>
          <View style={styles.nocontainer}>
            <Image source={icons.Privacy} style={styles.btn} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Privacy</Text>
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacySetting')}>
            <Image source={icons.Right} style={styles.right} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.primary}>
          <View style={styles.nocontainer}>
            <Image source={icons.Number} style={styles.btn} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Change number</Text>
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeNumberSetting')}>
            <Image source={icons.Right} style={styles.right} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.primary}>
          <View style={styles.nocontainer}>
            <Image source={icons.Delete} style={styles.btn} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Delete Account</Text>
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeleteSetting')}>
            <Image source={icons.Right} style={styles.right} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.primary}>
          <View style={styles.nocontainer}>
            <Image source={icons.Logout} style={styles.btn} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Logout</Text>
          </View>
        </View>

        <ModelPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.modelheader}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    marginVertical: 18,
                    borderBottomWidth: 10,
                    borderColor: '#BBBBBB',
                  }}>
                  Log out of Marcus Jorden
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#BBBBBB',
                  width: '90%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{color: 'red', fontSize: 16, marginVertical: 15}}>
                    Log out
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={{fontSize: 16, marginVertical: 15}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModelPoup>
        <View style={styles.rightcontainer}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image source={icons.Right} style={styles.right} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;

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
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  downbtn: {
    height: 25,
    width: 22,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  donebtn: {
    fontSize: SIZES.h4,
    marginRight: 15,
  },
  btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#BBBBBB',
    paddingBottom: 10,
  },
  primary: {
    flexDirection: 'row',
  },
  nocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btn: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
    marginLeft: 20,
  },
  titlecontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.body3,
  },
  rightcontainer: {
    alignContent: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right: {
    height: 22,
    width: 20,
    tintColor: 'rgba(0, 0, 0, 0.3)',
    marginRight: 22,
  },
  modalBackGround: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modelcontainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    elevation: 20,
  },
  modelheader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
