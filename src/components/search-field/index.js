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

const SearchField = (props) => {
  const {onChangeName, onSearch, onClearSearch, searchItemName, loadingSearch} = props;
  return (
    <View>
      <Header searchBar rounded>
        <Item>
        <Button onPress={onClearSearch} transparent>
          <Icon  name="ios-close" />
          </Button>

          <Input
            editable={!loadingSearch}
            placeholder="Search"
            onChangeText={onChangeName}
            value={searchItemName}
            importantForAutofill={'yes'}
            />
          <Button onPress={onSearch} transparent>
          {!loadingSearch && <Text>Search</Text>}
              {loadingSearch && <Spinner/>}
          </Button>

        </Item>
      </Header>
    </View>
  );
}


export default SearchField;