import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import one from '../../img/restaurant.jpg';
import two from '../../img/spa.jpg';
import three from '../../img/swimming.jpg';
import four from '../../img/airport transfers.jpg';

const Services = () => {
  return (
    <div className="services mt-5 pt-4">
      <Swiper
        modules={[Navigation, Thumbs]}
        loop={true}
        spaceBetween={10}
        navigation={true}
        grabCursor={true}
        className="swiper-slide"
       breakpoints={{ 
        0:{
          slidesPerView:1,
          spaceBetween:10
        },
        468:{ 
          slidesPerView:2,
          spaceBetween:10
        },
        768:{ 
          slidesPerView:4,
          spaceBetween:10
        },
       }}
      >
        <SwiperSlide className="swiper one">
          <div className="img-container">
            <img src={two} alt="" className="slide-img" />
            <div className="txt">
              <i className="fa-solid fa-spa spa"></i>
              <h5>Spa - Beauty and Health</h5>
              <p className="ser-para">This is achieved through treatments as well as through meditation or relaxation.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper one">
          <div className="img-container">
            <img src={three} alt="" className="slide-img" />
            <div className="txt">
              <i className="fa-solid fa-person-swimming spa"></i>
              <h5>Swimming Pool</h5>
              <p className="ser-para">Dive into relaxation at our hotel's inviting swimming pool. Surrounded by a tranquil oasis</p>
            </div>
          </div>
        </SwiperSlide>

        {/* three */}
        <SwiperSlide className="swiper one">
          <div className="img-container">
            <img src={one} alt="" className="slide-img" />
            <div className="txt">
              <i className="fa-solid fa-utensils spa"></i>
              <h5>Restaurant</h5>
              <p className="ser-para">From fine dining to professional service promise a memorable dining experience.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* four */}
        <SwiperSlide className="swiper one">
          <div className="img-container">
            <img src={four} alt="" className="slide-img" />
            <div className="txt">
            <i className="fa-solid fa-utensils spa"></i>
            <i className="fa-solid fa-podium"></i>
              <h5>Airport transfers</h5>
              <p className="ser-para">
Seamless travel awaits with our hotel's convenient airport transfer service.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Services