import {Navigation} from 'react-native-navigation';

export const goToHome = () => {
   Navigation.setRoot({
       root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'Home',
                    passProps: {
                      text: 'This is Home'
                    }
                  }
                },
               ],
                options: {
                  bottomTab: {
                    icon: require('./img/home-outline.png'),
                    selectedIcon: require('./img/home.png'),
                    testID: 'FIRST_TAB_BAR_BUTTON'
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false
                  }
                }
              }
            },
            {
              component: {
                name: 'Search',
                passProps: {
                  text: 'This is tab 3'
                },
                options: {
                  bottomTab: {
                    text: 'Search',
                    icon: require('./img/magnify.png'),
                    testID: 'THIRD_TAB_BAR_BUTTON'
                  },
                  topBar: {
                       drawBehind:true,
                       visible:false
                   }
                }
              }
            },
            {
               component: {
                 name: 'Add',
                 passProps: {
                   text: 'This is tab 3'
                 },
                 options: {
                   bottomTab: {
                     text: 'Post',
                     icon: require('./img/plus-circle-outline.png'),
                     testID: 'FOURTH_TAB_BAR_BUTTON'
                   },topBar: {
                        drawBehind:true,
                        visible:false
                    }
                 }
               }
             },
             {
               component: {
                 name: 'Likes',
                 passProps: {
                   text: 'This is tab 3'
                 },
                 options: {
                   bottomTab: {
                     text: 'Likes',
                     icon: require('./img/heart-outline.png'),
                     testID: 'FIFTH_TAB_BAR_BUTTON'
                   },topBar: {
                        drawBehind:true,
                        visible:false
                    }
                 }
               }
             },
            {
              component: {
                name: 'Profile',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  bottomTab: {
                    text: 'Profile',
                    icon: require('./img/account-outline.png'),
                    selectedIcon: require('./img/account.png'),
                    testID: 'SECOND_TAB_BAR_BUTTON'
                  },topBar: {
                       drawBehind:true,
                       visible:false
                   }
                }
              }
            },
           ],
           options: {
               bottomTabs: {
                 animate: false,
                 titleDisplayMode: 'alwaysHide'
               }
             }
           
          },
        }
    });
}