import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Notice</span>!!!
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, its still under development.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 mt-4 font-semibold rounded bg-hotRed hover:bg-rose-700 text-white"
          >
            <div className="flex items-center gap-2">
              <BsArrowLeft />
              <span>Go Back</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnderDevelopment;
