import React, { Component } from 'react';
import { AppRegistry, ScrollView,Image } from 'react-native';
//import Button from '@ant-design/react-native/lib/button';
import { Button } from '@ant-design/react-native';
class HelloWorldApp extends Component {
  
  constructor(){
    super()
    this.state = {imgList: [],info:{referer: 'http://www.gmanhua.com/other1567426-p4/'}}
  }
  getArticle = async ()=>{
    let res = await fetch('http://192.168.1.104:3000/article')
    let result = await res.json()
    console.warn(result.imgList)
    let page = result.page;
    //let imgList = result.imgList.slice((page-1)*5,page*5) 
    //console.warn(imgList)
    this.setState({
      imgList:result.imgList,
      info:result
    })
  }
  render() {
    //http://manhua33.tel.cdndm5.com/21/20952/987515/21_4883.jpg?cid=1569423&key=9a1000f7b383ca40a110a4347af07b16
    return (
      <ScrollView>
      <Button onPress={this.getArticle}>Start1</Button>
      <Image 
      style={{width:200,height:200,borderWidth:1,borderColor:"#000"}} 
      source={{uri:`http://192.168.1.104:3000/img?referer=${this.state.info.referer}&url=http://manhua33.tel.cdndm5.com/21/20952/984721/16_1579.jpg?cid=1567426&key=4aa72fa943cc86cd184bda020cce12f7`}}></Image>
      
      {
        this.state.imgList.map((item,i)=>{
          return (
            <Image  
            style={{width:200,height:200,borderWidth:1,borderColor:"#000"}} 
            source={{uri:`http://192.168.1.104:3000/img?referer=${this.state.info.referer}&url=${item}`}} key={i}></Image>
          )
        })
      }
      
      </ScrollView>
      
    );
  }
}

export default HelloWorldApp