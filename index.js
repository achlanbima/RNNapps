/**
 * @format
 */

 

import { Navigation } from "react-native-navigation";
import App from './App';
// import App2 from './App2';
import {registerScreen} from './src/Router'
import {YellowBox, AsyncStorage} from 'react-native'
import {goToHome, goToLogin} from './src/components/Navigation'

YellowBox.ignoreWarnings(["Require cycle:"]);


registerScreen();

Navigation.registerComponent(`myApp`, () => App);
// Navigation.registerComponent(`app2`, () => App2);

_getStore = async () => {
  const token = await AsyncStorage.getItem('@token')
  const info = await AsyncStorage.getItem('info')
  console.log(token);
  console.log(info);
  
  if(token == null || info == null){
    goToLogin()
  }else{
    goToHome()
  }
}

Navigation.events().registerAppLaunchedListener(() => {
  

  _getStore()

});