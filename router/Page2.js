import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Page2 = () => {
   const goToPage1 = () => {
      Actions.page1()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToPage1}>
         <Text>This is page 2 !</Text>
      </TouchableOpacity>
   )
}
export default Page2
