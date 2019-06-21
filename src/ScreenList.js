import {Navigation} from 'react-native-navigation';

export function registerScreen(){
   Navigation.registerComponent(`Login`, () => require('./login/Index').default);
   Navigation.registerComponent(`Help`, () => require('./login/Help').default);
   Navigation.registerComponent(`Home`, () => require('./home/Index').default);
   Navigation.registerComponent(`Profile`, () => require('./profile/Index').default);
   Navigation.registerComponent(`Search`, () => require('./search/Index').default);
   Navigation.registerComponent(`Add`, () => require('./add/Index').default);
   Navigation.registerComponent(`Likes`, () => require('./likes/Index').default);
}