import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa6";
import { BsBookmark, BsShare, BsEye } from "react-icons/bs";
const CenterColumn = () => {
  const ratingInputCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Link to="/news-details">
        <div className="flex justify-between items-center bg-dark-07 py-3 px-5 rounded-t-md">
          <div className="flex items-center gap-4">
            <div className="bg-dark-06 rounded-full p-3">
              <FaUserGraduate size={25} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-dark-02">Awlad Hossain</h2>
              <span className="text-dark-03 text-sm">2022-08-21</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BsBookmark />
            <BsShare />
          </div>
        </div>
        <div className="space-y-5 border border-t-0 border-dark-06 p-5 rounded-b-md">
          <h1 className="text-dark-02 text-xl font-bold">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </h1>
          <img
            src="/assets/editorsInsight1.png"
            alt="news-cover"
            className="rounded-sm"
          />
          <p className="text-dark-03">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) - U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military a...{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF8C47 0%, #F75B5F 100.02%)",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="cursor-pointer font-semibold hover:font-bold"
            >
              Read More
            </span>
          </p>
          <hr className="border-dark-06" />
          <div className="flex justify-between items-center gap-4 *:gap-2.5 *:text-dark-03 *:font-medium">
            <div className="flex items-center">
              <div className="rating rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                {ratingInputCount.map((item) => (
                  <input
                    key={item}
                    disabled
                    type="radio"
                    name="rating-10"
                    className={`bg-orange mask mask-star-2 ${
                      item % 2 == 0 ? "mask-half-1" : "mask-half-2"
                    }`}
                    checked={
                      item ==
                      (Math.floor(4.9 * 2) < 0.5 ? 0 : Math.floor(4.9 * 2) - 1)
                        ? true
                        : false
                    }
                  />
                ))}
              </div>
              <span>4.9</span>
            </div>
            <div className="flex items-center">
              <BsEye size={20} />
              <span>499</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CenterColumn;
