import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'

const Toggle = (props) => {
  return (
    <View style={styles.toggle}>
      <Switch
        trackColor={{true: '#2C5F2D', false: "#D9D2D2"}}
        value={props.isEnabled}
        onValueChange={props.toggleSwitch}
        style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }}
      />
    </View>
  )
}

export default Toggle

const styles = StyleSheet.create({
    
})