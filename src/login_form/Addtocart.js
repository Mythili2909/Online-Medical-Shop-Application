import React, { useState } from 'react';
import '../Assets/Style/Addtocart.css'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';

const Product = ({ product, onAddToCart }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            alt={product.alt}
          />
          <CardContent style={{ backgroundColor: '#f4f4f4' }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ color: '#333' }}>
              <strong>Price:</strong> {product.price}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: '10px', marginLeft: '5px' }}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const cardData = [
    // ... (your product data)
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-page-container">
      <h1>Online Medical Shop - Add to Cart</h1>
      <Grid container spacing={3}>
        {cardData.map((product, index) => (
          <Product key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </Grid>

      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddToCartPage;
