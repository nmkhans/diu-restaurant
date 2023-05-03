import heroImg from "../assets/home.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../redux/api/authApi";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register: registration,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const onSubmit = async (data) => {
    const res = await register(data);

    if (res?.data?.success) {
      signIn({
        token: res.data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });

      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
      navigate("/");
    } else {
      toast.error(res?.error?.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white bg-opacity-40 rounded-xl"
          >
            <h1 className="text-4xl font-semibold mt-5 text-center text-primary">
              Register
            </h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  {...registration("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                <div className="mt-2 ml-2 text-red-600 font-semibold">
                  {errors?.name?.type === "required" &&
                    errors?.name?.message}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  {...registration("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                  })}
                />
                <div className="mt-2 ml-2 text-red-600 font-semibold">
                  {errors?.email?.type === "required" &&
                    errors?.email?.message}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Password
                  </span>
                </label>
                <input
                  {...registration("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                  })}
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                <div className="mt-2 ml-2 text-red-600 font-semibold">
                  {errors?.password?.type === "required" &&
                    errors?.password?.message}
                </div>
                <div className="mt-2 ml-2 text-red-600 font-semibold">
                  {errors?.password?.type === "minLength" &&
                    errors?.password?.message}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  {isLoading ? "Loading..." : "Register"}
                </button>
              </div>
              <p className="my-2 text-center">
                Already have an account?
                <Link
                  className="text-white font-semibold hover:underline"
                  to="/login"
                >
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
