import { BsArrowLeft } from "react-icons/bs";
import PageHeader from "../../components/shared/PageHeader";
import RightColumn from "../../components/shared/RightColumn";
import SectionHeader from "../../components/shared/SectionHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import newsBanner1 from "/assets/1.png";
import newsBanner2 from "/assets/2.png";
import newsBanner3 from "/assets/3.png";
import NewsCard from "../../components/shared/NewsCard";

const NewsDetails = () => {
  const allNews = useLoaderData();
  const { newsId } = useParams();
  const navigate = useNavigate();
  const news = allNews.find((news) => news._id == newsId);
  const { title, image_url, details } = news || {};
  return (
    <div>
      <PageHeader />
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="col-span-3">
          <SectionHeader title="Neo Sentinel" styles="mb-8" />
          <div className="space-y-5 border border-dark-06 p-5 rounded-b-md">
            <img
              src={image_url}
              alt="news-cover"
              className="rounded-sm w-full"
            />
            <h1 className="text-dark-02 text-2xl text-justify font-bold">
              {title}
            </h1>
            <p className="text-dark-03 text-justify">{details}</p>
            <button
              onClick={() => navigate(-1)}
              className="w-fit bg-hotRed hover:bg-red-900 text-white rounded-none px-6 py-3.5 text-xl font-medium flex items-center gap-4"
            >
              <BsArrowLeft />
              Go Back
            </button>
          </div>
          <div>
            <SectionHeader title="Editors Insight" styles="my-8 text-[25px]" />
            <div className="grid grid-cols-3 gap-4">
              <NewsCard imgUrl={newsBanner1} />
              <NewsCard imgUrl={newsBanner2} />
              <NewsCard imgUrl={newsBanner3} />
            </div>
          </div>
        </div>
        <div>
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
