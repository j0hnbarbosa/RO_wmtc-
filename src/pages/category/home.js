import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  { Header, Left, Right, Icon} from 'native-base';
import HeaderBar from '../../components/header-bar'

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <HeaderBar {...this.props}/>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen 111</Text>
      </View>
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });

export default HomeScreen;
