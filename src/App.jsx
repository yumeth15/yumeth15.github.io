import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/intro"; 
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import { useEffect } from 'react';
import './animations.css';
function App() {
  useEffect(() => {
    const revealElms = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.15 });

    revealElms.forEach(el => observer.observe(el));
    return () => revealElms.forEach(el => observer.unobserve(el));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;