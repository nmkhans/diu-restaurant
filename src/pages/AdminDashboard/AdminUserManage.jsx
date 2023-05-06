/* eslint-disable react/prop-types */
import Title from "../../Layout/Title";
import Section from "./../../Layout/Section";
import {
  useGetAllUsersQuery,
  usePromoteUserMutation,
} from "../../redux/api/authApi";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";

const UserManageTableRow = ({ user, index }) => {
  const { _id, name, email, phone, role } = user;

  const [promoteUser] = usePromoteUserMutation();

  const handlePromote = async () => {
    const res = await promoteUser(_id);

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
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{role}</td>
      <td>
        {role !== "admin" && (
          <span
            onClick={handlePromote}
            className="badge badge-lg badge-primary text-white cursor-pointer"
          >
            Make admin
          </span>
        )}
      </td>
    </tr>
  );
};

const AdminUserManage = () => {
  const { data, isLoading, isError, error } = useGetAllUsersQuery();

  //? render desicion
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>No User available!</div>;

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user, index) => (
              <UserManageTableRow
                key={user._id}
                user={user}
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
      <Title>All Users</Title>
      <Section>{content}</Section>
    </div>
  );
};

export default AdminUserManage;
