import React from "react";
import BannerSection from "../Banner";
import PopularContest from "../PopularContest/PopularContest";
import WinnerAdvertisement from "../WinnerAdvertisement/WinnerAdvertisement";
import WhyContestHub from "../WhyContestHub/WhyContestHub";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <PopularContest />
      <WinnerAdvertisement />
      <WhyContestHub />
    </div>
  );
};

export default Home;
