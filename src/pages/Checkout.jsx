import CheckoutItem from "../components/CheckoutItem";
import Layout from "./../Layout/Layout";
import Section from "./../Layout/Section";
import Title from "./../Layout/Title";
import { useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { usePlaceOrderMutation } from "../redux/api/orderApi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/reducer/cartSlice";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [placeOrder] = usePlaceOrderMutation();
  const dispatch = useDispatch();

  const auth = useAuthUser()();

  const delivery = parseFloat((total / 100) * 5);

  const getProducts = (cart) => {
    let productList = [];

    for (let item in cart) {
      productList.push(cart[item]);
    }

    return productList;
  };

  const onSubmit = async (data) => {
    const products = getProducts(cart);

    const orderData = {
      ...data,
      products,
      amount: total,
    };

    const res = await placeOrder(orderData);

    if (res?.data?.success) {
      dispatch(clearCart());
      toast.success(
        "Order has been placed. To confirm your order please make payment from your dashboard",
        {
          position: "bottom-center",
        }
      );
    } else {
      toast.error(res?.error?.data?.message);
    }
  };

  return (
    <Layout>
      <Section>
        <div className="text-center">
          <Title>Checkout</Title>
        </div>
      </Section>
      <Section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between w-full"
        >
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
                      defaultValue={auth.name}
                      {...register("name", {
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

                  <div className="form-control w-full my-3">
                    <label htmlFor="email" className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      defaultValue={auth.email}
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

                  <div className="form-control w-full my-3">
                    <label htmlFor="phone" className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Enter your phone"
                      className="input input-bordered w-full"
                      defaultValue={auth.phone}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone is required!",
                        },
                      })}
                    />
                    <div className="mt-2 ml-2 text-red-600 font-semibold">
                      {errors?.phone?.type === "required" &&
                        errors?.phone?.message}
                    </div>
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
                      {...register("city", {
                        required: {
                          value: true,
                          message: "City is required!",
                        },
                      })}
                    />
                    <div className="mt-2 ml-2 text-red-600 font-semibold">
                      {errors?.city?.type === "required" &&
                        errors?.city?.message}
                    </div>
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
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is required!",
                        },
                      })}
                    ></textarea>
                    <div className="mt-2 ml-2 text-red-600 font-semibold">
                      {errors?.address?.type === "required" &&
                        errors?.address?.message}
                    </div>
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
                <div className="flex justify-between">
                  <h3>Subtotal: </h3>
                  <h3>{total} Taka</h3>
                </div>
                <div className="flex justify-between mt-5">
                  <h3>Delivery: </h3>
                  <h3>{delivery} Taka</h3>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <div className="flex justify-between mt-5 font-semibold text-primary text-center text-lg">
                <h3>Total: </h3>
                <h3>{total + delivery} Taka</h3>
              </div>
            </div>
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="btn btn-primary text-white w-full "
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default Checkout;
