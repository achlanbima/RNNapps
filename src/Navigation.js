import {Navigation} from 'react-native-navigation';

export const goToHome = () => Navigation.setRoot(
   {
      root:{
         component:{
            name: 'Home'
         }
      }
   }
);

export const goToLogin = () => Navigation.setRoot(
   {
      root:{
         component:{
            name: 'Login'
         }
      }
   }
);

export const goToProfile = () => Navigation.setRoot(
   {
      root:{
         component:{
            name: 'Profile'
         }
      }
   }
);