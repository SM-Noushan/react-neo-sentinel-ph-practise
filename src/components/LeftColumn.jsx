import { NavLink } from "react-router-dom";
import useData from "../hooks/useData";
import SectionHeader from "./shared/SectionHeader";
import Spinner from "./shared/Spinner";
import { CiCalendar } from "react-icons/ci";
import newsBanner1 from "/assets/1.png";
import newsBanner2 from "/assets/2.png";
import newsBanner3 from "/assets/3.png";

const newsCard = (imgUrl) => {
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
          <p className="text-dark-02">Sports</p>
          <div className="flex items-center gap-2 text-dark-04">
            <CiCalendar />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftColumn = () => {
  const { data, loading } = useData("/data/categories.json");
  return (
    <>
      <div>
        <SectionHeader title="All Category" styles="mb-8" />
        {loading ? (
          <Spinner />
        ) : (
          data.map((category) => (
            <NavLink
              key={category.id}
              className={({ isActive }) =>
                isActive
                  ? "*:bg-dark-06 rounded-md font-semibold text-dark-02"
                  : "hover:underline text-dark-04 font-medium"
              }
            >
              <div className="px-8 py-4 text-xl">
                <h3>{category.name}</h3>
              </div>
            </NavLink>
          ))
        )}
      </div>
      <div className="space-y-8">
        {newsCard(newsBanner1)}
        {newsCard(newsBanner2)}
        {newsCard(newsBanner3)}
      </div>
    </>
  );
};

export default LeftColumn;
