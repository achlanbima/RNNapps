import {Navigation} from 'react-native-navigation';

export function registerScreen(){
   Navigation.registerComponent(`Login`, () => require('./screens/login/Index').default);
   Navigation.registerComponent(`Help`, () => require('./screens/login/Help').default);
   Navigation.registerComponent(`SignUp`, () => require('./screens/login/SignUp').default);
   Navigation.registerComponent(`Home`, () => require('./screens/home/Index').default);
   Navigation.registerComponent(`Direct`, () => require('./screens/home/Direct').default);
   Navigation.registerComponent(`Profile`, () => require('./screens/profile/Index').default);
   Navigation.registerComponent(`ProfileMenu`, () => require('./screens/profile/ProfileMenu').default);
   Navigation.registerComponent(`Search`, () => require('./screens/search/Index').default);
   Navigation.registerComponent(`Add`, () => require('./screens/add/Index').default);
   Navigation.registerComponent(`AddPost`, () => require('./screens/add/AddPost').default);
   Navigation.registerComponent(`Likes`, () => require('./screens/likes/Index').default);
   
   Navigation.registerComponent(`Edit`, () => require('./screens/additonal/EditPostCard').default);


}