import Layout from "../Layout/Layout";
import Title from "../Layout/Title";
import Product from "./../components/Product";
import Section from "./../Layout/Section";
import { useGetAllProductsQuery } from "../redux/api/productApi";
import Loader from "../components/Loader";

const Menu = () => {
  const { data, isLoading, isError, error } =
    useGetAllProductsQuery();

  //? render decition
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data.length < 1)
    content = <div>No item available</div>;

  if (!isLoading && !isError && data?.data.length > 0)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.data?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );
  return (
    <Layout>
      <Title>All menu items</Title>
      <Section>{content}</Section>
    </Layout>
  );
};

export default Menu;
