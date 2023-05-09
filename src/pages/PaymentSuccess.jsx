import { useNavigate, useParams } from "react-router-dom";
import { useVerifyPaymentQuery } from "../redux/api/paymentApi";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { toast } from "react-hot-toast";
import Layout from "./../Layout/Layout";
import Section from "../Layout/Section";
import Images from "../util/Images";
import { useAuthUser } from "react-auth-kit";

const PaymentSuccess = () => {
  const [orderId, setOrderId] = useState();
  const [skip, setSkip] = useState(true);
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const user = useAuthUser()();

  const { data, isLoading, isError, error } = useVerifyPaymentQuery(
    {
      transactionId: transactionId,
      orderId: orderId,
    },
    {
      skip: skip,
    }
  );

  useEffect(() => {
    if (localStorage.getItem("orderId")) {
      setOrderId(localStorage.getItem("orderId"));
    }
    if (orderId && transactionId) {
      setSkip(false);
    }
  }, [orderId, transactionId]);

  useEffect(() => {
    if (data?.success) {
      toast.success("Payment successfull. Your order is on the way", {
        position: "bottom-center",
      });
    }
  }, [data]);

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && !data?.success)
    content = <div>Something went wrong.</div>;

  if (!isLoading && !isError && data?.success)
    content = (
      <div>
        <div className="text-center">
          <figure>
            <img
              className="w-[300px] mx-auto"
              src={Images.checked}
              alt=""
            />
          </figure>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center text-success mt-5">
            Playment successfull.
          </h3>
        </div>
        <div className="text-center mt-5">
          <button
            onClick={() =>
              navigate(`/${user?.role}/dashboard/orders`)
            }
            className="btn btn-primary text-white"
          >
            Go to dashboard
          </button>
        </div>
      </div>
    );

  return (
    <Layout>
      <Section>{content}</Section>
    </Layout>
  );
};

export default PaymentSuccess;
