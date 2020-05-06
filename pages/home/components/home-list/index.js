import React from 'react';
import { Text } from 'react-native';
import { ListView } from '@ant-design/react-native';
import {
  getHomeList,
} from '../../service';
import {
  baseUrl
} from '../../../constants';
import {
  ItemWrapper,
  ImgWrapper,
  Image,
  TextWrapper,
  Title,
  Brief,
} from './style';

const baseImgUrl = `${baseUrl}/img/bookimg/`;

function Index() {

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
    const { bookTitle, brief } = item;
    const uri = baseImgUrl + item.imgInfo.imgid + '.jpg';
    const imgProps = {
      source: {
        uri,
      },
      resizeMode: 'cover'
    }
    return (
      <ItemWrapper>
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