import React from "react";

const Project = () => {
  const cardArray = [
    { title: "Piggyvest", 
      subtitle: "Html,tailwind css, react and javasript",
      link:"https://sabiahdk.github.io/React-piggy/",
     },
    {
      title: "Nice page",
      subtitle: "html,css and react",
      link: "https://sabiahdk.github.io/speclass/",
    },
    {
      title: "piggyrouter",
      subtitle: "Html,taiwindcss,javascript and react",
      link:"https://sabiahdk.github.io/React-piggy/",
    },
    { title: "Sterling rep", subtitle: "HTML,css",link:"https://github.com/sabiahdk/sterling-replica/settings/pages", },

    { title: "Moove",
       subtitle: "HTML and CSS",link:"https://sabiahdk.github.io/moove.io/", },
    { title: "Coolors",
       subtitle: "HTML and CSS",link:"https://github.com/sabiahdk/coolors", },
  ];

  return (   
   <div className=" ">
     <div className="w-[100%] h-[100%] bg-red-700 border  ">
            
      {cardArray.map((items) => (
        <a href={items.link}>
          <div className="  p-6  border w-3xs font  ">
            <h1 className="font-semibold  "> {items.title}</h1>
            <p >{items.subtitle}</p>
           </div>

         
        </a> 
      ))}
    </div> 
   </div>
     
      
  
  ); 
};

export default Project;
