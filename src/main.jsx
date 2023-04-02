import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPrice from "./pages/DetailPrice";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/detail", element: <DetailPrice /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
