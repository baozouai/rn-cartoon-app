import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../home';
import Category from '../category';
import Me from '../me';

export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('../../assets/img/index1.png') : require('../../assets/img/index0.png');
                return (<Image style={styles.tabBarIcon} source={source} />);
            },
        },
    },
    Category: {
        screen: Category,
        navigationOptions: {
            title: '分类',
            tabBarLabel: '分类',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('../../assets/img/c1.png') : require('../../assets/img/c0.png');
                return (<Image style={styles.tabBarIcon} source={source} />);
            },
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('../../assets/img/me0.png') : require('../../assets/img/me1.png');
                return (<Image style={styles.tabBarIcon} source={source} />);
            },
        },
    },
});

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21
    }
})