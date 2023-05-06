/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  useGetSingleOrderQuery,
  useUpdateStatusMutation,
} from "../redux/api/orderApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateStatusModal = ({ updateId }) => {
  const { data } = useGetSingleOrderQuery(updateId);
  const { register, handleSubmit, reset } = useForm();
  const closeRef = useRef();

  const [updateStatus] = useUpdateStatusMutation();

  const onSubmit = async (data) => {
    const res = await updateStatus({
      id: updateId,
      status: data.status,
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
        id="update-status-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            ref={closeRef}
            htmlFor="update-status-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">
            Update order status
          </h3>
          <div>
            <form onChange={handleSubmit(onSubmit)}>
              <select
                className="select select-bordered w-full"
                {...register("status")}
              >
                <option selected>{data?.data?.status}</option>
                <option value="shipped">Shipped</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusModal;
