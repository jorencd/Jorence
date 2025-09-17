import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Carousel() {
  return (
    <Swiper
      spaceBetween={15} // default gap
      slidesPerView={2.5}
      breakpoints={{
        640: {
          // ≥ 640px (tablet)
          spaceBetween: 20,
          slidesPerView: 3.5,
        },
        1024: {
          // ≥ 1024px (desktop)
          spaceBetween: 25,
          slidesPerView: 4.5,
        },
      }}
    >
      <SwiperSlide>
        <div className="w-full h-25 bg-[#F2F2F2] border border-[#d0d0d0] rounded-2xl flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-25 bg-[#F2F2F2] border border-[#d0d0d0] rounded-2xl flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-25 bg-[#F2F2F2] border border-[#d0d0d0] rounded-2xl flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-25 bg-[#F2F2F2] border border-[#d0d0d0] rounded-2xl flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-25 bg-[#F2F2F2] border border-[#d0d0d0] rounded-2xl flex items-center justify-center">
            <p className="text-center">slide1</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
