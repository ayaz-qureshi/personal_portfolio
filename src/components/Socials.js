import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Bs1Circle } from "react-icons/bs";

const Socials = () => {
  const socialsIcon = [
    {
      id: 1,
      platform: "Linkedin",
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      url: "https://www.linkedin.com/",
    },
    {
      id: 2,
      platform: "Github",
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      url: "https://github.com/your-username",
    },
    {
      id: 3,
      platform: "Resume",
      child: (
        <>
          Resume <Bs1Circle size={30} />
        </>
      ),
      url: "/Ayaz web dev resume.pdf",
      downoad: true
    },
    {
      id: 4,
      platform: "Email",
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      url: "mailto:your-email@example.com",
    },
  ];

  return (
    <div className="flex-col top-[35%] left-0 fixed hidden lg:flex ">
      <ul>
        {socialsIcon.map((social) => (
          <li
            key={social.id}
            className="flex justify-between items-center w-40 px-4 h-14 ml-[-100px] hover:ml-[-10px] cursor-pointer border border-lightGray hover:rounded-md  duration-200"
          >
            <a href={social.url} target="_blank" download={social.downoad} rel="noreferrer" className="flex items-center justify-between w-full text-white">
              {social.child} {/* Invoke the function to render the JSX */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
