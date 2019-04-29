import { AppRegistry } from 'react-native';
// import MainPage from './src/pages/main-page';
// import MainPage from './src/routers';
import MainPage from './src/pages/category';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainPage);
