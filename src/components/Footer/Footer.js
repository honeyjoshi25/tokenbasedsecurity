import React from 'react'
import './Footer.css'
import logo from '../../assets/images/icons/terazo_logo.png'
import { Divider } from '@material-ui/core'
import { useNavigate, Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className="nonDiv">
        <Divider
          className="nonDevdivider"
          style={{ width: 500, backgroundColor: '#1a60f6', height: 5 }}
        />
      </div>
      <div className="footer">
        <div className="footerWrapper">
          <div className="footerLeft">
            <div
              className="upperimg"
              onClick={() => {
                navigate('/')
                componentDidMount()
              }}
            >
              <a href="/">
                <img alt="logo" src={logo} />
              </a>
            </div>
            <span>© 2021-2022 Terazo Fintech LLP</span>
          </div>
          <div className="footerRight">
            <div className="rightCard">
              <h3>Invest </h3>
              <div>
                <Link
                  className="rightCard"
                  to={'/'}
                  onClick={() => {
                    componentDidMount()
                  }}
                >
                  <span>Home</span>
                </Link>

                <a className="rightCard" id="investLink" href="/#invest">
                  <span>Why Invest</span>
                </a>

                <Link
                  className="rightCard"
                  to={'/howitworks'}
                  onClick={() => {
                    componentDidMount()
                  }}
                >
                  <span>How it works</span>
                </Link>
              </div>
            </div>
            <div className="rightCard">
              <h3>Company</h3>
              <div>
                <Link
                  className="rightCard"
                  to={'/aboutus'}
                  onClick={() => {
                    componentDidMount()
                  }}
                >
                  <span>About Us</span>
                </Link>

                <a className="rightCard" id="teamLink" href="/aboutus#team">
                  <span>Team</span>
                </a>

                <Link
                  className="rightCard"
                  to={'/contactus'}
                  onClick={() => {
                    componentDidMount()
                  }}
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <span className="Copyright">
        Terazo is a trademark and/or registered trademark of Terazo Network LLP.
        All rights reserved.
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '9.9%',
          paddingRight: '3%',
        }}
      >
        <p className="Disclaimer">
          This website contains certain forward-looking statements that are
          subject to various risks and uncertainties. You are cautioned not to
          place undue reliance on any of these forward-looking statements. This
          website is maintained by Terazo Fintech LLP in its sole and absolute
          discretion.
        </p>

        <p className="Disclaimer">
          Terazo Fintech LLP is regulated under IFSCA’s Regulatory Sandbox
          Framework. The information contained on the terazo.network website has
          been prepared by Terazo Fintech LLP without reference to any
          particular user's investment requirements or financial situation.
          Potential investors are encouraged to consult with professional tax,
          legal, and financial advisors before making any investment. All
          investments involve risk, including the risk of the loss of all of
          your invested capital. Please consider carefully the investment
          objectives, risks, transaction costs, and other expenses related to an
          investment prior to deciding to invest. Diversification and asset
          allocation do not ensure profit or guarantee against loss. Investment
          decisions should be based on an individual's own goals, time horizon,
          and tolerance for risk. Our materials may include historical
          appreciation percentages based on sales data and reflect historical
          price trends. Such information is not intended to be indicative of
          returns that would have been achieved by Terazo Fintech LLP during
          such periods. Fees, expenses and other factors may create significant
          reduction in the performance of an investment.
        </p>

        <p className="Disclaimer">
          Past price trends are not indicative of future price trends and are
          not intended to be a proxy for historical or projected future
          performance of an asset. Also, our materials may present comparisons
          between the historical price performance of an asset with other
          investment asset classes, such as stocks, bonds, real estate, funds,
          and others. There is no guarantee of profits and investing includes
          risk of loss. The information contained herein neither constitutes an
          offer for nor a solicitation of interest in any specific offering.
        </p>
      </div>
    </>
  )
}

export default Footer
