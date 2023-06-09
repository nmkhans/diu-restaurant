/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-md rounded-none">
      <figure>
        <img className="w-[300px] h-[250px]" src={product.img} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#777777]">
          {product.name}
        </h2>
        <p className="text-xl">{product.price} TK</p>
        <div className="card-actions justify-end">
          <Link to={`/item/${product?._id}`}>
            <button className="text-lg text-primary">
              See detail <BsArrowRight className="inline-block" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
