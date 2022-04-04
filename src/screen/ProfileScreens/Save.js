import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import icons from '../../constants/icons';
import PostPhoto from '../../Components/PostPhoto';

const Save = ({navigation}) => {
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
          title: 'Saved',
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
      <PostPhoto/>
    </View>
  )
}

export default Save

const styles = StyleSheet.create({
    downbtn: {
        height: 25,
        width: 22,
        marginLeft: 5,
        marginRight: 15,
      },
})