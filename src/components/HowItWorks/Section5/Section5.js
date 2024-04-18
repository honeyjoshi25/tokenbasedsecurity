import React from 'react'
import './Section5.css'
import imgPattern from '../../../assets/images/pattern/img_pattern4.svg'
import { Data } from './Data'

export const Section5 = () => {
  return (
    <div className="section5hiw">
      <div className="sec5Header">
        <div>
          <header>The Future of Investing</header>
          <p>
            We’re harnessing the technology of the future - blockchain
            <br />
            Terazo uses{' '}
            <a
              href="https://polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <span>Polygon</span>
            </a>{' '}
            to bring you a fast and safe
            <br />
            tokenization platform
          </p>
        </div>
        <div className="sec5headerimg">
          <img src={imgPattern} alt="" />
        </div>
      </div>
      <div className="sec5hiwCards">
        {/* <br /> */}
        <header className="sec5hiwCardsHeader">Why Blockchain?</header>
        <div className="sec5hiwCard">
          {Data.map((i, index) => {
            return (
              <div className="blockchainCard" key={index}>
                <div className="img_gradient">
                  <img src={i.img} alt="" />
                </div>

                <div className="description">
                  <header> {i.title}</header>
                  <span> {i.span}</span>
                  <p>{i.para}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
