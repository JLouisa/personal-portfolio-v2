import memoryCard from "../assets/representation/memory-card-game.gif";
import studysynthesis from "../assets/representation/studysynthesis.gif";
import fayna from "../assets/representation/FaynaM.gif";
import {
  faynaIcons,
  socialSphereIcons,
  studySynthesisIcons,
} from "../constants/constantsImg";
import "boxicons";

const Lastest = () => {
  const projects = [
    {
      id: 1,
      title: "Study Synthesis",
      text: "I have developed a PDF chatting app called StudySynthesis AI, which allows users to ask any question about a PDF and receive accurate answers. This SaaS (Software as a Service) application was created using Next.js, TypeScript, Tailwind CSS, and the Shadcn UI library, ensuring both functionality and an inviting user experience. MongoDB is used as the database, and the app includes a user authentication system that allows seamless login through email verification. The application supports PDF upload, processing, and storage, ensuring smooth and efficient operation.",
      photo: studysynthesis,
      alt: "messaging app gif",
      icons: studySynthesisIcons,
      href: "https://studysynthesis.com",
    },
    {
      id: 2,
      title: "Fayna Management",
      text: "In this production ready website, I utilized Next.js, TypeScript, and Tailwind CSS to create a website that is not only functional but also inviting. With Firebase serving as both the database and authentication system, and incorporating robust security measures, users can seamlessly log in through Google or Email/Password. The contact form not only boasts an appealing design but also ensures reliable communication by utilizing Nodemailer for sending emails and storing messages in the database. Additionally, for admins/owners, I implemented a messaging dashboard that allows easy tracking of messages sent through the contact form. It's more than just technology; it's about forging connections and delivering seamless experiences.",
      photo: fayna,
      alt: "Fayna Management landing page img",
      icons: faynaIcons,
      href: "https://www.faynamanagement.com/",
    },
    {
      id: 3,
      title: "SocialSphere",
      text: "In my recent web project, I utilized Next.js, TypeScript, and Tailwind CSS to create a website that is not only functional but also inviting. With Firebase serving as both the database and authentication system, and incorporating robust security measures, users can seamlessly log in through Google or Email/Password. The contact form not only boasts an appealing design but also ensures reliable communication by utilizing Nodemailer for sending emails and storing messages in the database. Additionally, for admins/owners, I implemented a messaging dashboard that allows easy tracking of messages sent through the contact form. It's more than just technology; it's about forging connections and delivering seamless experiences.",
      photo: memoryCard,
      alt: "social media app gif",
      icons: socialSphereIcons,
      href: "https://memory-card-peach-chi.vercel.app/",
    },
  ];
  return (
    <section className="portfolio" id="featured">
      <div className="">
        <h2 className="heading">
          Latest <span>Project</span>
          <span className="bg-text bg-color1">Latest Projects</span>
        </h2>
        {projects.map((project) => {
          return (
            <div key={project.id} className="featured">
              <a className="featuredA" href={project.href} target="_blank">
                <img
                  className="featuredImg"
                  src={project.photo}
                  alt={project.alt}
                />
              </a>
              <div className="featuredProject">
                <p className="featuredTitle">{project.title}</p>
                <p className="featuredText">{project.text}</p>
                <div className="featureIcons">
                  {project.icons.map((icon, index) => {
                    return (
                      <img
                        key={index}
                        src={icon.image}
                        width={icon.width}
                        height={icon.height}
                        alt="icons"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Lastest;
