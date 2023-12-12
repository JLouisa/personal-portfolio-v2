import memoryCard from "../assets/representation/memory-card-game.gif";
import whisper from "../assets/representation/whisper.gif";
import { faynaIcons, socialSphereIcons, whisperWaveIcons } from "../constants/constantsImg";
import "boxicons";

const Lastest = () => {
  const projects = [
    {
      id: 1,
      title: "Fayna Management",
      text: "In my recent web project, I utilized Next.js, TypeScript, and Tailwind CSS to create a website that is not only functional but also inviting. With Firebase serving as both the database and authentication system, and incorporating robust security measures, users can seamlessly log in through Google or Email/Password. The contact form not only boasts an appealing design but also ensures reliable communication by utilizing Nodemailer for sending emails and storing messages in the database. Additionally, for admins/owners, I implemented a messaging dashboard that allows easy tracking of messages sent through the contact form. It's more than just technology; it's about forging connections and delivering seamless experiences.",
      photo: memoryCard,
      alt: "memory card gif",
      icons: faynaIcons,
      href: "https://memory-card-peach-chi.vercel.app/",
    },
    {
      id: 2,
      title: "SocialSphere",
      text: "In my recent web project, I utilized Next.js, TypeScript, and Tailwind CSS to create a website that is not only functional but also inviting. With Firebase serving as both the database and authentication system, and incorporating robust security measures, users can seamlessly log in through Google or Email/Password. The contact form not only boasts an appealing design but also ensures reliable communication by utilizing Nodemailer for sending emails and storing messages in the database. Additionally, for admins/owners, I implemented a messaging dashboard that allows easy tracking of messages sent through the contact form. It's more than just technology; it's about forging connections and delivering seamless experiences.",
      photo: memoryCard,
      alt: "social media app gif",
      icons: socialSphereIcons,
      href: "https://memory-card-peach-chi.vercel.app/",
    },
    {
      id: 3,
      title: "WhisperWave",
      text: "In my recent web project, I utilized Next.js, TypeScript, and Tailwind CSS to create a website that is not only functional but also inviting. With Firebase serving as both the database and authentication system, and incorporating robust security measures, users can seamlessly log in through Google or Email/Password. The contact form not only boasts an appealing design but also ensures reliable communication by utilizing Nodemailer for sending emails and storing messages in the database. Additionally, for admins/owners, I implemented a messaging dashboard that allows easy tracking of messages sent through the contact form. It's more than just technology; it's about forging connections and delivering seamless experiences.",
      photo: whisper,
      alt: "messaging app gif",
      icons: whisperWaveIcons,
      href: "https://memory-card-peach-chi.vercel.app/",
    },
  ];
  return (
    <section className="portfolio" id="featured">
      <div className="">
        <h2 className="heading">
          Lastest <span>Project</span>
          <span className="bg-text bg-color1">Lastest Projects</span>
        </h2>
        {projects.map((project) => {
          return (
            <div key={project.id} className="featured">
              <a className="featuredA" href={project.href} target="_blank">
                <img className="featuredImg" src={project.photo} alt={project.alt} />
              </a>
              <div className="featuredProject">
                <p className="featuredTitle">{project.title}</p>
                <p className="featuredText">{project.text}</p>
                <div className="featureIcons">
                  {project.icons.map((icon, index) => {
                    return <img key={index} src={icon.image} width={icon.width} height={icon.height} alt="icons" />;
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
