import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";

import Terms from "./common/Terms";
import PrivacyPolicy from "./common/PrivacyPolicy";
import Error400 from "./common/Error400";
import Error401 from "./common/Error401";
import Error403 from "./common/Error403";
import Error404 from "./common/Error404";
import Error500 from "./common/Error500";

import ProtectedRoute from "./components/ProtectedRoute";


function AppContent() {

  const location = useLocation();

  // Pages where navbar should NOT appear
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/contact" element={<Contact />} />


        {/* Legal Pages */}
        <Route path="/terms" element={<Terms />} />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />


        {/* System / Error Pages */}
        <Route path="/400" element={<Error400 />} />

        <Route path="/401" element={<Error401 />} />

        <Route path="/403" element={<Error403 />} />

        <Route path="/404" element={<Error404 />} />

        <Route path="/500" element={<Error500 />} />


        {/* Protected Booking Page */}
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />


        {/* Unknown Route */}
        <Route
          path="*"
          element={<Error404 />}
        />

      </Routes>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;