import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Shared/Categories/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/Shared/News";
import Login from "../Pages/Log_Register/Login";
import LoginLayout from "../Layouts/LoginLayout";
import NewsCart from "../Pages/Shared/NewsCart";
import Register from "../Pages/Log_Register/Register";
import PrivateRoute from "./PrivateRoute";
import Career from "../Pages/Shared/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career></Career>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "categories",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },

  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
