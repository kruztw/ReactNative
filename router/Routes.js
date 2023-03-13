import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Page1 from './Page1.js'
import Page2 from './Page2.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "page1" component = {Page1} title = "title1" initial = {true} />
         <Scene key = "page2" component = {Page2} title = "title2" />
      </Scene>
   </Router>
)
export default Routes
