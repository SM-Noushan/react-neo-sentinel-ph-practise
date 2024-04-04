import CenterColumn from "../../components/shared/CenterColumn";
import LeftColumn from "../../components/LeftColumn";
import NavBar from "../../components/shared/NavBar";
import PageHeader from "../../components/shared/PageHeader";
import RightColumn from "../../components/shared/RightColumn";

const Home = () => {
  return (
    <div>
      <PageHeader />
      <NavBar />
      <div className="grid grid-cols-4 gap-6">
        <div>
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
