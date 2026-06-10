import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Home from "./pages/Home";
import WorldSelection from "./pages/WorldSelection";
import CategorySelection from "./pages/CategorySelection";
import PosterGallery from "./pages/PosterGallery";
import SelfieCapture from "./pages/SelfieCapture";
import Processing from "./pages/Processing";
import Download from "./pages/Download";
import Login from "./pages/Login";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/world",
        Component: WorldSelection,
      },
      {
        path: "/categories/:worldId",
        Component: CategorySelection,
      },
      {
        path: "/posters/:worldId/:categoryId",
        Component: PosterGallery,
      },
      {
        path: "/capture",
        Component: SelfieCapture,
      },
      {
        path: "/processing",
        Component: Processing,
      },
      {
        path: "/download",
        Component: Download,
      },
    ]
  }
]);
