import {StyleSheet, Text, View, Modal, FlatList,} from 'react-native';
import React from 'react';
import {test, CountryCode} from '../Components/countryCode';

const countryPicker = (props) => {
    console.log('incountrypicker');
  const renderItemView = (item) => {
    console.log('item check ', item)
    return (
      <View style={{height: 50,}}>
        
        <Text>{item.name}</Text>
      </View>
    );
  };
  console.log(props.isVisible);
  console.log(CountryCode)
  return (
    <View>
      <Modal visible={props.isVisible}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={props.data}
            renderItem={(item, index) => renderItemView(item, index)}
          /> 
        </View>
      </Modal>
    </View>
  );
};

export default countryPicker;

const styles = StyleSheet.create({});
