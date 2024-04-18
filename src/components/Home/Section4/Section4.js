import React from 'react'
import './Section4.css'
import img_build from '../../../assets/images/img/giftCity.png'
import img_tick from '../../../assets/images/icons/icn_tick.svg'


export const Section4 = () => {
  return (
    <div className="section4">
      <div className='divwrap'>
        <div className="homesec4Top">
          <header>
            <label>Invest in</label>
            <div className="homeSec4Spin">
              {/* 402 */}
              <span className='spin1'>Real Estate </span>
              <span className='spin2'>Venture Capital</span>
              <span className='spin3'>Private Equity</span>
            </div>
          </header>
        </div>
        <div className="divflex">
          <div className="sec4Left">
            <img src={img_build} className="img_flexone" alt="img"></img>
            {/* <img src={img_ibld} className="icn_building" alt="img" />
          <div className="Rectangle-4">
            <img src={img_loc} className="icn_location" alt="img"></img>
            <div>
              <span className="FlexOne-GIFT">FlexOne GIFT</span>
              <span className="GIFT-SEZ-Gandhinagar-India">
                GIFT SEZ, Gandhinagar, India
              </span>
            </div>
          </div> */}
          </div>
          <div className="sec4Right">
            <span className="sec4rightHeader">
              India’s First Regulated Token Offering
            </span>
            <br />
            <span className="sec4rightSubHeader">
              We are India’s first private market investment platform supporting
              end-to-end issuance and trading of security tokens
            </span>
            <div className='div1'>
              <img src={img_tick} className="icn_tick" alt="img" />
              <span className="Start-Small">100% Digital</span>
              <span className="Start-Small-span">
                <span>
                  {' '}
                  Fractional and Frictionless - We provide a seamless experience
                  of investing!
                </span>
              </span>
            </div>
            <div className='div2'>
              <img src={img_tick} className="icn_tick2" alt="img" />
              <span className="High-Growth">Start Small</span>
              <span className="High-Growth-span">
                {' '}
                We are breaking the barrier of private market investing. Tokens
                starting at USD 1000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
