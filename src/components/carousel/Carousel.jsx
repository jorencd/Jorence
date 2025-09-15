import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Carousel() {
  return (
    <Swiper
      spaceBetween={5} // default gap
      slidesPerView={2.5}
      breakpoints={{
        640: {
          // ≥ 640px (tablet)
          spaceBetween: 10,
          slidesPerView: 4.5,
        },
        1024: {
          // ≥ 1024px (desktop)
          spaceBetween: 10,
          slidesPerView: 4.5,
        },
      }}
    >
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide3</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide4</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide5</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide6</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <p className="text-center">slide7</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
