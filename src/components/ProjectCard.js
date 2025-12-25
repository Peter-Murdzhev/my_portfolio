"use client"
import Image from "next/image"
import { useState } from "react"
import WebsiteDetails from "./WebsiteDetails"

const ProjectCard = ({ project }) => {
    const [toggleFullInfo, setToggleFullInfo] = useState(false);

    return (
        <div className="project_card">
            <Image src={project.imageURL} alt="Website cover" width={220} height={120}></Image>
            <h3>{project.name}</h3>
            <button onClick={() => setToggleFullInfo(true)}>See more</button>

            {toggleFullInfo && 
            <div className="modal_backdrop" onClick={() => setToggleFullInfo(false)}></div>}

            {toggleFullInfo && <WebsiteDetails project={project}
                toggleFullInfo={toggleFullInfo}
                setToggleFullInfo={setToggleFullInfo} />}
        </div>

    )
}

export default ProjectCard