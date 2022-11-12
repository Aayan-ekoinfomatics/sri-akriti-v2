import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import ring_1 from "../../assets/images/ring-1.png";
import ring_2 from "../../assets/images/ring-2.png";
import chain_1 from "../../assets/images/chain-1.png";
import chain_2 from "../../assets/images/chain-2.png";
import right_arrow from '../../assets/images/rightarrow.png'

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={` ${className} w-fit z-[800]`} onClick={onClick}>
      <img src={leftArrow} alt="previous" className=" w-[40px] md:w-[100px] lg:-translate-x-6" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} w-fit`} onClick={onClick}>
      <img src={rightArrow} alt="next" className=" w-[40px] md:w-[100px] lg:translate-x-7" />
    </div>
  );
};

const FourthSection = () => {
  return (
    <>
      {/* desktop view */}
      <div className="hidden md:block mb-20">
        <div className="flex w-[90%] mx-auto pb-5 pt-16 items-center justify-between">
          <h1 className="lora italic text-[30px]">
            Made to last longer than life
          </h1>
          <p className="tracking-[8px] poppins text-[20px] leading-10">
            SEE FULL COLLECTION
          </p>
        </div>
        <div className="px-2">
        <Slider
          className="w-[92%] mx-auto pt-5 pb-10 z-[780]"
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToScroll={1}
          slidesToShow={4}
          infinite
        >
          <div className=" max-w-[100%] h-[100%]">
            <img src={chain_1} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={chain_2} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={ring_1} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={ring_2} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={chain_1} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={chain_2} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={ring_1} className="object-contain" />
          </div>
          <div className=" max-w-[100%] h-[100%]">
            <img src={ring_2} className="object-contain" />
          </div>
        </Slider>
        </div>
      </div>


      {/* mobile view */}
      <div className="block md:hidden py-14 ">
        <div className="w-[90%] mx-auto ">
          <h1 className="lora italic text-[20px]">
            Made to last longer than life
          </h1>
          <Slider
            className="w-[95%] mx-auto pt-5 pb-10"
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToScroll={1}
            slidesToShow={2}
            infinite
          >
            <div className=" max-w-[100%] h-[100%]">
              <img src={chain_1} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={chain_2} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={ring_1} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={ring_2} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={chain_1} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={chain_2} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={ring_1} className="object-contain" />
            </div>
            <div className=" max-w-[100%] h-[100%]">
              <img src={ring_2} className="object-contain" />
            </div>
          </Slider>
          <p className="tracking-[8px] poppins text-[12px] leading-10">
            SEE FULL COLLECTION
          </p>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
