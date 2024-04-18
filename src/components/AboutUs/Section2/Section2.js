import React from 'react'
import { Data } from './Data'
import './Section2.css'
import iconLinkedin from '../../../assets/images/icons/icn_linkedin.svg'

export const Section2 = () => {
  return (
    <div className="section2Aboutus">
      <div className="ourTeam">
        <header>Our Team</header>
        <span>
          Terazo is driven by a diverse and passionate set of individuals
        </span>
      </div>
      <div className="avatar">
        {Data.map((i, index) => {
          return (
            <div className="background" key={index}>
              <span className="backgroundTitle"> {i.title}</span>
              <br />
              <span className="backgroundSpan">{i.span}</span>
              <div className="profileImage">
                <img className="aboutUsTeamImg" src={i.img} alt="img" />
              </div>
              <div className="img__description_layer">
                <p className="para">{i.para}</p>
                <a
                  href={i.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', position: 'absolute' }}
                >
                  <div style={{ display: 'flex', marginLeft: '20px' }}>
                    <div className="LI-In-Bug-1">
                      <a
                        href={i.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <img src={iconLinkedin} alt="linkedin" />
                      </a>
                    </div>

                    <a
                      href={i.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <p
                        className="View-Profile-"
                        style={{ marginLeft: '5px' }}
                      >
                        {'View Profile >'}
                      </p>
                    </a>
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
