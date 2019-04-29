import React from 'react';
import {
  Header, Left, Icon, Body, Text,
} from 'native-base';

const HearderBar = props => (
  <Header>
    <Left>
      <Icon name="menu" onPress={() => props.navigation.toggleDrawer()} />
    </Left>
    <Body>
      <Text>HOME 111</Text>
    </Body>
  </Header>

);

export default HearderBar;
