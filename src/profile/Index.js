import React, {Component} from 'react';
import {View, Text, Image,  TouchableHighlight, StyleSheet} from 'react-native';
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

import {myImages} from '../Data';

import ProfileContent from './ProfileContent'

export default class Index extends Component{ 

   

   render(){
      return(
         <Container>
            <Header style={styles.header} has>
               <Left style={{marginLeft:-5}}>
                  <Button transparent onPress={()=>Navigation.push(this.props.componentId, {
                     component:{
                        name:"myApp"
                     }
                  })}>
                     <Text style={styles.headerTitle}>My Profile</Text>
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

            <Content style={{backgroundColor:"blue"}}>
               <View>

               <Card transparent>
                  <CardItem>
                  <Left>
                     <View style={{ marginVertical:7, marginHorizontal:7}}>
                        <Thumbnail large source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />
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
                     <Text style={{fontWeight:"bold"}}>User</Text>
                  </CardItem>
               </Card>
               </View>


               
               
                  <ProfileContent />
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
      marginRight:10, 
      color:"#000"
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