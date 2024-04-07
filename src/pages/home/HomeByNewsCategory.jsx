import { useLoaderData, useParams } from "react-router-dom";
import CenterColumn from "../../components/shared/CenterColumn";
import LeftColumn from "../../components/LeftColumn";
import NavBar from "../../components/shared/NavBar";
import PageHeader from "../../components/shared/PageHeader";
import RightColumn from "../../components/shared/RightColumn";
import LatestNews from "../../components/LatestNews";
import useData from "../../hooks/useData";
import Spinner from "../../components/shared/Spinner";
const HomeByNewsCategory = () => {
  const { data: categories } = useData("/data/categories.json");
  const { catName } = useParams();
  const allNews = useLoaderData();
  const category =
    categories.filter(
      (category) => category.name.toLowerCase() == catName.toLowerCase()
    )[0] || {};
  const allNewsByCat = allNews.filter(
    (news) => news.category_id == category?.id
  );
  const latestNews = allNews
    .slice()
    .sort(
      (news1, news2) =>
        new Date(news2.author.published_date) -
        new Date(news1.author.published_date)
    );
  return (
    <div>
      <PageHeader />
      <LatestNews latestNews={latestNews} />
      <NavBar />
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="flex flex-col gap-6">
          <LeftColumn />
        </div>
        <div className="col-span-2">
          {Object.keys(category).length ? (
            <CenterColumn allNews={category.id == 0 ? allNews : allNewsByCat} />
          ) : (
            <Spinner />
          )}
        </div>
        <div>
          <RightColumn from="home" />
        </div>
      </div>
    </div>
  );
};

export default HomeByNewsCategory;
