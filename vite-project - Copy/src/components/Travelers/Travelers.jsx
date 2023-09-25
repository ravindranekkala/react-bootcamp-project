import React, {useEffect} from "react";
//Import Destination Images ====>
import paris from '../../assets/paris.jpg'
import Dubai from '../../assets/dubai.jpg'
import newYork from '../../assets/newyork.jpg'
import australia from '../../assets/australia.jpg'
//Import Traveler Images ====>
import Traveler1 from '../../assets/user.jpg'
import Traveler2 from '../../assets/user2.png'
import Traveler3 from '../../assets/user3.png'
import Traveler4 from '../../assets/user4.jpeg'

// Import AOS ========>
import Aos from "aos";
import 'aos/dist/aos.css'

//We are going to use high order array method calles Map to display all the data ====>

const travelers =[
  {
    id:1,
    destinationImage:paris,
    travelerImage:Traveler1,
    travelerName:'Ravindra',
    socialLink:'@ravi8'


  },

  {
    id:2,
    destinationImage:Dubai,
    travelerImage:Traveler2,
    travelerName:'Ms Dhoni',
    socialLink:'@MSD8'


  },

  {
    id:3,
    destinationImage:newYork,
    travelerImage:Traveler3,
    travelerName:'kohli',
    socialLink:'@viratkohli18'


  },

  {
    id:4,
    destinationImage:australia,
    travelerImage:Traveler4,
    travelerName:'hardhik',
    socialLink:'@hardhik9'


  }
]
 const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return(
    <div className='travelers container section'>
        <div className="sectionContainer">
            <h2 data-aos='fade-down' data-aos-duration='2500' >
              Top travelers of this month!
            </h2>

            <div className="travelersContainer grid">
               
             {
              travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink  })=>{
                return(
                  //{/* Single passanger card */}
                  <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singletraveler">

                  <img src={destinationImage} className='destinationImage'/>
  
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage}className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span className="tn">{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
                )
              })
             }

            </div>
          </div> 
    </div>
  )
 }
 export default Travelers;