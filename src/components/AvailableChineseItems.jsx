import Section from "./../Layout/Section";
import Title from "./../Layout/Title";
import Images from "../util/Images";
import { Link } from "react-router-dom";

const AvailableChineseItems = () => {
  return (
    <div className="my-10">
      <Section>
        <Title>Available Chinese items</Title>
        <div className="py-10">
          <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={Images.chineseFood}
                className="w-[600px] rounded-lg mr-10"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  All kind of Chinese foods are available.
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat
                  fugiat ut assumenda excepturi exercitationem quasi.
                  In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Link to="/cafeteria/cafe-chinese">
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
