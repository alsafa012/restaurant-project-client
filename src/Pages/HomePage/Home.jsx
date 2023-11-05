import Counter from "../../Components/CountingSection/Counter";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/HeaderSection/BannerSection/BannerSection";
import TopSellingFood from "../../Components/HomeComponents/TopSellingFood";

const Home = () => {
     return (
          <div>
               <BannerSection></BannerSection>
               <TopSellingFood></TopSellingFood>
               <Counter></Counter>
               <Footer></Footer>
          </div>
     );
};

export default Home;
