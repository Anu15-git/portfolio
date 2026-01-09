function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h2>Get in Touch</h2>

        <p className="contact-desc">
          I’m always open to discussing new opportunities, projects.
          Feel free to reach out.
        </p>

        <div className="contact-info">
         
          <p>
            <strong>Email:</strong>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anujchandran720@gmail.com&su=Hiring%20Inquiry"
              target="_blank"
              rel="noreferrer"
            >
              anujchandran720@gmail.com
            </a>
          </p>


          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Anu15-git"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Anu15-git
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/anu-j-chandran-155415209"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/anu-j-chandran
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
