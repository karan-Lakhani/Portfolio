"use client";

import {
  Github,
  Git,
  Spark,
  Lang,
  Python,
  Tf,
  tab,
  powerbi,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

// ✅ Official online logo URLs
const FastAPI = "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png";
const SQL = "https://cdn-icons-png.flaticon.com/512/4248/4248443.png";
const VSCode =
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg";
const HuggingFace =
  "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"; // 🤗 AI/ML logo

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="EXPERIENCE p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-20 mb-6 sm:mb-8 md:mb-10 font-['Poppins']">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center max-sm:text-4xl">
          SKILLS
        </h1>

        <div
          className="IMG grid place-content-center justify-items-center p-3 sm:p-4 md:p-5 mt-8 sm:mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
          data-aos="zoom-out-up"
        >
          {/* ✅ Core Programming & Web */}
          <Image img={Tf} />
          <Image img={Lang} />
          <Image img={Spark} />
          <Image img={tab} />
          <Image img={powerbi} />
          <Image img={Python} />

          {/* ✅ Backend, Database & AI */}
          <Image img={FastAPI} />
          <Image img={SQL} />
          <Image img={HuggingFace} />
          <Image img={VSCode} />
          <Image img={Git} />
          <Image img={Github} />
        </div>
      </section>
    </>
  );
};

export default Skills;
