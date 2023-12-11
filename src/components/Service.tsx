import Skills from "./Skills";
import code from "../assets/outlineIcons/code.svg";
import mobile from "../assets/outlineIcons/mobile.svg";
import data from "../assets/outlineIcons/data.svg";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      text: "As a web developer, I am passionate about crafting engaging and user-friendly websites. Leveraging the latest technologies and best practices, I strive to create seamless digital experiences. From front-end design to back-end functionality, I am dedicated to delivering high-quality solutions tailored to your needs",
      icon: <img src={code} alt="web icon" className="serviceIcons" />,
    },
    {
      id: 2,
      title: "Mobile Development",
      text: "In the ever-evolving landscape of mobile technology, I excel in creating responsive and innovative mobile applications. Whether it's iOS or Android, I bring a wealth of expertise to the table. My commitment to delivering cutting-edge solutions ensures your mobile presence is both impactful and user-centric.",
      icon: <img src={mobile} alt="web icon" className="serviceIcons" />,
    },
    {
      id: 3,
      title: "Data Administration",
      text: "Data is the backbone of every successful business. With a focus on efficient data administration, I specialize in organizing, securing, and optimizing data workflows. From database management to data analysis, I am here to streamline your data processes and empower your decision-making.",
      icon: <img src={data} alt="web icon" className="serviceIcons" />,
    },
  ];

  return (
    <section className="service" id="service">
      <h2 className="heading">
        My <span>Abilities</span>
        <span className="bg-text bg-color2">My Abilities</span>
      </h2>
      <div className="services-container">
        {services.map((service) => {
          return (
            <div key={service.id} className="services-box">
              <div className="serviceIcons">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
      <Skills />
    </section>
  );
};

export default Service;
