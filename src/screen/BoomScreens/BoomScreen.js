import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
const {height, width} = Dimensions.get('window');

const BoomScreen = ({navigation}) => {
  useEffect (() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      title: 'Action',
      
    })
})
  return (
    <View>
      
      <ScrollView showsVerticalScrollIndicator= {false} >
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
