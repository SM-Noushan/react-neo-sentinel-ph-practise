import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/news-details/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/news-details",
        element: <NewsDetails />,
      },
    ],
  },
]);
