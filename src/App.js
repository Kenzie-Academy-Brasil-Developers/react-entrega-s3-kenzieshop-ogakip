import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  if (!localStorage.getItem("cartProduct")) {
    localStorage.setItem("cartProduct", JSON.stringify([]));
  }

  return (
    <div>
      <GlobalStyles />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={1600}
        hideProgressBar={false}
        pauseOnHover={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        limit={0}
      />
    </div>
  );
};
export default App;
