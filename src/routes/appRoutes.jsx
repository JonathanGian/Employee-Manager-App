import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Form from "../pages/Form";
import List from "../pages/List";

export const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Login /> },
          { path: "/login", element: <Login /> },
          { path: "/list", element: <List /> },
          { path: "/form", element: <Form /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );