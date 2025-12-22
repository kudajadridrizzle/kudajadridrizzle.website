
const RecognitionSession = () => {
  return (
    <div className="sm:px-[6%] sm:py-32 flex flex-col gap-10 px-4 py-14">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="block text-[#000] font-ivy sm:text-[44px] text-[32px]">
          Kalpetta Homestays – Recognized by Leading Travel Sites{' '}
        </h2>
        <span className="text-secondary sm:text-xl font-albertSans">
          We are proud to be honored by our guests and top travel sites for
          providing exceptional service
        </span>
      </div>
      <div className="flex gap-[50px] justify-center flex-wrap">
        <img
          src='/assets/recognitionSessionLogo1.svg'
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src='/assets/recognitionSessionLogo2.svg'
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src='/assets/recognitionSessionLogo3.svg'
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src='/assets/recognitionSessionLogo4.svg'
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src='/assets/recognitionSessionLogo4.svg'
          alt=""
          className="w-[86px] sm:w-fit"
        />
      </div>
    </div>
  );
};

export default RecognitionSession;
