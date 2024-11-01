import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./authentication/Login.jsx";
import Signup from "./authentication/SignUp.jsx";
import HomePage from "./components/home/HomePage.jsx";
import "./index.css";
import ProductDetails from "./components/ProductDetails ";
import { CartProvider } from "./components/home/CartContext"; // Import the CartProvider
import Cart from "./components/home/Cart.jsx";
import SearchResults from "./components/SearchByTitle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "products/:productId",
    element: <ProductDetails />,
  },
  { path: "/cart", element: <Cart /> },
  { path: "search/:title", element: <SearchResults /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
