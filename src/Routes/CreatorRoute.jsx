import { Navigate } from "react-router";
import useRole from "../hooks/useRole";

const CreatorRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <h1 className="text-xl">Loading...</h1>;
  if (role === "creator") return children;
  return <Navigate to="/" replace="true" />;
};

export default CreatorRoute;
