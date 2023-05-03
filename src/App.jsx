import ApplicationRoutes from "./components/ApplicationRoutes";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header>
        <ApplicationRoutes />
      </Header>
      <Toaster />
    </>
  );
};

export default App;
