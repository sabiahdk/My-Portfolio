import React from "react";

const Hero = () => {
  return (
    <div className="  p-10  h-[100vh] flex justify-around  max-md:flex-col">
      <div className=" w-[50%] max-md:w-[70%] m-3.5">
        <h1
          className=" font-extrabold h-20  text-2xl " >  ABOUT ME
        </h1>
        <div>
          <h1 className="font-extrabold text-2xl max-md:w-3xs ">
            I am Sabiah Muhammad Dankano
          </h1>
          <h2>
            An aspiring Full-Stack Developer and Data Analyst/Scientist
            passionate about building functional, responsive user interfaces and
            uncovering insights through data to uncover insights that drive
            better decisions.
          </h2>
          <p className="max-md:hidden">
            I thrive in roles where I can blend logic, creativity, and critical
            thinking delivering solutions that are both technically sound and
            strategically informed.
          </p>
        </div>
      </div>

      <div>
        <div>
          <img
            className="h-60 w-56 rounded-4xl m-6" src="/image/myimage.jpg " alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
