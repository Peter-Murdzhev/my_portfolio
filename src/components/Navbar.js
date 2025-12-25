"use client"
import { handleScroll } from "@/utils/scrollToSection";
import { useTab } from "@/context/NavigationContext";

const Navbar = () => {
    const {selectedTab, setSelectedTab} = useTab();

    return (
        <div className="navbar">
            <button className={selectedTab === "hero" ? "active" : ""} onClick={() => {
                setSelectedTab("hero");
                handleScroll("hero");
            }}>Home</button>
            <button className={selectedTab === "about_me" ? "active" : ""} onClick={() =>{
                setSelectedTab("about_me");
                handleScroll("about_me");
            }}>About me</button>
            <button className={selectedTab === "skills" ? "active" : ""} onClick={() => {
                setSelectedTab("skills");
                handleScroll("skills");
            }}>Skills</button>
            <button className={selectedTab === "projects" ? "active" : ""} onClick={() => {
                setSelectedTab("projects");
                handleScroll("projects");
            }}>Projects</button>
            <button className={selectedTab === "contacts" ? "active" : ""} onClick={() => {
                setSelectedTab("contacts");
                handleScroll("contacts");
            }}>Contact me</button>
        </div>
    )
}

export default Navbar;