"use client"
import Image from "next/image"
import { useTab } from "@/context/NavigationContext"
import { handleScroll } from "@/utils/scrollToSection"

const AboutMe = () => {
    const { setSelectedTab } = useTab();
    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "27px" }}>About me</h1>

            <div className="about_me">
                <Image src="/about_pic.jpg" alt="CV Photo" width={300} height={400}></Image>
                <p>
                    I'm a passionate Fullstack web developer who likes to solve complex problems
                    and break them into smaller ones that are easy to solve. I've created several
                    websites which you can find and explore in the projects section.
                    <br /><br />
                    I like exploring different technologies and gain experience in them.
                    I currently have experience in React, Next, Spring Boot, Java, Javascript,
                    SQL and NoSQL databases, JWT, Git, Docker etc. More in the skills section.
                    <br /><br />
                    Let's work together and build modern and responsive websites.<br />
                    Let's build scalable solutions for enterprise problems.
                    <br /><br />
                    If you have any questions don't hesitate to contact me.
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