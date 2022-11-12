import React from "react";
import chain from "../../assets/images/chain-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import arrow from "../../assets/icons/arrow.svg";
// import { data } from "autoprefixer";
import product_details from "../../mockapi/singleProductPageApi";
import collection_data from "../../mockapi/apiData";
import { Link } from "react-router-dom";

const Productpage = () => {
  return (
    <>
      <div className="md:flex gap-5 w-[95%] mx-auto ">
        <div className=" md:w-[50%]">
          <div className="pl-2 flex gap-4 items-center tracking-[2px] text-[11px] md:text-[18px] my-3 md:my-10">
            {/* Home / Necklace / Type 1 Necklace Platinum */}
            {
              product_details?.product[0]?.breadcrumbs?.map((data, i) => (
                <h1 className="poppins leading-[1px] cursor-pointer">{data?.link_name} {product_details?.product[0]?.breadcrumbs?.length === i + 1 ? '' : <span>/</span>} </h1>
              ))
            }
          </div>
          <div className="w-[95%] mx-auto object-cover mb-2 md:flex gap-1 justify-center items-center md:pb-16 md:pr-12 lg:pb-24 lg:pr-24">
            {/* mobile slider */}
            <Slider
              className="w-full mx-auto z-[780] md:hidden"
              slidesToScroll={1}
              slidesToShow={1}
              infinite
              dots={true}
              dotsClass="slick-dots"
            >
              {product_details?.images?.map((data, i) => (
                <div key={i} className=" max-w-[100%] h-[100%]">
                  <img
                    src={data?.img}
                    alt=""
                    className="object-contain w-[95%] mx-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* desktop pictures */}

            {product_details?.product?.map((datas, index) => (
              <React.Fragment key={index}>
                <div className="hidden md:block w-[25%]">
                  <div className="w-full flex flex-col gap-[13px]">
                    <div className="w-[95%]">
                      <img src={datas?.images[0]} className="w-[97%]" />
                    </div>
                    <div className="w-[95%]">
                      <img src={datas?.images[1]} className="w-[97%]" />
                    </div>
                    <div className="w-[95%]">
                      <img src={datas?.images[2]} className="w-[97%]" />
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-[75%]">
                  <img src={datas?.images[0]} className="w-[95%]" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="lora w-[95%] md:w-[50%] pt-12 mx-auto tracking-[2px] mt-6">
          {product_details?.product?.map((data, i) => (
            <div key={i}>
              <h1 className="text-[20px] sm:text-[30px] md:text-[36px] my-2 md:my-[20px] lg:my-[35px] font-[600]">
                {data?.title}
              </h1>
              <h1 className="text-[18px] sm:text-[26px] md:text-[29px] my-6 md:my-[20px] lg:my-[40px]">
                ₹{data?.discount_price}{" "}
                <span className="line-through">₹{data?.original_price}</span>{" "}
                {data?.offer}
              </h1>
              <div className=" w-full sm:w-[55%] md:w-[60%] p-2">
                <div className="flex justify-between w-full poppins text-[13px] tracking-[2px]">
                  <h1>Delivery Date</h1> <h1>{data?.delivery_date}</h1>
                </div>
                <input
                  type="text"
                  placeholder="Pincode"
                  className=" w-full border border-[#41C5BE] p-2 md:p-4 tracking-[2px] lora text-[14px] md:text-[20px]"
                />
              </div>
              <h1 className="text-[12px] sm:text-[14px] md:text-[17px] my-10 md:my-[20px] lg:my-[40px] poppins text-[#575757ec]">
                {data?.discription}
              </h1>
              <button className="bg-[#3EDCFF] poppins text-white text-[22px] font-[300] mb-8 px-12 md:px-24 md:my-[20px] lg:my-[30px] shadow-lg py-[5px] md:py-[12px] flex justify-center items-center">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[93%] mx-auto flex justify-start items-center gap-2 md:gap-4 my-4 mb-10">
        <div className="w-[8px] md:w-[18px]">
          <img src={arrow} className="w-full" />
        </div>
        <h1 className="lora text-[22px] md:text-[36px] font-[600] tracking-[2px]">
          Similar
        </h1>
        <h1 className="lora text-[14px] md:text-[22px] font-[400] ml-4 md:ml-8 tracking-[2px]">
          to this one
        </h1>
      </div>
      <div>
        <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mb-10">
          {collection_data?.products?.map((data, i) => (
            <div className="p-1" key={i}>
              <div>
               <Link to='/product-details'> <img src={data?.image} className="" /></Link>
              </div>
              <button className="w-full text-white tracking-[1px] md:tracking-[3px] text-[15px] md:text-[20px] bg-[#3EDCFF] px-4 md:px-7 py-2">
                ADD TO CART
              </button>
              <h1 className="text-[14px] py-2 md:text-[23px] font-[500] tracking-[3px]">
                ₹{data?.price}
              </h1>
              <h1 className="text-[12px] md:text-[19px] font-[400] tracking-[3px]">
                {data?.product_name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productpage;
