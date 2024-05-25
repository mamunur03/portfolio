import React from 'react';
import './achievements.css';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const data = [
  {
    title: 'Recipient of IUT Partial Scholarship',
    date: 'Year of Award: 2020',
    description: 'Awarded a partial scholarship by the Islamic University of Technology for academic excellence.',
  },
  {
    title: 'Recipient of the Daily Star Award and Edexcel High Achiever’s Award',
    date: 'Year of Award: 2019',
    description: 'Honored with the Daily Star Award and Edexcel High Achiever’s Award for outstanding performance in academics.'
  },
  {
    title: 'IGCSE World Highest Award in Mathematics B',
    date: 'Year of Award: 2018',
    description: 'Achieved the highest score worldwide in IGCSE Mathematics B.'
  },
  {
    title: 'IGCSE Country Highest Award in Mathematics',
    date: 'Year of Award: 2017',
    description: 'Achieved the highest score in the country in IGCSE Mathematics.'
  }
];

const Achievements = () => {
  return (
    <section id='achievements'>
      <h2>Achievements</h2>
      {data.length > 0 ? (
        <Swiper
          className="container achievements__container"
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {data.map(({ title, date, description, image }, index) => (
            <SwiperSlide key={index} className="achievement">
              {/*<div className='achievement__image'>
                <img src={image} alt={title} />
          </div>*/}
              <h5 className='achievement__title'>{title}</h5>
              <h5 className='achievement__date'>{date}</h5>
              <p className='achievement__description'>{description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className='no-achievements-message'>
          <p>Currently no achievements have been recorded, but I am working hard to accomplish new milestones.</p>
        </div>
      )}
    </section>
  );
};

export default Achievements;
