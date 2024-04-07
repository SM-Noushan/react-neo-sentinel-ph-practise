import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ProtoTypes from "prop-types";
import Spinner from "../components/shared/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Spinner />;
  if (user) return children;
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
  children: ProtoTypes.node.isRequired,
};
export default PrivateRoutes;
