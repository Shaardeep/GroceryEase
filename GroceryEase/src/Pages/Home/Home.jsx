import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BannerSlider from "../../Components/Banners/BannerSlider";
import HomeCategories from "../../Components/Category/HomeCategories";
import Product_Sidebar from "../../Components/Product/Product_Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider/>
      <HomeCategories/>
      <Product_Sidebar/>
      <Footer />
    </div>
  );
}

export default Home;
