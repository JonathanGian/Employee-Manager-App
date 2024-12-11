import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import List from "../pages/List";
import Form_Page from "../pages/Form_Page";
import AddForm from "../components/AddForm/AddForm";
import Details from "../pages/Details/Details";


export const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Login /> },
          { path: "/login", element: <Login /> },
          { path: "/employees", element: <List /> },
          { path: "/form", element: <AddForm /> },
          { path: "/details/:id", element: <Details />},
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