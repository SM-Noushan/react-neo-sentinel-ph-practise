import moment from "moment";
const PageHeader = () => {
  return (
    <div className="text-center">
      <h1 className="font-uniFrakturCook text-[60px] text-dark-02 uppercase">
        The Neo Sentinel
      </h1>
      <h3 className="text-lg text-dark-03 mt-2 mb-[10px]">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-xl font-medium text-dark-02">
        {moment().format("dddd")},{" "}
        <span className="text-dark-03">
          {moment().format("MMMM")} {moment().format("D")},{" "}
          {moment().format("YYYY")}
        </span>
      </p>
    </div>
  );
};

export default PageHeader;
