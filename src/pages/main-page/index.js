import React, { Component } from 'react';
import SearchField from '../../components/search-field';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchField />
    );
  }
}

export default MainPage;
