import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
const {height, width} = Dimensions.get('window');

const BoomScreen = () => {
  return (
    <View>
      <View style={styles.topcontainer}>
        <Text style={styles.header}>Action</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator= "false" >
        <View style={styles.mainbox}>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>TREES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>Fuel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>Water Conservation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>Recycle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>Kids</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>ENERGY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>TREES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>TREES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actioncontainer}>
            <Text style={styles.actionname}>TREES</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BoomScreen;

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
    justifyContent: 'center',
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  actioncontainer: {
    backgroundColor: '#E7F8B6',
    padding: 25,
    borderRadius: 15,
    marginVertical: 7
  },
  actionname: {
    fontSize: 18,
  },
  mainbox: {
    paddingHorizontal: 18,
    marginTop: 22,
  },
});
