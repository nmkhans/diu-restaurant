import { useGetRequestedFoodByCafeQuery } from "../../redux/api/requestApi";
import Section from "./../../Layout/Section";
import Title from "./../../Layout/Title";
import { useAuthUser } from "react-auth-kit";
import Loader from "./../../components/Loader";

const ManagerRequestedFood = () => {
  const user = useAuthUser()();

  const { data, isLoading, isError, error } =
    useGetRequestedFoodByCafeQuery(user?.cafeteria);

  //? render decision
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <div>{error?.message}</div>;

  if (!isLoading && !isError && data?.data?.length < 1)
    content = <div>No data available</div>;

  if (!isLoading && !isError && data?.data?.length > 0)
    content = (
      <div className="grid grid-cols-3 gap-10">
        {data?.data?.map((req) => (
          <div key={req._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{req.foodName}</h2>
              <p>Message: {req.message}</p>
              <p>Approved: {req.approved ? "Yes" : "No"}</p>
              <p>Requested by: {req.name}</p>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <Section>
      <Title>Requested Food</Title>
      <Section>{content}</Section>
    </Section>
  );
};

export default ManagerRequestedFood;
