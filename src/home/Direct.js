import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Navigation } from 'react-native-navigation';

export default class Direct extends Component{

  static get options(){
    return{
      topBar:{
        title:{
          text:"Direct"
        },
        drawBehind:false,
        visible:true
      },
      bottomTab:{
        drawBehind:true,
        visible:false
      }
    }
  }

  render(){
    return(
      <View>
        <Text>Message Friend with Direct</Text>
      </View>
    )
  }
}