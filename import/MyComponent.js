import React, { Component } from 'react'
import { Text, View } from 'react-native'

const ShowText = (props) => {
   return (
      <View>
         <Text onPress = {props.changeText}>
            {props.m}
         </Text>
      </View>
   )
}
export default ShowText
