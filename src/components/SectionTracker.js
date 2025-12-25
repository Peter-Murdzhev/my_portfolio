"use client"
import { useEffect, useRef } from "react"
import { useTab } from "@/context/NavigationContext"

const SectionTracker = () => {
    const {setSelectedTab} = useTab();

    useEffect(()=>{
        const sections = document.querySelectorAll("section[id]");

        const isMobile = window.innerWidth < 700;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry =>{
                    if(entry.isIntersecting){
                        setSelectedTab(entry.target.id);
                    }
                });
            },
            {
                //trigger tab update when % of the page is visible
                //0.5 for 50%
                threshold: isMobile ? 0 : 0.6,
                rootMargin: isMobile ? "-30% 0px -30% 0px" : "0px 0px 0px 0px",
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    },[setSelectedTab])

    return null;
}



export default SectionTracker;