import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/reducer/cartSlice";

// eslint-disable-next-line react/prop-types
const CheckoutItem = ({ item }) => {
  const { cart } = useSelector((state) => state.cart);
  const { _id, img, name, quantity, price } = cart[item];

  const dispatch = useDispatch();

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
    dispatch(
      removeFromCart({
        _id,
      })
    );
  };

  return (
    <div className="flex justify-between items-center my-5">
      <div>
        <figure>
          <img
            className="w-[80px] rounded"
            src={img}
            alt="checkout item image"
          />
        </figure>
      </div>
      <div>
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>
      <div>
        <span
          onClick={handleRemove}
          className="badge badge-primary cursor-pointer text-white"
        >
          &minus;
        </span>
        <span className="mx-3">{quantity}</span>
        <span
          onClick={handleAdd}
          className="badge badge-primary cursor-pointer text-white"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
