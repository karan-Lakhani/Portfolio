"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import ProfileImg from "../assets/profile.jpeg";
import {
  Code,
  FileCode,
  Globe,
  Database,
  Terminal,
  Server,
  Tv,
  GitBranch,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, description, className }) => (
  <div
    className={`bg-white/5 dark:bg-slate-800/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-600 dark:border-slate-700 shadow-md text-[#00040f] dark:text-slate-300 flex flex-col items-center justify-center text-center ${className}`}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-amber-500 dark:text-cyan-300 flex-shrink-0" />
    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#00040f] dark:text-slate-300 break-words">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-500 mt-1 break-words">{description}</p>
  </div>
);

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="aboutme"
      className="EXPERIENCE p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-16 mb-6 sm:mb-8 md:mb-10 font-['Poppins'] overflow-hidden"
      data-aos="fade-up"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center mb-8 max-sm:text-4xl">
        ABOUT ME
      </h1>

      <div className="WRAPPER mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
        {/* Left Side — Short Intro */}
        <div className="w-full md:w-[35%] lg:w-[40%] flex flex-col justify-center text-gray-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          {/* Circular Profile Photo */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <img
              src={ProfileImg}
              alt="Karan Lakhani"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
            />
          </div>

          <p className="mt-2 sm:mt-4 break-words text-justify">
            Student at{" "}
            <span className="font-semibold text-[#00040f] dark:text-slate-200">
              Singapore University of Technology and Design (SUTD)
            </span>, specializing in Data Science and AI/ML.
          </p>
          <p className="mt-2 break-words text-justify">
            Skilled in building Agentic workflows, ML modelling, real-time dashboards, and data-driven solutions using Python, SQL, Power BI, and deep learning frameworks.
          </p>
          <p className="mt-2 break-words text-justify">
            Interested in AI/ML Engineer, Data Scientist, Product Analytics, and AI-focused roles.
          </p>
        </div>

        {/* Right Side — Your Original Box (slightly right shifted) */}
        <div className="w-full md:w-[60%] lg:w-[55%] flex justify-center items-center md:pl-4 lg:pl-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="relative w-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden p-3 sm:p-4 md:p-6
              bg-gradient-to-tl from-amber-500 via-orange-600 to-yellow-500 dark:from-[#00040f] dark:to-[#0B274C]
              border border-slate-600 dark:border-slate-700 shadow-lg"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 grid-rows-auto gap-3 sm:gap-4 h-full w-full">
                <SkillCard
                  icon={Code}
                  title="Python"
                  description="Expert level proficiency"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={FileCode}
                  title="Tensorflow & PyTorch"
                  description="Neural Network development"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Globe}
                  title="Tableau"
                  description="Data Visualization"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Database}
                  title="SQL"
                  description="Database"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Terminal}
                  title="MongoDB"
                  description="NOSQL Database"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Server}
                  title="R programming"
                  description="Programming"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Tv}
                  title="LLMs & RAG"
                  description="Building intelligent retrieval systems"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={GitBranch}
                  title="AI & Machine Learning"
                  description="Model development & deployment"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
                <SkillCard
                  icon={Code}
                  title="Django & Flask"
                  description="Python web frameworks"
                  className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 min-h-[120px] sm:min-h-[140px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
