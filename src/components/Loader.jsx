import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full mx-auto text-center">
      <RotatingLines
        strokeColor="#c80ea0"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </div>
  );
};

export default Loader;
