import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex bg-dark-07 p-4 gap-6 items-center my-8">
      <div className="bg-hotRed text-white rounded-none px-6 py-3.5 text-xl font-medium">
        Latest
      </div>
      <Marquee
        className="text-dark-02 text-lg font-semibold"
        speed={75}
        pauseOnHover
      >
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
