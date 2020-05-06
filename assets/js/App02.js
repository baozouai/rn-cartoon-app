import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {  createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomePage from './page/home/homePage'

let goHome = (props)=>{
  //console.warn(props)
  //props.navigaion.navigate('App')
}
let Login = (props) =>{
  const {navigation} = props
  return (
    <View  >
      <Button onPress={()=>{navigation.navigate('Tab')} } title="Learn More" ></Button>
      
    </View>
  )
}
let Home = () =>{
  return (
    <View>
      <Text>home1</Text>
    </View>
  )
}
let User = () =>{
  return (
    <View>
      <Text>user</Text>
    </View>
  )
}
let Me = () =>{
  return (
    <View>
      <Text>me</Text>
    </View>
  )
}
let Index = (props) =>{
  let {navigation} = props;
  return (
    <View  >
      <Button onPress={()=>{navigation.navigate('BottomNavigator.User')} } title="Index1" ></Button>
    </View>
  )
}
const BottomNavigator = createBottomTabNavigator({
  Login:{
      screen: HomePage,
      navigationOptions: {
          title: '登录',
          tabBarLabel: '登录',

      }
  },
  User:{
      screen: User,
      navigationOptions: {
          title: '用户',
          tabBarLabel: '用户',

      }
  },
  Index:{
      screen: Home,
      navigationOptions: {
          title: '首页',
          tabBarLabel: '首页',

      }
  }

});
const AppStack = createStackNavigator(
  { 
    BottomNavigator:{
      screen: BottomNavigator,
      navigationOptions: {
          headerShown: false,
      }
    },
    Home: {screen : Home}, 
    User: {screen : User}, 
  },
  {
      mode: 'modal',
      headerMode: 'none',
  }
); 
 
// const RootNavigator = createSwitchNavigator(
//   {
//     AuthLoading: Login,
//     App: AppStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );







export default createAppContainer(AppStack);