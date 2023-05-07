import AvailableItems from "../components/AvailableItems";
import HeroSlider from "../components/HeroSlider";
import LatestProducts from "../components/LatestProducts";
import Layout from "./../Layout/Layout";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Layout>
        <AvailableItems />
        <LatestProducts />
      </Layout>
    </main>
  );
};

export default Home;
