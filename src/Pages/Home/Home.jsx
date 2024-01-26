import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/category";
import Featured from "./Featured/Featured";
import Popularmenu from "./PopularMenu/Popularmenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Popularmenu></Popularmenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
