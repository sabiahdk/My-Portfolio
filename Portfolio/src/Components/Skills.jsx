import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="h-[100%] border bg-amber-800 ">
        <h1 className="font-bold border text-2xl py-4 px-4 ">SKILLS</h1>
        <div>
          <div className="flex justify-centerj">
            <div>
              <h1>FRONT END</h1>
            </div>
           <div>
             <span>Html</span> <span>CSS</span> <span>Javascript</span>
            <span>React </span> <span>Tailwind css</span> <span>GIT</span>{" "}
            <span>Bootsrap</span>
            <span>Typescript</span> <span></span>
           </div>
            <div>
              <h1>BACK END</h1>
              <span>Mongo BD</span> <span>MYSQL</span> <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
