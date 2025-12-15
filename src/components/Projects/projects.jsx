import "./projects.css";
import projectCareer from "../../assets/careerbuddy.png";
import projectWeather from "../../assets/weather.png";
import projectFullstack from "../../assets/fullstack.png";

const projects = [
  {
    title: "Career Buddy",
    description:
      "Career Buddy is an AI-powered mobile app guiding Sri Lankan A/L students in career, university, and job decisions.",
    image: projectCareer,
    tags: ["Flutter", "AI", "Supabase"],
  },
  {
    title: "Weather App",
    description:
      "A weather app provides real-time forecasts, temperature, humidity, and alerts using live data for accurate updates.",
    image: projectWeather,
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Full-Stack Dashboard",
    description:
      "A full-stack app using Supabase for authentication and a clean UX layer for real-world tasks.",
    image: projectFullstack,
    tags: ["React", "Supabase", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projectsContainer">
        <div className="projectsHeader">
          <h2 className="sectionTitle">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="sectionSubtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article key={project.title} className="projectCard">
              <div className="projectImageWrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                />
                <div className="projectImageOverlay" />
                <div className="projectHoverOverlay">
                  <button className="projectBtn">🔗</button>
                </div>
              </div>

              <div className="projectContent">
                <div className="projectTags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projectTag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
