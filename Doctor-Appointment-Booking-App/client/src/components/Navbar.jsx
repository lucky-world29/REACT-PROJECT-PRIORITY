import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">

      <div className="container">

        <Link className="navbar-brand" to="/">DoctorApp</Link>

        <div>

          <Link className="btn btn-outline-light me-2" to="/">Home</Link>

          <Link className="btn btn-outline-light me-2" to="/doctors">Doctors</Link>

          <Link className="btn btn-outline-light" to="/login">Login</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;