import React, {Component} from 'react'
import {Tabs, Tab, TabHeading, Icon, Content} from 'native-base'
import {View, Image, TouchableHighlight, Text, FlatList, AsyncStorage} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostCard from '../../components/PostCard';
import axios from 'axios'

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL


export default class ProfileContent extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedTab : 0,
      posts : [],
      loginInfo: [],
      id:""
    }

  }

  componentDidMount(){
    this.fetchData();
    console.log("Kocchi");
    console.log(this.state.loginInfo);
    console.log(this.props.id);
  }

  async fetchData(){
    let loginInfo = await AsyncStorage.getItem('info')
    loginInfo = JSON.parse(loginInfo)
    this.setState({loginInfo:loginInfo})
    console.log("loginInfo");
    console.log(loginInfo.id);
    
    const token = await AsyncStorage.getItem('@token')
    axios.get(`${url}/posts/${loginInfo.id}`, {
      headers:{
         Authorization:token
      }
    })
    .then((res) => {
      this.setState({posts:res.data})
    })
  }


  changeTab(index){
    this.setState({selectedTab : index})  
    console.log(index)
  }


  render(){
    return(
        

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
              {/* <Content style={{backgroundColor:"red"}}>
                <View style={{flexDirection:"row", flexWrap:"wrap", flex:1}}>
                  { personalPosts.map( (post, index) => (
                        <TouchableHighlight  key={index} style={{width:"33.33%", borderWidth:0.5, borderColor:"#FFF"}}>
                            <Image source={post.pic} style={{ width:"100%", height:100 }} />
                        </TouchableHighlight>
                      ) )
                  }
                </View>
              </Content> */}
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><AntDesign name='laptop' size={28} color={ this.state.selectedTab == 1 ? "#4297FF" : "#AAA" }/></TabHeading>}>
            
            <FlatList
              data={this.state.posts}
              keyExtractor={(item,index) => {return index.toString()}}
              renderItem={({item,index}) => <PostCard index={item.id} profilePic={{uri:item.profile_pic}} user={item.username}  userId={item.user_id} pics={{uri:item.post}} like={(item.likes).toString()} caps={item.caption} commentInput={false} userLog={this.state.loginInfo.id} parentComponentId={this.props.parentComponentId}/>}
            />
            {
              console.log(this.props.componentId)
            }

              {/* { personalPosts.map((post, index) => (
                    <PostCard key={index} index={index} profilePic={post.profilePic} user={post.user} pics={post.pic} like={post.like} caps={post.caption} commentInput={false} />
                  ))} */}
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><MaterialIcons name='person-pin' size={28} color={ this.state.selectedTab == 2 ? "#4297FF" : "#AAA" }/></TabHeading>}>
              <Text>SSSS</Text>
          </Tab>
        </Tabs>
    )
  }
}