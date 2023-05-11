import AvailableChineseItems from "../components/AvailableChineseItems";
import ChineseItems from "../components/ChineseItems";
import FastFoodItems from "../components/FastFoodItems";
import HeroSlider from "../components/HeroSlider";
import LatestProducts from "../components/LatestProducts";
import Layout from "./../Layout/Layout";
import AvailableFastfoodItems from './../components/AvailableFastfoodItems';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Layout>
        <LatestProducts />
        <AvailableFastfoodItems />
        <FastFoodItems />
        <AvailableChineseItems />
        <ChineseItems />
      </Layout>
    </main>
  );
};

export default Home;
