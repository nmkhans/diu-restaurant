// eslint-disable-next-line react/prop-types
const SliderContent = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-full z-10"></div>
      <div className="absolute top-[35%] left-[10%] w-full flex justify-start items-center z-20">
        <div className="w-2/5">
          {children}
        </div>
      </div>
    </>
  );
};

export default SliderContent;
