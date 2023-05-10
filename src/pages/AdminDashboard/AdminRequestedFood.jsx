/* eslint-disable react/prop-types */
import {
  useGetAllRequestedFoodQuery,
  useDeclineRequestMutation,
} from "../../redux/api/requestApi";
import Layout from "./../../Layout/Layout";
import Title from "./../../Layout/Title";
import Loader from "./../../components/Loader";
import Section from "./../../Layout/Section";
import ApproveModal from "../../components/ApproveModal";
import { useState } from "react";
import toast from "react-hot-toast";

const TableRow = ({ data, index, setId }) => {
  const [declineRequest] = useDeclineRequestMutation();

  const handleDecline = async () => {
    const res = await declineRequest(data?._id);

    if (res?.data?.success) {
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.error?.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{data.foodName}</td>
      <td>{data.approved ? "Yes" : "No"}</td>
      <td>{data.cafeteria ? data.cafeteria : "Not Approved "}</td>
      <td>
        {!data.approved && (
          <>
            <span
              onClick={() => setId(data._id)}
              className="badge badge-outline badge-success mx-2 cursor-pointer"
            >
              <label
                className="cursor-pointer"
                htmlFor="approve-modal"
              >
                Approve
              </label>
            </span>
            <span
              onClick={handleDecline}
              className="badge badge-outline badge-error mx-2 cursor-pointer"
            >
              Decline
            </span>
          </>
        )}
      </td>
    </tr>
  );
};

const AdminRequestedFood = () => {
  const [id, setId] = useState("");
  const { data, isLoading, isError, error } =
    useGetAllRequestedFoodQuery();

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>NO data available</div>;

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Food Name</th>
              <th>Approved</th>
              <th>Cafeteria</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((data, index) => (
              <TableRow
                key={data._id}
                data={data}
                index={index}
                setId={setId}
              />
            ))}
          </tbody>
        </table>
        <ApproveModal id={id} />
      </div>
    );
  }

  return (
    <Layout>
      <Title>Requested Food</Title>
      <Section>{content}</Section>
    </Layout>
  );
};

export default AdminRequestedFood;
