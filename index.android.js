/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import TheBat from './TheBat';

export default class batarang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true} />
        <TheBat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(253, 227, 17, 0.6)',
  },
});

AppRegistry.registerComponent('batarang', () => batarang);
