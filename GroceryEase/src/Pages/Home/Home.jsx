import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BannerSlider from "../../Components/Banners/BannerSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider/>
      <Footer />
    </div>
  );
}

export default Home;
