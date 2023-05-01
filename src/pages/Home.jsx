import HeroSlider from "../components/HeroSlider";
import LatestProducts from "../components/LatestProducts";
import Layout from './../Layout/Layout';

const Home = () => {
  return (
    <main className="h-[500px]">
      <HeroSlider />
      <Layout>
        <LatestProducts />
      </Layout>
    </main>
  );
};

export default Home;
