import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback, Dimensions, Modal} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import icons from '../../constants/icons';
import { VISITOR_KEYS } from '@babel/types';


const ModelPoup = ({visible, children}) => {
    const [showModel, setShowModel] = React.useState(visible);
    React.useEffect(() => {
      toggleModel();
    }, [visible]);
    const toggleModel = () => {
      if (visible) {
        setShowModel(true);
      } else {
        setShowModel(false);
      }
    };
    return (
      <Modal transparent visible={showModel}>
        <View style={styles.modalBackGround}>
          <View>{children}</View>
        </View>
      </Modal>
    );
  };
  const {height, width} = Dimensions.get('window');
const OfferCard = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);
    useEffect(() => {
        navigation.setOptions({
          headerStyle: {backgroundColor: '#FFC901',
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderWidth: 5,
            borderColor: 'black',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          title: 'My Rewards',
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
    <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.titleContainer} >
            <Text style={styles.title} >Apparels</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
            <View style={styles.row}>
          <TouchableOpacity  onPress={() => setVisible(true)}
            style={[styles.card, {backgroundColor: '#C4F8C5'}]}
            >
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy and Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}  style={[styles.card, {backgroundColor: '#D6D6FF'}]}>
            <Image source={icons.tommy} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={() => setVisible(true)} style={[styles.card, {backgroundColor: '#FFE4E4'}]}>
            <Image source={icons.levis} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Levi’s</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)} style={styles.card}>
            <Image
              source={icons.zara}
              style={[styles.cardimg, {width: 90, height: 30}]}
            />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row} >
          <TouchableOpacity onPress={() => setVisible(true)} style={[styles.card, {backgroundColor: '#D6D6FF'}]}>
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)} style={[styles.card, {backgroundColor: '#C4F8C5'}]}>
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={() => setVisible(true)} style={styles.card}>
            <Image
              source={icons.zara}
              style={[styles.cardimg, {width: 90, height: 30}]}
            />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setVisible(true)} style={[styles.card, {backgroundColor: '#D6D6FF'}]}>
            <Image source={icons.tommy} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <ModelPoup visible={visible}>
            <View style={[styles.modelcontainer]}>
              <View style={styles.modelheader}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image source={icons.x} style={{height: 25, width: 25}} />
                </TouchableOpacity>
              </View>
              <View
                style={styles.topCard}>
                <Text
                  style={styles.offerText}>
                  ₹1000 Off
                </Text>
                <Text style={{fontSize: 20, fontWeight: '400'}}>
                  On TOMMY HILFIGER PERFUME
                </Text>
              </View>
              <View
                style={styles.reddemCode}>
                <Text style={{fontSize: 16, padding: 15, paddingLeft: 25}}>
                  HRTH2345..
                </Text>
                <TouchableOpacity>
                  <Image
                    source={icons.copy}
                    style={styles.copyImg}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomCard}>
              <View style={{position: 'relative', alignItems: 'center'}}>
                <View style={styles.topLine}></View>
              </View>
              <View
                style={styles.tomyContainer}>
                <Image source={icons.tomy} style={styles.tomyImg} />
                <Text style={styles.tomyText}>TOMMY HILFIGER</Text>
              </View>
              <Text style={styles.description}>
                Congrats! ₹1000 Off On TOMMY HILFIGER Perfumes
              </Text>
              <Text style={styles.copyCode}>Copy code and use at checout</Text>
              <View
                style={styles.mainRedeem}>
                <Text style={{fontSize: 16, padding: 15, paddingLeft: 25}}>
                  HRTH2345000369VMK
                </Text>
                <TouchableOpacity style={styles.copyBtn}>
                  <Text>Copy</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.redeemBtn}>
                <Text style={styles.redeemText} >Redeem Now</Text>
              </TouchableOpacity>
            </View>
          </ModelPoup>
          </TouchableWithoutFeedback>
        </View>
    </ScrollView>
  )
}

export default OfferCard

const styles = StyleSheet.create({
    downbtn: {
        height: 25,
        width: 22,
        marginLeft: 5,
        marginRight: 15,
      },
      row: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly'
      },
      card: {
        height: 170,
        width: 145,
        backgroundColor: '#FFE68B',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 17,
        borderRadius: 18,
        marginVertical: 10
      },
      cardimg: {
        width: 95,
        height: 60,
        justifyContent: 'space-around',
        marginHorizontal: 10,
      },
      cardtext: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 13,
      },
      titleContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
          marginTop: 20
      },
      title: {
          fontWeight: '400',
          fontSize: 22
      },
      modalBackGround: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
      },
      modelcontainer: {
        width: '75%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 20,
        marginTop: 200,
        marginHorizontal: 45,
        elevation: 20,
      },
      modelheader: {
        position: 'absolute',
        top: -90,
        right: -25,
      },
      topCard: {
        justifyContent: 'center',
        marginHorizontal: 25,
        width: '70%',
      },
      offerText: {
        fontSize: 25,
        fontWeight: '700',
      },
      reddemCode: {
        backgroundColor: '#EBEBEB',
        borderRadius: 20,
        marginHorizontal: 25,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      copyImg: {
        tintColor: 'black',
        height: 32,
        width: 32,
        left: 45,
      },
      bottomCard: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 20,
        top: height / 1.7,
        position: 'absolute',
      },
      topLine: {
        height: 4,
        width: 50,
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        top: -20,
      },
      tomyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      tomyImg: {
        height: 55,
        width: 55,
        marginLeft: 20,
        marginHorizontal: 10,
      },
      tomyText: {
        fontSize: 20,
        fontWeight: '500',
      },
      description: {
        fontSize: 18,
        marginHorizontal: 25,
        marginVertical: 15,
        fontWeight: '500'
      },
      mainRedeem: {
        backgroundColor: '#EBEBEB',
        borderRadius: 20,
        marginHorizontal: 25,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      copyCode: {
        fontSize: 16,
        marginHorizontal: 25,
      },
      copyBtn: {
        backgroundColor: '#FFC901',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 18,
      },
      redeemBtn: {
        marginHorizontal: 25,
        alignItems: 'center',
        backgroundColor: '#FFC901',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20
      },
      redeemText: {
        fontSize: 17,
        fontWeight: '500'
      }
})