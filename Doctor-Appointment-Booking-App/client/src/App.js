import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/login" element={<Login />} />

        <Route path="/book/:id" element={<BookAppointment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;