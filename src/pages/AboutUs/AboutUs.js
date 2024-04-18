import React,{useEffect} from 'react'
import './AboutUs.css'

import { Section1 } from '../../components/AboutUs/Section1/Section1'
import { Section2 } from '../../components/AboutUs/Section2/Section2'
import { Section3 } from '../../components/AboutUs/Section3/Section3'
import { Section4 } from '../../components/AboutUs/Section4/Section4'

export const AboutUs = () => {
  useEffect(() => {
    var current_url = window.location.href
    if (current_url.includes('#team')) {
      setTimeout(() => {
        document.getElementById('teamLink').click()
      }, 50)
    }
  }, [])
  return (
    <>
      <div className="aboutus">
        <section>
          <Section1 />
        </section>
        <section id='team'>
          <Section2 />
        </section>
        <section>
          <Section3 />
        </section>
        <section>
          <Section4 />
        </section>
      </div>
    </>
  )
}
