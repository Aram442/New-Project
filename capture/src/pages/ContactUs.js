import React from "react";
//Animation
import { motion } from "framer-motion"; //component nya boya la naw {} importy dakayn
import { animation, pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{background: "#fff"}}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;