import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../constants/theme';
import icons from '../../../constants/icons';
import Toggle from '../../../Components/Toggle';

const NotificationSetting = ({navigation}) => {
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState(false);
  const [stories, setStories] = useState(false);

  const toggleLike = () => {
    setLike(previousState => !previousState);
  };
  const toggleComments = () => {
    setComments(previousState => !previousState);
  };
  const toggleStories = () => {
    setStories(previousState => !previousState);
  };
  return (
    <View>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Notification</Text>
        <View></View>
      </View>
      <View>      
      <View style={styles.container}>
        <Text style={styles.primary}>Posts, Stories and Comments</Text>
        <View style={styles.secondcontainer}>
          <Text style={styles.maintext}>Likes</Text>
          <View style={styles.btncontainer}>
            <Text style={styles.btntext}>{like ? 'On' : 'Off'}</Text>
            <Toggle
              isEnabled={like}
              toggleSwitch={setLike}
              style={styles.btntoggle}
            />
          </View>
          <Text style={styles.secondarytext}>From People I Follow</Text>
        </View>
      </View>
      <View style={styles.bottomborder}></View>  
      </View>
      <View>      
      <View style={styles.container}>
        <View style={styles.secondcontainer}>
          <Text style={styles.maintext}>Comments</Text>
          <View style={styles.btncontainer}>
            <Text style={styles.btntext}>{comments ? 'On' : 'Off'}</Text>
            <Toggle
              isEnabled={comments}
              toggleSwitch={setComments}
              style={styles.btntoggle}
            />
          </View>
          <Text style={styles.secondarytext}>From People I Follow</Text>
        </View>
      </View>
      <View style={styles.bottomborder}></View>  
      </View>
      <View>      
      <View style={styles.container}>
        <View style={styles.secondcontainer}>
          <Text style={styles.maintext}>Stories</Text>
          <View style={styles.btncontainer}>
            <Text style={styles.btntext}>{stories ? 'On' : 'Off'}</Text>
            <Toggle
              isEnabled={stories}
              toggleSwitch={setStories}
              style={styles.btntoggle}
            />
          </View>
          <Text style={styles.secondarytext}>From People I Follow</Text>
        </View>
      </View>
      <View style={styles.bottomborder}></View>  
      </View>
       
    </View>
  
  );
};

export default NotificationSetting;

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
    marginBottom: 25,
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
    marginRight: 28,
    fontWeight: '700',
    letterSpacing: 1
  },
  container: {
    // width: '80%',
    marginHorizontal: 25,
    marginVertical: 8    
  },
  primary: {
    fontSize: SIZES.h3,
    fontWeight: '600',
  },
  secondcontainer: {
    marginVertical: 10,
  },
  maintext: {
    fontSize: SIZES.h4,
    marginVertical: 10,
    fontWeight: '500',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  btntext: {
    fontSize: SIZES.h4,
  },
  secondarytext: {
    fontSize: SIZES.h4,    
  },
  bottomborder: {
    borderBottomWidth: 1,
    borderColor: '#BBBBBB',
    marginVertical: 10
  }
});
