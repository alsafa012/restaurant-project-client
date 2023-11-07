
import Counter from "../../Components/CountingSection/Counter";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import Footer from "../../Components/Footer/Footer";
import BannerSection from "../../Components/HeaderSection/BannerSection/BannerSection";
import TopSellingFood from "../../Components/HomeComponents/TopSellingFood";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Home = () => {
     return (
          <div>
               <PageTitle title="Home Page"></PageTitle>
               {/* <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
               </Helmet> */}
               <BannerSection></BannerSection>
               <TopSellingFood></TopSellingFood>
               <FirstExtraSection></FirstExtraSection>
               <Counter></Counter>
               <Footer></Footer>
          </div>
     );
};

export default Home;
