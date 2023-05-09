import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";
import { useGetSingleProductQuery } from "../redux/api/productApi";
import Loader from "./../components/Loader";
import Section from "../Layout/Section";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } =
    useGetSingleProductQuery(id);

  const handleAddToCart = () => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { _id, name, img, price } = data?.data;

    dispatch(
      addToCart({
        _id,
        name,
        img,
        price,
      })
    );
  };

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && !data?.data._id)
    content = <div>Item not available!</div>;

  if (!isLoading && !isError && data?.data._id) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { name, img, description, price, stock, cafeteria } =
      // eslint-disable-next-line no-unsafe-optional-chaining
      data?.data;

    content = (
      <div className="flex justify-between">
        <div>
          <figure>
            <img className="w-[550px]" src={img} alt="" />
          </figure>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-primary">{name}</h3>
          <p className="text-xl text-slate-800 mt-5">
            Cafe: {cafeteria}
          </p>
          <p className="text-xl text-slate-800 mt-5">
            Price: {price} TK
          </p>
          <p className="text-xl text-slate-800 mt-5">
            Stock: {stock !== 0 ? stock : "Out of stock"}
          </p>
          <p className="text-[#777] mt-5">{description}</p>

          <div className="mt-10">
            <button
              disabled={stock === 0}
              onClick={handleAddToCart}
              className="btn btn-primary w-full text-base-100"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="pb-10">
        <h3>
          Menu / item /{" "}
          <span className="text-primary">{data?.data?.name}</span>{" "}
        </h3>
      </div>
      <Section>{content}</Section>
    </Layout>
  );
};

export default ProductDetail;
