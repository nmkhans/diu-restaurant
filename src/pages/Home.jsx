import AvailableChineseItems from "../components/AvailableChineseItems";
import ChineseItems from "../components/ChineseItems";
import FastFoodItems from "../components/FastFoodItems";
import HeroSlider from "../components/HeroSlider";
import LatestProducts from "../components/LatestProducts";
import NewFoodArrival from "../components/NewFoodArrival";
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
        <NewFoodArrival />
      </Layout>
    </main>
  );
};

export default Home;
