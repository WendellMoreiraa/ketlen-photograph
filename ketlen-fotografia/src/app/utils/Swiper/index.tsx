'use-client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Img from '@/app/components/img';
import ImagesCollection from '../imagensCollection';

const SwiperHome = () => {
  return (
    <div>
      <Swiper
        spaceBetween={8}
        breakpoints={{
          300: { slidesPerView: 3 },
          410: {
            slidesPerView: 3,
            spaceBetween: 1
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 2
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 3
          }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ImagesCollection.map((imageItem, index) => (
          <SwiperSlide key={index}>
            <Img src={imageItem.img} alt={imageItem.client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperHome;
