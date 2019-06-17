import {Navigation} from 'react-native-navigation';

export function Screen2(){
   Navigation.registerComponent('start', () => require('./Index').default);
   Navigation.registerComponent('page1', () => require('./Page1').default);
   Navigation.registerComponent('page2', () => require('./Page2').default);
}
