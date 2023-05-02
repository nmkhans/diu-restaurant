import Layout from "../Layout/Layout";
import Section from "../Layout/Section";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Section>
        <h2>
          Category / <span className="text-primary">{id}</span>
        </h2>
      </Section>
      <Section>
        
      </Section>
    </Layout>
  );
};

export default CategoryPage;
