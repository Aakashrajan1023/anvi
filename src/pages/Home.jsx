import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/Aboutus'
import WhyChooseUs from '@/components/Why'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Service from '@/components/service'


const Home = () => {
  return (
    <>
   <Navbar/>
   <Banner/>
   <Service/>
   <div className='grid place-content-center'>
    <About/>
   </div>
   <WhyChooseUs/>
   <ContactForm/>
   <Footer/>
   </>

  )
}

export default Home