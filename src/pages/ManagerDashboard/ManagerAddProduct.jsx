import Title from "../../Layout/Title";
import Section from "../../Layout/Section";
import { useForm } from "react-hook-form";
import uploadImageFetch from "../../util/uploadImage";
import { useCreateProductMutation } from "../../redux/api/productApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const ManagerAddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();
  const user = useAuthUser()();

  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    const imgUrl = await uploadImageFetch(formData);
    const productData = {
      ...data,
      img: imgUrl.data.url,
    };
    console.log(productData);

    const res = await createProduct(productData);
    if (res?.data?.success) {
      navigate("/manager/dashboard");
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.data?.error?.message);
    }
  };

  return (
    <section>
      <Title>Create Product</Title>
      <Section>
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
                <select
                  className="select select-bordered w-full"
                  {...register("category", {
                    requied: {
                      value: true,
                      message: "Caregory is required!",
                    },
                  })}
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  <option value="breakfirst">Breakfirst</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="drink">Drink</option>
                </select>
                <div className="ml-2 mt-3 text-red-500">
                  {errors?.category?.type === "required" &&
                    errors?.category?.message}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cafeteria</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter cafeteria"
                  className="input input-bordered"
                  defaultValue={user?.cafeteria}
                  {...register("cafeteria", {
                    required: {
                      value: true,
                      message: "Cafeteria is required",
                    },
                  })}
                />
                <div className="ml-2 mt-3 text-red-500">
                  {errors?.cafeteria?.type === "required" &&
                    errors?.cafeteria?.message}
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  placeholder="Product stock"
                  className="input input-bordered p-2"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image is required",
                    },
                  })}
                />
                <div className="ml-2 mt-3 text-red-500">
                  {errors?.img?.type === "required" &&
                    errors?.img?.message}
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default ManagerAddProduct;
