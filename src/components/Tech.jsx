import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Explore more Languages
        </p>
        <p className={`${styles.sectionHeadText}`}>
          Explore All Development Courses
        </p>
      </motion.div>
      <div className="flex flex-wrap flex-row justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}></BallCanvas>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
