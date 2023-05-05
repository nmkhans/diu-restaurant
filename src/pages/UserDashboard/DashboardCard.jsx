import { useGetUserDashboardStatusQuery } from "../../redux/api/statusApi";
import { useAuthUser } from "react-auth-kit";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ status }) => {
  const user = useAuthUser()();

  const { data } = useGetUserDashboardStatusQuery({
    email: user.email,
    status,
  });

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">{status}</h2>
          <p className="text-lg font-semibold">
            {data?.data?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
