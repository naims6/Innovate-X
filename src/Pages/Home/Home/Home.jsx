import React from "react";
import BannerSection from "../Banner";
import PopularContest from "../PopularContest/PopularContest";
import WinnerAdvertisement from "../WinnerAdvertisement/WinnerAdvertisement";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <PopularContest />
      <WinnerAdvertisement />
    </div>
  );
};

export default Home;
