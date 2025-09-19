import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { CheckOut } from "./pages/CheckOut";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;
