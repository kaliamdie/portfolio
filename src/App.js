import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Landing from "./components/Landing";

import Skills from "./components/Skills";
import LineGradient from "./components/LineGradient";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const [selected,setSelected]=useState("home")
  const isAboveMedium=useMediaQuery("min-width:1060px;")
  const [topPage,setTopPage]=useState(true)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0)setTopPage(true)
      if(window.scrollX!==0)setTopPage(false)
    }
  window.addEventListener("Scroll",handleScroll)
  return () =>window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="app bg-indigo-500">
      <Navbar 
      topPage={topPage}
      selected={selected}
      setSelected={setSelected}
      />
      <div className="w-5/6 mx-auto md:h-full">
      
        <Landing
         setSelected={setSelected}
        
        />
      </div>
<LineGradient/>
   
      <Skills/>
      <LineGradient/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
