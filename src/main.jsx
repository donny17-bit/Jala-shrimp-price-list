import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPrice from "./pages/DetailPrice";
import ListPrices from "./pages/ListPrices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPrices />,
  },
  { path: "/detail", element: <DetailPrice /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
