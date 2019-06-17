/**
 * @format
 */

import { Navigation } from "react-native-navigation";
// import App from './App';
// import App2 from './App2';
import {registerScreen} from './src/ScreenList'
// import {Screen2} from './src/test/Screen'

// Screen2();

registerScreen();

// Navigation.registerComponent(`myApp`, () => App);
// Navigation.registerComponent(`app2`, () => App2);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
               component: {
                  name:"Login"
               }
             
    }
  });
});