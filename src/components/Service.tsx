const Service = () => {
  return (
    <section className="service" id="service">
      <h2 className="heading">
        My <span>Abilities</span>
        <span className="bg-text bg-color2">My Abilities</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            As a web developer, I am passionate about crafting engaging and user-friendly websites. Leveraging the
            latest technologies and best practices, I strive to create seamless digital experiences. From front-end
            design to back-end functionality, I am dedicated to delivering high-quality solutions tailored to your
            needs.
          </p>
        </div>
        <div className="services-box">
          <i className="bx bx-mobile-alt"></i>
          <h3>Mobile Development</h3>
          <p>
            In the ever-evolving landscape of mobile technology, I excel in creating responsive and innovative mobile
            applications. Whether it's iOS or Android, I bring a wealth of expertise to the table. My commitment to
            delivering cutting-edge solutions ensures your mobile presence is both impactful and user-centric.
          </p>
        </div>
        <div className="services-box">
          <i className="bx bxs-data"></i>
          <h3>Data Administration</h3>
          <p>
            Data is the backbone of every successful business. With a focus on efficient data administration, I
            specialize in organizing, securing, and optimizing data workflows. From database management to data
            analysis, I am here to streamline your data processes and empower your decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
