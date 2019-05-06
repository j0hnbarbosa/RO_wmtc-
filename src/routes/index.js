import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import CategoryPage from '../pages/category';
import MainPage from '../pages/main-page';

const defaultConfig = {
  defaultNavigationOptions: {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#835530',
    },
  },
};

const navigationOptionsHeader = ({ navigation }) => {
  // console.log(navigation);
  // const as = {...RoutesDrawer};
  // console.table(as);
  return {
    headerLeft: (
      <Icon.Button
        name="ios-menu"
        size={30}
        color="#800"
        type="clear"
        backgroundColor="transparent"
        onPress={() => alert('Im here!')}
      />
    ),
  };
};

const RouteDrawer = createDrawerNavigator({
  'Main Page': MainPage,
  Category: CategoryPage,
},
{
  defaultNavigationOptions: navigationOptionsHeader,
});


const RoutesDrawer = createAppContainer(RouteDrawer);

const RouteStack = createStackNavigator({
  'Main Page': MainPage,
  Category: CategoryPage,
},
defaultConfig);

const RoutesStack = createAppContainer(RouteStack);

export { RoutesStack, RoutesDrawer };
