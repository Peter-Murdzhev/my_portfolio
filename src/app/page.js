import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import ProjectsPage from "@/components/ProjectsPage";
import SectionTracker from "@/components/SectionTracker";
import Contacts from "@/components/Contacts";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Petar Murdzhev",
  "alternateName": "Петър Мурджев",
  "url": "https://murdzhev-portfolio-web.vercel.app/",
  "jobTitle": "Web Developer",
  "description":
    "Web developer creating modern websites and web applications.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

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
    </>

  );
}
