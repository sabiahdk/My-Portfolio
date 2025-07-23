import React from "react";
import { FaBars } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
const Button = () => {
  return (
       <div >
         
        <div className="border h-30 flex justify-center items-center gap-12 font-semibold   " >
      <div className="py-7 cursor-pointer px-6 bg-cyan-900 border rounded-full text-cyan-50 hover:bg-white hover:text-black">
        <button className=""> MY CV</button>
      </div>
      <div className="py-7 px-6 bg-cyan-950 border rounded-full text-cyan-200 hover:bg-gray-800 hover:text-white ">
        <button className="flex items-center">
          {" "}
          <span>
            <MdContactMail />
          </span>
          Contact Me
        </button>
         
      </div>
        
        <div> <FaBars className="min-md:hidden" /></div>

         



    </div>
       </div>
    
  );
};

export default Button;
