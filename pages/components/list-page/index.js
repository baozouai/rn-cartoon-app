import React from 'react';
import { ListView } from '@ant-design/react-native';
import {
  baseImgUrl
} from '../../constants';
import {
  ItemWrapper,
  ImgWrapper,
  Image,
  TextWrapper,
  Title,
  Brief,
} from './style';
import {
  onFetch as fetchData
} from '../../../util';

function Index(props) {

  const { navigation, category, service } = props;

  function renderItem(item) {
    const { bookTitle, brief, imgInfo: { imgid } } = item;
    const uri = `${baseImgUrl}bookimg/${imgid}.jpg`;
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
            <Brief numberOfLines={2}>{brief}</Brief>
          </TextWrapper>
        </ImgWrapper>
      </ItemWrapper>
    )
  }
  const listProps = {
    onFetch: (page, startFetch, abortFetch) => fetchData({ page, category, startFetch, abortFetch, service }),
    keyExtractor: (item, index) => `${item} - ${index}`,
    renderItem,
    numColumns: 2
  };

  return (
    <ListView {...listProps} />
  )
};

export default Index;