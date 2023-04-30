import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default ApplicationRoutes;
