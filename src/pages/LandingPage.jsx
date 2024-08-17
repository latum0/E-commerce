import React from 'react'
import Hero from '../components/hero/Hero';
import Pop from '../components/pop/Pop'

import Offer from '../components/offer/Offer'
import W1 from '../components/assets/W1.jpg'
import Email from '../components/email/Email'
import Footer from '../components/footer/Footer'

export default function LandingPage() {
  return (
    <div>
        <Hero></Hero>
        <Pop img={W1} collecName="POPULAR IN WOMEN"  />
        <Offer/>
        <Pop img={W1} collecName="POPULAR IN KIDS"  />
        <Email></Email>
        <Footer></Footer>
    </div>
  )
}
