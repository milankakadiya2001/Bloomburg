import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Portal from 'react-native-paper'


const BottomSheet = () => {
    const bottomSheetHeight = Dimensions.get('window').height * 0.5
    const deviceWidth = Dimensions.get('window').width
    // const bottom = useRef(new Animated.value(0)).current;
  return (
    <Portal>

    <Animated.View style={[styles.root, {height: bottomSheetHeight}]} >

    </Animated.View>
    </Portal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})