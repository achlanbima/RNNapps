import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';

goHome = () => {
   Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [{
                component: {
                  name: 'page1',
                  passProps: {
                    text: 'This is tab 1'
                  }
                }
              }],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          },
          {
            component: {
              name: 'page2',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          }]
        }
      }
    });
}

export default class Index extends Component{
   render(){
      return(
         <View>
            <Text>This is Index</Text>
            <Button onPress={goHome} title="Go Home!"/>
         </View>
      )
   }
}