import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectsInfo";

const ProjectsPage = () => {
  return (
    <>
    <h1 style={{textAlign: "center", marginBottom: "30px", fontSize:"30px"}}>My Projects</h1>
    
    <div className="projects">
        {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
    </div>
    </>
  )
}

export default ProjectsPage;