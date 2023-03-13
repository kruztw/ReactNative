import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShowText from './MyComponent'

export default class App extends React.Component {
   state = {
      message: 'a\na\na\na\na\na\n'
   }
   foo = () => {
      this.setState({ message: 'b\nb\nb\nb\nb\n' })
   }
   render() {
      return (
         <View>
            <ShowText m = {this.state.message} changeText = {this.foo}/>
         </View>
      );
   }
}
