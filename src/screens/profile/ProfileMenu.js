import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {goToLogin, goToHome} from '../../components/Navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
          <View style={styles.btnWrapper}>
            <MaterialCommunityIcons name="logout" size={30} color={"#333"} />
            <Text style={{marginLeft: 10, fontSize:18, color:"#333"}}>Log Out</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  btnLogOut:{
    paddingHorizontal:10,
    paddingVertical: 10,
    width:'100%',
    justifyContent:'center',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  btnWrapper:{
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 10,
  }
}
);