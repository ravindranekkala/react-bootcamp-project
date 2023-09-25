import React, {useEffect} from "react";


// import the assests =====>
import video from '../../assets/video1.mp4'
import aeroplane from '../../assets/flighttakeoff.png'

// Import AOS ========>
import Aos from "aos";
import 'aos/dist/aos.css'
 const Home = () => {

  //useEffect to set animation duration

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return(
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500' >Create Ever-lasting Memories with Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video   src={video} autoPlay muted loop className="video"></video>
        </div>

        <img  data-aos='fade-left' data-aos-duration='3000' src={aeroplane} className="plane"/>
      </div>
    </div>
  )
 }
 export default Home;