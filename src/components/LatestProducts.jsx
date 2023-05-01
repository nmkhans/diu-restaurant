import Section from "../Layout/Section";
import Title from "./../Layout/Title";
import productData from "../productData";
import Product from "./Product";

const LatestProducts = () => {
  return (
    <Section>
      <Title>Latest Items</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productData?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
};

export default LatestProducts;
