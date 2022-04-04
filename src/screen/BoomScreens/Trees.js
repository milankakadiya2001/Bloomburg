import { StyleSheet, Text, View,TouchableOpacity,
    Image  } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import icons from '../../constants/icons';

const Trees = ({navigation}) => {

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
          title: 'Actions',
          headerTitleStyle: {
            fontSize: SIZES.h3,
            fontWeight: '700',
            letterSpacing: 1,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
    <Text style={styles.title} >Home</Text>
    <View style={styles.imgContainer}  >
      <Image source={{uri: 'https://assets.newatlas.com/dims4/default/32d8c41/2147483647/strip/true/crop/4224x2814+388+0/resize/728x485!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F5b%2F57%2F1ff22fcb46f69865e0b7f306a5be%2F05-thinkpad-x13s-travling.png'}} style={styles.img} />
      <Text style={styles.titleText} >Watch a Video on sustantibility</Text>
    </View>
    <View>
    <View style={{marginHorizontal: 20, marginVertical: 25, }} >
        <Text style={styles.description} >Its time for your house to soak in sun. Switch off the lights during daytime and enjoy a bright sunny natural light. Bloom it and upload a picture.</Text>
    </View>
    <View style={{flexDirection: 'row', marginVertical: 50, position: 'relative'}} >
        <TouchableOpacity style={styles.joinbtn} activeOpacity={0.5} >
            <Text style={styles.join}>Bloom</Text>
        </TouchableOpacity>
    </View></View>
  </View>
  )
}

export default Trees

const styles = StyleSheet.create({
    downbtn: {
        height: 25,
        width: 22,
        marginLeft: 5,
        marginRight: 15,
      },
      title: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 20,
        marginVertical: 18,
        letterSpacing: 1
      },
      img: {
        width: '90%',
        height: 220, 
        borderRadius: 15, 
        position: 'relative'
      },
      imgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      titleText: {
        position: 'absolute',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20, 
        
      },
      description: {
          fontSize: 18,
          lineHeight: 28
      },
      joinbtn: {
        backgroundColor: '#2C5F2D',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 20,
        paddingHorizontal: 18,
        position: 'absolute',
        right: 18     
      },
      join: {
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1, 
        color: 'white'
      },
})