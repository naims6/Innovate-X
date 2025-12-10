import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import NotFoundPage from "../Pages/Error/404Page";
import AllContests from "../Pages/AllContests/AllContests";
import ContestDetails from "../Pages/AllContests/ContestDetails/ContestDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddContest from "../Pages/Dashboard/CreatorDashboard/AddContest/AddContest";
import MyContests from "../Pages/Dashboard/CreatorDashboard/MyContests/MyContests";
import Submissions from "../Pages/Dashboard/CreatorDashboard/Submissions/Submissions";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
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
  // dashboard
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "add-contest",
        Component: AddContest,
      },
      {
        path: "my-contests",
        Component: MyContests,
      },
      {
        path: "submissions",
        Component: Submissions,
      },
    ],
  },
  // 404 page
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
