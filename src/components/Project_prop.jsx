/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <>
      <div className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl min-h-[370px] sm:min-h-[400px] md:min-h-[420px] p-4 sm:p-5 md:p-7 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER">
          <div className="HEADING flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-7">
            <div className="p-2 sm:p-3 flex-shrink-0 flex justify-center sm:justify-start">
              <img
                src={props.img}
                alt=""
                className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full border border-[#00040f] object-cover"
              />
            </div>
            <div className="p-2 sm:p-3 flex-1 min-w-0">
              <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-lg sm:text-xl mb-2 break-words">
                {props.title}
              </h1>
              <h3 className="text-[#00040f] dark:text-slate-200 p-1 text-sm sm:text-base">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-1 p-1 sm:-translate-x-2">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-500 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg px-2 sm:px-4 md:px-5 break-words leading-relaxed">{props.para}</p>

        <div className="flex gap-4 items-center justify-start text-[#00040f] dark:text-slate-200 p-2 pl-5 mt-5">
          <a href={props.github_link} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors flex items-center">
            <SiGithub className="text-3xl" />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer" className="hover:text-cyan-500 transition-colors flex items-center">
            <SlLink className="text-3xl" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Project_prop;
