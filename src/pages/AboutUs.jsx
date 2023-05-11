/* eslint-disable react/no-unescaped-entities */
import Layout from "./../Layout/Layout";
import Title from "./../Layout/Title";
import Section from "./../Layout/Section";
import Images from "./../util/Images";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Layout>
      <Title>About Us</Title>
      <Section>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-col">
            <img
              src={Images.slideTwo}
              className="rounded-lg shadow-2xl mb-10"
            />
            <div>
              <h1 className="text-5xl font-bold">
                We are Daffodil canteen Team
              </h1>
              <p className="py-6">
                Welcome to our restaurant! We're a team of passionate
                foodies who believe that dining out should be an
                unforgettable experience. From the moment you step
                through our doors, you'll be transported to a world of
                bold flavors, exciting aromas, and warm hospitality.
                At our restaurant, we're committed to using only the
                freshest, highest-quality ingredients in every dish we
                create. Whether you're indulging in one of our
                signature entrees or savoring a mouth-watering
                appetizer, you can trust that every bite will be
                bursting with flavor and nutrition. But we're more
                than just great food - we're also dedicated to
                providing exceptional service and creating a welcoming
                atmosphere for all of our guests. Whether you're
                celebrating a special occasion with loved ones or
                enjoying a casual meal with friends, we want you to
                feel right at home and have an unforgettable
                experience. So come visit us today and experience the
                best of what our restaurant has to offer. We're
                confident that once you taste our delicious food and
                experience our exceptional service, you'll become a
                loyal customer for life. Thank you for choosing us -
                we can't wait to serve you!
              </p>
              <Link to="/">
                <button className="btn btn-primary">
                  Browse cafe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutUs;
