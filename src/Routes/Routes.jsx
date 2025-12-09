import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import NotFoundPage from "../Pages/Error/404Page";
import AllContests from "../Pages/AllContests/AllContests";
import ContestDetails from "../Pages/AllContests/ContestDetails/ContestDetails";

export const router = createBrowserRouter([
  // root layout
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-contests",
        Component: AllContests,
      },
      {
        path: "contests/:id",
        Component: ContestDetails,
      },
    ],
  },
  // auth
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  // 404 page
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
