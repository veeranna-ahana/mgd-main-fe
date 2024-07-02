import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import HomeOne from "./pages/HomeOne";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";

function App() {
  return (
   <div>
    <ToastContainer />
     <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/salesHome" element={<HomeOne />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
