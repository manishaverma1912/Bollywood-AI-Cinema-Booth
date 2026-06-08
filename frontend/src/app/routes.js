import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import WorldSelection from "./pages/WorldSelection";
import CategorySelection from "./pages/CategorySelection";
import PosterGallery from "./pages/PosterGallery";
import SelfieCapture from "./pages/SelfieCapture";
import Processing from "./pages/Processing";
import Download from "./pages/Download";

export const router = createBrowserRouter([
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
]);
