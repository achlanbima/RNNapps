import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {goToLogin, goToHome} from '../../components/Navigation'

export default class ProfileMenu extends Component{

  logout = async () => {
    try{
        // await AsyncStorage.setItem('@token', `Bearer ${token}`)
        await AsyncStorage.removeItem('@token')
        await AsyncStorage.removeItem('info')
        alert("Logged Out")
        goToLogin()
        }catch(error){
          console.log(error)
    }
    }

  

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.btnLogOut} onPress={goToLogin}>

          <Text>Log Out</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  btnLogOut:{
    backgroundColor: "#F50",
    paddingHorizontal:10,
    paddingVertical: 10,
  }
}
);