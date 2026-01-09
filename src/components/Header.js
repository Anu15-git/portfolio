import profile from "../assets/anu-photo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="hero hero-alt">
      <div className="hero-left">
        <span className="intro">Hello,</span>

        <p className="hero-desc">
          I build modern, responsive, and user-friendly web applications using
          React, Vue, and Nuxt.js.
        </p>

        <div className="hero-actions">
          <div className="socials">
            <a
              href="https://github.com/Anu15-git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anu-j-chandran-155415209"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <Link to="/contact" className="primary-btn">
            Hire Me
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Anu Chandran" />
      </div>
    </section>
  );
}

export default Header;
