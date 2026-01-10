"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Corrected image path (NO SPACES)
import Badm_Sec from "../assets/badm_sec.jpeg";
import FAPL from "../assets/FAPL.png";
import Literature from "../assets/literature.png";

import {
  technoco,
  BI,
  IITB,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-20 mb-6 sm:mb-8 md:mb-10 font-medium font-['Poppins']"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-10 sm:mt-14 md:mt-16 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            data-aos="zoom-in-up"
          >
            {/* FAPL Internship */}
            <Exp_prop
              img={FAPL}
              title="Future Alogirithms Pvt. Ltd."
              subtitle="Data Analyst Intern"
              date="Feb 2025 - May 2025"
              para="- Created Power BI dashboards and ETL queries for real-time analysis across 2 plants. Implemented SPC-based alerts reducing anomaly response time."
            />

            {/* GDSC IIIT Vadodara */}
            <Exp_prop
              img={technoco}
              title="Technocolabs Softwares"
              subtitle="Machine Learning Intern"
              date="June 2024 - August 2024"
              para="- Built and deployed classification models achieving 94%+ accuracy on large datasets. Led 6-member team using Git and Streamlit for collaborative model builidng and deployment."
            />

            {/* IIITians Network */}
            <Exp_prop
              img={BI}
              title="Binary Informatics"
              subtitle="Software Development Intern"
              date="July 2023 - August 2023"
              para="- Developed 8+ API endpoints with Flask and MongoDB. Wrote 100% Swagger-documented endpoints for seamless developer handoff."
            />

            
          </div>
        </div>
      </section>

      <Skills />
    </>
  );
};

export default Experience;
