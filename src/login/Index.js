import React, {Component} from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {StyleSheet, 
    Image, 
    View,  
    TouchableWithoutFeedback
} from 'react-native';
import {Text, Item, Input, Footer, FooterTab, Button, Container, Content} from 'native-base';
import {goToHome} from '../components/Navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation';



export default class Index extends Component{


    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render(){
        return(


            <Container>
                    <Dialog
                        visible={this.state.modalVisible}
                        onTouchOutside={() => {
                        this.setState({ modalVisible: false });
                        }}
                    >
                        <DialogContent>
                        <Text>A</Text>
                        </DialogContent>
                    </Dialog>

                <Content>
                    <View style={ styles.dropDown }>
                        <TouchableWithoutFeedback onPress={()=> this.setModalVisible(true)}>

                            <Text style={ [styles.grey, {fontSize:14}] }>English (United States) &nbsp; 
                                <AntDesign name="down" size={10}/>
                            </Text>
                        </TouchableWithoutFeedback>

                    </View>
                    
                    <View style={ styles.container }>
                        <Image source={{uri:'https://fontmeme.com/images/instagram-new-logo.png'}} style={styles.logo}/>
                        <TextField placeholder="Phone number, email or username" />
                        <TextField placeholder="Password" password={true} />
                        <TouchableWithoutFeedback style={{width:"100%"}} onPress={goToHome}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.white}> Log In</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.inlineBorderedBottom}>
                            <Text style={styles.grey}>Forgot your login details? 
                            </Text>
                            <TouchableWithoutFeedback>
                                <Text style={styles.blackLink}> Get help signing in.</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <Text style={[styles.divider]}>OR</Text>
                        <View style={styles.inline}>
                            <Image source={{uri:'https://www.brandeps.com/logo-download/F/Facebook-01.png'}} style={styles.miniLogo}/>
                            <Text style={[styles.blue, styles.bold]}> Log in with Facebook</Text>
                        </View>
                    </View>
                </Content>
                    <Footer>
                    <FooterTab style={styles.footer}>
                            <Text uppercase={false} style={[styles.grey]}>Dont have an account?</Text>
                            <TouchableWithoutFeedback>
                                <Text style={styles.blackLink}> Sign up.</Text>
                            </TouchableWithoutFeedback>
                    </FooterTab>
                </Footer>
            </Container>


        )
    }
}

class TextField extends Component{
    render(){
        return (
            <Item regular style={styles.textItem} >
                <Input placeholder={this.props.placeholder} placeholderTextColor='#AAA' secureTextEntry={this.props.password} style={ styles.placeholder } />
            </Item>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF', 
        alignItems:"center", 
        flex:1, 
        flexDirection:'column',

    },

    bold:{
        fontWeight:"500",
        
    },

    blue:{
        color:"#4267B2",
        fontSize:13
    },

    grey:{
        color:'#AAA',
        fontSize:12
    },

    white:{
        color:"#FFF",
        fontSize:13
    },

    blackLink:{
        color:'#000',
        fontSize:12,
        fontWeight: '500',
    },

    dropDown: {
        color: '#AAA',
        fontSize: 14,
        marginVertical: 10,
        justifyContent:"center",
        alignItems:"center", 
        flexDirection:"row",
        marginTop:15
    },

    container: {
        marginTop:60, 
        width:"90%", 
        marginLeft:"auto", 
        marginRight:"auto", 
        alignItems:"center"
    },

    logo: {
        width: 200, 
        height: 80,
    },

    textItem: {
        marginTop:15,
        borderRadius: 5,
        backgroundColor:'#F9F9F9',
        height:45,
        marginLeft:0
    },

    placeholder: {
        fontSize:13, 
        marginHorizontal:10
    },

    loginBtn:{
        marginTop:15,
        borderRadius: 5,
        backgroundColor: '#4267B2',
        height:45,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },

    inlineBorderedBottom: {
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center", 
        borderBottomWidth:1, 
        borderBottomColor:"#AAA", 
        paddingBottom:25, 
        paddingTop:15, 
        width:"100%"
    },

    divider: {
        alignSelf:"center", 
        backgroundColor:"#FFF", 
        marginTop:-12, 
        paddingHorizontal:5, 
        color:"#AAA", 
        fontWeight:"300" 
    },

    inline: {
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center", 
        paddingTop:30
    },

    miniLogo: {
        width:24, 
        height:24
    },

    footer:{
        borderTopWidth: 1,
        borderTopColor: '#AAA',
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    }
});