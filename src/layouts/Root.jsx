import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="max-w-[425px] md:container xl:max-w-6xl mx-auto font-poppins py-8 min-h-dvh">
      <Outlet />
    </div>
  );
};

export default Root;
