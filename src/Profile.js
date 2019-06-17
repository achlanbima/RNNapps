import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Title, Content, Footer, FooterTab, Card, CardItem, Thumbnail, Icon, Item, Input, Grid, Row, Col} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomBar} from './BottomBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Home extends Component{

   myImages = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtoGKpb2ufEl4YF6p63jpqO5Wb-heaDL55Z7MHHbP9kLFuHL6qg',
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      'https://4.bp.blogspot.com/-iqlxYDEEjEw/WjPolgRagzI/AAAAAAAAAnQ/Q4_15GqabmMWCaVigoqNezUz2XS-DEZZQCEwYBhgL/s1600/lordumam2.jpg',
      'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg',
      'https://4.bp.blogspot.com/-iqlxYDEEjEw/WjPolgRagzI/AAAAAAAAAnQ/Q4_15GqabmMWCaVigoqNezUz2XS-DEZZQCEwYBhgL/s1600/lordumam2.jpg',
      'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg',
      'https://4.bp.blogspot.com/-iqlxYDEEjEw/WjPolgRagzI/AAAAAAAAAnQ/Q4_15GqabmMWCaVigoqNezUz2XS-DEZZQCEwYBhgL/s1600/lordumam2.jpg',
   ]

   render(){
      return(
         <Container>
            <Header style={{backgroundColor:'#FFF', height:50}}>
               <Left style={{marginLeft:-5}}>
                  <Button transparent>
                     <Text style={{fontSize:17, marginRight:10, color:"#000"}}>My Profile</Text>
                     <Ionicons name='ios-arrow-down' size={15} color="#000" />
                  </Button>
               </Left>
               <Right style={{marginRight: -5}}>
                  <Button transparent style={{marginRight: -15,}}>
                     <MaterialIcons name='history' size={30} color="#000" />
                  </Button>
                  <Button transparent style={{}}>
                     <MaterialIcons name='menu' size={30} color="#000" style={{paddingHorizontal:-50,marginRight:-5}} />
                  </Button>
               </Right>
            </Header>

            <Content>
               <Card transparent>
                  <CardItem>
                  <Left>
                     <View style={{ marginVertical:7, marginHorizontal:7}}>
                        <Thumbnail large source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />
                        <MaterialIcons name='add-circle' size={25} color="#4297FF" style={{position:"absolute", bottom:-5, right:-5}} />
                     </View>
                  </Left>
                  <Right style={{BackgroundColor:"blue"}}>
                     <Grid style={{width:220, }}>
                        <Row>
                           <Col style={{alignItems:"center", justifyContent:"center"}}>
                              <Text style={{fontWeight:"bold", color:"#000", fontSize:16}}>0</Text>
                              <Text>Posts</Text>
                           </Col>
                           <Col style={{alignItems:"center", justifyContent:"center"}}>
                              <Text style={{fontWeight:"bold", color:"#000", fontSize:16}}>0</Text>
                              <Text>Followers</Text>
                           </Col>
                           <Col style={{alignItems:"center", justifyContent:"center"}}>
                              <Text style={{fontWeight:"bold", color:"#000", fontSize:16}}>0</Text>
                              <Text>Following</Text>
                           </Col>
                        </Row>
                        <Row style={{}}>
                           <TouchableHighlight style={{flex:1, height:30, alignSelf:"center", justifyContent:"center", borderRadius:5, borderWidth:1,borderColor:"#AAA", backgroundColor:"#FFF"}}>
                              <Text style={{ color:"#000",alignSelf:"center", fontWeight:"bold"}}>Edit Profile</Text>
                           </TouchableHighlight>
                        </Row>
                     </Grid>
                  </Right>               
                  </CardItem>
                  <CardItem>
                     <Text style={{fontWeight:"bold"}}>User</Text>
                  </CardItem>
               </Card>
               <View style={{flexDirection:"row", height:50, borderTopWidth:0.5, borderBottomWidth:1, borderColor:"#CCC", paddingBottom:5, paddingTop:1, alignItems:"center"}}>
                  <Button transparent style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                     <MaterialIcons name='grid-on' size={28} color="#4297FF"/>
                  </Button>
                  <Button transparent style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                     <AntDesign name='laptop' size={28} color="#AAA"/>
                  </Button>
                  <Button transparent style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                     <MaterialIcons name='person-pin' size={28} color="#AAA"/>
                  </Button>
               </View>

               <View style={{flexDirection:"row", flexWrap:"wrap",}}>
                  
                  {
                     this.myImages.map( (image, index) => (

                        <TouchableHighlight  key={index} style={{width:"33.33%", borderWidth:0.5, borderColor:"#FFF"}}>
                           <Image source={{uri: image}} style={{ width:"100%", height:100 }} />
                        </TouchableHighlight>
                     ) )
                  }


               </View>

            </Content>

            {/* <BottomBar/> */}

         </Container>
      );
   }
}