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
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import MyParticipate from "../Pages/Dashboard/UserDashBoard/MyParticipate/MyParticipate";
import MyWinningContests from "../Pages/Dashboard/UserDashBoard/WinningContest/WinningContest";
import MyProfile from "../Pages/Dashboard/UserDashBoard/MyProfile/MyProfile";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "../Pages/Payment/PaymentCancel/PaymentCancel";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import Leaderboard from "../Pages/Leaderboard/Leaderboard";
import ManageContests from "../Pages/Dashboard/AdminDashboard/ManageContests/ManageContests";
import EditContest from "../Pages/Dashboard/CreatorDashboard/EditContest/EditContest";
import CreatorRoute from "./CreatorRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

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
      {
        path: "how-it-works",
        Component: HowItWorks,
      },
      {
        path: "leaderboard",
        Component: Leaderboard,
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
      // user dashboard routes
      {
        path: "my-participate",
        element: (
          <PrivateRoute>
            <UserRoute>
              <MyParticipate />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserRoute>
              <MyProfile />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-winning-contests",
        element: (
          <PrivateRoute>
            <UserRoute>
              <MyWinningContests />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      // creator dashboard routes
      {
        path: "add-contest",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <AddContest />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-contests",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <MyContests />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "submissions",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <Submissions />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "contest/edit/:id",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <EditContest />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      // admin dashbaord routes
      {
        path: "manage-user",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUser />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-contests",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageContests />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
  // payment related routes
  {
    path: "/payment-success",
    Component: PaymentSuccess,
  },
  {
    path: "/payment-cancel",
    Component: PaymentCancel,
  },
  // 404 page
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
