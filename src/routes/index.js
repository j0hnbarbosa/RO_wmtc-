import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import CategoryPage from '../pages/category';
import NadaPage from '../pages/category/nada';
import MainPage from '../pages/main-page';

const StackRouter = createStackNavigator({
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      headerRight: (
        <Button
          onPress={() => {console.log('')}}
          title="Info"
          color="#841584"
        />
      ),
    },
  },
  Category: {
    screen: NadaPage,
  },
});

const DrawerRouter = createDrawerNavigator({
  'Main Page': {
    screen: StackRouter,
  },
  Category: {
    screen: CategoryPage,
  },
});

const MainRouter = createAppContainer(DrawerRouter);

export default MainRouter;
