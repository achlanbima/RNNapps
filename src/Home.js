import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Title, Content, Footer, FooterTab, Card, CardItem, Thumbnail, Icon, Item, Input} from 'native-base';
import {BottomBar} from './BottomBar'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component{

   posts = [
      {
         user:"Si Gondrong",
         profilePic: { 
            uri:"https://randomuser.me/api/portraits/men/2.jpg"
         },
         pic: { uri: "http://www.kerjanya.net/images/food/DaunSingkong.jpg"},
         caption: "Pesta Mantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaap",
         like: 2
      },
      {
         user:"H. Albert",
         profilePic: { uri: "https://randomuser.me/api/portraits/men/82.jpg"},
         pic: { uri:"https://cdn2.tstatic.net/palembang/foto/bank/images/sendal-jepit-jadi-mahar-menikah.jpg"},
         caption: "Siapa yang menyembunyikan sendal saya?!",
         like: 40
      },
      {
         user:"Y r U ge",
         profilePic: { uri: "https://randomuser.me/api/portraits/men/83.jpg"},
         pic: { uri:"https://previews.123rf.com/images/okolaa/okolaa1711/okolaa171100019/89227499-plain-cooked-spaghetti-pasta-in-white-bowl-closeup-background-.jpg"},
         caption: "Pasta",
         like: 20
      }
   ];

   stories = [
      {
      pic: {
         uri:"https://randomuser.me/api/portraits/men/2.jpg"
      },
      name: "Si Gondrong"
      },
      {
      pic: {
         uri:"https://randomuser.me/api/portraits/men/82.jpg"
      },
      name: "H. Albert"
      },
      {
      pic: {
         uri:"https://randomuser.me/api/portraits/men/83.jpg"
      },
      name: "Y r U ge"
      },
      {
      pic: {
         uri:"https://randomuser.me/api/portraits/men/69.jpg"
      },
      name: "T-Series"
      },
   ]

   render(){
      return(
         <Container>
            <Header style={{backgroundColor:'#FFF', height:50}}>
               <Left style={{marginLeft:-5}}>
                  <Button transparent>
                  <Entypo name='camera' size={25} color="#000" />
                  </Button>
               </Left>
               <Body style={{marginLeft:-20}}>
                  <Image source={{uri:'https://fontmeme.com/images/instagram-new-logo.png'}} style={{width: 100, height: 30}}/>
               </Body>
               <Right style={{marginRight: -5}}>
                  <Button transparent style={{marginRight: -5}}>
                     <Entypo name='tv' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                     <Entypo name='paper-plane' size={25} color="#000" />
                  </Button>
               </Right>
            </Header>

            <Content>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10, paddingHorizontal:10}}>
                  <View style={{marginHorizontal:5}}>
                     <View style={{alignItems:"center" ,position:"relative"}}>
                        <Thumbnail  medium source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />
                        <MaterialIcons name='add-circle' size={20} color="#4297FF" style={{position:"absolute", bottom:-5, right:0}} />
                     </View>
                     <Text>Your Story</Text>
                  </View>
                  {
                     this.stories.map((story, Index) => 
                     (

                        <View key={Index} style={{marginHorizontal:10}}>
                           <Thumbnail style={{alignSelf:"center"}} medium source={story.pic} />
                           <Text style={{alignSelf:"center"}} >{story.name}</Text>
                        </View>
                     )
                     )
                  }
               </ScrollView>

               {
                  this.posts.map((post, index) => 
                  (
                     <Card key={index}>
                        <CardItem>
                        <Left>
                           <Thumbnail small source={post.profilePic} />
                           <Body>
                              <Text>{post.user}</Text>
                           </Body>
                        </Left>
                        <Right>
                           <Entypo name='dots-three-vertical' size={20} color="#000"></Entypo>
                        </Right>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={post.pic} style={{height: 400, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{paddingTop: -20,}}>
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

                        <CardItem style={{marginTop: -20,}}>
                           <Text style={{fontWeight:"bold", color:"#333"}}>{post.like} likes</Text>
                        </CardItem>
                        <CardItem  style={{paddingTop: -20,marginTop:-10}}>
                           
                              <Text style={{fontWeight:"bold", color:"#333"}}>{post.user} <Text style={{fontWeight:"normal" , color:"#AAA"}}>{post.caption}</Text></Text>
                           
                           
                        </CardItem>
                        <CardItem style={{paddingTop: -20,marginTop:-10,paddingBottom:0}}>
                           <Item style={{borderBottomWidth:0}}>
                              <Thumbnail small source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{width:30, height:30}} />
                              <Input placeholder='Add a comment' style={{fontSize:15, paddingLeft:10}} />
                           </Item>
                        </CardItem>
                        <CardItem style={{paddingTop:0}}>
                           <Text style={{fontSize:11, color:"#999"}}>16 hours ago</Text>
                        </CardItem>

                     </Card>
                  ))
               }

               


          


            </Content>

            <BottomBar/>
            
         </Container>
      );
   }
}