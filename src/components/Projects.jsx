"use client";

import Project_prop from "./Project_prop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IDe from "../assets/IDe.png";
import enterpriseKn from "../assets/enterprise_kn.png";
import resumeOpti from "../assets/resume_opti.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-16 mb-6 sm:mb-8 md:mb-10 font-['Poppins']"
    >
      <div className="WRAPPER mt-12">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
          PROJECTS
        </h1>

        <div
          className="EXPERIENCE mt-10 sm:mt-14 md:mt-16 grid gap-6 sm:gap-8 md:gap-10 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-aos="zoom-in-up"
        >
          <Project_prop
            img={IDe}
            title="Instrument Detection in Music Audio Signals"
            para="Built multi-label classifier with 60% accuracy using MFCC/mel-spectrogram features."
            github_link="https://github.com/karan-Lakhani/Instrument-detection-with-music-audio-signals"
            link="https://github.com/karan-Lakhani/Instrument-detection-with-music-audio-signals"
          />
          <Project_prop
            img={enterpriseKn}
            title="Enterprise Knowledge Assistant"
            para="RAG application that indexes enterprise PDFs into ChromaDB, retrieves relevant sections, and uses Google Gemini to generate grounded answers with source attribution."
            github_link="https://github.com/karan-Lakhani/Enterprise-knowledge-assistant"
            link="https://github.com/karan-Lakhani/Enterprise-knowledge-assistant"
          />
          <Project_prop
            img={resumeOpti}
            title="Resume Optimizer Agent"
            para="Streamlit agent that parses a master resume, discovers relevant jobs via external APIs, scores matches, and generates tailored application materials using swappable LLM providers."
            github_link="https://github.com/karan-Lakhani/Resume-optimizer-agent"
            link="https://github.com/karan-Lakhani/Resume-optimizer-agent"
            underDevelopment={true}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
