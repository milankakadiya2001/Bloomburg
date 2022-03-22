import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import Slider from 'react-native-slider';

const SliderLine = () => {
    const [range, setRange] = useState('50%');
  const [sliding, setSliding] = useState('Inactive');
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontweight: 'bold', marginHorizontal: 10, width: '10%'}}>{range}</Text>
      <Slider
              style={{width: 210, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#2C5F2D"
              maximumTrackTintColor="#E6E6E6"
              thumbTintColor="#2C5F2D"
              value={0.5}
              onValueChange={value => setRange(parseInt(value * 100) + '')}
              onslidingStart={() => setSliding('Sliding')}
              onSlidingComplete={() => setSliding('Inactive')}
            />
    </View>
  )
}

export default SliderLine

const styles = StyleSheet.create({})