import BannerSection from "../Banner";
import PopularContest from "../PopularContest/PopularContest";
import WinnerAdvertisement from "../WinnerAdvertisement/WinnerAdvertisement";
import WhyContestHub from "../WhyContestHub/WhyContestHub";
import Statistics from "../Statistics/Statistics";
import Blogs from "../Blogs/Blogs";
import Newsletter from "../Newsletter/Newsletter";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <PopularContest />
      <WinnerAdvertisement />
      <WhyContestHub />
      <Statistics />
      <Blogs />
      <Newsletter />
      <FAQ />
    </div>
  );
};

export default Home;
