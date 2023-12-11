import photoImg from "../assets/representation/memory-card-game.gif";
import "boxicons";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
    {
      id: 2,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
    {
      id: 3,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
    {
      id: 4,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
    {
      id: 5,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
    {
      id: 6,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio?",
      photo: photoImg,
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Lastest <span>Project</span>
        <span className="bg-text bg-color1">Lastest Projects</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="portfolio-box">
              {/* <div className="portfolio-layer-black"> */}
              <img src={project.photo} alt="" />
              {/* </div> */}
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.text}</p>
                <a href="">
                  <box-icon name="link-external" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
