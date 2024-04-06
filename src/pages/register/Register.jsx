import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { PiCirclesFourLight } from "react-icons/pi";
import { SiNamecheap } from "react-icons/si";
import NavBar from "../../components/shared/NavBar";

const Register = () => {
  const [passwordType, setPasswordType] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <NavBar />
      <div className="bg-dark-06 py-20 px-24 rounded-md max-w-3xl mx-auto mt-12">
        <h2 className="text-dark-02 text-4xl font-semibold text-center mb-24">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="text-dark-02 text-xl font-semibold">Your Name</span>
          <label className="relative input input-bordered flex items-center gap-2 mt-4 mb-6">
            <SiNamecheap />
            <input
              autoComplete="full name"
              type="text"
              placeholder="Enter your name"
              {...register("fullName", {
                required: true,
                pattern: /(^[a-zA-Z]{2,20}[a-zA-Z\s]{0,20}[a-zA-Z]{0,20}$)/,
              })}
              className="grow"
            />
            {errors?.fullName && (
              <span className="absolute -bottom-[21px] left-0 text-hotRed font-semibold text-sm">
                *Required | Enter a valid name
              </span>
            )}
          </label>
          <span className="text-dark-02 text-xl font-semibold">Photo URL</span>
          <label className="relative input input-bordered flex items-center gap-2 mt-4 mb-6">
            <PiCirclesFourLight />
            <input
              autoComplete="photo url"
              type="text"
              placeholder="Enter photo url"
              {...register("photoURL", {
                required: true,
                pattern: /^https?:\/\/.*\/.*\.(png|jpg|jpeg|gif|webp).*$/i,
              })}
              className="grow"
            />
            {errors?.photoURL && (
              <span className="absolute -bottom-6 left-0 text-hotRed font-semibold text-sm">
                *Required | Enter a valid URL (formats: png, jpg, jpeg, gif or
                webp)
              </span>
            )}
          </label>
          <span className="text-dark-02 text-xl font-semibold">
            Email address
          </span>
          <label className="relative input input-bordered flex items-center gap-2 mt-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              autoComplete="email"
              type="email"
              placeholder="Enter your email address"
              {...register("emailAddress", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
              className="grow"
            />
            {errors?.emailAddress && (
              <span className="absolute -bottom-[21px] left-0 text-hotRed font-semibold text-sm">
                *Required | Enter a valid email
              </span>
            )}
          </label>
          <span className="text-dark-02 text-xl font-semibold">Password</span>
          <label className="relative input input-bordered flex items-center gap-2 mt-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              autoComplete="password"
              type={passwordType ? "password" : "text"}
              placeholder="Enter your password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 6,
                  message: "Minimum password length is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum password length is 20",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,20}$/,
                  message:
                    "Requires at least one digit, lowercase, uppercase and special character",
                },
              })}
              className="grow"
            />
            {passwordType ? (
              <FaRegEyeSlash
                onClick={() => setPasswordType(!passwordType)}
                className="size-5 cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={() => setPasswordType(!passwordType)}
                className="size-5 cursor-pointer"
              />
            )}
            {errors?.password?.message && (
              <span className="absolute -bottom-[21px] left-0 text-hotRed font-semibold text-sm">
                *{errors?.password?.message}
              </span>
            )}
          </label>
          <input
            type="submit"
            value="Register"
            className="btn btn-lg w-full bg-dark-02 text-white rounded-md hover:bg-stone-800"
          />
        </form>
        <h2 className="mt-4 text-center text-dark-03 font-semibold">
          Already Have An Account ?{" "}
          <Link
            className="bg-gradient-to-r from-orange to-[#F75B5F] text-transparent bg-clip-text"
            to="/login"
          >
            Login now
          </Link>
        </h2>
      </div>
    </div>
    // pattern:    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%^&*()_+{}|:"<>?]).{8,20}$/,
  );
};

export default Register;
