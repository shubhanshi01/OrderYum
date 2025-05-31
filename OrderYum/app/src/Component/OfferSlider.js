import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const sliderImages = [
//   require('./images/food-menu-restaurant-social-media-banner-instagram-post-template_120329-4845.avif'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
  require('./images/5.jpg'),
  require('./images/1.jpg'),
];

const OfferSlider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay={true} showsPagination={true} dotColor="#ccc" activeDotColor="#FF914D">
        {sliderImages.map((img, idx) => (
          <Image key={idx} source={img} style={styles.slideImage} />
        ))}
      </Swiper>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#FEF3E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
