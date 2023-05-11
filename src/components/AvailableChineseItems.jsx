/* eslint-disable react/no-unescaped-entities */
import Section from "./../Layout/Section";
import Images from "../util/Images";
import { Link } from "react-router-dom";

const AvailableChineseItems = () => {
  return (
    <div className="my-10">
      <Section>
        <div className="py-10">
          <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={Images.chineseFood}
                className="w-[600px] rounded-lg mr-10"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  All kind of food is available on Food court.
                </h1>
                <p className="py-6">
                  At our Chinese restaurant, we believe that food
                  should be an experience. That's why we've created a
                  menu that showcases the bold flavors and rich
                  culinary traditions of China, while also offering
                  something for everyone. From classic dishes like
                  General Tso's chicken and lo mein to more unique
                  options like Szechuan-style beef and Hunan-style
                  tofu, our Chinese food menu has something to satisfy
                  every palate. And with our commitment to using only
                  the freshest, highest-quality ingredients, you can
                  trust that every dish will be bursting with flavor
                  and nutrition.
                </p>
                <Link to="/cafeteria/food-court">
                  <button className="btn btn-primary">
                    See Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AvailableChineseItems;
