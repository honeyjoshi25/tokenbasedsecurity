import React, { useState } from 'react'
import './ContactUs.css'

import axios from 'axios'
import { baseUrl } from '../../config/baseUrl'
import { TextField } from '@mui/material'
import location from '../../assets/images/icons/icn_location.svg'
import email from '../../assets/images/icons/icn_email.svg'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export const ContactUs = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  // const [isSubmit, setSubmit] = useState(false)

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
    if (
      values.name === '' ||
      values.email === '' ||
      values.phone === '' ||
      values.message === ''
    ) {
      toast.error(
        'Please Fill All The Required Fields Before Submitting The Form!!',
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        },
      )
    } else {
      await axios
        .post(baseUrl.UrlLocal + 'contact/addNewRequest', values)
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
                message: '',
              })
            } else {
              toast.error(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              })
              setValues({
                name: '',
                email: '',
                phone: '',
                message: '',
              })
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
            message: '',
          })
        })
    }
  }

  return (
    <>
      <section>
        <div className="contactUs">
          <div className="contactUsLeft">
            <div className="contactUsHeader">
              <header>Contact Us</header>
            </div>
            <div className="contactAddr1">
              <div
                style={{
                  display: 'flex',
                }}
              >
                <img src={location} alt="location" />
                <header>Terazo Network LLP</header>
              </div>

              <span>
                701-703 North Tower ONE42,off Ambli Road Ahmedabad 380054, India
              </span>
            </div>
            <div className="contactAddr2">
              <div
                style={{
                  display: 'flex',
                }}
              >
                <img src={location} alt="location" />
                <header>Terazo Fintech LLP</header>
              </div>
              <span className="contactAddr2span">
                424/4/A, Fourth FI, PRAGYA, Road 11, Zone 1, GIFT SEZ <br />{' '}
                Gandhinagar 382355, India
              </span>
            </div>
            <div className="contactEmail">
              <img src={email} alt="location" />
              <header>info@terazo.network</header>
            </div>
          </div>
          <div className="contactUsRight">
            <div className="contactUsCard">
              <div className="contactUsDetails">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  style={{ width: 400 }}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contactUsDetails">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  style={{ width: 400, marginTop: 20 }}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contactUsDetails">
                <TextField
                  id="outlined-basic"
                  label="Contact"
                  variant="outlined"
                  type="text"
                  style={{ width: 400, marginTop: 20 }}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contactUsDetails">
                <TextField
                  multiline
                  rows={3}
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  type="text"
                  style={{ width: 400, marginTop: 20 }}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>

              <div className="ContactUSButton">
                <button onClick={submit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
