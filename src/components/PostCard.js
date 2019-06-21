import Dialog, { DialogContent } from 'react-native-popup-dialog';
import React, {Component} from 'react';
import {
   View, 
   Text, 
   Image, 
   ScrollView, 
   StatusBar,
   StyleSheet,
   TouchableWithoutFeedback,
   FlatList,
   TouchableOpacity
} from 'react-native';

import {
   Container, 
   Header, 
   Left, 
   Body, 
   Right, 
   Button, 
   Content,  
   Card, CardItem, Thumbnail, Item, Input} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo'

export default class PostCard extends Component {
   
   constructor(props){
      super(props)
      this.state = {
         visible:false,
         user: "null",
         like : null,
         bookmark : null
      }

   }

   menus = ["Report...", "Copy Link", "Turn On Post Notification", "Share Link...", "Unfollow","Mute"]

  render() {
     return(
        <View>


        <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
               this.setState({ visible: false });
            }}
         >
            <DialogContent style={{height:270, width:250, alignItems:"center", paddingHorizontal: 5}}>
               <FlatList
                  data={this.menus}
                  keyExtractor={(item, index) => {return index.toString()}}
                  renderItem={({item, index}) =>
                     <TouchableOpacity key={index} >
                        <View style={{width:"100%", backgroundColor:"#FFF", paddingVertical:10, }}>
                              <Text style={{color:"#000", fontSize:15}}>{item}</Text>
                        </View>
                     </TouchableOpacity> }
               />
            </DialogContent>
         </Dialog>
      
         
           <Card style={styles.posts} transparent>
              <CardItem style={styles.postTop}>
                 <Left>
                    <Thumbnail small source={this.props.profilePic} />
                    <Body>
                       <Text style={styles.blackBold}>{this.props.user}</Text>
                    </Body>
                 </Left>
                 <Right>
                     <TouchableWithoutFeedback  onPress={() => {
                        this.setState({ visible: true });
                     }}>
                        <View style={{paddingLeft:30}}>

                           <Entypo name='dots-three-vertical' size={15} color="#555" ></Entypo>
                        </View>
                     </TouchableWithoutFeedback>
                 </Right>
              </CardItem>
              
              <CardItem cardBody>
              
                 <Image source={this.props.pics} style={styles.postImg}/>
              </CardItem >
              
              <CardItem style={styles.postButton}>
                 <Left>
                    <Button transparent  onPress={(e) => {
                       this.setState({like : (this.state.like == null ? e.target : null)})
                       console.log(this.state.like)
                       console.log(e.target)
                       }}>
                        {this.state.like != null ?
                        <Image source={require('../icon/heart-red.png')} style={styles.leftIcon} /> :
                        <Image source={require('../icon/heart-outline.png')} style={styles.leftIcon} />
                        
                        }
                    </Button>
                    <Button transparent>
                       <Image source={require('../icon/bubble-outline.png')} style={styles.leftIcon} />
                    </Button>
                    <Button transparent>
                       <Image source={require('../icon/paper-plane.png')} style={styles.leftIcon} />
                    </Button>
                 </Left>
                 <Body/>
                 <Right>
                    <Button transparent onPress={(e) => {
                       this.setState({bookmark : (this.state.bookmark == null ? e.target : null)})
                       console.log(this.state.bookmark)
                       console.log(e.target)
                       }}>
                          {this.state.bookmark != null ?
                           <Image source={require('../icon/bookmark.png')} style={[styles.leftIcon, {height:23} ]} /> :
                           <Image source={require('../icon/bookmark-outline.png')} style={[styles.leftIcon, {height:23} ]} /> 
                          }
                    </Button>
                 </Right>
              </CardItem>

              <CardItem style={styles.postLikes}>
                 <Text style={[styles.blackBold, {fontSize:14}]}>{this.props.like} likes</Text>
              </CardItem>
              
              <CardItem  style={styles.postCap}>
                 
                    <Text style={[styles.blackBold, {fontSize:14}]}>{this.props.user} <Text style={{color:"#AAA"}}>{this.props.caps}</Text></Text>
                 
              </CardItem>

              {this.props.commentInput ? (
              <CardItem style={styles.postComment}>
                 <Item style={{borderBottomWidth:0}}>
                    <Thumbnail small source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                    <Input placeholder='Add a comment' style={styles.postCommentInput} />
                 </Item>
              </CardItem>
              ) : null}
              <CardItem style={{paddingTop:0}}>
                 <Text style={styles.postSmall}>16 hours ago</Text>
              </CardItem>

           </Card>
           </View>
     )
  }
}

const styles = StyleSheet.create({
  posts: { 
    marginLeft:-1, 
    marginRight: -1
  },

  postTop: {
      paddingLeft:12, 
      paddingRight:9
  },

  blackBold: {
      fontWeight:"500", 
      color:"#333", 
      fontSize:13
  },
  postImg: {
      height: 400, 
      flex: 1
  },
  postButton: {
      paddingTop: -20, 
      paddingLeft:12, 
      paddingRight:14
  },
  leftIcon:{ 
      height:20, 
      width:20
  },
  postLikes:{
      marginTop: -20,
      paddingLeft:15, 
      paddingRight:14
  },
  postCap:{
      paddingTop: -20,
      marginTop:-10, 
      paddingLeft:15, 
      paddingRight:14 
  },
  postComment:{
      paddingTop: -20,
      marginTop:-10,
      paddingBottom:0, 
      paddingLeft:10, 
      paddingRight:14,
      
  },
  postCommentInput: {
      fontSize:15, 
      paddingLeft:10
  },
  postSmall:{
      fontSize:11, 
      color:"#999"
  }
});