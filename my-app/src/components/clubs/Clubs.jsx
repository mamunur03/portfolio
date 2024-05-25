import React from 'react';
import './clubs.css';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const data = [];

const Clubs = () => {
  return (
    <section id='clubs'>
      <h2>ECAs</h2>
      {data.length > 0 ? (
        <Swiper
          className="container clubs__container"
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
        >
          {data.map(({ title, position, image }, index) => (
            <SwiperSlide key={index} className="club">
              <div className='club__image'>
                <img src={image} alt={title} />
              </div>
              <h5 className='club__name'>{title}</h5>
              <h5 className='club__position'>{position}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className='no-ecas-message'>
          <p>Currently no ECAs have been done, but I am currently working on it to build my communication skills</p>
        </div>
      )}
    </section>
  );
};

export default Clubs;
