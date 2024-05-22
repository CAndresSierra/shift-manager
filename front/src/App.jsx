import "./App.css";
import Home from "./views/Home";
import Navbar from "./components/NavBar/Navbar.jsx";
import MyAppointments from "./views/MyAppointments.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
import { Routes, Route } from "react-router-dom";
import CreateAppointment from "./views/CreateAppointment.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/createAppointment" element={<CreateAppointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
