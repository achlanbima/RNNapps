import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, AsyncStorage} from 'react-native';
import {Item, Input} from 'native-base'
import axios from 'axios'
import {goToLogin} from '../../components/Navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation';

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL

export default class AddPost extends Component{
  
  constructor(props){
    super(props)
    Navigation.events().bindComponent(this)
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

  async insert(){
    if(this.state.inputImgUrl==""){
      alert('Isi Link Gambar!');
    }else{
      const token = await AsyncStorage.getItem('@token')
      axios.post(`${url}/post`, {
        post: this.state.inputImgUrl,
        userId: this.state.loginInfo.id,
        caption: this.state.inputCaption,
      }, {
        headers:{
          Authorization:token
       },
      })
      .then((res) => {
        if(res.data.status==401){
          alert("Silahkan Login Kembali")
          goToLogin()
       }else{
          console.log(res);
       
          console.log(res);
            
          alert('success')
          this.setState({inputImgUrl:""})
          this.setState({inputCaption:""})
       }  
    })
      .catch((res) => console.log(res))
    }

  }


  render(){
    return(
      <View>
        {/* Start Header */}
        <View style={styles.header}>
            <Text style={styles.left}>New Post</Text>
            <TouchableHighlight onPress={() => this.insert()}>
              <Text style={styles.right}>Share</Text>
            </TouchableHighlight>
        </View>
        {/* End Header */}

        {/* Start Body */}
        <View>
          <Item>
            <Input placeholder="Image Url's" value={this.state.inputImgUrl} onChangeText={(value)=>this.setState({inputImgUrl:value})} />
          </Item>
          <Item>
            <Input multiline={true} placeholder="Write a Caption.. " value={this.state.inputCaption} onChangeText={(value)=>this.setState({inputCaption:value})}/>
          </Item>
        </View>
        {/* End Body */}
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