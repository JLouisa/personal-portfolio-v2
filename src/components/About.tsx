import JAL from "../assets/images/JAL_formatted2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={JAL} alt="Jonathan Photo" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
          <span className="bg-text bg-color1">About Me</span>
        </h2>
        <h3>Fullstack Developer</h3>
        <p>
          My name is Jonathan Louisa, a Full Stack Web Developer with a knack for turning ideas into pixel-perfect
          websites. I'm all about crafting digital magic that not only looks great but also works seamlessly.
        </p>
        <p>
          I'm fluent in languages like HTML, CSS, JavaScript, and more. From creating stunning front-end interfaces to
          making the back-end run like a well-oiled machine, I've got it covered.
        </p>

        <p>
          I'm a firm believer in user experience and love bringing creativity to every project. When I'm not typing away
          at my keyboard, you can find me exploring new tech trends, brainstorming new ideas for turning real world
          problems into code solutions, or maybe just sipping on a cup of coffee to recharge to do it all over again!
        </p>
        <p>
          Let's collaborate and make the web a better place, one project at a time. Reach out, and let's chat about your
          next big thing!
        </p>
        <div className="aboutMeBtn">
          <a href="" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
