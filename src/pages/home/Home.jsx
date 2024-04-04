import CenterColumn from "../../components/shared/CenterColumn";
import LeftColumn from "../../components/LeftColumn";
import NavBar from "../../components/shared/NavBar";
import PageHeader from "../../components/shared/PageHeader";
import RightColumn from "../../components/shared/RightColumn";
import LatestNews from "../../components/LatestNews";

const Home = () => {
  return (
    <div>
      <PageHeader />
      <LatestNews />
      <NavBar />
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="flex flex-col gap-6">
          <LeftColumn />
        </div>
        <div className="col-span-2">
          <CenterColumn />
        </div>
        <div>
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default Home;
