import React from "react";
import { useProducts } from "../../Product Provider/ProductProvider";

const Home = () => {
  const { data } = useProducts();
  console.log(data);

  return <div>This is Home</div>;
};

export default Home;
