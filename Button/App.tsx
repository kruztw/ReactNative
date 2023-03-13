import React from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'

const Home = (props) => {
  
  return (
     <View style = {styles.container}>
        <TouchableNativeFeedback>
           <Text style = {styles.text} onPress = {this.btn}>
              Button
           </Text>
        </TouchableNativeFeedback>
     </View>
  )
}
export default Home

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})
