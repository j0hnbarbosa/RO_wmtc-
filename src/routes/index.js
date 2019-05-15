import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import CategoryPage from '../pages/category';
import MainPage from '../pages/main-page';

const StackRouter = createStackNavigator({
  MainPage: {
    screen: MainPage,
  },
  Category: {
    screen: CategoryPage,
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
