import Layout from "../Layout/Layout";
import Title from "../Layout/Title";
import productData from "./../productData";
import Product from "./../components/Product";
import Section from "./../Layout/Section";

const Menu = () => {
  return (
    <Layout>
      <Title>All menu items</Title>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Menu;
