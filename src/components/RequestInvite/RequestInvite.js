import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import './RequestInvite.css'
import close from '../../assets/images/icons/img_close.svg'
import axios from 'axios'
import { baseUrl } from '../../config/baseUrl'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MenuItem } from '@mui/material'
toast.configure()

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 580,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
}

export const RequestInvite = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isSubmit, setSubmit] = useState(false)

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  })

  let name, value
  const handleChange = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setValues({ ...values, [name]: value })
    console.log(name, value)
  }

  const submit = async () => {
    console.log(values, 'Values')
    await axios
      .post(baseUrl.UrlLocal + 'addNewRequest', values)
      .then((response) => {
        if (response) {
          if (response.data.status === 200) {
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
            setValues({
              name: '',
              email: '',
              phone: '',
              country: '',
              message: '',
            })
            // setOpen(false)
            setSubmit(true)
          } else {
            toast.error(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
            setValues({
              name: '',
              email: '',
              phone: '',
              country: '',
              message: '',
            })
            setOpen(false)
          }
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('Internal Server Error occured!!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
        setValues({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: '',
        })
        setOpen(false)
      })
  }

  return (
    <div className="RequestInvite">
      <button onClick={handleOpen}>Get early access</button>
      {!isSubmit ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modalHeader">
              <div className="cancelbtn">
                {/* <button onClick={handleClose}> */}
                <img src={close} alt="close" onClick={handleClose} />
                {/* </button> */}
              </div>
              <Typography
                id="modal-modal-title"
                variant="h3"
                component="h3"
                fontFamily="Manrope"
                fontSize='36px'
              >
                Get early access
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="h6"
                fontFamily="Manrope"
                fontSize='1.25rem'
              >
                Fill in the details below and someone from our team will reach
                out
              </Typography>
            </div>
            <div className="modalTextfield">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '30ch',
                    marginLeft: '20px',
                    marginBottom: '10px',
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
                  value={values.name}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '30ch',
                    marginLeft: '20px',
                    marginBottom: '10px',
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
                  value={values.phone}
                  onChange={handleChange}
                />
                <TextField
                  select
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                  <MenuItem value="Japan">Japan</MenuItem>
                </TextField>
              </Box>
              <TextField
                style={{ marginTop: '10px', width: 616, marginLeft: '15px' }}
                multiline
                rows={3}
                id="outlined-basic"
                label="Your Message"
                variant="outlined"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                variant="h6"
                fontFamily="Manrope"
                fontSize='1rem'
              >
                We will not share your personal details or send unsolicited
                emails
              </Typography>
              <button onClick={submit}>Submit</button>
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
          <Box sx={style}>
            <div className="modalHeader">
              <div className="cancelbtn">
                {/* <button onClick={handleClose}> */}
                <img src={close} alt="close" onClick={handleClose} />
                {/* </button> */}
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
  )
}
