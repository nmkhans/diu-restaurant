import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

import Images from "./../util/Images";
import SliderContent from "./SliderContent";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
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
          <SliderContent>
            <h2 className="text-5xl text-base-100 mb-3">
              The <span className="text-primary">best</span> in the
              town
              <span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-base-200">
              We are the best in the town that servers the best food.
              If you want the best, we are here{" "}
              <span className="text-primary">...</span>
            </p>
            <Link to="/shop">
              <button className="btn btn-primary w-[150px] mt-3 text-white">
                Shop
              </button>
            </Link>
          </SliderContent>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="h-[550px] w-full object-cover"
            src={Images.slideTwo}
            alt=""
          />
          <SliderContent>
            <h2 className="text-5xl text-base-100 mb-3">
              We serve the{" "}
              <span className="text-primary">quality</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-base-200">
              Our concern is th serve you the best food you can ever
              think. So if you want quality taste, we are the perfect
              place for you
              <span className="text-primary">...</span>
            </p>
            <Link to="/shop">
              <button className="btn btn-primary w-[150px] mt-3 text-white">
                Shop
              </button>
            </Link>
          </SliderContent>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="h-[550px] w-full object-cover"
            src={Images.slideThree}
            alt=""
          />
          <SliderContent>
            <h2 className="text-5xl text-base-100 mb-3">
              We have all <span className="text-primary">foods</span>{" "}
              you can think
              <span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-base-200">
              Our priority is to serve you what you desire. We have all kind and all varaities of food
              <span className="text-primary">...</span>
            </p>
            <Link to="/shop">
              <button className="btn btn-primary w-[150px] mt-3 text-white">
                Shop
              </button>
            </Link>
          </SliderContent>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
