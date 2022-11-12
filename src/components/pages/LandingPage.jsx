import React from "react";
import hero_img from "../../assets/images/hero-img.png";
import arrow from '../../assets/icons/arrow.svg'
import transparent_logo from "../../assets/icons/transparent-logo.png";
import SecondSection from "../landing-subcomponents/SecondSection";
import ThirdSection from "../landing-subcomponents/ThirdSection";
import FourthSection from "../landing-subcomponents/FourthSection";
import FifthSection from "../landing-subcomponents/FifthSection";
import SixthSection from "../landing-subcomponents/SixthSection";
const LandingPage = () => {
  return (
    <>
      <div className="w-full mx-auto">
        {/* desktop view */}
        <div className="w-[93%] hidden md:flex justify-around mt-[-25px] pb-[42px]">
          <div className="w-[8%] flex justify-center items-end pb-[200px]">
            <img src={arrow} className="" />
          </div>
          <div className="hidden flex-[0.9] md:flex items-center">
            <div className="flex w-[47%] flex-col justify-between items-center ">
              <div className="flex flex-1 flex-col items-start my-20 w-[80%] lora font-[16px] text-[#696969] text-[35px] leading-tight  ">
                <div>
                  <p>We design</p>
                  <p>We create and</p>
                  <p>We turn your story into reality</p>
                </div>
              </div>
              <div className="w-[45rem] flex-1 font-golden_signature overflow-auto text-[140px] text-[#3EDCFF] translate-x-[240px] translate-y-[100px]">the beauty of simplicity</div>
            </div>
            <div className=" w-[53%]">
              <img src={hero_img} className="w-[1500px]" />
            </div>
          </div>
        </div>
        {/* <ThirdSection /> */}

        {/* mobile view */}
        <div className="md:hidden">
          {/* <div className="w-full mt-3" > */}
          <ul className="flex justify-evenly w-full sm:w-[95%] mx-auto px-1">
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u  p-2 text-[14px] sm:text-[17px] text-gray-500" >NECKLESS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u  p-2 text-[14px] sm:text-[17px] text-gray-500" >BRACELETS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u  p-2 text-[14px] sm:text-[17px] text-gray-500" >RINGS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u  p-2 text-[14px] sm:text-[17px] text-gray-500" >EARINGS</li>
          </ul>
          {/* </div> */}
          <div className="w-[93%] mt-4 flex justify-between">
            <div className="flex flex-col justify-center pl-4 py-10 lora font-[16px] text-[#696969] w-max">
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >We Design</p>
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >We create and</p>
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >We turn your story into reality</p>
            </div>
            <div className="w-min sm:w-auto"><img src={transparent_logo} className="" /></div>
          </div>
          <div className="w-full">
            <img src={hero_img} className="w-full" />
            <div className="h-[8px] w-full bg-[#696969]"></div>
            <div className="font-golden_signature text-[80px] text-center w-full mx-auto text-[#41C5BE] -mt-32 mb-2">the beauty of simplicity</div>
          </div>
        </div>


        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </>
  );
};

export default LandingPage;
