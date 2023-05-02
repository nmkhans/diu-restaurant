import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/reducer/cartSlice";
import Layout from "./../Layout/Layout";
import Title from "./../Layout/Title";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Layout>
      <Title>Cart Items</Title>
      <div className="flex flex-col gap-10">
        {Object.keys(cart).length > 0 ? (
          Object?.keys(cart)?.map((item) => (
            <CartItem key={cart[item]} item={item} />
          ))
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-primary text-center">
              Cart is empty
            </h2>
            <p className="text-center text-lg mt-5">
              Add some item to cart.
            </p>
          </div>
        )}
      </div>
      {Object.keys(cart).length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={() => dispatch(clearCart())}
            className="btn btn-primary mx-3 text-white"
          >
            Clear cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="btn btn-primary mx-3 text-white"
          >
            Checkout
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
