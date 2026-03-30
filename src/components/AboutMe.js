"use client"
import Image from "next/image"
import { useTab } from "@/context/NavigationContext"
import { handleScroll } from "@/utils/scrollToSection"
import { useState, useEffect } from "react"

const AboutMe = () => {
    const { setSelectedTab } = useTab();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        setIsMobile(mediaQuery.matches);

        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: isMobile ? "30px" : "10px", fontSize: "27px" }}>About me</h1>

            <div className="about_me">
                <Image src="/about_pic.jpg" alt="CV Photo" width={300} height={400}></Image>
                <p>
                    Fullstack Web Developer focused on building scalable and responsive web
                    applications.
                    <br /><br />
                    I have hands-on experience developing fullstack projects using React, Next.js and
                    Spring Boot, with strong knowledge of REST APIs, databases and modern
                    developer tools.
                    <br /><br />
                    I enjoy turning complex problems into simple and efficient solutions. <br />
                    I focus on writing maintainable code and solving real world problems
                    through practical projects.
                    <br /><br />
                    Check out my work below.
                </p>

            </div>

            <button className="contact_call_action" onClick={() => {
                setSelectedTab("contacts");
                handleScroll("contacts");
            }}>Contact Me</button>
        </>

    )
}

export default AboutMe