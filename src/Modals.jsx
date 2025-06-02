import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MyModal() {
  const [open, setOpen] = useState(false); // Modal open/close state

  const handleOpen = () => setOpen(true);   // Modal ko open karna
  const handleClose = () => setOpen(false); // Modal ko close karna

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleOpen}>Open Modal</button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <h2>Hello from Modal!</h2>
          <p>This is a simple MUI Modal example.</p>
        </Box>
      </Modal>
    </div>
  );
}

export default MyModal;
