/* eslint-disable react/prop-types */
import { useGetUsersAllOrderQuery } from "../../redux/api/orderApi";
import { useAuthUser } from "react-auth-kit";
import Title from "./../../Layout/Title";
import Section from "./../../Layout/Section";
import Loader from "./../../components/Loader";
import { useMakePaymentMutation } from "../../redux/api/paymentApi";

const OrderTableRow = ({ data, index }) => {
  const [makePayment] = useMakePaymentMutation();
  const { name, products, amount, paid, status, transactionId } =
    data;

  const handlePayment = async () => {
    const res = await makePayment(data);
    console.log(res);
    if (res.data.status === "SUCCESS") {
      localStorage.setItem("orderId", res.data.orderId);
      location.href = res.data.GatewayPageURL;
    }
  };

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
          {!paid ? (
            <span
              onClick={handlePayment}
              className="badge badge-lg badge-info text-white cursor-pointer"
            >
              Make payment
            </span>
          ) : (
            <span className="badge badge-success text-white
            ">Paid</span>
          )}
        </td>
      </tr>
    </>
  );
};

const UserOrders = () => {
  const user = useAuthUser()();
  const { data, isLoading, isError, error } =
    useGetUsersAllOrderQuery(user?.email);

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
                />
              ))}
            </tbody>
          </table>
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

export default UserOrders;
