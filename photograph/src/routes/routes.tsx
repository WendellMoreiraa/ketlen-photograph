import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contacts from "../pages/Contacts";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contacts", element: <Contacts /> },
]);
