const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] min-h-[400px] sm:min-h-[420px] p-5 sm:p-6 md:p-8 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
          <div className="max-w-[60px] sm:max-w-[70px] md:max-w-[80px] pr-0 sm:pr-3 mr-0 sm:mr-3 flex-shrink-0 self-center sm:self-auto">
            <img src={props.img} alt="" className="w-full h-auto object-contain" />
          </div>

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-lg sm:text-xl md:text-2xl tracking-wide font-semibold break-words">
              {props.title}
            </h1>
            <p className="text-[#00040f] dark:text-white text-base sm:text-lg my-2">
              {props.subtitle}
            </p>
            <p className="italic text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {props.date}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-4 sm:mt-5 p-2 leading-7 sm:leading-8 md:leading-10 break-words text-justify">
          {props.para}
        </p>
      </div>
    </>
  );
};
export default Exp_prop;
