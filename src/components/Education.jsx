import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import Christ_logo from "../assets/Christ_logo.png";
import SUTD_logo from "../assets/SUTDLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="education"
      className="EXPERIENCE p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-20 mb-6 sm:mb-8 md:mb-10 font-['Poppins']"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        <div className="flex flex-col gap-10 md:gap-14">

          {/* SUTD */}
          <div
            className="EDUCATION flex flex-col-reverse md:flex-row-reverse gap-5 md:gap-7 justify-between items-center md:items-start"
            data-aos="fade-right"
          >
            <div className="w-full md:max-w-[520px] mt-0 md:mt-12 p-4 sm:p-6 md:p-7">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-start">
                <img
                  src={SUTD_logo}
                  alt="SUTD"
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] flex-shrink-0 object-contain rounded-full"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r text-base sm:text-lg md:text-xl lg:text-2xl from-blue-500 via-cyan-500 to-teal-400 dark:from-cyan-400 dark:to-slate-100 font-semibold text-center sm:text-left tracking-wider break-words">
                  Singapore University of Technology and Design (SUTD)
                </h1>
              </div>

              <div className="mt-5 sm:mt-7 flex flex-col gap-3 sm:gap-5 text-left pl-0 sm:pl-4">
                <h3 className="capitalize text-slate-800 dark:text-slate-300 text-lg sm:text-xl">
                  Master of Science
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-slate-500 text-base sm:text-lg md:text-xl leading-7 sm:leading-9">
                  2026 - Present
                </p>
                <p className="capitalize text-gray-500 dark:text-slate-500 text-base sm:text-lg md:text-xl leading-7 sm:leading-9">
                  Design and AI for Enterprise
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-center md:justify-start flex-shrink-0">
              <Lottie
                animationData={education}
                loop={true}
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto shadow-xl rounded-xl border border-[#00040f]"
              />
            </div>
          </div>

          {/* Christ University */}
          <div
            className="EDUCATION flex flex-col-reverse md:flex-row-reverse gap-5 md:gap-7 justify-between items-center md:items-start"
            data-aos="fade-right"
          >
            <div className="w-full md:max-w-[520px] mt-0 md:mt-12 p-4 sm:p-6 md:p-7">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-start">
                <img
                  src={Christ_logo}
                  alt="Christ University"
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] flex-shrink-0"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r text-base sm:text-lg md:text-xl lg:text-2xl from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-center sm:text-left tracking-wider break-words">
                  Christ (Deemed to be University)
                </h1>
              </div>

              <div className="mt-5 sm:mt-7 flex flex-col gap-3 sm:gap-5 text-left pl-0 sm:pl-4">
                <h3 className="capitalize text-slate-800 dark:text-slate-300 text-lg sm:text-xl">
                  Bachelor of Science
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-slate-500 text-base sm:text-lg md:text-xl leading-7 sm:leading-9">
                  2022 - 2025
                </p>
                <p className="capitalize text-gray-500 dark:text-slate-500 text-base sm:text-lg md:text-xl leading-7 sm:leading-9">
                  Data Science
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-center md:justify-start flex-shrink-0">
              <Lottie
                animationData={education}
                loop={true}
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto shadow-xl rounded-xl border border-[#00040f]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
