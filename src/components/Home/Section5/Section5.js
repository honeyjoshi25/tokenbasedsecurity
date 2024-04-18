import React from 'react'
import img_arrow from '../../../assets/images/pattern/img_arrow.png'
import './Section5.css'
import img_secure from '../../../assets/images/icons/img_secure.svg'
import img_access from '../../../assets/images/icons/img_accessible.svg'
import img_simple from '../../../assets/images/icons/img_simplified.svg'

export const Section5 = () => {
  return (
    <div className="section5" id='invest'>
      <div className="sec5Left">
        <span className="sec5LeftHeader">
          Why Invest with <br />
          <span>Terazo?</span>
        </span>
        <div className="sec5LeftCard">
          <img src={img_secure} className="img_secure" alt="img" />
          <div style={{ marginBottom: 100 }}>
            <span className="Completely-Secure">Safe & Secure</span>
            <br />
            <p className="sec5LeftPara">
              Our platform harnesses the power of blockchain using security
              tokens - making every transaction immutable and tamper-proof
            </p>
          </div>
        </div>
        <div className="sec5LeftCard">
          <img src={img_access} className="img_secure" alt="img" />
          <div style={{ marginBottom: 100 }}>
            <span className="Completely-Secure">Simplified Process</span>
            <br />
            <p className="sec5LeftPara">
              Our investor compliances, distributions and transfers are all
              automated through smart contracts enabling safe and fast
              settlement
            </p>
          </div>
        </div>
        <div className="sec5LeftCard">
          <img src={img_simple} className="img_secure" alt="img" />
          <div style={{ marginBottom: 100 }}>
            <span className="Completely-Secure">Co-invest with experts</span>
            <br />
            <p className="sec5LeftPara">
              We are curating the curators. You will get an opportunity to
              invest with the best-in-class experts be it real estate, venture
              capital or the unlisted space
            </p>
          </div>
        </div>
      </div>
      <div className="sec5Right">
        <img src={img_arrow} className="img_arrow" alt="img" />
      </div>
    </div>
  )
}

// export default Section5
