
import Counter from '../../Components/CountingSection/Counter';
import Footer from '../../Components/Footer/Footer';
import TopSellingFood from '../../Components/HomeComponents/TopSellingFood';

const Home = () => {
     return (
          <div>
               <TopSellingFood></TopSellingFood>
              <Counter></Counter>
              <Footer></Footer>
          </div>
     );
};

export default Home;