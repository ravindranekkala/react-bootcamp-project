import React, {useEffect} from "react";

//Imported Images =======>
import gridImages from '../../assets/grid.png'

// Import AOS ========>
import Aos from "aos";
import 'aos/dist/aos.css'

 const Support = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return(
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small className="tt">travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find heip with booking and travel plan, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurence</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>
          </div>
          <div data-aos='fade-left' data-aos-duration='4500' className="imgDiv">
            <img className="img" src={gridImages} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
 }
 export default Support;