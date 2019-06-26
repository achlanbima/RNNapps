import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback, Alert, AsyncStorage, TouchableOpacity} from 'react-native'
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
    Navigation.events().bindComponent(this);
    this.state= {
      postId:"",
      inputCaption:""
    }
    
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
          <View style={styles.headerLeft}>
            <TouchableWithoutFeedback onPress={()=> Navigation.pop(this.props.componentId)}>
              <View>
                <AntDesign name="close" size={25} />
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.textHeader}>Edit Info</Text>
          </View>
          <View>
          <TouchableOpacity onPress={()=> this.update()}>
            <View>
              <AntDesign name="check" size={25} color="lightblue"/>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        <Content>

        <View style={styles.postInfo}>
          <Thumbnail small source={this.props.data.profilePic} />
          <Text style={styles.postTitle}>{this.props.data.username}</Text>

        </View>
        <Image source={this.props.data.pic} style={{width:"100%", height: 350}}></Image>
        <View style={styles.inputContainer}>
          <Item style={{borderBottomColor:"#00F", paddingHorizontal:10}}>
            <Input value={this.state.inputCaption} onChangeText={(value) => this.setState({inputCaption:value})} style={styles.input} placeholder="Write a caption.." placeholderTextColor="#CCC" />
          </Item>
        </View>
        
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
    borderBottomColor: "#CCC",
    borderBottomWidth:1,
    borderTopColor: "#EEE",
    borderTopWidth:1,
    backgroundColor:"#FFF",
    justifyContent:"space-between"
  },
  headerLeft:{
    alignItems:"center",
    flexDirection: 'row',
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