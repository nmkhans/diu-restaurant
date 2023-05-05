/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "../../redux/api/productApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProductForm = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await updateProduct({ id: product._id, data });
    if (res?.data?.success) {
      toast.success(res.data.message, {
        position: "bottom-center",
      });
      navigate("/admin/dashboard/all-products");
    } else {
      toast.success(res.error.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="card flex-shrink-0 w-4/5 mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered"
              defaultValue={product?.name}
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <div className="ml-2 mt-3 text-red-500">
              {errors?.name?.type === "required" &&
                errors?.name?.message}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Product Description"
              className="input input-bordered h-[100px] p-5"
              defaultValue={product.description}
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            ></textarea>
            <div className="ml-2 mt-3 text-red-500">
              {errors?.description?.type === "required" &&
                errors?.description?.message}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Product price"
              className="input input-bordered"
              defaultValue={product.price}
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            <div className="ml-2 mt-3 text-red-500">
              {errors?.price?.type === "required" &&
                errors?.price?.message}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Product category"
              className="input input-bordered"
              defaultValue={product.category}
              {...register("category", {
                required: {
                  value: true,
                  message: "Category is required",
                },
              })}
            />
            <div className="ml-2 mt-3 text-red-500">
              {errors?.category?.type === "required" &&
                errors?.category?.message}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="text"
              placeholder="Product stock"
              className="input input-bordered"
              defaultValue={product.stock}
              {...register("stock", {
                required: {
                  value: true,
                  message: "Stock is required",
                },
              })}
            />
            <div className="ml-2 mt-3 text-red-500">
              {errors?.stock?.type === "required" &&
                errors?.stock?.message}
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
