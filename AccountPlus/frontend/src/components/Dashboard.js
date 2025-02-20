// // src/img/products-Img/index.js
// const ProductImg = {
//   1: require("./addidas shoes.jpg"),
//   2: require("./bag.jpg"),
//   3: require("./coconut water.jpg"),
//   4: require("./curology.jpeg"),
//   5: require("./5EarBuds.jpeg"),
//   6: require("./6FaceCream.jpeg"),
//   7: require("./7FaceWash.jpeg"),
//   8: require("./8FootWare.jpeg"),
//   9: require("./9HandBag.jpeg"),
//   10: require("./10HeadPhone.jpg"),
// };

// export default ProductImg;

// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import ProductImg from "../img/products-Img";

import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";

const products = [
  {
    id: 1,
    name: "Adidas Shoes",
    description: "High-quality running shoes.",
    price: "$99.99",
    image: ProductImg[1], // Use the image from ProductImg
  },
  {
    id: 2,
    name: "Bag",
    description: "Stylish and durable bag.",
    price: "$79.99",
    image: ProductImg[2],
  },
  {
    id: 3,
    name: "Coconut Water",
    description: "Refreshing and natural.",
    price: "$49.99",
    image: ProductImg[3],
  },
  {
    id: 4,
    name: "Curology",
    description: "Skincare products for all.",
    price: "$29.99",
    image: ProductImg[4],
  },
  {
    id: 5,
    name: "Ear Buds",
    description: "Wireless earbuds with excellent sound quality.",
    price: "$59.99",
    image: ProductImg[5],
  },
  {
    id: 6,
    name: "Face Cream",
    description: "Hydrating and rejuvenating face cream.",
    price: "$39.99",
    image: ProductImg[6],
  },
  {
    id: 7,
    name: "Face Wash",
    description: "Gentle and effective face wash.",
    price: "$19.99",
    image: ProductImg[7],
  },
  {
    id: 8,
    name: "Footwear",
    description: "Comfortable and stylish footwear.",
    price: "$89.99",
    image: ProductImg[8],
  },
  {
    id: 9,
    name: "Hand Bag",
    description: "Elegant and spacious handbag.",
    price: "$69.99",
    image: ProductImg[9],
  },
  {
    id: 10,
    name: "Headphones",
    description: "Noise-cancelling headphones.",
    price: "$149.99",
    image: ProductImg[10],
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          mb: 5,
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          color: "white",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our E-Commerce Store!
        </Typography>
        <Typography variant="h6">
          Discover the best deals on amazing products. Shop now and enjoy
          special discounts!
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              py: 1.5,
              px: 4,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              py: 1.5,
              px: 4,
              borderColor: "red",
              color: "tomato",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
                boxShadow: "0 0 10px red",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "rgba(255, 255, 255, 0.2)",
                transform: "skewX(-20deg)",
                transition: "left 0.5s ease",
              },
              "&:hover::before": {
                left: "100%",
              },
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Link>
          </Button>
        </Stack>
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image} // Use the image property
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCart />}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  startIcon={<Favorite />}
                >
                  Wishlist
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          mt: 5,
          py: 3,
          textAlign: "center",
          backgroundColor: "#f7f7f7",
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
