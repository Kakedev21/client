import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Areas from "./pages/Areas";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingPage from "./pages/BookingPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashBoard from "./pages/AdminDashBoard";
import Announcement from "./pages/Announcement";
import AdminAreas from "./pages/AdminAreas";

import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/adminAreas" element={<AdminAreas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
