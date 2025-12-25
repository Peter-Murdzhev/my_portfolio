"use client"
import Image from "next/image";
import { handleScroll } from "@/utils/scrollToSection";
import { useTab } from "@/context/NavigationContext";

const Hero = () => {
  const {setSelectedTab} = useTab();

  return (
    <div className="home">
      <div className="hero">
        <h1>Petar Murdzhev</h1>
        <h2>Web developer</h2>
      </div>

      <div className="home_action">
        <Image src="/cv_photo1.png" alt="CV Photo" width={150} height={150} priority/>

        <div className="call_to_actions">
          <button onClick={() =>{
            setSelectedTab("about_me");
            handleScroll("about_me");
          }}> More about me</button>
          <button onClick={() =>{
            setSelectedTab("projects");
            handleScroll("projects");
          }}>See my projects</button>
        </div>

      </div>
    </div>
  )
}

export default Hero;