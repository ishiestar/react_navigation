/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import {Drawer} from './react_app/RouteConfig';

export default class NavProj extends Component {
  render() {
    return (<Drawer/>);
  }
}

AppRegistry.registerComponent('NavProj', () => NavProj);
