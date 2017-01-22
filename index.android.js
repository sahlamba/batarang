/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { View } from 'react-native-animatable';

export default class batarang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgb(253, 227, 17)"
          barStyle="dark-content" />
        <View
          animation="tada"
          iterationCount="infinite">
          <SvgUri
            width="120"
            height="120"
            svgXmlData='<?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg style="enable-background:new 0 0 511.998 511.998" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 511.998 511.998" height="100px" width="100px" version="1.1" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="m212 46.8c-30.8 52.4-26.3 121 10.2 175l47.4-53.6s3.21 35.5 22.8 52.8c22.1 19.6 52.9 14.1 52.9 14.1l-47.4 53.6c58.9 29.4 127 25.5 175-11.5 40.6 76.7 50.7 154 23.7 211-68.1-41-140-53.3-189-32.5-4.71-5.46-9.69-10.8-15.3-15.7-49.7-43.9-119-51.3-174-24.2 20.1-58.1 4.21-126-45.5-170-5.56-4.92-11.4-9.2-17.4-13.2 14-52-7.1-121-56.1-184 52.8-33.5 131-33.1 212-2.2z" fill="#333"/>
            <path d="m118 416c50.1-35.6 126-50 182-14.7 6.28 3.95 12 8.39 17.6 13 45.7-28.5 120-27.3 194 2.2 0.657 20.3-3.98 48.7-15 71.9-68.1-41-140-53.3-189-32.5-4.71-5.46-9.69-10.8-15.3-15.7-49.7-43.9-119-51.3-174-24.2h-1z" fill="#444"/>
            <path d="m118 416c29.2-54.2 34.1-131-7.84-183-4.7-5.74-9.81-10.9-15.1-15.8 22.7-48.8 12.2-122-26.1-192-23.1 3.3-47.1 10.4-68.8 24.2 49 62.5 70.1 132 55.6 184 6 4 11.9 8.29 17.4 13.2 49.7 43.9 65.6 112 45.5 170z" fill="#444"/>
            </svg>'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(253, 227, 17, 0.5)',
  },
});

AppRegistry.registerComponent('batarang', () => batarang);
