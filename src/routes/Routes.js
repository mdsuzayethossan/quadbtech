import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
  },
]);
export default router;
