// main.jsx (or wherever you're running this)
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import About from "./components/About";
import Body from "./components/Body";
import HelpPage from "./components/Contacts";
import Restaurentmenu from "./components/Restaurentmenu";
import Signup from "./components/Signform";
import Shimmer from "./components/shimmer";
import Footer2 from "./components/Footer2";

const Grocery = lazy(() => import("./components/Grocer"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/restrocorporate",
        element: <Body />,
      },
      {
        path: "/signin",
        element: <Signup />,
      },
      {
        path: "/signout",
        element: <Restaurentmenu />,
      },
      {
        path: "/cart",
        element: <Shimmer />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
      {
        path: "/contacts",
        element: <Footer2 />,
      },
      {
        path: "/offers",
        element: <About />,
      },

      {
        path: "/restaurents/:resId",
        element: <Restaurentmenu />,
      },
      // Optional lazy-loaded route:
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

export default Applayout;
