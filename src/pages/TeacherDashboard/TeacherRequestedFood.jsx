/* eslint-disable react/prop-types */
import { useGetRequestListForUserQuery } from "../../redux/api/requestApi";
import { useAuthUser } from "react-auth-kit";
import Layout from "./../../Layout/Layout";
import Title from "./../../Layout/Title";
import Loader from "./../../components/Loader";
import Section from "./../../Layout/Section";

const TableRow = ({ data, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{data.foodName}</td>
      <td>{data.approved ? "Yes" : "No"}</td>
      <td>{data.cafeteria ? data.cafeteria : "Not Approved "}</td>
    </tr>
  );
};

const TeacherRequestedFood = () => {
  const user = useAuthUser()();

  const { data, isLoading, isError, error } =
    useGetRequestListForUserQuery(user?.email);

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>NO data available</div>;

  if (!isLoading && !isError && data?.data?.length > 0) {
    console.log(data);
    content = (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Food Name</th>
              <th>Approved</th>
              <th>Cafeteria</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((data, index) => (
              <TableRow key={data._id} data={data} index={index} />
            ))}
          </tbody>
        </table>
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

export default TeacherRequestedFood;
