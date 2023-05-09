import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Section from "../Layout/Section";
import { useGetProductByCafeQuery } from "../redux/api/productApi";
import Loader from "./../components/Loader";
import Product from "./../components/Product";

const CafeteriaPage = () => {
  const { name } = useParams();

  const { data, isLoading, isError, error } =
    useGetProductByCafeQuery(name);

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
    <Layout>
      <Section>
        <h3>
          Cafeteria / <span className="text-primary">{name}</span>
        </h3>
      </Section>
      <Section>
        <div className="mt-10">{content}</div>
      </Section>
    </Layout>
  );
};

export default CafeteriaPage;
