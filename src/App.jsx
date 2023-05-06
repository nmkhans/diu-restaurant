import ApplicationRoutes from "./components/ApplicationRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header>
        <ApplicationRoutes />
        <Footer />
      </Header>
      <Toaster />
    </>
  );
};

export default App;
