import React from "react";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./Product Provider/ProductProvider";
import routes from "./Routes/Route";

const App = () => {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>
    </div>
  );
};

export default App;
