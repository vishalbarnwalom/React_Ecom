import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import productData from "../../Data/productData";
import SellerData from "../../Data/SellerData";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../context/CartContext"; 
import "./Collection.css";

function Collection() {
    const { cartCount } = useContext(CartContext); 
  const { increaseCartCount } = useContext(CartContext); 
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleOpen = (product) => {
    const seller = SellerData.find((s) => s.id === product.id);
    setSelectedProduct(product);
    setSelectedSeller(seller);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="collection" id="collection">
      <h1>BEST SELLER</h1>
   
      <div className="collection_container">
        {productData.map((product) => (
          <div className="collection_item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h3>Price: <span>Rs {product.price}</span></h3>
            </Link>
            <button onClick={() => addToCart(product)} >Add to Cart</button>
            <button onClick={() => handleOpen(product)}>Detail Info</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal_box">
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <h2>Product Information</h2>
          {selectedProduct && (
            <>
              <img src={selectedProduct.image} alt={selectedProduct.name} width="100" />
              <p><strong>Name:</strong> {selectedProduct.name}</p>
              <p><strong>Price:</strong> Rs {selectedProduct.price}</p>
              <p><strong>Description:</strong> {selectedProduct.description}</p>
            </>
          )}

          <h2>Seller Information</h2>
          {selectedSeller ? (
            <>
              <p><strong>Name:</strong> {selectedSeller.Name}</p>
              <p><strong>Address:</strong> {selectedSeller.Address}</p>
              <p><strong>Phone:</strong> {selectedSeller.Phone}</p>
              <p><strong>Email:</strong> {selectedSeller.Email}</p>
            </>
          ) : (
            <p>Seller Info Not Found</p>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Collection;
