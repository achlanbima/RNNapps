import {Navigation} from 'react-native-navigation';

export function registerScreen(){
   Navigation.registerComponent(`Login`, () => require('./Login').default);
   Navigation.registerComponent(`Home`, () => require('./Home').default);
   Navigation.registerComponent(`Profile`, () => require('./Profile').default);
}