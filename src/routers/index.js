import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MainPage from '../pages/main-page';
import CategoryPage from '../pages/category';
import SideBar from '../components/side-bar';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: CategoryPage,
    // Category: { screen: CategoryPage },
  },
  {
    // contentComponent: SideBar,
  },
);
export default HomeScreenRouter;
