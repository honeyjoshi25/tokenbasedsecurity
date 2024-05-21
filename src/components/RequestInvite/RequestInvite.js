import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./RequestInvite.css";
import close from "../../assets/images/icons/img_close.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem } from "@mui/material";
toast.configure();

export const RequestInvite = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="RequestInvite">
      <button
        onClick={handleOpen}
        className="RequestInvitebtn p-2 rounded-pill"
      >
        Get early access
      </button>
      {!isSubmit ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="requestModal p-3">
            <div className="modalHeader d-flex flex-column align-items-center justify-content-center">
              <div className="cancelbtn w-100 d-flex justify-content-end">
                <img src={close} alt="close" onClick={handleClose} />
              </div>
              <Typography
                id="modal-modal-title"
                variant="h3"
                component="h3"
                fontFamily="Manrope"
                fontSize="36px"
              >
                Get early access
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="h6"
                fontFamily="Manrope"
                fontSize="1.25rem"
              >
                Fill in the details below and someone from our team will reach
                out
              </Typography>
            </div>
            <div className="modalTextfield d-flex flex-column align-items-center justify-content-center mt-5">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "30ch",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "30ch",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  name="phone"
                />
                <TextField
                  select
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  name="country"
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                  <MenuItem value="Japan">Japan</MenuItem>
                </TextField>
              </Box>
              <TextField
                style={{ marginTop: "10px", width: 616, marginLeft: "15px" }}
                multiline
                rows={3}
                id="outlined-basic"
                label="Your Message"
                variant="outlined"
                name="message"
              />
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="h6"
                fontFamily="Manrope"
                fontSize="1rem"
              >
                We will not share your personal details or send unsolicited
                emails
              </Typography>
              <button
                className="mt-4 rounded-pill p-2 w-25"
                onClick={() => setIsSubmit(true)}
              >
                Submit
              </button>
            </div>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="requestModal p-3">
            <div className="modalHeader d-flex flex-column align-items-center justify-content-center">
              <div className="cancelbtn w-100 d-flex justify-content-end">
                <img src={close} alt="close" onClick={handleClose} />
              </div>
              <Typography
                id="modal-modal-title"
                variant="h3"
                component="h2"
                fontFamily="Manrope"
              >
                Form Submitted :)
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="h6"
                fontFamily="Manrope"
              >
                Thanks for reaching out. We will get back to you as soon as we
                are ready to launch our tokens
              </Typography>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};
