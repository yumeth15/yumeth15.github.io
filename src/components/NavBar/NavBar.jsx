import { useState, useEffect } from "react";
import "./NavBar.css";

const navItems = [
  { name: "Home", href: "#intro" },
  { name: "About", href: "#Skills" },
  { name: "Projects", href: "#projects" },
];

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="navContainer">
        <span className="logo">Yumeth</span>

        <div className="desktopMenu">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="navLink"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo("#contact")} className="contactBtn">
          Contact Me
        </button>

        <button
          className="mobileMenuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`mobileMenu ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollTo(item.href)}
            className="navLink"
          >
            {item.name}
          </button>
        ))}
        <button onClick={() => scrollTo("#contact")} className="contactBtn">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
