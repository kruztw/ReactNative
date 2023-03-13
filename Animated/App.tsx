import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

class Animations extends Component {
   componentWillMount = () => {
      this.animatedWidth = new Animated.Value(100)
      this.animatedHeight = new Animated.Value(100)
   }
   animatedBox = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 200,
         duration: 10000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 500,
         duration: 10000
      }).start()
   }
   render() {
      const shape = { backgroundColor: 'green', width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {shape}/>
         </TouchableOpacity>
      )
   }
}
export default Animations

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
})
