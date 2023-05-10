import Section from "./../../Layout/Section";
import Title from "./../../Layout/Title";
import {
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} from "../../redux/api/authApi";
import { useAuthUser } from "react-auth-kit";
import Loader from "./../../components/Loader";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

const TeacherProfile = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const { register, handleSubmit } = useForm();
  const user = useAuthUser()();
  const { data, isLoading, isError, error } = useGetProfileInfoQuery(
    user?.email
  );

  const [updateProfile] = useUpdateProfileMutation();

  const onSubmit = async (data) => {
    const res = await updateProfile({ id: user._id, data });

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

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && !data?.data?._id)
    content = <div>No data available</div>;

  if (!isLoading && !isError && data?.data?._id) {
    content = (
      <div>
        <div className="card flex-shrink-0 w-4/5 mx-auto shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  defaultValue={data?.data?.name}
                  {...register("name")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  disabled
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  defaultValue={data?.data?.email}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                  defaultValue={data?.data?.phone}
                  {...register("phone")}
                />
              </div>

              <div className="form-control flex-row mt-5">
                <input
                  id="update"
                  type="checkbox"
                  checked={updateMode}
                  className="checkbox checkbox-primary"
                  onClick={() => setUpdateMode(!updateMode)}
                />
                <label htmlFor="update" className="ml-3">
                  Update
                </label>
              </div>

              <div className="mt-6 text-right">
                <button
                  disabled={!updateMode}
                  className="btn btn-primary text-white"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Section>
      <Title>Manage Profile</Title>
      <Section>{content}</Section>
    </Section>
  );
};

export default TeacherProfile;
