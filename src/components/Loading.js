import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class Loading extends Component{
  render(){
    return(
      <View>
        <Dialog
          visible={this.props.loading}
          
        >
          <DialogContent>
            <Text style={{paddingBottom:0,paddingTop:20, fontSize:20}}>Loading...</Text>
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}