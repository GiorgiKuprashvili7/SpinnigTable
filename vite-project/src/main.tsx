import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/main.css";
import CowntDown from "./pages/cowndown/index.tsx";
import Loader from "./pages/loader/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CowntDown />,
  },
  {
    path: "/loader",
    element: <Loader />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
