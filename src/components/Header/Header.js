import React, { useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/icons/terazo_logo.png'
import { RequestInvite } from '../RequestInvite/RequestInvite'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'


const headeData = [
  {
    title: 'How it works',
    link: '/howItWorks',
  },
  {
    title: 'About us',
    link: '/aboutUs',
  },
  // {
  //   title: 'Login',
  // },
]
export const Header = () => {
  const { pathname } = useLocation();
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={scroll ? 'headerActive' : 'header'}>
      <div className="navWrapper">
        <div className="navLeft" onClick={() => navigate('/')}>
          <a href="/">
            <img alt="logo" src={logo} />
          </a>
        </div>

        <div className="navRight">
          {headeData.map((item, index) => {
            return (
              <Link to={item.link} className='link'>
                <div
                  className="navItem"
                  key={index}

                  id={window.location.pathname === item.link ? 'active' : ''}
                >
                  {item.title}
                </div>
              </Link>
            )
          })}
          <RequestInvite />
        </div>
      </div>
    </div>
  )
}

export default Header