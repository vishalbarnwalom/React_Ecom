import React from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../Data/productData";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id)); 

 

  return (
    <div className="product_page">
      <div className="product_image">
        <img src={product.image} alt={product.name} /> 
      </div>
      <div className="product_info">
        <h2>{product.name}</h2>
        <h4>Description</h4>
        <p>{product.description}</p>
        <h3>Price: Rs {product.price}</h3>
        <button>Buy Now</button>
        <br />
        
        <Link to="/" className="button-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProductPage;
