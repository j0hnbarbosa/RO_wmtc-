import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import {
  Container, Content, Text, List, ListItem,
} from 'native-base';

const routes = ['Home', 'Category'];
class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => (
              <ListItem
                button
              >
                <Text>{data}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
