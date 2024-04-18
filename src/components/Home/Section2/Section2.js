import React from 'react'
import './Section2.css'
import imgProduct from '../../../assets/images/img/img_product.png'
import imgPattern1 from '../../../assets/images/pattern/img_pattern1.svg'
import imgPattern2 from '../../../assets/images/pattern/img_pattern2.svg'
import { Data } from './Data'

export const Section2 = () => {
  return (
    <div>
      <section className="section2">
        <div className="sec2header">
          <div className="section2img">
            <img src={imgPattern1} className="imgPattern1" alt="img" />
            <div>
              <img src={imgPattern2} className="imgPattern1-2" alt="img" />
            </div>
            <img src={imgProduct} className="img_product" alt="img" />
          </div>
          <section>
            <div className="sec2subHeader">
              <span> Reimagining Private Market Investments</span>
            </div>

            <div className="section2Cards">
              <div className="s2card">
                {Data.map((i,index) => {
                  return (
                    <div className="cardsec" key={index}>
                      <img src={i.img} alt="s2" />
                      <div>
                        <h4>{i.title}</h4>
                        <p>{i.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
