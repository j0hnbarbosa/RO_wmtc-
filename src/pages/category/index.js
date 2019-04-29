import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import Login from './home';
import SignUp from './home2';
import MainPage from '../main-page';

const RootStack = createDrawerNavigator({
  Home111: {
    screen: SignUp,
  },
  Home222: {
    screen: Login,
  },
  MainPage: { screen: MainPage },
},
{

  initialRouteName: 'Home111',
} );

const App = createAppContainer(RootStack);

export default App;
