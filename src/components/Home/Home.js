import React from 'react'
import Expertise from '../Expertise/Expertise'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import LatestProjects from '../LatestProjects/LatestProjects'
import Qualification from '../Qualification/Qualification'
import Specializing from '../Specializing/Specializing'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <>
        <div>
            <Hero />
            <Specializing />
            <Expertise />
            <LatestProjects />
            <Qualification />
            <Testimonials />
            <Footer />
        </div>
    </>
  )
}

export default Home