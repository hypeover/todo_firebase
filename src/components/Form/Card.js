import React, { useContext } from 'react'
import { SliderText, SwitchCard } from './styles/FormStyles'
import { FormContext } from './Form'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import './styles/swiper.css'
import { ReactComponent as First } from '.././assets/illustrations/first.svg'
import { ReactComponent as Second } from '.././assets/illustrations/second.svg'
import { ReactComponent as Third } from '.././assets/illustrations/third.svg'

const styles = {
  illustrations: {
    height: '80%',
    width: '70%',
  }
}

const Card = () => {

  const Context = useContext(FormContext)

  return (
    <SwitchCard switch={Context.switchBoolean}  >
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <First style={styles.illustrations} />
            <SliderText>Plan your daily tasks</SliderText>
          </SwiperSlide>
          <SwiperSlide>
            <Second style={styles.illustrations} />
            <SliderText>Keep track of your long-term goals</SliderText>
          </SwiperSlide>
          <SwiperSlide>
            <Third style={styles.illustrations} />
            <SliderText>Keep an eye on your progress</SliderText>
          </SwiperSlide>
      </Swiper>
    </SwitchCard>
  )
}

export default Card



//SPRAWDZIC CZY MOZE GLASSMORPHISM BY PASOWAL FAJNIE DO TEGO