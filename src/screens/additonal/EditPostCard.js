import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback, Alert, AsyncStorage} from 'react-native'
import {Thumbnail, Item, Input, Content, Container} from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Navigation} from 'react-native-navigation'
import axios from 'axios'

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL

export default class EditPostCard extends Component{

  static get options(){
    return{
      
      bottomTabs:{
        drawBehind:true,
        visible:false
      }
    }
  }

  constructor(props){
    super(props)
    this.state= {
      postId:"",
      inputCaption:""
    }
    Navigation.events().bindComponent(this);
    
  }

  componentDidAppear(){
    this.setState({postId:this.props.data.id})
    this.setState({inputCaption:this.props.data.caption})
    
  }

  async delete(){
    
    const token = await AsyncStorage.getItem('@token')
    Alert.alert("Hapus data","Anda yakin?", [
      {text: 'tidak'},
      {text: 'ya', onPress: () => {
        axios.delete(`${url}/post/${this.state.postId}`, {
          headers:{
            Authorization:token
         }
        })
          .then((res)=>{
            alert('Post Berhasil dihapus')
            Navigation.pop(this.props.componentId)
          })
      }},
      
    ],)
  }

  async update(){
    
    const token = await AsyncStorage.getItem('@token')
    axios.patch(`${url}/post/${this.state.postId}`,{
      post: this.state.inputImgUrl,
      userId: this.state.loginInfo.id,
      caption: this.state.inputCaption,
    },
     {
      headers:{
        Authorization:token
      } 
    })
      .then((res)=>{
        alert('Post Berhasil diubah')
        Navigation.pop(this.props.componentId)
      })
     
  }
  
  render(){
    return(
      <Container>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={()=> Navigation.pop(this.props.componentId)}>
            <View>
              <AntDesign name="close" size={25} />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.textHeader}>Edit Info</Text>
        </View>
        <Content>

        <View style={styles.postInfo}>
          <Thumbnail small source={this.props.data.profilePic} />
          <Text style={styles.postTitle}>{this.props.data.username}</Text>

        </View>
        <Image source={this.props.data.pic} style={{width:"100%", height: 350}}></Image>
        <View style={styles.inputContainer}>
          <Item style={{borderBottomColor:"#00F", paddingHorizontal:10}}>
            <Input value={this.state.inputCaption} onChange={(value) => this.setState({inputCaption:value})} style={styles.input} placeholder="Write a caption.." placeholderTextColor="#CCC" />
          </Item>
        </View>
        <View style={styles.button}>
          <TouchableWithoutFeedback onPress={()=> this.delete()}>
            <View style={styles.btnDelete}>
              <Text>Delete</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> this.update()}>
            <View style={styles.btnSave}>
              <Text>Save</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text>{this.state.postId}</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    paddingVertical:20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: "#CCC",
    borderBottomWidth:1,
    borderTopColor: "#EEE",
    borderTopWidth:1,
    backgroundColor:"#FFF"
  },
  textHeader:{
    marginLeft:10,
    fontSize:20,
    fontWeight: '300',
    color:"#555"
  },
  postInfo:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:15,
    paddingLeft: 10,
    backgroundColor:"#FFF"
  },

  postTitle:{
    marginLeft:10,
    fontSize:15,
    color:"#000"
  },

  inputContainer:{
    paddingHorizontal:10,
    marginTop: 5,
  },

  button:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal: 10,
    paddingVertical:20
  },

  btnDelete:{
    backgroundColor:"#F22",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  btnSave:{
    backgroundColor:"#CCC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

})