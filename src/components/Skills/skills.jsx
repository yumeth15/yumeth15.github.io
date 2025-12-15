import "./skills.css";
import skillUI from "../../assets/ui.webp";
import skillWeb from "../../assets/website.avif";
import skillApp from "../../assets/app.webp";
import skillBackend from "../../assets/backend.webp";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Create simple, clean, and user-focused designs using Figma. My layouts follow proper spacing and hierarchy to deliver smooth user experiences.",
    image: skillUI,
  },
  {
    title: "Website Development",
    description:
      "I build responsive and modern websites using clean coding practices. I focus on usability, performance, and structured layouts.",
    image: skillWeb,
  },
  {
    title: "App Development",
    description:
      "I develop cross-platform mobile apps using Flutter and Dart. My apps feature polished UI, smooth navigation, and clean code.",
    image: skillApp,
  },
  {
    title: "Backend Development",
    description:
      "I work with Supabase and SQL to create secure and scalable backends. I design efficient databases and authentication systems.",
    image: skillBackend,
  },
];

const Skills = () => {
  return (
    <section id="Skills">
      <div className="skillsContainer">
        <div className="skillsHeader">
          <h2 className="sectionTitle">
            What I <span className="highlight">Do</span>
          </h2>
          <p className="sectionSubtitle">
            Specialized in building modern, scalable applications with a focus
            on user experience
          </p>
        </div>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <article key={skill.title} className="skillCard">
              <div className="skillIconWrapper">
                <div className="skillIconGlow" />
                <img src={skill.image} alt={skill.title} className="skillIcon" />
              </div>
              <h3 className="skillTitle">{skill.title}</h3>
              <p className="skillDescription">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
