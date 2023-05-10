import Title from "./../../Layout/Title";
import Section from "./../../Layout/Section";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApi";
import Loader from "./../../components/Loader";
import UpdateProductForm from "./UpdateProductForm";

const ManagerProductUpdate = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetSingleProductQuery(id);

  //? render dicision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && !data?.data?._id)
    content = <div>No data available</div>;

  if (!isLoading && !isError && data?.data?._id)
    content = <UpdateProductForm product={data?.data} />;

  return (
    <div>
      <Title>Update product</Title>
      <Section>{content}</Section>
    </div>
  );
};

export default ManagerProductUpdate;
