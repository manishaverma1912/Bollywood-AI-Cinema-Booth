import { createBrowserRouter, Navigate } from "react-router";
import SplashScreen from "./pages/SplashScreen";
import WorldSelection from "./pages/WorldSelection";
import CategorySelection from "./pages/CategorySelection";
import PosterGallery from "./pages/PosterGallery";
import SelfieCapture from "./pages/SelfieCapture";
import Processing from "./pages/Processing";
import Download from "./pages/Download";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/select",
    element: <Navigate to="/world" replace />
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
