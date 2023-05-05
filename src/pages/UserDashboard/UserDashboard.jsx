import Section from "./../../Layout/Section";
import Title from "./../../Layout/Title";
import DashboardCard from "./DashboardCard";

const UserDashboard = () => {
  return (
    <div>
      <Title>Dashboard</Title>
      <Section>
        <div className="grid grid-cols-3 gap-5">
          <DashboardCard status="pending" />
          <DashboardCard status="confirmed" />
          <DashboardCard status="shipped" />
          <DashboardCard status="delivered" />
        </div>
      </Section>
    </div>
  );
};

export default UserDashboard;
