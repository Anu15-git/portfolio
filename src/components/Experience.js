function Experience() {
  return (
    <section className="experience-timeline">
      <h2 className="experience-title">My Experience</h2>

      <div className="timeline">
        {/* EXPERIENCE 1 */}
        <div className="timeline-item active">
          {/* LEFT SIDE */}
          <div className="timeline-left">
            
            <p className="desc">
              Worked on production-level Vue.js and Nuxt.js applications.
              Fixed UI bugs, improved performance, and collaborated with the
              team to build responsive and user-friendly web interfaces.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="timeline-right">
            <h3>ATEAMINDIA Soft Solutions</h3>
            <p className="role">
              Software Developer – Frontend Developer (Vue / Nuxt.js)
            </p>
          </div>
        </div>

        {/* EXPERIENCE 2 */}
        <div className="timeline-item">
          {/* LEFT SIDE */}
          <div className="timeline-left">
            
            <p className="desc">
              Trained as a frontend developer using Vue.js. Built reusable UI
              components and implemented layouts from design mockups while
              gaining real-time project experience.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="timeline-right">
            <h3>ATEAMINDIA Soft Solutions</h3>
            <p className="role">
              Software Developer Trainee – Frontend Developer (Vue.js)
            </p>
          </div>
        </div>

        {/* EXPERIENCE 3 */}
        <div className="timeline-item">
          {/* LEFT SIDE */}
          <div className="timeline-left">
            
            <p className="desc">
              Completed a full-stack web development course focusing on React.js
              and Node.js. Built multiple React projects to strengthen frontend
              development skills and understanding of component-based
              architecture.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="timeline-right">
            <h3>Full Stack Web Development Course</h3>
            <p className="role">React.js & Node.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
