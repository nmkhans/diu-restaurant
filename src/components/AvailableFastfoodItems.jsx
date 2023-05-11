/* eslint-disable react/no-unescaped-entities */
import Section from "./../Layout/Section";
import Images from "../util/Images";
import { Link } from "react-router-dom";

const AvailableFastfoodItems = () => {
  return (
    <div className="my-10">
      <Section>
        <div className="py-10">
          <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={Images.foodImg}
                className="w-[600px] rounded-lg"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  All kind Items are available in Green gurden.
                </h1>
                <p className="py-6">
                  When it comes to fast food, it's all about
                  delicious, convenient meals that can be enjoyed on
                  the go. That's why we've created a menu that's
                  packed with all of your favorite fast food classics,
                  as well as some exciting new options that are sure
                  to become instant favorites. From juicy burgers and
                  crispy fries to savory chicken sandwiches and loaded
                  nachos, our fast food menu has something for
                  everyone. And with our focus on fresh, high-quality
                  ingredients, you can feel good about indulging in
                  all of your fast food cravings.
                </p>
                <Link to="/cafeteria/green-garden">
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

export default AvailableFastfoodItems;
