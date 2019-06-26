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
                  id:"navHome",
                children: [{
                  component: {
                    name: 'Home'
                  },
                },
               ],
                options: {
                  bottomTab: {
                    icon: require('../assets/icon/home-outline.png'),
                    selectedIcon: require('../assets/icon/home.png'),
                    selectedIconColor: "#000",
                    iconColor: "#888"
                    
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false,
                      
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
                    icon: require('../assets/icon/magnify.png'),
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    selectedIconColor: "#000",
                    iconColor: "#888"
                  },
                }
              }
            },
            {
              stack: {
                children: [{
                  component: {
                    name: 'AddPost'
                  },
                },
               ],
                options: {
                  bottomTab: {
                    text: 'Post',
                    icon: require('../assets/icon/plus-square-outline.png'),
                    testID: 'FOURTH_TAB_BAR_BUTTON',
                    selectedIconColor: "#000",
                    iconColor: "#888"
                    
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false,
                      
                  },
                  
                },
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
                     icon: require('../assets/icon/heart-outline.png'),
                     testID: 'FIFTH_TAB_BAR_BUTTON',
                     selectedIconColor: "#000",
                    iconColor: "#888"
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
                      icon: require('../assets/icon/person-outline.png'),
                      selectedIcon: require('../assets/icon/home.png'),
                      selectedIconColor: "#000",
                    iconColor: "#888"
                      
                  },
                  topBar: {
                      drawBehind:true,
                      visible:false,
                      leftButtons: {
                        icon: require('../assets/icon/camera.png'),
                        id: 'buttonOne',
                        
                      },
                    }
                  },
                }
              },
                      right:{
                        component:{
                          name:"ProfileMenu",
                          id:"right-menu"
                        }
                      }
                },
              },
              
            
           ],
           options: {
               bottomTabs: {
                 animate: false,
                 titleDisplayMode: 'alwaysHide',
               },
               topBar:{
                 animate:false
               }
             }
           
          },
        }
    });
}

export const goToLogin = () => {
  Navigation.setRoot({
    root: {
      stack:{
        children:[{
          component: {
            name:"Login"
          }
        }],
        options:{
          topBar:{
            drawBehind:true,
            visible:false,
            id:"top-bar"
          }
      
        }      
      }
    }
  });

  Navigation.setDefaultOptions({
    animations: {
      push: {
        enabled: 'false'
      },
      pop:{
        enabled: 'false'
      }
    }
  });
}