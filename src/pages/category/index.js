import React, { Component } from 'react';

import { 
  Container, 
  Spinner, 
  Content,   
  Accordion, 
  Text,
} from 'native-base';

class Category extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Category Page',
    };
  };

  constructor(props){
    super(props);
    this.state = {
      dataArray: [],
      loading: false,
    }
  }

  async componentDidMount() {
    await this.onShowItems();
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

  
  fecthData = async () => {
    const data =  await fetch('https://www.romexchange.com/api/items.json');
    return await data.json();
  }

  onShowItems = async () => {
    this .setState({loading: true });
    const datas = await this.fecthData();
    const categor = {};
    
    
    const dataArr = datas.map(data => {
      if(categor[this.getTypeData(data.type)] === undefined){
        categor[this.getTypeData(data.type)] = [];
      }
      categor[this.getTypeData(data.type)].push(
      {
          title: data.name,
          content: this.getTypeData(data.type),
          // idItem: data.type,
        }
      )

      return(
      {
        title: data.name,
        content: this.getTypeData(data.type),
        idItem: data.type,
      }
    )}
    )
    this.setState({ dataArray: categor, loading: false, });
    console.log("Categori Apertou que eu vi", categor);
  }

  render() {
    const {dataArray, loading} = this.state;
    const dataItem = dataArray['Off-hand: card'] ? dataArray['Off-hand: card'] : [];
    dataItem && console.log('render', dataItem[0]);
    return (
     <Container>
       {loading && <Spinner /> }
      {dataItem && 
      <Content>
        {dataItem.map( (item, index) => 
            <Text key={index}>
              {item.title}
            </Text>
          )}
      </Content>
        }

       {/* { dataArray && dataArray.length > 0 && (
          <Content padder>
            <Accordion
              dataArray={dataArray['Off-hand: card']}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
            />
          </Content>)
        } */}
     </Container>
    );
  }
}


export default Category;
