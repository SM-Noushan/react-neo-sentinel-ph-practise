import { NavLink } from "react-router-dom";
import useData from "../hooks/useData";
import SectionHeader from "./shared/SectionHeader";
import Spinner from "./shared/Spinner";
import newsBanner1 from "/assets/1.png";
import newsBanner2 from "/assets/2.png";
import newsBanner3 from "/assets/3.png";
import NewsCard from "./shared/NewsCard";

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
        <NewsCard imgUrl={newsBanner1} from="home" />
        <NewsCard imgUrl={newsBanner2} from="home" />
        <NewsCard imgUrl={newsBanner3} from="home" />
      </div>
    </>
  );
};

export default LeftColumn;
