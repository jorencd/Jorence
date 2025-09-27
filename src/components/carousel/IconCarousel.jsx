// IconCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Icon } from "@iconify/react";

// Import slick carousel styles
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const IconCarousel = ({ allTech }) => {
  // Combine all tech stacks into one array
  const techStack = [...allTech];

  const settings = {
    infinite: true, // Infinite loop
    speed: 6000, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed for autoplay (0 means no delay)
    slidesToShow: 4, // Show 5 icons at a time
    slidesToScroll: 1, // Scroll one icon at a time
    cssEase: 'linear', // Smooth transition
    pauseOnHover: false, // Don't pause on hover
    arrows: false, // Disable arrow buttons
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center justify-center mt-20 carousel-item">
            <div className="flex flex-col items-center">
              {/* Apply custom size and white color to icons */}
              <Icon
                icon={tech.svg.props.icon}
                className="size-12 sm:size-12 md:size-17 lg:size-20"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IconCarousel;
