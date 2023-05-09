/* eslint-disable react/prop-types */
import Title from "../../Layout/Title";
import Section from "./../../Layout/Section";
import {
  useGetAllUsersQuery,
  usePromoteUserToAdminMutation,
  usePromoteUserToTeacherMutation,
} from "../../redux/api/authApi";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import UpdateUserRoleModal from "../../components/UpdateUserRoleModal";
import { useState } from "react";

const UserManageTableRow = ({ user, index, setUpdateId }) => {
  const { _id, name, email, phone, role } = user;

  const [promoteUserToAdmin] = usePromoteUserToAdminMutation();
  const [promoteUserToTeacher] = usePromoteUserToTeacherMutation();

  const handlePromoteToAdmin = async () => {
    const res = await promoteUserToAdmin(_id);

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

  const handlePromoteToTeacher = async () => {
    const res = await promoteUserToTeacher(_id);

    if (res?.data?.success) {
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.data?.error.message, {
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
        {user?.role !== "admin" && (
          <span
            onClick={handlePromoteToAdmin}
            className="badge badge-lg badge-primary text-white cursor-pointer mx-2"
          >
            Make admin
          </span>
        )}

        {user?.role !== "admin" && user.role !== "teacher" && (
          <span
            onClick={handlePromoteToTeacher}
            className="badge badge-lg badge-primary text-white cursor-pointer mx-2"
          >
            Make Teacher
          </span>
        )}

        {user?.role !== "admin" && user.role !== "manager" && (
          <span
            onClick={() => setUpdateId(user._id)}
            className="badge badge-lg badge-primary text-white cursor-pointer mx-2"
          >
            <label htmlFor="update-user-role-modal">
              Make Manager
            </label>
          </span>
        )}
      </td>
    </tr>
  );
};

const AdminUserManage = () => {
  const [updateId, setUpdateId] = useState("");
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
                setUpdateId={setUpdateId}
              />
            ))}
          </tbody>
          <UpdateUserRoleModal updateId={updateId} />
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
