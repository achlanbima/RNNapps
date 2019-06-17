/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation' 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: "app2",
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Pushed screen title'
                  }
                }
              }
            }
          })
        }} title="To App2"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
