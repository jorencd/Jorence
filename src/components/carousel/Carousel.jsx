import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Carousel() {
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
      <SwiperSlide>
        <div className="lg:w-64 lg:h-54 h-44 w-44 duration-500 group overflow-hidden relative rounded-2xl bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
          <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
          <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
          <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
          <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>

          <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <span className="font-semibold text-lg">Text title</span>
            <p className="lg:text-sm text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              volutpat felis nec rutrum vulputate. Morbi ut lobortis enim. Nam
              nec elit nibh.
            </p>
            <button className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-bold w-full p-2 lg:text-sm text-xs">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>

      {[1, 2, 3, 4].map((num) => (
        <SwiperSlide key={num}>
          <div className="lg:w-64 lg:h-54 h-44 w-44 bg-white border border-black/20 p-5 lg:p-9 space-y-2 lg:space-y-3 relative overflow-hidden rounded-2xl">
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-violet-500 rounded-full absolute -right-3 -top-4 lg:-right-5 lg:-top-7">
              <p className="absolute bottom-3 left-4 lg:bottom-6 lg:left-7 text-white text-lg lg:text-2xl">
                0{num}
              </p>
            </div>
            <div className="fill-violet-500 w-8 lg:w-12">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
              </svg>
            </div>
            <h1 className="font-bold text-sm lg:text-xl text-[#2e2e2e]">
              UI / UX Creative Design
            </h1>
            <p className="lg:text-sm text-[10px] text-zinc-500 leading-4 lg:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
              adipisicing elit
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
