import FadeLoader from "react-spinners/FadeLoader";
const Spinner = () => {
  return (
    <div className="flex justify-center my-12">
      <FadeLoader color="#dd2c6c" height={20} />
    </div>
  );
};

export default Spinner;
