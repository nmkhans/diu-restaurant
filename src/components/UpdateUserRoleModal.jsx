import { useRef } from "react";
import { useForm } from "react-hook-form";
import { usePromoteUserToManagerMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const UpdateUserRoleModal = ({ updateId }) => {
  const { register, handleSubmit } = useForm();
  const closeRef = useRef(null);

  const [promoteUserToManager] = usePromoteUserToManagerMutation();

  const onSubmit = async (data) => {
    const res = await promoteUserToManager({ id: updateId, data });

    if (res?.data?.success) {
      closeRef.current.click();
      toast.success(res?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(res?.data?.error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="update-user-role-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            ref={closeRef}
            htmlFor="update-user-role-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">Make Manager</h3>
          <div>
            <form onChange={handleSubmit(onSubmit)}>
              <select
                className="select select-bordered w-full"
                {...register("cafeteria")}
              >
                <option selected disabled>
                  Select Cafeteria
                </option>
                <option value="green-garden">Green Garden</option>
                <option value="food-court">Food Court</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserRoleModal;
