import Layout from "../Layout/Layout";
import productData from "./../productData";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { _id, name, img, description, price } = productData.find(
    (product) => product._id === +id
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        img,
        price,
      })
    );
  };

  return (
    <Layout>
      <div className="pb-10">
        <h3>
          Menu / item / <span className="text-primary">{name}</span>{" "}
        </h3>
      </div>
      <div className="flex justify-between">
        <div>
          <figure>
            <img className="w-[550px]" src={img} alt="" />
          </figure>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-primary">{name}</h3>
          <p className="text-xl text-slate-800 mt-5">{price} TK</p>
          <p className="text-[#777] mt-5">{description}</p>

          <div className="mt-10">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full text-base-100"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
