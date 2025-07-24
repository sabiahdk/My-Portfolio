import React from "react";

const Project = () => {
  const cardArray = [
    {
      title: "Piggyvest",
      subtitle: "Html,tailwind css, react and javasript",
      link: "https://sabiahdk.github.io/React-piggy/",
    },
    {
      title: "Nice page",
      subtitle: "html,css and react",
      link: "https://sabiahdk.github.io/speclass/",
    },
    {
      title: "piggyrouter",
      subtitle: "Html,taiwindcss,javascript and react",
      link: "https://sabiahdk.github.io/React-piggy/",
    },
    {
      title: "Sterling rep",
      subtitle: "HTML,css",
      link: "https://github.com/sabiahdk/sterling-replica/settings/pages",
    },

    {
      title: "Moove",
      subtitle: "HTML and CSS",
      link: "https://sabiahdk.github.io/moove.io/",
    },
    {
      title: "Coolors",
      subtitle: "HTML and CSS",
      link: "https://github.com/sabiahdk/coolors",
    },
  ];

  return (
    <div className="flex max-md: flex-wrap  ">
      <div>
        <div className="w-[100%] h-[100%] bg-cyan-50 border  ">
          <div className="m-4  w-[300px]">
            {" "}
            <h1 className="font-bold text-2xl">MY PROJECTS</h1>
            <p>
              Worked on various data projects including creating an analysis and
              dashboard on Nigeria's road accidents, providing insights and data
              management on an HR attrition form, cleaning messy datasets,
              generating key performance indicators with slicers, and performing
              an analysis on an Adidas database using various scientific and
              anlytical tools{" "}
            </p>
            <a
              className="py-2 px-2 border rounded-2xl mt-2 hover:text-cyan-900 "
              href="https://drive.google.com/drive/folders/1OylCDfT2RId97_HehpoJ7qcnn2Kvt5b3"
            >
              {" "}
              Data{" "}
            </a>
          </div>
 
          {cardArray.map((items) => (
            <a className="hover:text-cyan-900 " href={items.link}>
              <div className="  p-6 m-3 border w-3xs font  ">
                <h1 className="font-semibold  "> {items.title}</h1>
                <p>{items.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className=" w-[300px]  border  m-1 bg-cyan-50 py-3 px-3  ">
        <h1 className="font-bold text-2xl ">SERVICES</h1>
        <div className=" py-2 px-2">
          <h2 className="font-bold"> Kano Drug Management unit (KDMU)</h2>
          <h2 className="font-medium">Position:Intern - 2021 </h2>
          <p>
            Serve as an intern that performs manual or automated tests to
            confirm that product services function as expected.
          </p>
        </div>
        <div className=" py-2 px-2">
          <h1 className="font-bold">BUA SUGAR REFINERY</h1>
          <h2 className="font-medium">Position:Quality assurance officer</h2>

          <p>
            Ensuring that products, services, or processes meet established
            quality standards before they are delivered to customers or users.
          </p>
          <div className="py-2 px-2">
            <h1 className="font-bold">Keystone Bank</h1>
            <h2 className="font-medium">Positin:Direct Saler</h2>
            <p>
              Assist the sales and marketing team with data-driven
              recommendations to boost in-store or online performance.
            </p>
          </div>
        </div>

        <div className=" m-5">
          <h1 className="font-bold text-2xl">CONTACT ME</h1>
          <div>
            <h1 className="font-bold">
              PHONE:
              <br /> 08167347210 <br />
              EMAIL:
              <br /> sabiahmuhd98@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
