/* eslint-disable prettier/prettier */
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import SearchByShowScreen from './src/screens/SearchByShowScreen'
import SearchByPeopleScreen from './src/screens/SearchByPeopleScreen'

const AppNavigator = createStackNavigator(
  {
    SearchByShow: SearchByShowScreen,
    SearchByPeople: SearchByPeopleScreen,
  },
  {
    initialRouteName: 'SearchByShow',
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: AppNavigator,
});

let AppNavigatorView = createAppContainer(TabNavigator);

const App = () =>
{
  return (
    <AppNavigatorView />
  );
};

export default App
