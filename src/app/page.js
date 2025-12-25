import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import ProjectsPage from "@/components/ProjectsPage";
import SectionTracker from "@/components/SectionTracker";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="main_page">
      <Navbar />
      <SectionTracker />

      <div className="main_page_content">
        <section id="hero">
            <Hero />
        </section>

        <section id="about_me">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <ProjectsPage />
        </section>

        <section id="contacts">
          <Contacts />
        </section>
      </div>

    </div>
  );
}
