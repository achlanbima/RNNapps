import React, {Component} from 'react';
import {StyleSheet, Image, View, Modal, TouchableHighlight} from 'react-native';
import {Container, Content,Text, Item, Input, Footer, FooterTab, Button, List, ListItem} from 'native-base';
import {goToHome} from './Navigation'

export default class App extends Component{

    

    // state = {
    //     modalVisible:false
    // };

    // setModalVisible(visible){
    //     this.setState({modalVisible: visible});
    // };


    render(){
        return(
            <View style={styles.container}>

                {/* <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{marginHorizontal:20}}>
                        <Text>Cek modal</Text>
                        <TouchableHighlight onPress={()=>this.setModalVisible(false)}>
                            <Text>Hide</Text>
                        </TouchableHighlight>
                    </View>
                </Modal> */}

                <View style={{flex:2}} >
                    <TouchableHighlight >

                        <Text style={styles.dropDown}>English (United States) v</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:10, width: 300}}>
                    <Image source={{uri:'https://fontmeme.com/images/instagram-new-logo.png'}} style={{width: 200, height: 80, alignSelf:'center'}}/>
                    <Item regular style={styles.textItem}>
                        <Input placeholder='Phone number, email or username' placeholderTextColor='#AAA' style={{ fontSize:13, marginHorizontal:10 }} />
                    </Item>
                    <Item regular style={styles.textItem} >
                        <Input placeholder='Password' placeholderTextColor='#AAA' secureTextEntry={true} style={{ fontSize:13, marginHorizontal:10 }} />
                    </Item>
                    <Button full style={styles.loginBtn} onPress={goToHome}>
                        <Text uppercase={false}>Log In</Text>
                    </Button>
                    <View style={{ flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"#AAA", paddingBottom:25, paddingTop:15  }}>
                        <Text style={styles.grey}>Forgot your login details? 
                        </Text>
                        <TouchableHighlight>
                            <Text style={styles.blackLink}> Get help signing in.</Text>
                        </TouchableHighlight>
                    </View>
                    <Text style={{ alignSelf:"center", backgroundColor:"#FFF", marginTop:-12, paddingHorizontal:5, color:"#AAA", fontWeight:"300" }}>OR</Text>
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", paddingTop:30}}>
                        <Image source={{uri:'https://www.brandeps.com/logo-download/F/Facebook-01.png'}} style={{width:24, height:24}}/>
                        <Text style={{ color:"#4267B2", fontSize:15, fontWeight:"500" }}> Log in with Facebook</Text>
                    </View>
                </View>
                
                <Footer style={{flex:1,}}>
                    <FooterTab style={styles.footer}>
                            <Text uppercase={false} style={[styles.grey]}>Dont have an account?</Text>
                            <TouchableHighlight>
                                <Text style={styles.blackLink}> Sign up.</Text>
                            </TouchableHighlight>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF', 
        alignItems:"center", 
        flex:1, 
        flexDirection:'column',

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

    dropDown: {
        color: '#AAA',
        fontSize: 14,
        marginVertical: 10,
    },

    textItem: {
        marginTop:15,
        borderRadius: 5,
        backgroundColor:'#F9F9F9',
        height:45
    },

    loginBtn:{
        marginTop:15,
        borderRadius: 5,
        backgroundColor: '#4267B2',
        height:45,
        shadowOpacity: 0,
    },

    footer:{
        borderTopWidth: 1,
        borderTopColor: '#AAA',
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    }
});