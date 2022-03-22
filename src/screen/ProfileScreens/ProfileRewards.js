import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import icons from '../../constants/icons';

const ProfileRewards = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy and Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
          <View style={styles.card}>
            <Image source={icons.tommy} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
          <View style={styles.card}>
            <Image source={icons.levis} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Levi’s</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
          <View style={styles.card}>
            <Image source={icons.zara} style={[styles.cardimg, {width: 90, height: 30}]} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
          <View style={styles.card}>
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
          <View style={styles.card}>
            <Image source={icons.paytm} style={styles.cardimg} />
            <Text style={styles.cardtext}>Pay on Tommy Hilfiger</Text>
            <Text style={styles.cardtext}>Get up to ₹1000 Cashback</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileRewards;

const styles = StyleSheet.create({
  card: {
    height: 170,
    width: 145,
    backgroundColor: '#FFE68B',
    marginLeft: 18,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 17,
    borderRadius: 18
  },
  cardimg: {
    // position: 'absolute'
    width: 80,
    height: 60,
    justifyContent: 'space-around',
    marginHorizontal: 15
  },
  cardtext: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 13
  },
});
