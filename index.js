import { AppRegistry } from 'react-native';
// import MainPage from './src/pages/main-page';
// import MainPage from './src/routers';
import { RoutesStack, RoutesDrawer } from './src/routes';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => RoutesDrawer);
