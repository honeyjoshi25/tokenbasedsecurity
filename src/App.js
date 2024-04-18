import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { ContactUs } from './pages/ContactUs/ContactUs'
import { Home } from './pages/Home/Home'
import { HowItworks } from './pages/HowItWorks/HowItworks'

import TotalRequests from './pages/Requests/TotalRequests'
import { AdminPanel } from './pages/AdminPanel/AdminPanel'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/howItWorks" element={<HowItworks />} />
        <Route path="/AdminPanel" element={<TotalRequests />} />
        <Route path="/uploadImage" element={<AdminPanel />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
