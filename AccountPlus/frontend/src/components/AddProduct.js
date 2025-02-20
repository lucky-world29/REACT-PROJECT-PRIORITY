// // src/components/AddProduct.js
// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   Stack,
//   Paper,
// } from "@mui/material";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", formData.price);
//     data.append("image", formData.image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/products", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Product added:", response.data);
//       alert("Product added successfully!");
//       setFormData({ name: "", description: "", price: "", image: null });
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "600px",
//         margin: "auto",
//         p: 4,
//         mt: 4,
//       }}
//     >
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Add New Product
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Stack spacing={3}>
//             <TextField
//               label="Product Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//             <TextField
//               label="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//             <TextField
//               label="Price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               type="number"
//               fullWidth
//               required
//             />
//             <Button
//               variant="contained"
//               component="label"
//               sx={{
//                 background: "#1976d2",
//                 color: "white",
//                 textTransform: "none",
//               }}
//             >
//               Upload Image
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 hidden
//                 onChange={handleChange}
//               />
//             </Button>
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 py: 1.5,
//                 px: 3,
//                 textTransform: "none",
//                 background: "#4caf50",
//               }}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default AddProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../components/AddProduct.css";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    categoryId: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await axios.post("http://localhost:5000/api/products/", data);
      alert(`Product Added Successfully. Product ID: ${response.data.productId}`);
      navigate("/dashboard");
    } catch (error) {
      alert("Error adding product: " + (error.response?.data?.message || error.message));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  return (
    <div className="container-fluid bg-gradient">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            ACCOUNT PLUS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="d-flex align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4 fw-bold text-primary">Add Product</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="name"
                      placeholder="Enter product name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="productDescription"
                      name="description"
                      placeholder="Enter product description"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productPrice"
                      name="price"
                      step="0.01"
                      placeholder="Enter product price"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="productImage"
                      name="image"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-control"
                      id="productCategory"
                      name="categoryId"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white mt-auto py-3">
        <small>Designed with ❤️ by Abinash</small>
      </footer>
    </div>
  );
}

export default AddProduct;
