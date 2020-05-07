import React from 'react';
import {
  Carousel
} from '@ant-design/react-native';
import HomeList from './components/home-list';
import {
  SafeAreaView,
  CarouselImageView,
  CarouselImage,
} from './style';

function Home(props) {

  const {
    navigation
  } = props;

  const arr = [require('../../assets/img/swiper1.jpg'), require('../../assets/img/swiper2.jpg'), require('../../assets/img/swiper3.jpg')]

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
      <HomeList navigation={navigation}/>
    </SafeAreaView>
  )
};

export default Home;