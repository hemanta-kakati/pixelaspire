import React from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, slideInTop } from "./Animation";

const SectionHeading = ({ heading, subHeading1, subHeading2 }) => {
  return (
    <motion.div
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
      initial="offset"
      transition={{ staggerChildren: 0.5 }}
      className="section-heading"
    >
      <motion.h3 variants={slideInTop} className="heading">
        {heading}
      </motion.h3>
      <div className="subheading">
        <motion.h1 variants={slideInLeft} className="h-light">
          {subHeading1}
        </motion.h1>
        <motion.h1 variants={slideInRight} className="h-bold">
          {subHeading2}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
