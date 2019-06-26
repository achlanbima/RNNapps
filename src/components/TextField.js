import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Item, Input} from 'native-base'

export default class TextField extends Component{
  render(){
      return (
          <Item regular style={styles.textItem} >
              <Input placeholder={this.props.placeholder} placeholderTextColor='#AAA' secureTextEntry={this.props.password} style={ styles.placeholder } value={this.props.value} onChangeText={this.props.changeText}/>
          </Item>
      )
  }
}

const styles = StyleSheet.create({
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
});