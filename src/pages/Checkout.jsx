import CheckoutItem from "../components/CheckoutItem";
import Layout from "./../Layout/Layout";
import Section from "./../Layout/Section";
import Title from "./../Layout/Title";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);

  const delivery = parseFloat((total / 100) * 5);

  return (
    <Layout>
      <Section>
        <div className="text-center">
          <Title>Checkout</Title>
        </div>
      </Section>
      <Section>
        <form className="flex justify-between w-full">
          <div className="w-[49%]">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="text-center">
                  <h3 className="text-primary text-xl font-semibold">
                    Delivery detail
                  </h3>
                </div>
                <div>
                  <div className="form-control w-full my-3">
                    <label htmlFor="name" className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full my-3">
                    <label htmlFor="email" className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full my-3">
                    <label htmlFor="phone" className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Enter your phone"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full my-3">
                    <label htmlFor="district" className="label">
                      <span className="label-text">District</span>
                    </label>
                    <input
                      id="district"
                      type="text"
                      placeholder="Enter your district"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full my-3">
                    <label htmlFor="city" className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Enter your city"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full my-3">
                    <label htmlFor="address" className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      id="address"
                      type="text"
                      placeholder="Enter your address"
                      className="input input-bordered w-full h-[100px] p-5"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[49%] bg-[#f4f6fa] rounded p-10 shadow">
            <div className="text-center">
              <h3 className="text-primary text-xl font-semibold">
                Your order
              </h3>
            </div>
            <div className="mt-5">
              {Object.keys(cart).map((key) => (
                <CheckoutItem key={key} item={key} />
              ))}
            </div>
            <div className="divider"></div>
            <div>
              <div className="font-semibold text-primary text-center text-lg">
                <div className="flex justify-evenly">
                  <h3>Subtotal: </h3>
                  <h3>{total} Taka</h3>
                </div>
                <div className="flex justify-evenly mt-5">
                  <h3>Delivery: </h3>
                  <h3>{delivery} Taka</h3>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <div className="flex justify-evenly mt-5 font-semibold text-primary text-center text-lg">
                <h3>Total: </h3>
                <h3>{total + delivery} Taka</h3>
              </div>
            </div>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default Checkout;
