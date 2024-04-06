import { BsArrowLeft } from "react-icons/bs";
import PageHeader from "../../components/shared/PageHeader";
import RightColumn from "../../components/shared/RightColumn";
import SectionHeader from "../../components/shared/SectionHeader";
import { Link } from "react-router-dom";
import newsBanner1 from "/assets/1.png";
import newsBanner2 from "/assets/2.png";
import newsBanner3 from "/assets/3.png";
import NewsCard from "../../components/shared/NewsCard";

const NewsDetails = () => {
  return (
    <div>
      <PageHeader />
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="col-span-3">
          <SectionHeader title="Neo Sentinel" styles="mb-8" />
          <div className="space-y-5 border border-dark-06 p-5 rounded-b-md">
            <img
              src="/assets/editorsInsight1.png"
              alt="news-cover"
              className="rounded-sm w-full"
            />
            <h1 className="text-dark-02 text-2xl font-bold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h1>
            <p className="text-dark-03 text-justify">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military aid for
              Kyiv as Ukraine marked its independence day six months after
              Russia invaded the country.'The United States of America is
              committed to supporting the people of Ukraine as they continue the
              fight to defend their sovereignty. As part of that commitment, I
              am proud to announce our biggest tranche of security assistance to
              date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud
              Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
              Security, UK, Ukraine, United States, Worthy News (Worthy News) –
              U.S. President Joe Biden has announced nearly $3 billion in new
              U.S. military aid for Kyiv as Ukraine marked its independence day
              six months after Russia invaded the country.'The United States of
              America is committed to supporting the people of Ukraine as they
              continue the fight to defend their sovereignty. As part of that
              commitment, I am proud to announce our biggest tranche of security
              assistance to date: approximately $2.
            </p>
            <Link
              to="/"
              className="w-fit bg-hotRed hover:bg-red-900 text-white rounded-none px-6 py-3.5 text-xl font-medium flex items-center gap-4"
            >
              <BsArrowLeft />
              All news in this category
            </Link>
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
