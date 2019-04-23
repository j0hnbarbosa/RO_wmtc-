import React from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  View,
} from 'native-base';

const SearchField = () => {
  return (
    <View>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Button transparent>
            <Text>Search</Text>
          </Button>

        </Item>
      </Header>
    </View>
  );
}


export default SearchField;