import heroImg from "../assets/home.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl">
          <form className="bg-white bg-opacity-40 rounded-xl">
            <h1 className="text-4xl font-semibold mt-5 text-center text-primary">
              Sign Up
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
                />
              </div>

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
                  /* {...register("password", {
                    required: "Make your password strong",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })} */

                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Sign up
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
