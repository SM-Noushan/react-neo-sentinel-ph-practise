import { FaGoogle, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import qZone1 from "/assets/qZone1.png";
import qZone2 from "/assets/qZone2.png";
import qZone3 from "/assets/qZone3.png";
import bgCover from "/assets/bg.png";
import SectionHeader from "./SectionHeader";
import PropTypes from "prop-types";

const RightColumn = ({ from = "" }) => {
  const loginWithBtnCSS = "btn w-full outline outline-1 text-base";
  const instagramGradientID = "instagramGradient";
  return (
    <>
      <div className="space-y-6">
        <SectionHeader title="Login With" />
        <div className="space-y-3">
          <button className={`${loginWithBtnCSS} outline-orange text-orange`}>
            <FaGoogle />
            Google
          </button>
          <button className={`${loginWithBtnCSS} outline-sky-500 text-sky-500`}>
            <FaFacebook />
            Facebook
          </button>
        </div>
      </div>
      <div className="my-12 space-y-6">
        <SectionHeader title="Find Us On" />
        <div className="rounded-md border border-dark-06 font-medium text-dark-03">
          <div className="flex gap-4 items-center p-4">
            <div className="rounded-full p-2 bg-dark-07 text-[#3B599C]">
              <FaFacebookF />
            </div>
            <p>Facebook</p>
          </div>
          <div className="flex gap-4 items-center p-4 border-y border-dark-06">
            <div className="rounded-full p-2 bg-dark-07 text-[#58A7DE]">
              <FaXTwitter />
            </div>
            <p>X.COM</p>
          </div>
          <div className="flex gap-4 items-center p-4">
            <div className="rounded-full p-2 bg-dark-07">
              <svg width="0" height="0">
                <linearGradient
                  id={instagramGradientID}
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#D82D7E" offset="0%" />
                  <stop stopColor="#FBA756" offset="100%" />
                </linearGradient>
              </svg>
              <FiInstagram style={{ stroke: `url(#${instagramGradientID})` }} />
            </div>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="my-12 bg-dark-07 rounded-md">
        <SectionHeader title="Q-Zone" styles="pt-8 pl-2" />
        <div className="space-y-3 p-4">
          <img src={qZone1} alt="qZone-img" />
          <img src={qZone2} alt="qZone-img" />
          <img src={qZone3} alt="qZone-img" />
        </div>
      </div>
      {from && (
        <div
          className="text-center space-y-5 px-8 py-16 text-white"
          style={{ backgroundImage: `url(${bgCover})` }}
        >
          <h1 className="text-[30px] leading-[45px] font-bold">
            Create an Amazing Newspaper
          </h1>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-hotRed hover:bg-red-900 text-white rounded-none px-6 py-3.5 text-xl font-medium">
            Learn More
          </button>
        </div>
      )}
    </>
  );
};

RightColumn.propTypes = {
  from: PropTypes.string,
};
export default RightColumn;
