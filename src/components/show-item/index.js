import React from 'react';
import { Content, Card, CardItem, Body, Text } from 'native-base';

const dataItem = [
  {
"name":"Mastela Fruit",
  "type":8,
  "image":null,
  "global_sea_diff":-35.2,
  "global":{
"week":{
"data":[{
"snap":false,
  "price":950681,
  "time":"2019-04-17T09:05:13Z"
},
{
"snap":false,
"price":929664,
"time":"2019-04-18T09:08:36Z"
},
{
"snap":false,
"price":956952,
"time":"2019-04-19T14:33:56Z"
},
{
"snap":false,
"price":1093794,
"time":"2019-04-20T09:04:09Z"
},
{
"snap":false,
"price":1070042,
"time":"2019-04-21T09:04:14Z"
},
{
"snap":false,
"price":1443132,
"time":"2019-04-22T09:04:28Z"
},
{
"snap":false,
"price":1806973,
"time":"2019-04-23T09:04:56Z"
}],
"change":90.1
},
"latest":1806973,
"latest_time":"2019-04-23T09:04:56Z"
},
"sea":{
"week":{
"data":[{
"snap":false,
"price":679154,
"time":"2019-04-17T11:18:07Z"
},
{
"snap":false,
"price":714735,
"time":"2019-04-18T11:20:57Z"
},
{
"snap":false,
"price":763498,
"time":"2019-04-19T10:19:21Z"
},
{
"snap":false,
"price":766629,
"time":"2019-04-20T11:16:49Z"
},
{
"snap":true,
"price":923574,
"time":"2019-04-21T11:14:00Z"
},
{
"snap":false,
"price":1205726,
"time":"2019-04-22T11:16:19Z"
},
{
"snap":false,
"price":1171545,
"time":"2019-04-23T11:18:01Z"
}],
"change":72.5
},
"latest":1171545,
"latest_time":"2019-04-23T11:18:01Z"
}
},
{
"name":"Seed of Mastela",
"type":11,
"image":null,
"global_sea_diff":-33.7,
"global":{
"week":{
"data":[{
"snap":false,
"price":155822,
"time":"2019-04-17T09:09:35Z"
},
{
"snap":false,
"price":162121,
"time":"2019-04-18T09:12:22Z"
},
{
"snap":false,
"price":185506,
"time":"2019-04-19T14:37:46Z"
},
{
"snap":false,
"price":182045,
"time":"2019-04-20T09:07:54Z"
},
{
"snap":false,
"price":189353,
"time":"2019-04-21T09:08:06Z"
},
{
"snap":false,
"price":250432,
"time":"2019-04-22T09:08:21Z"
},
{
"snap":false,
"price":279083,
"time":"2019-04-23T09:08:44Z"
}],
"change":79.1
},
"latest":279083,
"latest_time":"2019-04-23T09:08:44Z"
},
"sea":{
"week":{
"data":[{
"snap":false,
"price":117808,
"time":"2019-04-17T11:23:39Z"
},
{
"snap":false,
"price":133035,
"time":"2019-04-18T11:26:47Z"
},
{
"snap":false,
"price":139949,
"time":"2019-04-19T10:25:41Z"
},
{
"snap":false,
"price":137766,
"time":"2019-04-20T11:22:55Z"
},
{
"snap":true,
"price":154794,
"time":"2019-04-21T11:18:58Z"
},
{
"snap":false,
"price":195462,
"time":"2019-04-22T11:22:18Z"
},
{
"snap":false,
"price":185035,
"time":"2019-04-23T11:24:55Z"
}],
"change":57.1
},
"latest":185035,
"latest_time":"2019-04-23T11:24:55Z"
}
}];

function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

  const ShowItem = (props) => (
  <Content>
    {props.searchData.map( (data, index) => (
    <Card key={index}>
      <CardItem>
        <Body>
          <Text>
             Name: {data.name}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
             Last Price: {data.global.latest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </Body>
      </CardItem>
    </Card>
    ))}
  </Content>
  )

export default ShowItem;