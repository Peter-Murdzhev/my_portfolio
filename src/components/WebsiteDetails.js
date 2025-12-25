"use client"
import Image from "next/image"
import Link from "next/link"
import { FiX } from "react-icons/fi";

const WebsiteDetails = ({ project, toggleFullInfo, setToggleFullInfo }) => {
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
                <p>Technologies: {project.technologies.map(tech => (tech + ", "))} </p>
                <p>Visit: <Link href={project.link}>{project.link}</Link></p>
            </div>
        </div>
    )
}

export default WebsiteDetails