import { Navigate } from "react-router-dom";
const Home = () => {
  return <Navigate to={`/home/${"All News"}`}></Navigate>;
};

export default Home;
