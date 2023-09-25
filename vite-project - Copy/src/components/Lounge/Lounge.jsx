import React, {useEffect} from "react";
//Import  Images =======>
import gridImg from '../../assets/grid2.png'

// Import AOS ========>
import Aos from "aos";
import 'aos/dist/aos.css'

 const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return(
    <div className='lounge container section'>
      <div className="sectionContainer grid">

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img className="img1" src={gridImg}/>
          </div>

          <div className="textDiv">
            <h2>Unaccopanied Minor</h2>

            <div className="grids grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">
              Help through the airport
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">
              Priority Boarding
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">
                Care on the flight
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">
                Chauffeur-drive service
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket to one of your favorite destination.
              </p>
            </div>
          </div>
          
          </div>

          
      </div>  
    </div>
  )
 }
 export default Lounge;