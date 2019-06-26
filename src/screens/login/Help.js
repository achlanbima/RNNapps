import React, {Component} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
import {Header, Left, Title, Container, Content, Footer, FooterTab} from 'native-base'
import TextField from '../../components/TextField'


export default class Help extends Component{
  render(){
    return(
      
      
      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
                    style={{flex:1}}
                    behavior="padding" enabled
                    showsVerticalScrollIndicator={false}>
      <Container>
        <Header style={{backgroundColor:"#FFF", justifyContent:"flex-start", alignItems:"center"}}>
          <Text style={{fontSize:20, color:"#000", fontWeight:"400"}}>Login Help</Text>
        </Header>

        <Content>
          <View  style={{alignItems:"center", marginTop:40}}>
            <Title style={{color:"#555", fontSize:25}}>Find Your Account</Title>
            <View  style={{width:"80%", marginTop:12}} >
              <Text style={{textAlign:"center", color:"#555", fontSize:14, marginBottom:12}}>Enter your Instagram username or the email or phone number linked to your account.</Text>
              <TextField placeholder="Username, email, or phone" />
                <TouchableWithoutFeedback style={{width:"100%"}}>
                    <View style={styles.nextBtn}>
                        <Text style={styles.white}>Next</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{marginTop:30, alignItems:"center", borderTopColor:"#AAA", borderTopWidth:1}}>
                  <Text style={{marginTop:-10, backgroundColor:"#FFF", paddingHorizontal:2}}>OR</Text>
                </View>
                <View style={styles.inline}>
                    <Image source={{uri:'https://www.brandeps.com/logo-download/F/Facebook-01.png'}} style={styles.miniLogo}/>
                    <Text style={[styles.blue, styles.bold]}> Log in with Facebook</Text>
                </View>
            </View>
          </View>
        </Content>
        <Footer>
            <FooterTab style={styles.footer}>
              <Text uppercase={false} style={[styles.grey]}>For more help, visit the </Text>
              <TouchableWithoutFeedback>
                  <Text style={styles.blackLink}>Instagram Help Center</Text>
              </TouchableWithoutFeedback>
            </FooterTab>
        </Footer>
      </Container>
      </KeyboardAwareScrollView>
    )
  }
} 

const styles = StyleSheet.create({
  nextBtn:{
    marginTop:15,
    borderRadius: 5,
    backgroundColor: '#4267B2',
    height:45,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  white:{
    color:"#FFF",
    fontSize:13
  },
  inline: {
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingTop:25,

  },
  miniLogo: {
    width:24, 
    height:24
  },
  bold:{
    fontWeight:"500",
    
  },

  blue:{
      color:"#4267B2",
      fontSize:13
  },
 
  footer:{
    borderTopColor: '#FFF',
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 15,
  },
  grey:{
    color:'#AAA',
    fontSize:12
  },

  blackLink:{
      color:'#000',
      fontSize:12,
      fontWeight: '500',
  },
});