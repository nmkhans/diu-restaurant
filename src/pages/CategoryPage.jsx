import Layout from "./../Layout/Layout";
import Section from "./../Layout/Section";
import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../redux/api/productApi";
import Loader from "../components/Loader";
import Product from "../components/Product";

const CategoryPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetProductByCategoryQuery(id);

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data.length < 1)
    content = <div>No item available</div>;

  if (!isLoading && !isError && data?.data.length > 0)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
        {data?.data?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );

  return (
    <Layout>
      <Section>
        <h2>
          Category / <span className="text-primary">{id}</span>
        </h2>
      </Section>
      <Section>{content}</Section>
    </Layout>
  );
};

export default CategoryPage;
