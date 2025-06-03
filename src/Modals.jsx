// ProductModal.jsx
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../src/Components/ProductCollection/Collection.css";

const Modals = ({ open, handleClose, product, seller }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal_box">
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <h2>Product Information</h2>
        {product && (
          <>
            <img src={product.image} alt={product.name} width="100" />
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> Rs {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </>
        )}

        <h2>Seller Information</h2>
        {seller ? (
          <>
            <p><strong>Name:</strong> {seller.Name}</p>
            <p><strong>Address:</strong> {seller.Address}</p>
            <p><strong>Phone:</strong> {seller.Phone}</p>
            <p><strong>Email:</strong> {seller.Email}</p>
          </>
        ) : (
          <p>Seller Info Not Found</p>
        )}
      </Box>
    </Modal>
  );
};

export default Modals;
