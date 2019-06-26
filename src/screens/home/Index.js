import React, {Component} from 'react';
import {
   View, 
   Text, 
   Image, 
   ScrollView, 
   StatusBar,
   StyleSheet,
   FlatList,
   AsyncStorage
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {stories, posts} from '../../Data'
import { Navigation } from 'react-native-navigation';
import PostCard from '../../components/PostCard'
import axios from 'axios'
import Loading from '../../components/Loading'

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL
const userPic = ""

export default class Index extends Component{
   

   constructor(props){
      super(props)
      this.state = {
         posts : [],
         userLogin : [],
         loading: false
      }
      Navigation.events().bindComponent(this);
      this.state = {
         text: 'nothing yet'
      };
      this.userLog = []
      
   }
   
   
   
   
   componentWillMount(){
      console.log("Will mount");
      
   }
   
   
   componentDidAppear(){
      this.fetchAll();
      console.log(" Appear..");
   }

   componentDidDisappear() {
      console.log('componentDidDisappear');
    }
   

   async fetchAll(){
      this.setState({loading:true})
      const token = await AsyncStorage.getItem('@token')
      const value = await AsyncStorage.getItem('info');
      this.userLog = JSON.parse(value)
      axios.get(`${url}/posts`, {
         headers:{
            Authorization:token
         }
      })
      .then((res) => {
         this.setState({loading:false})
         this.setState({posts: res.data})
         
         
      })
      
      
   }
   

   

   render(){
      return(
         <Container>
            <Loading loading={this.state.loading} />
            <Header style={styles.header}>
               <Left>
                  <Button transparent>
                     <Image source={require('../../assets/icon/camera.png')} style={styles.camImg} />
                  </Button>
               </Left>
               <Body style={{marginLeft:-20}}>
                  <Image source={{uri:'https://fontmeme.com/images/instagram-new-logo.png'}} style={styles.logo}/>
               </Body>
               <Right style={{}}>
                  <Button transparent style={{marginRight: -10}}>
                     <Image source={require('../../assets/icon/tv.png')} style={styles.topIcon} />
                  </Button>
                  <Button transparent onPress={()=>{
                     Navigation.push(this.props.componentId, {
                        component:{
                           name: "Direct",
                           
                        }
                     }
                     )
                     Navigation.mergeOptions(this.props.componentId, {
                        bottomTabs:{
                           visible: false
                        }
                     })
                     }
                  }>
                     <Image source={require('../../assets/icon/paper-plane.png')} style={styles.topIcon} />
                  </Button>
               </Right>
            </Header>

            <Content>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.story}>
                  <View style={{marginHorizontal:5}}>
                     <View style={{alignItems:"center" ,position:"relative"}}>
                           
                           <Thumbnail medium source={{uri:this.userLog.profile_pic}} />
                        
                        <MaterialIcons name='add-circle' size={20} color="#4297FF" style={{position:"absolute", bottom:-5, right:0}} />
                     </View>
                     <Text>Your Story</Text>
                  </View>
                  {
                     stories.map((story, Index) => 
                     (

                        <View key={Index} style={{marginHorizontal:10}}>
                           <Thumbnail style={styles.storyThumbs} medium source={story.pic} />
                           <Text style={{alignSelf:"center"}} >{story.name}</Text>
                        </View>
                     )
                     )
                  }
               </ScrollView>

               <FlatList
              data={this.state.posts}
              keyExtractor={(item,index) => {return index.toString()}}
              renderItem={({item,index}) => <PostCard index={item.id} profilePic={{uri:item.profile_pic}} user={item.username} userId={item.user_id} pics={{uri:item.post}} like={(item.likes).toString()} caps={item.caption} commentInput={true} userLog={this.userLog.id} userPic={this.userLog.profile_pic} parentComponentId={this.props.componentId} />}
            />
 
            </Content>

            {/* <BottomBar/> */}
            
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   header:{
      backgroundColor:'#FFF', 
      height:50, 
      paddingLeft:3, 
      paddingRight:3
   },
   camImg: { 
      height:22.5, 
      width:25
   },
   logo: {
      width: 100, 
      height: 30
   },
   topIcon: { 
      height:23, 
      width:23
   },
   story: { 
      paddingVertical: 10, 
      paddingLeft:7, 
      marginRight:10, 
      borderBottomWidth:0.5, 
      borderBottomColor:"#EEE"
   },

   // story thumbnail

   storyThumbs: {
      alignSelf:"center", 
      borderWidth:2, 
      borderColor:"#F88", 
      paddingHorizontal:5, 
      paddingVertical:5
   },

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
      paddingRight:14
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