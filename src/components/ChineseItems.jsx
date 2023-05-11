import Section from "./../Layout/Section";
import { useGetProductByCafeQuery } from "../redux/api/productApi";
import Loader from "./Loader";
import Product from "./Product";

const ChineseItems = () => {
  const { data, isLoading, isError, error } =
    useGetProductByCafeQuery("cafe-chinese");

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data.length < 1)
    content = <div>No item available</div>;

  if (!isLoading && !isError && data?.data.length > 0)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.data?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );
  return (
    <Section>
      <Section>{content}</Section>
    </Section>
  );
};

export default ChineseItems;
