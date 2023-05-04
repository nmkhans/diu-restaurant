import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/reducer/cartSlice";

// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { _id, name, img, price, quantity } = cart[item];

  const handleAdd = () => {
    dispatch(
      addToCart({
        _id,
        name,
        img,
        price,
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ _id }));
  };

  return (
    <div
      key={cart[item]._id}
      className="card card-side bg-base-100 shadow-xl w-4/5 mx-auto"
    >
      <div className="w-full flex flex-row items-center justify-evenly">
        <figure>
          <img
            className="w-[150px]"
            src={img}
            alt="cart item image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
        </div>
        <div className="mr-10">
          <button
            onClick={handleRemove}
            className="btn btn-primary mx-2 text-base-100"
          >
            -
          </button>
          <button
            onClick={handleAdd}
            className="btn btn-primary mx-2 text-base-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
