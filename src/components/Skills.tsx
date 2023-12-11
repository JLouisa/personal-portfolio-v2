import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "../constants/constantsImg";
import SkillsDataProvider from "./SkillsDataProvider";
import SkillsText from "./SkillsText";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <SkillsText />

      <div className="skills-category">
        {Skill_data.map((image, index) => (
          <SkillsDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className="skills-category">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className="skills-category">
        {Backend_skill.map((image, index) => (
          <SkillsDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className="skills-category">
        {Full_stack.map((image, index) => (
          <SkillsDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className="skills-category">
        {Other_skill.map((image, index) => (
          <SkillsDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className="background-video">
        <div className="video-overlay" />
        <video className="background-video" preload="false" playsInline loop muted autoPlay src="/cards-video.webm" />
      </div>
    </section>
  );
};

export default Skills;
