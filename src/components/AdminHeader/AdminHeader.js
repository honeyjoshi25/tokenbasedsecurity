import React, { useState } from 'react'
import './AdminHeader.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/icons/terazo_logo.png'



export const AdminHeader = () => {
  const [scroll, setScroll] = useState(false)
  const chnageBG = () => {
    if (window.scrollY >= 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', chnageBG)
  const navigate = useNavigate()
  return (
    <div className={scroll ? 'adminheaderActive' : 'adminheader'}>
      <div className="adminnavWrapper">
        <div className="adminnavLeft" onClick={() => navigate('/AdminPanel')}>
          <img alt="logo" src={logo} />
        </div>
        <div className="adminnavRight">
          {/* {headeData.map((item, index) => {
            return (
              <div
                className="adminnavItem"
                key={index}
                onClick={() => {
                  navigate(item.link)
                }}
                id={window.location.pathname === item.link ? 'active' : ''}
              >
                {item.title}
              </div>
            )
          })} */}
          <button onClick={() => navigate('/uploadImage')}>
            Update Dashboard Image
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
