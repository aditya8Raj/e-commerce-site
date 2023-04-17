import "./App.css";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact";
import Mens from "./pages/Shop/Mens";
import Women from "./pages/Shop/Women";
import Hats from "./pages/Shop/Hats";
import Jackets from "./pages/Shop/Jackets";
import Sneakers from "./pages/Shop/Sneakers";
import Formals from "./pages/Shop/Formals";
import Joggers from "./pages/Shop/Joggers";
import Hoodies from "./pages/Shop/Hoodies";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/shop/mens",
        element: <Mens />,
      },
      {
        path: "/shop/women",
        element: <Women />,
      },
      {
        path: "/shop/hats",
        element: <Hats />,
      },
      {
        path: "/shop/jackets",
        element: <Jackets />,
      },
      {
        path: "/shop/sneakers",
        element: <Sneakers />,
      },
      {
        path: "/shop/formals",
        element: <Formals />,
      },
      {
        path: "/shop/joggers",
        element: <Joggers />,
      },
      {
        path: "/shop/hoodies",
        element: <Hoodies />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
