/* eslint-disable react/prop-types */
import Title from "./../../Layout/Title";
import Section from "./../../Layout/Section";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import Loader from "../../components/Loader";
import { FiTrash, FiEdit } from "react-icons/fi";

const ProductTableRow = ({ data, index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.img} alt="product image" />
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-primary">
                {data.name}
              </div>
            </div>
          </div>
        </td>
        <td>{data.stock}</td>
        <td>{data.price} TK</td>
        <td>{data.category}</td>
        <td className="flex justify-start">
          <span>
            <FiEdit className="mx-3 text-[20px] text-warning cursor-pointer" />
          </span>
          <span>
            <FiTrash className="mx-3 text-[20px] text-error cursor-pointer" />
          </span>
        </td>
      </tr>
    </>
  );
};

const AdminAllProducts = () => {
  const { data, isLoading, isError, error } =
    useGetAllProductsQuery();

  //? render desicion
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>No Data available!</div>;

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th></th>
              <th>Stock</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((data, index) => (
              <ProductTableRow
                key={data.id}
                data={data}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Title>All Products</Title>
      <Section>{content}</Section>
    </div>
  );
};

export default AdminAllProducts;
