import heroImg from "../assets/home.jpg";
import { Link } from "react-router-dom";

const Login = () => {
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
          <form>
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
                />
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
                />

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
                  Login
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
