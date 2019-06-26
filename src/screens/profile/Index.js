import React, {Component} from 'react';
import {View, Text, Image,  TouchableHighlight, StyleSheet, AsyncStorage, FlatList} from 'react-native';
import {
   Container, 
   Header, 
   Left, 
   Right, 
   Button, 
   Icon, 
   Content, 
   Card, 
   CardItem, 
   Thumbnail,
   Tabs,
   TabHeading,
   Tab, 
   Grid, 
   Row, 
   Col
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Navigation} from 'react-native-navigation'
import axios from 'axios'
import PostCard from '../../components/PostCard'

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL



import ProfileContent from './ProfileContent'

export default class Index extends Component{ 

   

   
   constructor(props){
      super(props)
      this.state = {
         selectedTab : 0,
         posts : [],
         loginInfo: [],
         id:""
      }
      Navigation.events().bindComponent(this);
      
   }
   
   componentDidAppear(){
      this.fetchData()
      }

      async fetchData(){
         let loginInfo = await AsyncStorage.getItem('info')
         loginInfo = JSON.parse(loginInfo)
         this.setState({loginInfo:loginInfo})
         console.log("loginInfo profile");
         console.log(loginInfo.id);
         
         const token = await AsyncStorage.getItem('@token')
         axios.get(`${url}/posts/${loginInfo.id}`, {
           headers:{
              Authorization:token
           }
         })
         .then((res) => {
            console.log(res)
            
           this.setState({posts:res.data})
         })
         .catch(err => console.log(err))
       }
     
     
       changeTab(index){
         this.setState({selectedTab : index})  
         console.log(index)
       }
      
      
      render(){
         return(
            <Container>
            <Header style={styles.header} has>
               <Left style={{marginLeft:-5, flex:2}}>
                  <Button  transparent onPress={()=>Navigation.push(this.props.componentId, {
                     component:{
                        name:"myApp"
                     }
                  })}>
                     
                        <Text  style={styles.headerTitle}>{this.state.loginInfo.username}</Text>
                        <Ionicons name='ios-arrow-down' size={15} color="#000" />
                     
                  </Button>
               </Left>
               <Right style={{marginRight: -5}}>
                  <Button transparent style={{marginRight: -15,}}>
                     <MaterialIcons name='history' size={30} color="#000" />
                  </Button>
                  <Button transparent style={{}} onPress={()=>Navigation.mergeOptions('right-menu', {
                     sideMenu:{
                        right:{
                           visible:true
                        }
                     }
                  })}>
                     <MaterialIcons name='menu' size={30} color="#000" style={{paddingHorizontal:-50,marginRight:-5}} />
                  </Button>
               </Right>
            </Header>

            <Content>
               <View>

               <Card transparent>
                  <CardItem>
                  <Left>
                     <View style={{ marginVertical:7, marginHorizontal:7}}>
                        <Thumbnail large source={{uri: this.state.loginInfo.profile_pic}} />
                        <MaterialIcons name='add-circle' size={25} color="#4297FF" style={styles.miniPlus} />
                     </View>
                  </Left>
                  <Right style={{BackgroundColor:"blue"}}>
                     <Grid style={{width:220, }}>
                        <Row>
                           <Col style={styles.center}>
                              <Text style={styles.blackBold}>0</Text>
                              <Text>Posts</Text>
                           </Col>
                           <Col style={styles.center}>
                              <Text style={styles.blackBold}>0</Text>
                              <Text>Followers</Text>
                           </Col>
                           <Col style={styles.center}>
                              <Text style={styles.blackBold}>0</Text>
                              <Text>Following</Text>
                           </Col>
                        </Row>
                        <Row style={{}}>
                           <TouchableHighlight style={styles.btnEdit}>
                              <Text style={[styles.blackBold, {fontSize:13}]}>Edit Profile</Text>
                           </TouchableHighlight>
                        </Row>
                     </Grid>
                  </Right>               
                  </CardItem>
                  <CardItem>
                     <Text style={{fontWeight:"bold"}}>{this.state.loginInfo.username}</Text>
                  </CardItem>
               </Card>
               </View>


               <Tabs tabBarBackgroundColor="#FFF" locked onChangeTab={(index)=> this.changeTab(index.i)} >
                  <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><MaterialIcons name='grid-on' size={28} color={ this.state.selectedTab == 0 ? "#4297FF" : "#AAA" } style={{flexDirection:"row", flexWrap:"wrap"}}/></TabHeading>} >
                     <View style={{flexDirection:"row", flexWrap:"wrap"}}>

                     <FlatList
                        
                        data={this.state.posts}
                        keyExtractor={(item,index) => index}
                        renderItem={({item, index}) =><TouchableHighlight key={item.id}  style={{width:"33.33%", borderWidth:0.5, borderColor:"#FFF"}}>
                        <Image source={{uri:item.post}} style={{ width:"100%", height:130 }} />
                     </TouchableHighlight>}
                     numColumns={3}
                     />
                     </View>
                     
                  </Tab>
                  <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><AntDesign name='laptop' size={28} color={ this.state.selectedTab == 1 ? "#4297FF" : "#AAA" }/></TabHeading>}>
                     
                     <FlatList
                     data={this.state.posts}
                     keyExtractor={(item,index) => {return index.toString()}}
                     renderItem={({item,index}) => <PostCard index={item.id} profilePic={{uri:item.profile_pic}} user={item.username}  userId={item.user_id} pics={{uri:item.post}} like={(item.likes).toString()} caps={item.caption} commentInput={false} userLog={this.state.loginInfo.id} parentComponentId={this.props.componentId}/>}
                     />
                     {/* { personalPosts.map((post, index) => (
                           <PostCard key={index} index={index} profilePic={post.profilePic} user={post.user} pics={post.pic} like={post.like} caps={post.caption} commentInput={false} />
                           ))} */}
                  </Tab>
                  <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><MaterialIcons name='person-pin' size={28} color={ this.state.selectedTab == 2 ? "#4297FF" : "#AAA" }/></TabHeading>}>
              <Text>SSSS</Text>
          </Tab>
        </Tabs>
               
                  

               </Content>
               
               </Container>
               
               
            
      );
   }
}

const styles = StyleSheet.create({
   header:{
      backgroundColor:'#FFF', 
      height:50
   },
   headerTitle:{
      fontSize:17,
      minWidth: 50, 
      marginRight:20,
      paddingRight:10, 
      color:"#000",
   },
   miniPlus:{
      position:"absolute", 
      bottom:-5, 
      right:-5
   },
   center:{
      alignItems:"center", 
      justifyContent:"center" 
   },
   blackBold: {
      fontWeight:"bold", 
      color:"#000", 
      fontSize:16
   },
   btnEdit: {
      flex:1, 
      height:30, 
      alignSelf:"center", 
      justifyContent:"center", 
      borderRadius:5, 
      borderWidth:1,
      borderColor:"#AAA", 
      backgroundColor:"#FFF",
      alignItems: "center"
   }
});