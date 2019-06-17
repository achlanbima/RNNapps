import {Navigation} from 'react-native-navigation';

export function registerScreen(){
   Navigation.registerComponent(`Login`, () => require('./Login').default);
   Navigation.registerComponent(`Home`, () => require('./Home').default);
   Navigation.registerComponent(`Profile`, () => require('./Profile').default);
   Navigation.registerComponent(`Search`, () => require('./Search').default);
   Navigation.registerComponent(`Add`, () => require('./Add').default);
   Navigation.registerComponent(`Likes`, () => require('./Likes').default);
}