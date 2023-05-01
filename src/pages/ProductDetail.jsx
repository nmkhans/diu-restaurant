import Layout from "../Layout/Layout";
import productData from "./../productData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const product = productData.find((product) => product.id === +id);

  return (
    <Layout>
      <div className="pb-10">
        <h3>
          Menu / item /{" "}
          <span className="text-primary">{product?.name}</span>{" "}
        </h3>
      </div>
      <div className="flex justify-between">
        <div>
          <figure>
            <img className="w-[430px]" src={product.img} alt="" />
          </figure>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-primary">{product.name}</h3>
          <p className="text-xl text-slate-800 mt-5">
            {product.prize} TK
          </p>
          <p className="text-[#777] mt-5">{product.description}</p>

          <div className="mt-10">
            <button className="btn btn-primary w-full text-base-100">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
