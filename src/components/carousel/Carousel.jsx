import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Offercard from "../cards/offerCard/Offercard";

function Carousel({ darkMode }) {

  const carousel = [
    {
      title: "Web Game Development",
      description:
        "Create immersive web-based games with modern technologies, tailored to your unique creative vision.",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Building responsive and dynamic websites from front-end to back-end, ensuring scalability and smooth performance.",
    },
    {
      title: "Custom Website Design",
      description:
        "Design beautiful, user-friendly websites with a focus on intuitive UI/UX, enhancing both functionality and aesthetics.",
    },
    {
      title: "Digital Art & Portrait Drawing",
      description:
        "Offering professional portrait drawings and paintings.",
    },
    {
      title: "Graphic Design for Branding",
      description:
        "Providing graphic design services for logos, branding, social media graphics, and promotional materials.",
    },
  ];

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.75}
      breakpoints={{
        640: {
          spaceBetween: 15,
          slidesPerView: 2.5,
        },
        1024: {
          spaceBetween: 25,
          slidesPerView: 3.25,
        },
      }}
    >
      
      {carousel.map((offer, index) => (
        <SwiperSlide key={index}>
          <Offercard key={index} {...offer} index={index + 1} darkMode={darkMode} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
