import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
let user = require('../../Components/PostPic.json');
import SliderLine from '../../Components/Slider';
import icons from '../../constants/icons';

const {height, width} = Dimensions.get('window');
const ProfileBlooms = () => {
  return (
    <View>
      <View style={styles.blomcontainer}>
        <Text style={styles.blom}>Total Blooms</Text>
        <View style={styles.underline}></View>
        <View style={{marginTop: 15}}></View>
        <View>
          <View style={styles.slider}>
            <Text style={styles.font}>Energy</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '50%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>46</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Fuel</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '90%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>96</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Kids</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '5%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>5</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Home</Text>
            <View style={[styles.empty, {width: '73%'}]}>
              <View style={[styles.fillPart, {width: '35%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>35</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Trees</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '85%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>85</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Recycle</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '75%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>75</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slider}>
            <Text style={styles.font}>Water</Text>
            <View style={[styles.empty]}>
              <View style={[styles.fillPart, {width: '20%'}]}>
                <View style={styles.challangeNo}>
                  <Text style={styles.challangeText}>20</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.boxcontainer}>
          <View style={styles.box}>
            <Text style={styles.gasNo}>10</Text>
            <Text style={{fontSize: 16}}>Kg CO2 Saved</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.gasNo}>10</Text>
            <Text style={{fontSize: 16}}>Kg CO2 Saved</Text>
          </View>
        </View>
        <View style={styles.boxcontainer}>
          <View style={styles.box}>
            <Text style={styles.gasNo}>10</Text>
            <Text style={{fontSize: 16}}>Kg CO2 Saved</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.gasNo}>10</Text>
            <Text style={{fontSize: 16}}>Kg CO2 Saved</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.awardcontainer}>
          <View style={styles.award}>
            <Image source={icons.award} style={styles.imgaward} />
            <Text style={styles.awardno}>2</Text>
            <Text style={styles.awardfont}>EV Budges</Text>
          </View>
          <View style={styles.award}>
            <Image
              source={icons.award}
              style={[styles.imgaward, {tintColor: '#FFA500'}]}
            />
            <Text style={styles.awardno}>3</Text>
            <Text style={styles.awardfont}>Solar Badge</Text>
          </View>
          <View style={styles.award}>
            <Image
              source={icons.award}
              style={[styles.imgaward, {tintColor: '#2C5F2D'}]}
            />
            <Text style={styles.awardno}>5</Text>
            <Text style={styles.awardfont}>Green Badge</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileBlooms;

const styles = StyleSheet.create({
  blomcontainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: height / 25,
    marginHorizontal: 10,
  },
  blom: {
    fontWeight: '700',
    fontSize: 16,
  },
  underline: {
    borderBottomWidth: 0.7,
    width: '90%',
    justifyContent: 'center',
    borderColor: '#BBBBBB',
    marginTop: 5,
  },
  slider: {
    flexDirection: 'row',
    paddingVertical: 1,
    alignItems: 'center',
    height: 50,
  },
  fillPart: {
    backgroundColor: '#2C5F2D',
    height: 4,
    position: 'relative',
  },
  empty: {
    backgroundColor: '#E6E6E6',
    height: 4,
    width: '75%',
    marginHorizontal: 5
  },
  challangeNo: {
    height: 23,
    width: 23,
    backgroundColor: '#FFC901',
    position: 'absolute',
    borderRadius: 20,
    right: -10,
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  challangeText: {
    fontSize: 12,
  },
  font: {
    fontSize: 15,
    width: '18%',
  },
  imgaward: {height: 25, width: 25, marginHorizontal: 15},

  boxcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    marginTop: 18,
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    padding: 13,
  },
  boxno: {
    color: 'blue',
    fontSize: 18,
  },
  boxfont: {
    fontSize: 16,
  },
  awardcontainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    padding: 6,
  },
  award: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    width: 110,
    height: 110,
    justifyContent: 'center',
  },
  awardno: {
    color: '#FFC901',
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: '600',
    marginTop: 10,
  },
  awardfont: {
    fontSize: 16,
  },
  gasNo: {
    color: '#FFC901',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
});
