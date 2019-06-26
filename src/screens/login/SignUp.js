import React, {Component} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {View, Text, TouchableWithoutFeedback, StyleSheet, Image} from 'react-native'
import { Container, Content, Thumbnail, Tabs, Tab, Item, Input, Footer, TabHeading } from 'native-base';
import TextField from '../../components/TextField'
import { Navigation } from 'react-native-navigation';

export default class SignUp extends Component{
  render() {
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
                    style={{flex:1}}
                    showsVerticalScrollIndicator={false}>

      <Container>
        <Content>
          <View style={styles.container}>
            <View style={styles.imgWrapper}>
              <Image large source={require('../../assets/icon/person-outline.png')} color="#AAA" style={styles.img} />
            </View>
            <View>
              <Tabs tabBarUnderlineStyle={{backgroundColor:"#AAA", height:2}}  tabContainerStyle={{elevation:0}}>
                <Tab heading={<TabHeading style={styles.tabHead}><Text>Phone</Text></TabHeading>}>
                  <Item style={styles.textBox}>
                    <View style={styles.country}>  
                      <Text>ID +62</Text>
                    </View>
                    <Input placeholder='Phone' placeholderTextColor='#AAA' />
                  </Item>
                  <Text style={styles.optText}>You may recieve SMS updates from Instagram and can opt out at any time.</Text>
                  <TouchableWithoutFeedback style={{width:"100%"}}>
                    <View style={styles.btnNext}>  
                      <Text style={styles.white}>Next</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </Tab>
                <Tab heading={<TabHeading style={styles.tabHead}><Text>Email</Text></TabHeading>}>
                  <Item style={styles.textBox}>
                    <Input placeholder='Email' placeholderTextColor='#AAA' />
                  </Item>
                  <TouchableWithoutFeedback style={{width:"100%"}}>
                    <View style={styles.btnNext}>  
                      <Text style={styles.white}>Next</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </Tab>
              </Tabs>
              <View>
                
              </View>
            </View>
          </View>
        </Content>

        <Footer style={styles.footer}>
          <Text style={styles.grey}>Already have an account? </Text> 
          <TouchableWithoutFeedback onPress={() => 
            Navigation.pop(this.props.componentId)
          }>
            <Text style={styles.blackLink}>Log In</Text>
          </TouchableWithoutFeedback>
        </Footer>
      </Container>
      </KeyboardAwareScrollView>
    )
  };
}

const styles = StyleSheet.create({
  white:{
    color:"#FFF",
    fontSize:15
  },  

  container:{
    width:"90%",
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop:80
  },

  imgWrapper:{
    
    width:150,
    height:150,
    borderRadius: 150,
    
    borderWidth:2,
    borderColor: "#333",
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 15,
  },
  
  img:{
    width:55,
    height:50
  },

  tabWrapper:{
    backgroundColor:"#FFF"
  },

  tabHead:{
    backgroundColor:"#FFF", 
    borderBottomColor:"#AAA", 
    borderBottomWidth:0.5
  },

  textBox:{
    marginTop:10,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderRadius:5,
    backgroundColor:"#F9F9F9",
    height:45,
    paddingLeft: 5,
  },
  country:{
    paddingHorizontal: 10,
    paddingRight: 5,
    borderRightWidth:1,
    borderRightColor: '#AAA',
    alignContent: 'center',
    marginRight:10
  },
  optText:{
    textAlign:"center",
    marginTop:10,
    fontSize:13,
    color:"#AAA"
  },
  btnNext:{
    marginTop:15,
    borderRadius: 5,
    backgroundColor: '#4267B2',
    height:45,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },

  footer:{
    backgroundColor:"#FFF",
    alignItems:"center"
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
})