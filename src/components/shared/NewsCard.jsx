import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
const NewsCard = ({ imgUrl = "", from = "" }) => {
  return (
    <div className="card rounded-md space-y-4">
      <figure>
        <img src={imgUrl} alt="news-bannerImg" />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="card-actions justify-flex items-center text-lg font-medium">
          {from && <p className="text-dark-02">Sports</p>}
          <div className="flex items-center gap-2 text-dark-04">
            <CiCalendar />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  imgUrl: PropTypes.string,
  from: PropTypes.string,
};
export default NewsCard;
