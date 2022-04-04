import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
import user from '../HomeScreen/UserList.json';

const ChalangeBtn = ({navigation}) => {
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
      title: 'Challenge',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Chalenge')}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={styles.downbtn}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <View>
        <Image source={icons.chalangeimg} style={styles.img} />
        <View style={{position: 'absolute', bottom: 15, marginLeft: 15}}>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              marginVertical: 15,
              fontWeight: '600',
            }}>
            watch a video on sustainability{' '}
          </Text>
          <Text style={{fontSize: 17, color: 'white', marginBottom: 10}}>
            Challenge end in 06: 14: 25: 28{' '}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 19}}>
        <TouchableOpacity style={styles.joinBtn}>
          <Text style={styles.join}>Join Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.startContainer}>
          <Text style={styles.header}>START</Text>
          <Text style={styles.date}>09-Mar-2022</Text>
        </View>
        <View style={styles.startContainer}>
          <Text style={styles.header}>START</Text>
          <Text style={styles.date}>09-Mar-2022</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 15, justifyContent: 'center'}}>
        <Text style={styles.maintitle}>HOW TO WIN</Text>
        <Text style={styles.content}>
          watch any video that is related to environment and sustainability and
          BLOOM the action once you are done. Don’t forget to mention the
          movie's name!
        </Text>
      </View>
      <View style={{marginLeft: 15,}}>
        <Text style={styles.maintitle}>LEADER BOARD </Text>
        <View style={{flexDirection: 'row', marginVertical: 18}}>
          {user.map((item, index) => (
            <Image source={{uri: item.photo}} style={styles.leaderPic} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ChalangeBtn;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  img: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  joinBtn: {
    backgroundColor: '#FFC901',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  join: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },
  startContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: 17,
    marginVertical: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: '700',
  },
  maintitle: {
    marginTop: 25,
    fontSize: 19,
    marginBottom: 10,
  },
  content: {
    fontSize: 17,
    lineHeight: 22,
  },
  leaderPic: {
    width: 33,
    height: 33,
    borderRadius: 22,
    marginHorizontal: 5
  },
});
