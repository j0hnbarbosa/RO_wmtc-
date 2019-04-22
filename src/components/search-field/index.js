import React from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base';

const SearchField = () => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Button transparent>
            <Text>Search</Text>
          </Button>

        </Item>
      </Header>
    </Container>
  );
}


export default SearchField;