import {Navigation} from 'react-native-navigation';

export const goToHome = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: "#FFF",
      style: 'dark',
    }
  }); 
  
  Navigation.setRoot({
       root: {
          bottomTabs: {
            children: [
              {
              stack: {
                children: [{
                  component: {
                    name: 'Home'
                  },
                },
               ],
                options: {
                  bottomTab: {
                    icon: require('../icon/home-outline.png'),
                    selectedIcon: require('../icon/home.png'),
                    selectedIconColor: "#F00",
                    
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false,
                      leftButtons: {
                        icon: require('../icon/camera.png'),
                        id: 'buttonOne',
                        
                      },
                  },
                  
                },
              },
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
                    icon: require('../icon/magnify.png'),
                    testID: 'THIRD_TAB_BAR_BUTTON'
                  },
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
                     icon: require('../icon/plus-square-outline.png'),
                     testID: 'FOURTH_TAB_BAR_BUTTON'
                   },
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
                     icon: require('../icon/heart-outline.png'),
                     testID: 'FIFTH_TAB_BAR_BUTTON'
                   },
                 }
               }
             },

             {
              sideMenu:{
                center:{
                  stack: {
                    children: [{
                      component: {
                        name: 'Profile'
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: require('../icon/person-outline.png'),
                      selectedIcon: require('../icon/home.png'),
                      selectedIconColor: "#F00",
                      
                      
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false,
                      leftButtons: {
                        icon: require('../icon/camera.png'),
                        id: 'buttonOne',
                        
                      },
                    }
                  },
                }
              },
                      right:{
                        component:{
                          name:"myApp",
                          id:"right-menu"
                        }
                      }
                },
              },
              
              // {
                //   component: {
                  //     name: 'Profile',
                  //     passProps: {
            //       text: 'This is tab 2'
            //     },
            //     options: {
            //       bottomTab: {
            //         text: 'Profile',
            //         icon: require('../icon/person-outline.png'),
            //         selectedIcon: require('../icon/person.png'),
            //         testID: 'SECOND_TAB_BAR_BUTTON',
            //         selectedIconColor: "#F00"
            //       },
            //     }
            //   }
            // },
           ],
           options: {
               bottomTabs: {
                 animate: false,
                 titleDisplayMode: 'alwaysHide',
               }
             }
           
          },
        }
    });
}