import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/news-details/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import HomeByNewsCategory from "../pages/home/HomeByNewsCategory";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home/:catName",
        element: <HomeByNewsCategory />,
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoutes>
            <Login />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoutes>
            <Register />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/news-details/:newsId",
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/data/news.json"),
      },
    ],
  },
]);
