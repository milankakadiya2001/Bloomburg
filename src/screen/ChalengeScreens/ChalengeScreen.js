import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';
import ChalangeHome from './ChalangeHome';
import icons from '../../constants/icons';

const ChalengeScreen = ({navigation}) => {
  const [list, setList] = useState([
    {name: 'Energy', key: 1},
    {name: 'Fuel', key: 2},
    {name: 'Home', key: 3},
    {name: 'Kids', key: 4},
    {name: 'Trees', key: 5},
    {name: 'Energy', key: 6},
    {name: 'Energy', key: 7},
  ]);
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
      headerTitleStyle: {Color: 'black', fontWeight: '700'},
      headerTitleAlign: 'center',
    });
  });

  return (
    <View>
      <ScrollView
        style={{marginVertical: 14}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {list.map(item => {
          return (
            <View style={styles.container} key={item.key}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => <ChalangeHome />}>
                <Text style={styles.BoxText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        {/* <View style={styles.container}>
        <TouchableOpacity style={styles.highlightbox} onPress={HomePress()}>
          <Text style={[styles.BoxText, {color: 'white'}]}>Home</Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.imgcontainer}>
          <Image source={icons.chalangeimg} style={styles.img} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 25
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 20}}>
              <Text style={styles.textChalnge}>watch a video on</Text>
              <Text style={styles.textChalnge}>sustainability </Text>
            </View>
            <TouchableOpacity style={styles.joinbtn} onPress={() => navigation.navigate('ChalangeBtn')} >
              <Text style={styles.join}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imgcontainer}>
          <Image source={icons.chalangeimg} style={styles.img} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 25
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 20}}>
              <Text style={styles.textChalnge}>watch a video on</Text>
              <Text style={styles.textChalnge}>sustainability </Text>
            </View>
            <TouchableOpacity style={styles.joinbtn} onPress={() => navigation.navigate('ChalangeBtn')}>
              <Text style={styles.join}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imgcontainer}>
          <Image source={icons.chalangeimg} style={styles.img} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 25
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 20}}>
              <Text style={styles.textChalnge}>watch a video on</Text>
              <Text style={styles.textChalnge}>sustainability </Text>
            </View>
            <TouchableOpacity style={styles.joinbtn} onPress={() => navigation.navigate('ChalangeBtn')} >
              <Text style={styles.join}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View  style={{margin: 30}} ></View>
      </ScrollView>
    </View>
  );
};

export default ChalengeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: '10%',
  },
  BoxText: {
    fontSize: 16,
    padding: 5,
    fontWeight: '500',
    paddingHorizontal: 10,
    color: '#59494980',
  },
  box: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightbox: {
    margin: 10,
    backgroundColor: '#2C5F2D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '90%',
    borderRadius: 15,
    height: 220,
    borderRadius: 10,
    position: 'relative'
  },
  imgcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,

  },
  textChalnge: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  joinbtn: {
    backgroundColor: '#FFC901',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 20
  },
  join: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
