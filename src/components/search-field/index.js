import React from 'react';
import {
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  View,
  Spinner,
} from 'native-base';


const handleKeyDown = (e) => {
  console.log('Aqui:', e);
};

const SearchField = (props) => {
  const {
    onChangeName, onSearch, onClearSearch, searchItemName, loadingSearch,
  } = props;
  return (
    <View>
      <Header searchBar rounded>
        <Item>
          <Button
            disabled={loadingSearch}
            onPress={onClearSearch}
            transparent
          >
            <Icon name="ios-close" />
          </Button>

          <Input
            editable={!loadingSearch}
            placeholder="Search"
            onChangeText={onChangeName}
            value={searchItemName}
            onKeyPress={handleKeyDown}
            importantForAutofill="yes"
          />
          <Button
            disabled={loadingSearch}
            onPress={onSearch}
            transparent
          >
            {!loadingSearch && <Text>Search</Text>}
            {loadingSearch && <Spinner />}
          </Button>

        </Item>
      </Header>
    </View>
  );
};


export default SearchField;
