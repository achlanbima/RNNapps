import React, {Component} from 'react'
import {Tabs, Tab, TabHeading, Icon, Content} from 'native-base'
import {View, Image, TouchableHighlight, Text, FlatList} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {posts,personalPosts} from '../Data';
import PostCard from '../components/PostCard';



export default class ProfileContent extends Component{

  state = {
    selectedTab : 0
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
                style={{backgroundColor:"red"}}
                data={posts}
                keyExtractor={(item,index) => index}
                renderItem={({item, index}) => item.user!="User" ? null : <TouchableHighlight key={index}  style={{width:"33.33%", borderWidth:0.5, borderColor:"#FFF"}}>
                <Image source={item.pic} style={{ width:"100%", height:110 }} />
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
              data={posts}
              keyExtractor={(item,index) => {return index.toString()}}
              renderItem={({item,index}) => item.user!="User" ? null : <PostCard index={index} profilePic={item.profilePic} user={item.user} pics={item.pic} like={(item.like).toString()} caps={item.caption} commentInput={false} />}
            />

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