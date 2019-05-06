import React, { Component } from 'react';
import SearchField from '../../components/search-field';
import ShowItem from '../../components/show-item';
import { SafeAreaView } from 'react-native';
import { RoutesDrawer }  from '../../routes';
import {
  Accordion,
  Button,
  Container,
  Content,
  Spinner,
  Text,
  View,
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {Button as ButtonNative} from 'react-native';

class MainPage extends Component {
  // static navigationOptionsHeader = ({navigation}) => {
  //   console.log(navigation);
  //   // const as = {...RoutesDrawer};
  //   // console.table(as);
  //  return {
     
  //   headerLeft: (
      
  //       <Icon.Button  
  //       name="ios-menu" 
  //       size={30} 
  //       color="#800" 
  //       type="clear"
  //       backgroundColor= "transparent"
  //       onPress={() => alert("Im here!")} 
  //       />
      
  //   ),
  // }};

  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      allData: [],
      loading: false,
      loadingSearch: false,
      itemsFrom: {begin: 0,  end: 200},
      searchItemName: '',
      searchData: [],
    };
  }


  componentDidMount(){ }

  onChangeName = (name) => {
    this.setState({searchItemName: name});
    // console.log(name);
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

  searchFecthData = async () => {
    const {searchItemName } = await this.state;
    const data =  await fetch(`https://www.romexchange.com/api?item=${searchItemName}&exact=false`);
    return await data.json();
  }

  onClearSearch = () => {
    this.setState({ searchData: [], dataArray: [] });
  }

  onPresseKeyBoardConfirm = (e) => {
    if(e.nativeEvent.key === undefined) {
        this.onSearch();
    }
  };

  onSearch = async () => {
    const {searchItemName } = await this.state;
    if(!searchItemName)
      return;
    this .setState({loadingSearch: true });
    const data = await this.searchFecthData(searchItemName);
    this.setState({ searchData: data, searchItemName: ''});
    this .setState({loadingSearch: false });
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
    const {
      dataArray,
      loading,
      itemsFrom,
      searchData,
      searchItemName,
      loadingSearch
    } = this.state;
    return (

      <Container>
      <SearchField
        onSearch={this.onSearch}
        onChangeName={this.onChangeName}
        searchItemName={searchItemName}
        loadingSearch={loadingSearch}
        onClearSearch={this.onClearSearch}
        onPresseKeyBoardConfirm={this.onPresseKeyBoardConfirm}
        />

      <ShowItem searchData={searchData} />

        <View
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"}}
        >
          <Button
            disabled={loading}
            onPress={this.onShowItems} center rounded info>
              <Text>Items from {!loading && `${itemsFrom.begin} - ${itemsFrom.end}`}</Text>
              {loading && <Spinner/>}
          </Button>
            <Button onPress={() => this.props.navigation.toggleDrawer()}>
             <Text>Abra</Text>
          </Button>
        </View>

        {dataArray.length > 0 && <Content padder>
            <Accordion
              dataArray={dataArray}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
            />
          </Content>
        }
        </Container>
 
    );
  }
}

export default MainPage;
