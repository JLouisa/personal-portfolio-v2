import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const SkillsText = () => {
  return (
    <div className="skills-text-container">
      <motion.div variants={slideInFromLeft(0.5)} className="main-text">
        Making apps with modern technologies
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className="sub-text">
        Never miss a task deadline or idea!
      </motion.div>
    </div>
  );
};

export default SkillsText;
