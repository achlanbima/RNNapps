import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, AsyncStorage} from 'react-native';
import {Item, Input} from 'native-base'
import axios from 'axios'
import {goToHome} from '../../components/Navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation';

const url = "http://192.168.0.14:3000/api/v1"

export default class Index extends Component{

constructor(props){
  super(props)

  Navigation.events().bindComponent(this);
      
      this.state = {
        loginInfo:[],
        userId:"",
        inputImgUrl:"",
        inputCaption:""
      }
}

  

componentDidAppear(){
  AsyncStorage.getItem('info').then((info) => {
    this.setState({loginInfo: JSON.parse(info)})
    this.setState({userId: this.state.loginInfo.id})
  })
}


  static get options(){
    return{
      
    }
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
       
        <TouchableHighlight onPress={() => {
          Navigation.push(this.props.componentId, {
            component:{
              name: 'AddPost'
            }
          })
        }}>
          <View style={{alignItems:"center"}}>

          <AntDesign name="pluscircleo" size={100} color={"#AAA"}/>
          <Text style={{color:"#AAA", fontSize:25}}>Add Post</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    backgroundColor:"#FFF"
  },

  left:{
    fontSize:18,
    color:"#333"
  },

  right:{
    fontSize:18,
    color:"#00F"
  },
})