import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import NotHomeScreen from './NotHomeScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';

export const Tabs = TabNavigator({
    Tab1: {
        screen: Tab1Screen,
        navigationOptions: {
            tabBarLabel: 'Tab1',
            tabBarIcon: ({tintColor}) => (<Image
                source={require('./assets/menu_active.png')}
                style={[
                styles.icon, {
                    tintColor: '#FF00F0'
                }
            ]}/>)
        }
    },
    Tab2: {
        screen: Tab2Screen,
        navigationOptions: {
            tabBarLabel: 'Tab2'
        }
    }
});

export const SimpleApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Inner: {
        screen: Tabs
    }
});

export const Drawer = DrawerNavigator({
    TopScreen: {
        screen: SimpleApp,
        navigationOptions: {
            drawerLabel: 'Home Screen'
        }
    },
    BottomScreen: {
        screen: Tabs,
        navigationOptions: {
            drawerLabel: 'Tabs Screen'
        }
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
});