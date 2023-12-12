import JAL from "../assets/images/JAL.png";
import "boxicons";
import TheTyped from "./TheTyped";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello I am</h3>
        <h1>Jonathan Louisa</h1>
        <h3>
          And I'm a <TheTyped />
        </h3>
        <p>I specialize in creating modern and responsive web applications. Welcome to my portfolio!</p>
        <div className="social-media">
          <a href="https://www.facebook.com/jonathan.louisa" target="_blank">
            <box-icon type="logo" name="meta" color="white"></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-louisa" target="_blank">
            <box-icon type="logo" name="linkedin" color="white"></box-icon>
          </a>
          <a href="https://github.com/JLouisa" target="_blank">
            <box-icon type="logo" name="github" color="white"></box-icon>
          </a>
        </div>
        <div className="homeBtn">
          <a href="" className="btn">
            Download CV
          </a>
          <a href="https://github.com/JLouisa" className="btn" target="_blank">
            My Github
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={JAL} alt="my photo" />
      </div>
    </section>
  );
};

export default Home;
