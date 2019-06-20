import React, {Component} from 'react'
import {Footer, FooterTab, Button,} from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {goToProfile, goToHome} from '../components/Navigation'

export class BottomBar extends Component{
   render(){
      return(
         <Footer  style={{backgroundColor:"FFF"}}>
               <FooterTab  style={{backgroundColor:"FFF", borderTopWidth:1, borderTopColor:'#AAA' ,}}>
               <Button transparent onPress={goToHome}>
                  <MaterialCommunityIcons name='home' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                  <MaterialCommunityIcons name='magnify' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                  <MaterialIcons name='add' size={25} color="#000" />
                  </Button>
                  <Button transparent>
                  <Entypo name='heart-outlined' size={25} color="#000" />
                  </Button>
                  <Button transparent onPress={goToProfile}>
                  <MaterialIcons name='person-outline' size={25} color="#000" />
                  </Button>
               </FooterTab>
            </Footer>
      )
   }
}