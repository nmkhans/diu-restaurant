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
                We are Daffodil canteen Management
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit rerum, aliquid aspernatur tenetur ipsum
                harum, non doloribus fugiat odit commodi, culpa labore
                at a. Saepe quod adipisci et deleniti. Quidem
                quibusdam quisquam sed mollitia, dolore inventore
                accusantium, minus ratione eos unde reiciendis rem!
                Inventore, est itaque sequi ullam eos nam illo
                ducimus, blanditiis, obcaecati omnis repudiandae illum
                voluptas libero perspiciatis praesentium nulla impedit
                totam dignissimos accusamus eum accusantium aut
                reprehenderit cum rerum! Repudiandae nisi dolore,
                incidunt recusandae nemo, perspiciatis suscipit odio
                adipisci aliquam minima error cum. Consequatur alias
                eum asperiores, veritatis quasi error dignissimos quis
                totam! Accusamus blanditiis laboriosam sequi!
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
