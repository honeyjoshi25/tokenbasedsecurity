import React, { useEffect } from 'react'
import './Home.css'

import { Section1 } from '../../components/Home/Section1/Section1'
import { Section2 } from '../../components/Home/Section2/Section2'
import { Section3 } from '../../components/Home/Section3/Section3'
import { Section4 } from '../../components/Home/Section4/Section4'
import { Section5 } from '../../components/Home/Section5/Section5'
import { Section6 } from '../../components/Home/Section6/Section6'
export const Home = () => {
  useEffect(() => {
    var current_url = window.location.href
    if (current_url.includes('#invest')) {
      setTimeout(() => {
        document.getElementById('investLink').click()
      }, 50)
    }
  }, [])
  return (
    <>
      <div className="home">
        <section>
          {' '}
          <Section1 />
        </section>
        <section>
          {' '}
          <Section2 />
        </section>
        <section>
          {' '}
          <Section3 />
        </section>
        <section>
          {' '}
          <Section4 />
        </section>
        <section>
          {' '}
          <Section5 />
        </section>
        <section>
          {' '}
          <Section6 />
        </section>
      </div>
    </>
  )
}
