import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {test, CountryCode} from '../Components/countryCode';
import {COLORS} from '../constants/theme';
import icons from '../constants/icons';

const countryPicker = (props, navigation) => {
  const renderItemView = ({item, index}) => {
    return (
      <View>
        <View style={{height: 50, padding: 15, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 10,
              color: COLORS.black,
              width: '15%',
            }}>
            {item.dial_code}
          </Text>
          <Text style={{fontSize: 18, color: COLORS.black}}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Modal visible={props.isVisible}>
        <View>
          <View style={styles.inputcontainer}>
            <Image source={icons.search} style={styles.icon} />
            <TextInput placeholder="Search" style={styles.input} />
            <TouchableOpacity ><Image source={icons.x} style={styles.iconx} /></TouchableOpacity>
            
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList data={props.data} renderItem={renderItemView} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default countryPicker;

const styles = StyleSheet.create({
  inputcontainer: {
    marginVertical: 15,
    justifyContent: 'center',
    marginLeft: 45
  },
  input: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 33,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    tintColor: 'grey',
  },
  iconx: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 25,
    tintColor: 'grey',
    top: -30
  },
});
