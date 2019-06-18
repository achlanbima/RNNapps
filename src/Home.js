import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Title, Content, Footer, FooterTab, Card, CardItem, Thumbnail, Icon, Item, Input} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {stories, posts} from './Data'

class PostComponent extends Component {

   render() {
      return(
         <View>
            <Card style={{ marginLeft:-1, marginRight: -1}} transparent>
               <CardItem style={{paddingLeft:12, paddingRight:9}}>
               <Left>
                  <Thumbnail small source={this.props.profilePic} />
                  <Body>
                     <Text>{this.props.user}</Text>
                  </Body>
               </Left>
               <Right>
                  <Entypo name='dots-three-vertical' size={20} color="#000"></Entypo>
               </Right>
               </CardItem>
               <CardItem cardBody>
               <Image source={this.props.pics} style={{height: 400, width: null, flex: 1}}/>
               </CardItem >
               <CardItem style={{paddingTop: -20, paddingLeft:12, paddingRight:14}}>
               <Left>
                  <Button transparent>
                     <Entypo name='heart-outlined' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                     <MaterialIcons name='chat-bubble-outline' size={22} color="#000"  style={{transform:[{ rotateY: '180deg'}] }}/>
                  </Button>
                  <Button transparent>
                     <Entypo name='paper-plane' size={25} color="#000" />
                  </Button>
               </Left>
               <Body/>
               <Right>
                  <Button transparent>
                     <FontAwesome name='bookmark-o' size={25} color="#000" />
                  </Button>
               </Right>
               </CardItem>

               <CardItem style={{marginTop: -20,paddingLeft:15, paddingRight:14}}>
                  <Text style={{fontWeight:"bold", color:"#333"}}>{this.props.like} likes</Text>
               </CardItem>
               <CardItem  style={{paddingTop: -20,marginTop:-10, paddingLeft:15, paddingRight:14 }}>
                  
                     <Text style={{fontWeight:"bold", color:"#333"}}>{this.props.user} <Text style={{fontWeight:"normal" , color:"#AAA"}}>{this.props.caps}</Text></Text>
                  
                  
               </CardItem>
               <CardItem style={{paddingTop: -20,marginTop:-10,paddingBottom:0, paddingLeft:10, paddingRight:14}}>
                  <Item style={{borderBottomWidth:0}}>
                     <Thumbnail small source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{width:30, height:30}} />
                     <Input placeholder='Add a comment' style={{fontSize:15, paddingLeft:10}} />
                  </Item>
               </CardItem>
               <CardItem style={{paddingTop:0}}>
                  <Text style={{fontSize:11, color:"#999"}}>16 hours ago</Text>
               </CardItem>

            </Card>
         </View>
      )
   }
}

export default class Home extends Component{

   



   render(){
      return(
         <Container>
            <Header style={{backgroundColor:'#FFF', height:50, paddingLeft:3, paddingRight:3}}>
               <Left style={{}}>
                  <Button transparent>
                  <Entypo name='camera' size={25} color="#000" />
                  </Button>
               </Left>
               <Body style={{marginLeft:-20}}>
                  <Image source={{uri:'https://fontmeme.com/images/instagram-new-logo.png'}} style={{width: 100, height: 30}}/>
               </Body>
               <Right style={{}}>
                  <Button transparent style={{marginRight: -5}}>
                     <Entypo name='tv' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                     <Entypo name='paper-plane' size={25} color="#000" />
                  </Button>
               </Right>
            </Header>

            <Content>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10, paddingLeft:7, marginRight:10, borderBottomWidth:0.5, borderBottomColor:"#EEE"}}>
                  <View style={{marginHorizontal:5}}>
                     <View style={{alignItems:"center" ,position:"relative"}}>
                        <Thumbnail  medium source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />
                        <MaterialIcons name='add-circle' size={20} color="#4297FF" style={{position:"absolute", bottom:-5, right:0}} />
                     </View>
                     <Text>Your Story</Text>
                  </View>
                  {
                     stories.map((story, Index) => 
                     (

                        <View key={Index} style={{marginHorizontal:10}}>
                           <Thumbnail style={{alignSelf:"center", borderWidth:2, borderColor:"#F88", paddingHorizontal:5, paddingVertical:5}} medium source={story.pic} />
                           <Text style={{alignSelf:"center"}} >{story.name}</Text>
                        </View>
                     )
                     )
                  }
               </ScrollView>

               {
                  posts.map((post, index) => 
                  (
                     <PostComponent key={index} index={index} profilePic={post.profilePic} user={post.user} pics={post.pic} like={post.like} caps={post.caption} />
                  ))
               }

               


          


            </Content>

            {/* <BottomBar/> */}
            
         </Container>
      );
   }
}