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

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Where is Waldo (Fullstack)",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: waldo,
      icons: waldoIcons,
    },
    {
      id: 2,
      title: "Blog (Fullstack)",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: blogsApi,
      icons: blogIcons,
    },
    {
      id: 3,
      title: "Shopping Cart API",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: shoppingCard,
      icons: shoppingCardIcons,
    },
    {
      id: 4,
      title: "Memory Card",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: memoryCard,
      icons: memoryCardIcons,
    },
    {
      id: 5,
      title: "CSS-Only Ball",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: cssBall,
      icons: cssBallIcons,
    },
    {
      id: 6,
      title: "Weather App",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis recusandae corrupti dolore asperiores nisi.",
      img: weatherApp,
      icons: weatherAppIcons,
    },
  ];

  return (
    <section className="section sec4" id="blogs">
      <div className="blogs-content">
        <div className="maint-title">
          <h2 className="heading">
            My <span>Projects</span>
            <span className="bg-text bg-color2">My Projects</span>
          </h2>
          <div className="blogs">
            {blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog">
                  <img src={blog.img} alt="project img" />
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
      </div>
    </section>
  );
};

export default Blogs;
