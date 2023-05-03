import heroImg from "../assets/home.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const onSubmit = async (data) => {
    const res = await login(data);

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
      style={{ backgroundImage: `url(${heroImg})` }}
      className="min-h-screen hero bg-opacity-10"
    >
      <div className={`hero min-h-screen flex justify-between px-32`}>
        <div>
          <div>
            <h1 className="text-6xl text-white font-bold">
              Welcome & have a
            </h1>
            <h1 className="text-[65px] text-primary font-bold">
              Coffee
            </h1>
            <h1 className="text-6xl text-white font-bold">
              with yours friend
            </h1>
          </div>
        </div>

        <div className="bg-white bg-opacity-40 py-5 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-semibold text-center text-primary">
              Log In
            </h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  {...register("email", {
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
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required!",
                    },
                  })}
                />
                <div className="mt-2 ml-2 text-red-600 font-semibold">
                  {errors?.password?.type === "required" &&
                    errors?.password?.message}
                </div>

                <label className="label">
                  <Link
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary text-white">
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </form>
          <div className="-mt-5">
            <p className="text-center">
              New user?
              <Link
                to="/register"
                className="text-white font-semibold  hover:underline"
              >
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
