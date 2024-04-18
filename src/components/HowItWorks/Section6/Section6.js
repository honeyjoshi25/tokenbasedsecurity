import React from 'react'
import './Section6.css'
import tick from '../../../assets/images/icons/icn_tick.svg'
import img8 from '../../../assets/images/icons/icn_investor.svg'
import img7 from '../../../assets/images/pattern/eligible_second_img.png'
import { RequestInvite } from '../../RequestInvite/RequestInvite'
import Box from '@mui/material/Box'
import flags from '../../../assets/images/img/flags.jpg'
import Modal from '@mui/material/Modal'
import close from '../../../assets/images/icons/img_close.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 770,
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  border: 'none',
  padding: 4,
}

export const Section6 = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className="section6">
        <div className="sec6Left">
          <header>
            Check Eligibility
            <br /> Get Early Access
          </header>

          <div className="sec6options">
            <span className='change1920'>Individual Investor</span>
            <div className="opt1">
              <img src={tick} className="img_tick" alt="" />
              <span>

                Tax resident of a
                <span onClick={handleOpen}>permitted country</span>
              </span>
            </div>
            <div className="opt2">
              <img src={tick} className="img_tick1" alt="" />
              <span>Net worth {'>'} US$150,000</span>
            </div>
          </div>
          <div className="sec6btn">
            <RequestInvite />
          </div>

          <div className="sec6bottomDiv">
            <img src={img8} className="img8" alt=""></img>
            <span>
              Institutional Investor?
              <a
                href="mailto:info@terazo.network"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-style-1">Get In Touch</span>
              </a>
            </span>
          </div>
        </div>
        <div className="sec6Right">
          <img alt="" src={img7} className="img_eligibility" />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="sec6modalHeader">
            <div className="cancelbtn">
              {/* <button onClick={handleClose}> */}
              <img src={close} alt="close" onClick={handleClose} />
              {/* </button> */}
            </div>
            <span className="modalsec6Header">Permitted Countries</span>
            <span className="headerSpan">
              Residents of the following countries may be eligible to sign up as
              an investor.
            </span>
          </div>
          <div className="sec6modalDetails">
            <img src={flags} alt="flags" />
          </div>
        </Box>
      </Modal>
    </>
  )
}
