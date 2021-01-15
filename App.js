import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import LoginScreen from './screens/Welcome';


export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
