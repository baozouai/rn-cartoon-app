import React from 'react';
import {
  Carousel
} from '@ant-design/react-native';
import HomeList from '../components/list-page';
import {
  SafeAreaView,
  CarouselImageView,
  CarouselImage,
} from './style';
import { getHomeList } from './service';

function Home(props) {

  const {
    navigation
  } = props;

  const arr = [require('../../assets/img/swiper1.jpg'), require('../../assets/img/swiper2.jpg'), require('../../assets/img/swiper3.jpg')]
  const listProps = {
    navigation,
    service: getHomeList,
  }
  return (
    <SafeAreaView>
      <Carousel
        selectedIndex={2}
        autoplay
        infinite
      >
        {arr.map(source => (
          <CarouselImageView key={source}>
            <CarouselImage resizeMode="cover" source={source} />
          </CarouselImageView>
        ))}
      </Carousel>
      <HomeList {...listProps} />
    </SafeAreaView>
  )
};

export default Home;