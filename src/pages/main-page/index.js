import React, { Component } from 'react';
import SearchField from '../../components/search-field';

import {
  Accordion,
  Button,
  Container,
  Content,
  Text,
  View,
  Spinner
} from "native-base";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      allData: [],
      loading: false,
      itemsFrom: {begin: 0,  end: 200},

    };
  }

   getTypeData = (pos) => {
    typeData = {
      '1': 'Weapons',
      '2': 'Off-hand',
      '3': 'Armors',
      '4': 'Garments',
      '5': 'Footgears',
      '6': 'Accessory',
      '7': 'Blueprint',
      '8': 'Potion: /: Effect',
      '9': 'Refine',
      '10':'Scroll: /: Album',
      '11':'Material',
      '12':'Holiday: material',
      '13':'Pet: material',
      '14':'Premium',
      '15':'Costume',
      '16':'Head',
      '17':'Face',
      '18':'Back',
      '19':'Mouth',
      '20':'Tail',
      '21':'Weapon: card',
      '22':'Off-hand: card',
      '23':'Armor: card',
      '24':'Garments: card',
      '25':'Shoe: card',
      '26':'Accessory: card',
      '27':'Headwear: card',
      };
    return typeData[pos];
  }

   async componentDidMount() {}

  fecthData = async () => {
    const data =  await fetch('https://www.romexchange.com/api/items.json');
    return await data.json();
  }

   onShowItems = async () => {
    const { itemsFrom } = this.state;
    this .setState({loading: true });
    const datas = await this.fecthData();
    const dataSize =  await datas.length;
    const dataArr = datas.map(data => (
      {
        title: data.name,
        content: this.getTypeData(data.type)
      }
    )).slice(itemsFrom.begin, itemsFrom.end);

    this.onPagination(dataSize);
    this.setState({ dataArray: dataArr, loading: false, itemsFrom });
    console.log("Apertou que eu vi");
  }

  onPagination = (dataSize) => {
    const { itemsFrom } = this.state;
    itemsFrom.begin = itemsFrom.end;
    itemsFrom.end = (itemsFrom.end + 200 <= dataSize) ? itemsFrom.end + 200 : dataSize;
    if(itemsFrom.begin >= dataSize) {
      itemsFrom.begin = 0;
      itemsFrom.end = 200;
    }
    this.setState({ itemsFrom });

  }

  render() {
    const { dataArray, loading, itemsFrom } = this.state;
    return (
      <Container>
      <SearchField />
        <View
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"}}
        >
          <Button
            onPress={this.onShowItems} center rounded info>
              <Text>Items from {!loading && `${itemsFrom.begin} - ${itemsFrom.end}`}</Text>
              {loading && <Spinner/>}
          </Button>

        </View>

        <Content padder>
            <Accordion
              dataArray={dataArray}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
            />
          </Content>
      </Container>
    );
  }
}

export default MainPage;
