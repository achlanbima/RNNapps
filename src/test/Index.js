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
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  icon: require('../icon/magnify.png'),
                  selectedIcon: require('../icon/account.png')
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
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  icon: require('../icon/magnify.png')
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
            <View style={{flex:1}}>
              <View style={{flex:1, backgroundColor:"#CCC"}}><Text>A</Text></View>
              <View style={{flex:6, backgroundColor:"#DDD"}}><Text>A</Text></View>
              <View style={{flex:1, backgroundColor:"#EEE"}}><Text>A</Text></View>
              <View style={{flex:1, backgroundColor:"#FFF"}}><Text>A</Text></View>
              <View style={{flex:1, backgroundColor:"#EEE"}}><Text>A</Text></View>
              <View style={{flex:1, backgroundColor:"#DDD"}}><Text>A</Text></View>
              <View style={{flex:1, backgroundColor:"#CCC"}}><Text>A</Text></View>
            </View>
      )
   }
}