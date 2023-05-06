/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Title from "./../../Layout/Title";
import Section from "./../../Layout/Section";
import { useGetAllOrdersQuery } from "../../redux/api/orderApi";
import Loader from "./../../components/Loader";
import UpdateStatusModal from "../../components/UpdateStatusModal";
import { useState } from "react";

const OrderTableRow = ({ data, index, setUpdateId }) => {
  const { _id, name, products, amount, paid, status, transactionId } =
    data;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{products.length}</td>
        <td>{amount}</td>
        <td>
          {paid ? (
            <span className="badge badge-success text-white">
              true
            </span>
          ) : (
            <span className="badge badge-secondary text-white">
              false
            </span>
          )}
        </td>
        <td>
          {status === "pending" ? (
            <span className="badge badge-warning text-white cursor-pointer">
              {status}
            </span>
          ) : (
            <span className="badge badge-info text-white cursor-pointer">
              {status}
            </span>
          )}
        </td>
        <td>{transactionId ? transactionId : "Not available"}</td>
        <td>
          {paid && status !== "shipped" && (
            <span
              onClick={() => setUpdateId(_id)}
              className="badge badge-lg badge-info text-white cursor-pointer"
            >
              <label
                className="cursor-pointer"
                htmlFor="update-status-modal"
              >
                Update status
              </label>
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

const AdminAllOrders = () => {
  const [updateId, setUpdateId] = useState("");
  const { data, isLoading, isError, error } = useGetAllOrdersQuery();

  //? render desicion
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>No Data available!</div>;

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Products</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Transaction Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((data, index) => (
                <OrderTableRow
                  key={data._id}
                  data={data}
                  index={index}
                  setUpdateId={setUpdateId}
                />
              ))}
            </tbody>
          </table>
          <UpdateStatusModal updateId={updateId} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Title>All Orders</Title>
      <Section>{content}</Section>
    </div>
  );
};

export default AdminAllOrders;
