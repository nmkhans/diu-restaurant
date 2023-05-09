import Section from "./../../Layout/Section";
import Title from "./../../Layout/Title";
import { useForm } from "react-hook-form";
import { useAuthUser } from "react-auth-kit";
import { usePlaceRequestMutation } from "../../redux/api/requestApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TeacherRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [placeRequest] = usePlaceRequestMutation();

  const user = useAuthUser()();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const requestData = {
      ...data,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };

    const res = await placeRequest(requestData);

    if (res?.data?.success) {
      reset();
      navigate(`/${user.role}/dashboard`);
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.error?.data?.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <Section>
      <Title>Request for foods</Title>
      <div className="card flex-shrink-0 w-4/5 mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food name</span>
              </label>
              <input
                type="text"
                placeholder="Name of food you want"
                className="input input-bordered"
                {...register("foodName", {
                  required: {
                    value: true,
                    message: "Food name is required",
                  },
                })}
              />
              <span className="ml-3 mt-2 text-red-500">
                {errors?.foodName?.type === "required" &&
                  errors?.foodName?.message}
              </span>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write your message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                })}
              ></textarea>
              <span className="ml-3 mt-2 text-red-500">
                {errors?.message?.type === "required" &&
                  errors?.message?.message}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default TeacherRequest;
