import photoImg from "../assets/representation/memory-card-game.gif";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Lastest <span>Project</span>
        <span className="bg-text bg-color1">Lastest Projects</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photoImg} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?</p>
            <a href="">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
