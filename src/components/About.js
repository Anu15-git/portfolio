import image from "../assets/vector-illustration-programmer-flat-design-style_844724-3931.avif"
function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2>Who I Am </h2>

          <h3>
            I’m <span>Anu J Chandran</span>, a Frontend Developer
          </h3>

          <p>
            I have hands-on experience in building modern, responsive,
            and user-friendly web applications using Vue.js, Nuxt.js,
            and React. I enjoy transforming ideas into clean and
            efficient user interfaces.
          </p>

          <p>
            I focus on writing maintainable code, improving performance,
            and continuously learning new frontend technologies.
          </p>

          {/* GITHUB BUTTON */}
          <a
            href="https://github.com/Anu15-git"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View My Projects
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img
            src={image}
            alt="Female coder working on laptop"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
