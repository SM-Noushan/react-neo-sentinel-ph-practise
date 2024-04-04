import moment from "moment";
import { Link } from "react-router-dom";
const PageHeader = () => {
  return (
    <div className="text-center">
      <Link to="/">
        <h1 className="font-uniFrakturCook text-[60px] text-dark-02 uppercase">
          The Neo Sentinel
        </h1>
      </Link>
      <h3 className="text-lg text-dark-03 my-2">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-xl font-medium text-dark-02">
        {moment().format("dddd")},{" "}
        <span className="text-dark-03">{moment().format("MMMM, D, YYYY")}</span>
      </p>
    </div>
  );
};

export default PageHeader;
