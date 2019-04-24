import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Input,
  Item,
  Spinner,
  Text,
  View,
} from 'native-base';

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
            <Icon name="ios-trash" />
          </Button>

          <Input
            editable={!loadingSearch}
            placeholder="Search"
            onChangeText={onChangeName}
            value={searchItemName}
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

SearchField.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  searchItemName: PropTypes.string.isRequired,
  loadingSearch: PropTypes.bool.isRequired,
};

export default SearchField;
