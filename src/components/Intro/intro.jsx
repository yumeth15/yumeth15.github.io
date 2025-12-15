import "./intro.css";
import heroBg from "../../assets/bg.png";

const Intro = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro">
      <div className="floatingOrb orb1" />
      <div className="floatingOrb orb2" />

      <div className="introContainer">
        <div className="introLeft">
          <div className="heroTag">
            <span>✨</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="heroTitle">
        <span className="name">Yumeth Nethdula </span>
          </h1>

          <h2 className="heroSubtitle">Software Engineering Undergraduate</h2>

          <p className="heroDescription">
            I am a Software Engineering undergraduate skilled in{" "}
            <span className="highlight">Flutter</span>,{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Supabase</span>, and{" "}
            <span className="highlight">SQL</span>, with experience building
            secure and scalable full-stack mobile applications.
          </p>

          <div className="heroButtons">
            <button onClick={() => scrollTo("#contact")} className="btnPrimary">
              ✨ Hire Me
            </button>
            <button onClick={() => scrollTo("#projects")} className="btnSecondary">
              View Projects
            </button>
          </div>
        </div>

        <div className="introRight">
          <img src={heroBg} alt="Developer workspace" className="heroImage" />
        </div>
      </div>

      <div className="scrollIndicator">
        <span>Scroll</span>
        <span className="arrow">↓</span>
      </div>
    </section>
  );
};

export default Intro;
