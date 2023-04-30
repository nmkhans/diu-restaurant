import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

import Images from "./../util/Images";

const Home = () => {
  return (
    <section className="h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[550px] w-full object-cover"
              src={Images.slideOne}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full z-10"></div>
            <div className="absolute top-[50%] left-[10%] w-full flex justify-start items-center z-20 text-white">
              hello
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[550px] w-full object-cover"
              src={Images.slideTwo}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full z-10"></div>
            <div className="absolute top-[50%] left-[10%] w-full flex justify-start items-center z-20 text-white">
              hello
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[550px] w-full object-cover"
              src={Images.slideThree}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full z-10"></div>
            <div className="absolute top-[50%] left-[10%] w-full flex justify-start items-center z-20 text-white">
              hello
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[550px] w-full object-cover"
              src={Images.slideFour}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full z-10"></div>
            <div className="absolute top-[50%] left-[10%] w-full flex justify-start items-center z-20 text-white">
              hello
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[550px] w-full object-cover"
              src={Images.slideFive}
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full z-10"></div>
            <div className="absolute top-[50%] left-[10%] w-full flex justify-start items-center z-20 text-white">
              hello
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
