import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";
import { BsBookmark, BsEye, BsShare } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";

const NewsCardMain = ({ news }) => {
  const {
    _id,
    rating: { number: rating },
    total_view,
    title,
    author: { name, img: author_img, published_date },
    image_url,
    details,
  } = news || {};
  return (
    <div>
      <div className="flex justify-between items-center bg-dark-07 py-3 px-5 rounded-t-md">
        <div className="flex items-center gap-4">
          {author_img ? (
            <img
              className="size-12 rounded-full"
              src={author_img}
              alt="author-img"
            />
          ) : (
            <div className="bg-dark-06 rounded-full p-3">
              <FaUserGraduate size={25} />
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="font-semibold text-dark-02">{name || "Unknown"}</h2>
            <span className="text-dark-03 text-sm">
              {published_date?.split(" ")[0] || "Unknown"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <BsBookmark />
          <BsShare />
        </div>
      </div>
      <div className="space-y-5 border border-t-0 border-dark-06 p-5 rounded-b-md">
        <h1 className="text-dark-02 text-xl font-bold">{title}</h1>
        <img src={image_url} alt="news-cover" className="rounded-sm" />
        <p className="text-dark-03 text-justify">
          {details.slice(0, 250)}...{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF8C47 0%, #F75B5F 100.02%)",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="cursor-pointer font-semibold hover:font-bold"
          >
            <Link to={`/news-details/${_id}`}>Read More</Link>
          </span>
        </p>
        <hr className="border-dark-06" />
        <div className="flex justify-between items-center gap-4 *:gap-2.5 *:text-dark-03 *:font-medium">
          <div className="flex items-center">
            <div className="rating rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  rating >= 0.5 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-2 ${
                  rating >= 1 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  rating >= 1.5 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-2 ${
                  rating >= 2 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  rating >= 2.5 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-2 ${
                  rating >= 3 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  rating >= 3.5 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-2 ${
                  rating >= 4 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  rating >= 4.5 ? "bg-orange" : "bg-orange/35"
                }`}
              />
              <input
                disabled
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-2 ${
                  rating >= 5 ? "bg-orange" : "bg-orange/35"
                }`}
                checked
              />
            </div>
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            <BsEye size={20} />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCardMain.propTypes = {
  news: ProtoTypes.object.isRequired,
};
export default NewsCardMain;
