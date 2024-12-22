import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AllArtifacts from "./Pages/AllArtifacts.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import AddArtifact from "./Pages/AddArtifact.jsx";
import MyArtifacts from "./Pages/MyArtifacts.jsx";
import LikedArtifact from "./Pages/LikedArtifact.jsx";
import ArtifactDetails from "./Pages/ArtifactDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "/add-artifact",
        element: <AddArtifact />,
      },
      {
        path: "/my-artifacts",
        element: <MyArtifacts />,
      },
      {
        path: "/liked-artifacts",
        element: <LikedArtifact />,
      },
      {
        path: "/artifacts-details",
        element: <ArtifactDetails />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
