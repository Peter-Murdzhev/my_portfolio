"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const WebsiteDetails = ({ project, toggleFullInfo, setToggleFullInfo }) => {
    useEffect(() => {
        if (!toggleFullInfo) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = '';
        };
    }, [toggleFullInfo])
    
    return (
        <div className={`website_details_window ${toggleFullInfo ? "active" : ""}`}>
            <FiX
                className="close_button"
                onClick={() => setToggleFullInfo(false)}
            />

            <Image src={project.imageURL} alt="Website cover" width={500} height={300}></Image>
            <div className="website_details">
                <p>Name: {project.name}</p>
                <p>{project.description}</p>
                <div className="technologies">
                    <p>Technologies:</p>
                    <ul>
                        {project.technologies.map((tech, index) => (<li key={index}>{tech}</li>))}
                    </ul>
                </div>
                <p>Visit: <Link href={project.link}>{project.link}</Link></p>
            </div>
        </div>
    )
}

export default WebsiteDetails