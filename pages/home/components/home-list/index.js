import React from 'react';
import { ListView } from '@ant-design/react-native';
import {
  getHomeList,
} from '../../service';
import {
  baseImgUrl
} from '../../../constants';
import {
  ItemWrapper,
  ImgWrapper,
  Image,
  TextWrapper,
  Title,
  Brief,
} from './style';


function Index(props) {

  const { navigation } = props;
  async function onFetch(page = 1, startFetch, abortFetch) {
    try {
      // 每次获取20条
      const pageLimit = 20;
      const response = await getHomeList(page);
      const data = await response.json();
      startFetch(data, pageLimit);
    } catch (err) {
      abortFetch();
    }
  }
  function renderItem(item) {

    const { bookTitle, brief, imgInfo: { imgid } } = item;
    const uri = `${baseImgUrl}${imgid}.jpg`;
    const imgProps = {
      source: {
        uri,
      },
      resizeMode: 'cover'
    }
    return (
      // 点击跳转到简介
      <ItemWrapper onPress={() => navigation.navigate('Brief', { book: item, uri })}>
        <ImgWrapper>
          <Image {...imgProps} />
          <TextWrapper>
            <Title>{bookTitle}</Title>
            <Brief numberOfLines={4}>{brief}</Brief>
          </TextWrapper>
        </ImgWrapper>
      </ItemWrapper>
    )
  }
  const listProps = {
    onFetch,
    keyExtractor: (item, index) => `${item} - ${index}`,
    renderItem,
    numColumns: 2
  };

  return (
    <ListView {...listProps} />
  )
};

export default Index;