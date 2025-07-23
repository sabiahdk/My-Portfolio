import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
const App = () => {
  const [toggle, setToggle] = useState(false);

  function changeToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="flex justify-between items-start">
      <div className="w-[20%]">
        <Header />
      </div>tt
      <div className="w-[79%]">
        <div>
          <Button changeToggle={changeToggle} />
        </div>
        <section className="h-[80%]">
          <Hero />
        </section> 
        <section>
          <Skills/>

        </section>

        <section id="project">
          <Project />
        </section>
      </div>
    </div>
  );
};

export default App;
