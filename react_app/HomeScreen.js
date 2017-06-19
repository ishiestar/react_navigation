/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        return (
            <Button
                title="Go to inner screen"
                onPress={() => {
                this
                    .props
                    .navigation
                    .navigate('Inner', {name: "Inner Screen"});
            }}></Button>
        );
    }
}

module.exports = HomeScreen;
