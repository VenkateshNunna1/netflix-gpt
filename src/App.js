import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div>
      <Provider store={AppStore}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
};

export default Body;
