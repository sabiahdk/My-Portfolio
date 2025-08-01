import React from "react";

const Skills = () => {
  return (
    <div className="border-b-cyan-900 bg-cyan-50 flex w-[20%] max-md:flex-col   ">
      <div className=" border bg-cyan-50 max-md:w-100 ">
        <div>
          <h1 className="font-bold  text-2xl py-4 px-4 ">SKILLS</h1>

          <div className=" py-5 px-7 max-md:flex-col w-[400px] ">
            <div  className="flex">
              <div >
                <h1 className="font-bold">FRONTEND</h1>
              </div>
              <div className="m-4 gap-4">
                <span>Html</span> <span>CSS</span> <span>Javascript</span>
                <span>React </span> <span>Tailwind css</span> <span>GIT</span>{" "}
                <span>Bootsrap</span>
                <span>Typescript</span> <span></span>
              </div>

              <div>
                <h1 className="font-bold">BACKEND</h1>
                <span>Mongo BD</span> <span>MYSQL</span> <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="border   py-10 px-10 m-6 max-md:w-[300px]  ">
            <h1 className="font-bold ">Data Analysis & Data Science</h1>
            <li>Microsoft Excel (data cleaning, pivot tables, charts)</li>
            <li>Python for Data (Pandas, NumPy, Matplotlib)</li>
            <li>SQL for data querying and manipulation</li>
            <li>Data Visualization and Descriptive Statistic</li>
          </div>
        </div>
      </div>
      <div className="m-3 bg-cyan-50 border max-md: w-72  ">

        <h1 className="font-bold text-2xl">EDUCATION</h1>
      <div className="w-60  py-9 px-8 m-3">
             <h1 className="font-bold" >
              Primary and Secondary
             </h1>
             <p>
                 Nrul-HAQ nursery and primary school-2005-2012
             </p>
             <p>Saint Paul Comprehensive College - 2012-2018</p>
        </div>



        <div className="w-60 border py-9 px-8 m-3 ">
            <h1 className="font-bold">Tertiary </h1>
          <h1>Yusuf maitama sule university kano</h1>
           <p>Bsc.Biochemistry</p>
        </div>

       
      </div>
    </div>
  );
};

export default Skills;
