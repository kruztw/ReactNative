import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Page1 = () => {
   const goToPage2 = () => {
      Actions.page2()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToPage2}>
         <Text>This is page 1 !</Text>
      </TouchableOpacity>
   )
}
export default Page1
