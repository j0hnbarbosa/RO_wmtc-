import React, { Component } from 'react';
import ShowItem from '../../components/show-item';

import {
  Container,
  Spinner,
  Content,
  Accordion,
  Picker,
  Form,
  Text,
  Card,
  CardItem,
  Body,
  Button,
} from 'native-base';

class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Category Page',
  });

  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      loading: false,
      selected: '',
      searchItemName: '',
      searchData: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await this.onShowItems();
  }

  onValueChange = (value) => {
    this.setState({
      selected: value
    });
  }

  getTypeData = (pos) => {
   const typeData = {
      1: 'Weapons',
      2: 'Off-hand',
      3: 'Armors',
      4: 'Garments',
      5: 'Footgears',
      6: 'Accessory',
      7: 'Blueprint',
      8: 'Potion: /: Effect',
      9: 'Refine',
      10: 'Scroll: /: Album',
      11: 'Material',
      12: 'Holiday: material',
      13: 'Pet: material',
      14: 'Premium',
      15: 'Costume',
      16: 'Head',
      17: 'Face',
      18: 'Back',
      19: 'Mouth',
      20: 'Tail',
      21: 'Weapon: card',
      22: 'Off-hand: card',
      23: 'Armor: card',
      24: 'Garments: card',
      25: 'Shoe: card',
      26: 'Accessory: card',
      27: 'Headwear: card',
    };
    return typeData[pos];
  }


  functTypeDataArray = () => {
    return [
      {id: 1  , name: 'Weapons'},
      {id: 2  , name: 'Off-hand'},
      {id: 3  , name: 'Armors'},
      {id: 4  , name: 'Garments'},
      {id: 5  , name: 'Footgears'},
      {id: 6  , name: 'Accessory'},
      {id: 7  , name: 'Blueprint'},
      {id: 8  , name: 'Potion: /: Effect'},
      {id: 9  , name: 'Refine'},
      {id: 10 , name: 'Scroll: /: Album'},
      {id: 11 , name: 'Material'},
      {id: 12 , name: 'Holiday: material'},
      {id: 13 , name: 'Pet: material'},
      {id: 14 , name: 'Premium'},
      {id: 15 , name: 'Costume'},
      {id: 16 , name: 'Head'},
      {id: 17 , name: 'Face'},
      {id: 18 , name: 'Back'},
      {id: 19 , name: 'Mouth'},
      {id: 20 , name: 'Tail'},
      {id: 21 , name: 'Weapon: card'},
      {id: 22 , name: 'Off-hand: card'},
      {id: 23 , name: 'Armor: card'},
      {id: 24 , name: 'Garments: card'},
      {id: 25 , name: 'Shoe: card'},
      {id: 26 , name: 'Accessory: card'},
      {id: 27 , name: 'Headwear: card'},
   ];
  }


  fecthData = async () => {
    const data = await fetch('https://www.romexchange.com/api/items.json');
    return await data.json();
  }

  searchFecthData = async (searchItemName) => {
    this.setState({loading: true});
    const data =  await fetch(`https://www.romexchange.com/api?item=${searchItemName}&exact=true`);
    const da = await data.json();
    // console.log(da);
    this.setState({searchData: da, loading: false})
    // alert(da)
  }

  onShowItems = async () => {
    this.setState({ loading: true });
    const datas = await this.fecthData();
    const categor = {};


    const dataArr = datas.map((data) => {
      if (categor[this.getTypeData(data.type)] === undefined) {
        categor[this.getTypeData(data.type)] = [];
      }
      categor[this.getTypeData(data.type)].push(
        {
          title: data.name,
          content: this.getTypeData(data.type),
          // idItem: data.type,
        },
      );

      return (
        {
          title: data.name,
          content: this.getTypeData(data.type),
          idItem: data.type,
        }
      );
    });
    this.setState({ dataArray: categor, loading: false });
    console.log('Categori Apertou que eu vi', categor);
  }

  render() {
    // console.log("functTypeDataArray", this.functTypeDataArray())
    const { dataArray, loading, searchData } = this.state;
    const dataItem = (this.state.selected ? dataArray[this.getTypeData(this.state.selected)] : []);
    dataItem && console.log('render', dataItem[0]);
    return (
      <Container>

          <Content padder>
            <Form >
              <Picker
                note
                mode="dropdown"
                style={{display: 'flex', justifyContent: 'center', width: 220 }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
              {this.functTypeDataArray().map((data) =>
                <Picker.Item
                label={data.name}
                key={data.id}
                value={data.id}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}
                />
              )}
            </Picker>
          </Form>
        </Content>
        {loading && <Spinner /> }
        <ShowItem searchData={searchData} />

        { dataItem && (
       <Content padder>
         {dataItem.map((data, index) =>
         (
         <Button
          onPress={() => this.searchFecthData(data.title)}
          key={index}
          full
          transparent
         >
           <Text>
              {data.title}
           </Text>
         </Button>
         )

         )}
         {/* <Accordion
              dataArray={dataItem}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: 'green' }}
              expandedIconStyle={{ color: 'red' }}
            /> */}
       </Content>
       )
        }
      </Container>
    );
  }
}


export default Category;
