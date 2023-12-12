import JAL from "../assets/images/JAL_formatted.png";
import "boxicons";
import TheTyped from "./TheTyped";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello I am</h3>
          <h1>Jonathan Louisa</h1>
          <h3>
            And I'm a <TheTyped />
          </h3>
          <p>
            I specialize in creating modern and responsive web applications.
            <br />
            Welcome to my portfolio!
          </p>
          <div className="social-media">
            <a href="https://www.facebook.com/jonathan.louisa" target="_blank">
              {/* @ts-expect-error ts doesn't find the type */}
              <box-icon type="logo" name="meta" color="white"></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-louisa" target="_blank">
              {/* @ts-expect-error ts doesn't find the type */}
              <box-icon type="logo" name="linkedin" color="white"></box-icon>
            </a>
            <a href="https://github.com/JLouisa" target="_blank">
              {/* @ts-expect-error ts doesn't find the type */}
              <box-icon type="logo" name="github" color="white"></box-icon>
            </a>
          </div>
          <div className="homeBtn">
            <a
              href="https://drive.google.com/file/d/1S89x08oNNV00AkJIMuvZunov6SKdHZw8/view?usp=drive_link"
              className="btn"
              target="_blank"
            >
              <strong>Download CV</strong>
            </a>
            <a href="https://github.com/JLouisa" className="btn" target="_blank">
              <strong>My Github</strong>
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={JAL} alt="my photo" />
        </div>
      </section>
    </>
  );
};

export default Home;
