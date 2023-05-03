import Section from "../Layout/Section";
import Title from "./../Layout/Title";
import Product from "./Product";
import { useGetAllProductsQuery } from "../redux/api/productApi";
import Loader from "./Loader";

const LatestProducts = () => {
  const { data, isLoading, isError, error } =
    useGetAllProductsQuery();

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data.length < 1)
    content = <div>No item available</div>;

  if (!isLoading && !isError && data?.data.length > 0)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.data?.slice(0, 12).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );

  return (
    <Section>
      <Title>Latest Items</Title>
      <div>{content}</div>
    </Section>
  );
};

export default LatestProducts;
