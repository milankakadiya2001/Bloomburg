import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';
import PostPhoto from '../../Components/PostPhoto';

const Search = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: COLORS.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        
      },
      title: 'Search',
      headerTitleStyle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        letterSpacing: 1,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
      <View style={styles.inputcontainer}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <PostPhoto/>
     
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  downbtn: {
    height: 25,
    width: 22,
    marginLeft: 5,
    marginRight: 15,
  },
  header: {
    fontSize: SIZES.h3,
    marginVertical: 20,
    marginRight: 39,
    fontWeight: '700',
  },
  inputcontainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
    borderRadius: 10,
    padding: 7,
    paddingLeft: 33,
    backgroundColor: '#8080803D'
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 50,
    tintColor: 'grey',
  },
});
