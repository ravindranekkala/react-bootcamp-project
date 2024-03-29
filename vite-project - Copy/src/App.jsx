//host link --> https://ravindranekkala.github.io/react-bootcamp-project/
import React from "react";
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Search from "./components/Search/search";
import Support from "./components/Support/Support";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Travelers from "./components/Travelers/Travelers";
import Subscribers from "./components/Subscribers/Subscribers";
import Footer from "./components/Footer/Footer";

 const App = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/>
    </div>
  )
 }
 export default App;
