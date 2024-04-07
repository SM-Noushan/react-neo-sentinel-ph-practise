import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const LatestNews = ({ latestNews }) => {
  return (
    <div className="flex bg-dark-07 p-4 gap-6 items-center my-8">
      <div className="bg-hotRed text-white rounded-none px-6 py-3.5 text-xl font-medium">
        Latest
      </div>
      <Marquee
        className="text-dark-02 text-lg font-semibold *:*:mr-4"
        speed={125}
        pauseOnHover
      >
        {latestNews.slice(0, 3).map((news, idx) => (
          <Link key={idx} to={`/news-details/${news._id}`}>
            <span className="text-red-400 mx-2">{`News ${idx + 1}:`}</span>
            {`${news.title}`}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};
LatestNews.propTypes = {
  latestNews: PropTypes.array.isRequired,
};
export default LatestNews;
