/**
 * @format
 */

 

import { Navigation } from "react-native-navigation";
import App from './App';
// import App2 from './App2';
import {registerScreen} from './src/ScreenList'
import {Screen2} from './src/test/Screen'
import {YellowBox} from 'react-native'

YellowBox.ignoreWarnings(["Require cycle:"]);

Screen2();

registerScreen();

Navigation.registerComponent(`myApp`, () => App);
// Navigation.registerComponent(`app2`, () => App2);

Navigation.events().registerAppLaunchedListener(() => {
  
  
  Navigation.setRoot({
    root: {
      stack:{
        children:[{
          component: {
            name:"Login"
          }
        }],
        options:{
          topBar:{
            drawBehind:true,
            visible:false,
            id:"top-bar"
          }
      
        }      
      }
    }
  });

  Navigation.setDefaultOptions({
    animations: {
      push: {
        enabled: 'false'
      },
      pop:{
        enabled: 'false'
      }
    }
  });

});