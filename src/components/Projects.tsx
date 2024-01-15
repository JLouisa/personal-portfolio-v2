import memoryCard from "../assets/representation/memory-card-game.gif";
import shoppingCard from "../assets/representation/shopping-cart.gif";
import weatherApp from "../assets/representation/weatherly.gif";
import blogsApi from "../assets/representation/blogs.gif";
import waldo from "../assets/representation/waldoV4.gif";
import cssBall from "../assets/representation/bouncing-ball.gif";
import {
  memoryCardIcons,
  waldoIcons,
  blogIcons,
  shoppingCardIcons,
  cssBallIcons,
  weatherAppIcons,
} from "../constants/constantsImg";

const Projects = () => {
  const blogs = [
    {
      id: 1,
      title: "Where is Waldo (Fullstack)",
      text: "My second fullstack project, build with ReactJS, NodeJS, ExpressJS, MongoDB, and Vite. This project is a game application that allows users to play the classic game of Where's Waldo. Fully screen resolution responsive and leaderboard included.",
      img: waldo,
      icons: waldoIcons,
      href: "https://where-is-waldo-lyart.vercel.app/home",
    },
    {
      id: 2,
      title: "Blog (Fullstack)",
      text: "My first fullstack project, build with ReactJS, NodeJS, ExpressJS, MongoDB, and Vite. This project is a blog application that allows users to create, read, update, and delete blog posts.",
      img: blogsApi,
      icons: blogIcons,
      href: "https://odin-blog.vercel.app/home",
    },
    {
      id: 3,
      title: "Memory Card",
      text: "I developed this React game that leveraged Jest for testing and connected to the Pokémon API. I crafted a captivating memory card game using data from the API.",
      img: memoryCard,
      icons: memoryCardIcons,
      href: "https://memory-card-peach-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Shopping Cart API",
      text: "My project built with ReactJS and Vite, rigorously tested with Jest, and powered by real-time data from fakestoreapi.com. This dynamic shopping-cart application seamlessly integrates API connections, delivering a fully functional and immersive shopping experience.",
      img: shoppingCard,
      icons: shoppingCardIcons,
      href: "https://shopping-cart-5gp33884t-jonathan-louisas-projects.vercel.app/home",
    },
    {
      id: 5,
      title: "Weather App",
      text: "I created a minimalist Weather app using vanilla JavaScript, featuring a live API connection to Weather.com. This project demonstrates my proficiency in building user-friendly interfaces and integrating external APIs while showcasing my JavaScript skills.",
      img: weatherApp,
      icons: weatherAppIcons,
      href: "https://jlouisa.github.io/weather-app/",
    },
    {
      id: 6,
      title: "CSS-Only Ball",
      text: "This a project I build using on html divs and css. Zero javascript!",
      img: cssBall,
      icons: cssBallIcons,
      href: "https://jlouisa.github.io/bouncing-ball/",
    },
  ];

  const navigateToWebsite = (web: string) => {
    window.open(web, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section sec4" id="projects">
      <div className="blogs-content">
        <h2 className="heading">
          My <span>Projects</span>
          <span className="bg-text bg-color2">My Projects</span>
        </h2>
        <div className="blogs">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="blog"
                onClick={() => navigateToWebsite(blog.href)}
              >
                <img src={blog.img} alt="project img"></img>
                <div className="blogText">
                  <h4>
                    <p className="blogTitle">{blog.title}</p>
                    <p>{blog.text}</p>
                    <div className="blogIcons">
                      {blog.icons.map((icon, index) => {
                        return <img key={index} src={icon} alt="icons" />;
                      })}
                    </div>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
