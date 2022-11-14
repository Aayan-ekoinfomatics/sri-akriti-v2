import React from "react";
import img from "../../assets/images/chain.png";

const Account = () => {
  return (
    <div className="bg-white">
      <div className="w-full text-center py-10">
        <h1 className="lora italic text-[24px]">My Account</h1>
      </div>

      {/* main flex */}
      <div className="w-[90%] mx-auto mb-16 md:grid grid-cols-2 md:gap-4 md:px-16">
        {/* flex item - orders*/}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0">
          <div className="w-full flex justify-between md:px-3 py-2 lora text-[15px]">
            <h1 className="font-[500]">My Orders</h1>
            <h1 className="tracking-[2px]">All Orders</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <img src={img} className="w-[40px]" />
            <h1>Necklace II</h1>
            <h1>₹ 10000</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <img src={img} className="w-[40px]" />
            <h1>Necklace II</h1>
            <h1>₹ 10000</h1>
          </div>
        </div>
        {/* flex item - wishlist */}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0">
          <div className="w-full flex justify-between md:px-3 py-2 lora text-[15px]">
            <h1 className="font-[500]">Wihslist</h1>
            <h1 className="tracking-[2px]">Edit</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <img src={img} className="w-[40px]" />
            <h1>Necklace II</h1>
            <h1>₹ 10000</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <img src={img} className="w-[40px]" />
            <h1>Necklace II</h1>
            <h1>₹ 10000</h1>
          </div>
        </div>
        {/* flex item - card mobile*/}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0 block md:hidden">
          <div className="w-full flex justify-between md:px-3 py-2 lora text-[15px]">
            <h1 className="font-[500]">Cards</h1>
            <h1 className="tracking-[2px]">Edit</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <h1 className="poppins text-[10px]">4454-0213-4594-4523</h1>
            <h1 className="poppins text-[10px]">623</h1>
          </div>
          <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
            <h1 className="poppins text-[10px]">Vicky Waelchi</h1>
            <h1 className="poppins text-[10px]">12/23</h1>
          </div>
        </div>
        {/* flex item - account*/}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0 md:row-start-2 md:row-end-4">
          {/* flex item - account mobile  */}
          <div className="flex md:hidden w-full justify-between md:px-3 py-2 lora text-[14px]">
            <h1 className="font-[500]">My Account</h1>
            <h1 className="tracking-[2px]">Edit</h1>
          </div>
          <div className="block md:hidden  py-2 lora text-[14px] tracking-[1.5px]">
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">First Name</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Last Name</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Gender</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Date Of Birth</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Email ID</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Phone Number</label>
                <input type="text" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full py-2">
                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Pincode</label>
                <input type="text" className="w-full" />
            </div>
          </div>
          {/* flex item - account desktop */}
          <div className="hidden md:block w-full px-3 bg-[#E3E3E3] my-4 md:my-0 md:row-start-2 md:row-end-4">
            <div className="w-full flex justify-between md:px-3 pb-2 pt-8 lora text-[14px]">
                <h1 className="font-[500]">My Account</h1>
                <h1 className="tracking-[2px]">Edit</h1>
            </div>
            <div className="flex gap-6 py-3">
                <div className="w-[50%]">
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">First Name</label>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Gender</label>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Email ID</label>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Phone Number</label>
                        <input type="text" className="w-full" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Last Name</label>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Date Of Birth</label>
                        <input type="text" className="w-full" />
                    </div>
                    
                    <div className="flex flex-col items-start justify-center w-full py-2">
                        <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Pincode</label>
                        <input type="text" className="w-full" />
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* flex item - address */}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0">
          <div className="w-full flex justify-between md:px-3 py-2 lora text-[14px]">
            <h1 className="font-[500]">Address</h1>
            <h1 className="tracking-[2px]">Edit</h1>
          </div>
          <div className="flex flex-col justify-start py-2 md:px-3 lora text-[11px] tracking-[1.5px]">
            <h1>1, 1 Ashish Shopping Centre, C G Road, Navrangpura</h1>
            <h1>Ahmedabad, Gujrat</h1>
            <h1>380009</h1>
          </div>
        </div>
        {/* flex item - card desktop */}
        <div className="w-full border-2 px-3 bg-[#E3E3E3] my-4 md:my-0 md:block hidden md:col-start-2">
          <div className="w-full flex justify-between md:px-3 py-4 lora text-[14px]">
            <h1 className="font-[500]">Cards</h1>
            <h1 className="tracking-[2px]">Edit</h1>
          </div>
          <div className="flex justify-between items-center py-2  md:px-3 lora text-[14px] tracking-[1.5px]">
            <h1 className="poppins text-[10px]">4454-0213-4594-4523</h1>
            <h1 className="poppins text-[10px]">623</h1>
          </div>
          <div className="flex justify-between items-center py-2  md:px-3 lora text-[14px] tracking-[1.5px]">
            <h1 className="poppins text-[10px]">Vicky Waelchi</h1>
            <h1 className="poppins text-[10px]">12/23</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
