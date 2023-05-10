import { useForm } from "react-hook-form";
import { useApproveRequestMutation } from "../redux/api/requestApi";
import { useRef } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const ApproveModal = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();
  const closeRef = useRef(null);

  const [approveRequest] = useApproveRequestMutation();

  const onSubmit = async (data) => {
    const res = await approveRequest({
      id,
      cafeteria: data.cafeteria,
    });

    if (res?.data?.success) {
      closeRef.current.click();
      reset();
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.error?.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="approve-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            ref={closeRef}
            htmlFor="approve-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Approve request</h3>
          <form onChange={handleSubmit(onSubmit)}>
            <select
              className="select select-bordered w-full mt-5"
              {...register("cafeteria")}
            >
              <option disabled selected>
                Select cafeteria
              </option>
              <option value="cafe-fastfood">Cafe Fastfood</option>
              <option value="cafe-chinese">Cafe chinese</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApproveModal;
