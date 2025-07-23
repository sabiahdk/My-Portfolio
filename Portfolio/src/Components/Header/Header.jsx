import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdWorkspacesFilled } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div className=" border border-red-500 h-[100vh]  flex justify-center items-center w-[100%]">
      <div className="w-[80%]  border  bg-cyan-50 rounded-[20px] py-7  max-md:hidden ">
        <nav className="flex flex-col items-center gap-y-[30px] w-[100%]">
          <a href="# " className="flex items-center">
            {" "}
            <span>
              <MdHomeFilled />
            </span>{" "}
            Home
          </a>

          <a href="# Hero" className="flex items-center">
            {" "}
            <span>
              <IoPerson />
            </span>
            About
          </a>
          <a href="# " className="flex items-center">
            {" "}
            <span>
              <MdOutlineCastForEducation />
            </span>
            Education
          </a>
          <a href="#" className="flex items-center">
            <span>
              <MdWorkspacesFilled />
            </span>
            Services
          </a>
          <a href="#Skills" className="flex items-center">
            {" "}
            <span>
              <GiSkills />
            </span>{" "}
            Skills
          </a>
          <a href="#project" className="flex items-center">
            <span>
              <GrProjects />
            </span>
            Projects
          </a>
        </nav>
        <div className=" flex gap-4  py-5 px-5">
          <a href=" https://x.com/SabiahD?t=PEEaSxJg7JduRlr0-Hq5WQ&s=08 ">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/sabiahdk?igsh=ZWIwYWFoODM3M2F4">
            <FaSquareInstagram />
          </a>
          <a href="https://www.linkedin.com/in/sabiah-muhammad-7166aa335">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/bookmarks/">
            <FaFacebookSquare />
          </a>

          <a href="https://github.com/sabiahdk">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
