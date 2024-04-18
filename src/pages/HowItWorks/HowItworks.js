import React from 'react'
import './HowItWorks.css'

import { Options } from './Options'
import { Section1 } from '../../components/HowItWorks/Section1/Section1'
import { Section2 } from '../../components/HowItWorks/Section2/Section2'
import { Section3 } from '../../components/HowItWorks/Section3/Section3'
import { Section4 } from '../../components/HowItWorks/Section4/Section4'
import { Section5 } from '../../components/HowItWorks/Section5/Section5'
import { Section6 } from '../../components/HowItWorks/Section6/Section6'
// import { Section7 } from '../../components/HowItWorks/Section7/Section7'

export const HowItworks = () => {
  return (
    <>
   
     
      <div className="howItworks">
        <div className="hiwTopclass">
          <div className="navbarCustom">
            {Options.map((i, index) => {
              return (
                <a
                  key={index}
                  href={i.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div>{i.title}</div>
                </a>
              )
            })}
          </div>
        </div>

        <section id="sec1">
          <Section1 />
        </section>

        <section id="sec2">
          <Section2 />
        </section>

        <section id="sec3" style={{ width: '100%' }}>
          <Section3 />
        </section>
        <section id="sec4">
          <Section4 />
        </section>
        <section id="sec5">
          <Section5 />
        </section>
        <section id="sec6">
          <Section6 />
        </section>
        {/* <section id="sec7" style={{width:'100%'}}>
        <Section7 />
      </section> */}
      </div>
    </>
  )
}
