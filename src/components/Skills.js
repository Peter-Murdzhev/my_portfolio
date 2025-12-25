"use client"
import { useState } from "react"
import { skills } from "../data/SkillsData"

const Skills = () => {
    const categories = Object.keys(skills);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <>
            <h1 style={{textAlign:"center", fontSize:"30px"}}>Skills</h1>

            <div className="skills">
                <div className="skills_category">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className = {selectedCategory === category ? "active" : ""}
                        >
                            {category}
                        </button>
                    ))
                    }
                </div>

                <div className="skills_list">
                    <ul>
                        {skills[selectedCategory].map(skill =>(
                            <li key={skill} >{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Skills