import React, {useEffect} from "react";

// Import AOS ========>
import Aos from "aos";
import 'aos/dist/aos.css'

 const Subscribers = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return(
    <div className='subscribe section'>
      <div data-aos='fade-right' data-aos-duration='2500' className="sectionContainer container">
        <h2 data-aos='fade-up' data-aos-duration='2500'>Subscribe Newsletter & Latest News</h2>
        <div className="inputDiv flex">
          <input className="inpt" type="text" placeholder='Enter your email address' />
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
 }
 export default Subscribers;