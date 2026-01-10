import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-20 mb-6 sm:mb-8 md:mb-10 font-medium font-['Poppins']"
      >
        <div className="WRAPPER mt-6 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 lg:gap-10">
          <div className="INTRO w-full md:w-auto text-center md:text-left">
            <h3 className="text-[#00040f] dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
              Hi, there! <br className="hidden sm:block" />I am
            </h3>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 break-words">
              <span className="whitespace-nowrap inline-block">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold inline">K</span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold inline">aran</span>
              </span>
              <span className="inline-block w-2 sm:w-3 md:w-4"></span>
              <span className="whitespace-nowrap inline-block">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold inline">L</span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold inline">akhani</span>
              </span>
            </div>

            <p className="ABOUT text-sm sm:text-base md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-full md:max-w-[550px] mt-4 md:mt-5 px-1">
              Data Scientist | AI/ML & Data Analysis<br />
              LLMs | Machine Learning | Power BI | Python
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-start flex-shrink-0">
            <Lottie
              animationData={computer}
              loop={true}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] h-auto shadow-xl rounded-xl border border-[#00040f]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;