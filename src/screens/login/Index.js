import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {StyleSheet, 
    Image, 
    View,  
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
    FlatList,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {Text, Item, Input, Footer, FooterTab, Button, Container, Content} from 'native-base';
import {goToHome} from '../../components/Navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation';
import TextField from '../../components/TextField'
import Loading from '../../components/Loading'
import axios from 'axios'

const GLOBAL = require('../../Globals')

const url = GLOBAL.API_URL

export default class Index extends Component{

    constructor(props){
        super(props)
        this.languages = [
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
            "Language 1",
        ];
    
        this.state = {
            modalVisible: false,
            email : "",
            password : "",
            loading: false
        };

    }

    componentDidMount(){
        this._storeClear();
    }

    
    setModalVisible(visible) {
    this.setState({modalVisible: visible});
    }

    _storeClear = async (token) => {
        try{
            // await AsyncStorage.setItem('@token', `Bearer ${token}`)
            await AsyncStorage.removeItem('@token')
            await AsyncStorage.removeItem('info')
        }
        catch(error){
            alert(error)
        }
    }
    _storeToken = async (token) => {
        try{
            await AsyncStorage.setItem('@token', `Bearer ${token}`)
            // await AsyncStorage.removeItem('@token')
        }catch(error){
            alert(error)
        }
    }

    _storeInfo = async (info) => {
        try{
            await AsyncStorage.setItem('info', JSON.stringify(info))
            // await AsyncStorage.removeItem('info')
        }catch(error){
            alert(error)
        }
    } 
      

    login(){
    if(this.state.password == "" && this.state.email == ""){
        alert('Email & Password Harus Diisi')
    }else if(this.state.password == "" && this.state.email != ""){
        alert('Password harus diisi!')
    }else if(this.state.password != "" && this.state.email == ""){
        alert('Email harus diisi!')
    }else{
        this.setState({loading:true})
        axios.post(`${url}/login`, {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
            console.log(res);
            
            this.setState({loading:false})
            if(res.data==""){
                alert('email/password salah')
            }else{
                
                console.log(res.data.rows[0])
                console.log(res.data.token)
                this._storeToken(res.data.token)
                this._storeInfo(res.data.rows[0])
                goToHome()
            }
        })
    }
    }

    toSignUp(prop){
        Navigation.push(prop, {
            component:{
                name: "SignUp"
            }
        })
    }

    render(){
        return(

            <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
                    style={{flex:1}}
                    behavior="padding" enabled
                    showsVerticalScrollIndicator={false}>
                {/* Your code goes here*/}

            <Container>
                <Loading loading={this.state.loading}/>
                    <Dialog
                        visible={this.state.modalVisible}
                        onTouchOutside={() => {
                            this.setState({ modalVisible: false });
                        }}
                        onHardwareBackPress={() => true}
                        >
                        <DialogContent style={{width:320, maxHeight:580}}>
                            <View style={{paddingTop:12, paddingBottom:12, borderBottomWidth:1 ,paddingHorizontal:0, marginHorizontal:-18, borderBottomColor:"#CCC", flexDirection:"row"}}>
                                <Text style={{ paddingHorizontal:12, flex:9}}>SELECT YOUR LANGUAGE </Text>
                                <TouchableOpacity style={{flex:1}} onPress={() => {this.setState({ modalVisible: false })}}>
                                    <AntDesign name="close" size={20}  />
                                </TouchableOpacity>
                            </View>
                                <Item style={{paddingHorizontal:10, marginLeft:-10, marginRight:-10}}>
                                <Image source={require('../../assets/icon/magnify.png')} style={{width:23, height:23, marginRight:10}} />
                                    <Input placeholder="Search" placeholderTextColor="#CCC" />
                                </Item>
                                <ScrollView>
                                    
                                    <FlatList
                                        data={this.languages}
                                        keyExtractor={(item, index) => {return index.toString()}}
                                        renderItem={({item, index}) => 
                                        <TouchableOpacity key={index} >
                                                <View style={{width:"100%", backgroundColor:"#FFF", paddingVertical:10, borderBottomWidth:1, borderBottomColor:"#AAA"}}>
                                                    <Text style={{color:"#000"}}>{item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                        />
                                </ScrollView>
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
                        <TextField placeholder="Phone number, email or username" value={this.state.email} changeText={(value)=> this.setState({email:value})} />
                        <TextField placeholder="Password" password={true} value={this.state.password} changeText={(value)=> this.setState({password:value})} />
                        <TouchableWithoutFeedback style={{width:"100%"}} onPress={() => this.login()}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.white}> Log In</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.inlineBorderedBottom}>
                            <Text style={styles.grey}>Forgot your login details?</Text>
                            <TouchableWithoutFeedback onPress={() => {
                                Navigation.push(this.props.componentId, {
                                    component:{
                                        name: "Help",
                                        passProps: "pushed"
                                    },
                                    options:{
                                        topBar:{
                                            
                                            drawBehind:false,
                                            visible:true,
                                        }
                                    }
                                })
                            }}>
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
                        <TouchableWithoutFeedback onPress={() => this.toSignUp(this.props.componentId)}>
                            <Text style={styles.blackLink}> Sign up.</Text>
                        </TouchableWithoutFeedback>
                    </FooterTab>
                </Footer>
            </Container>
        </KeyboardAwareScrollView>


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

    
    white:{
        color:"#FFF",
        fontSize:13
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