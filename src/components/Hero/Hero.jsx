import React from "react";
import "./Hero.css";
import { MdVerified } from "react-icons/md";
import { FaTelegramPlane, FaGithub, FaLinkedin  } from "react-icons/fa";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import developer from "../../assest/animation/Animation - developer.json";
import { avatar } from "../../data";
export default function Hero() {
  return (
    <section className="hero d-flex justify-content-between items-center ">
      <div className="Content-Hero">
        <div className="avatar d-flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              damping: 5,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            src={avatar}
          />
          <span className="verified-icon">
            <MdVerified className="ver" size={20} />
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hero-title"
        >
          Computer engineer and front end developer{" "}
        </motion.p>

        <p className="hero-disc">
          I am Muhammed Ramadan, a computer engineer from the University of
          Damascus and a skilled front-end developer with extensive experience
          in designing and developing web applications. I specialize in
          front-end development using ReactJS with a solid understanding of
          NextJS fundamentals. My technical expertise includes a wide range
          of programming technologies, including:
          </p>
          
          <p className="hero-disc" style={{marginLeft:"10px"}}> - HTML, CSS,JavaScript, Bootstrap , jQuery </p>
          <p className="hero-disc" style={{marginLeft:"10px"}}> -  ReactJS , NextJS , Redux/Redux Toolkit </p>
        
            <p className="hero-disc" style={{marginLeft:"10px"}}  > - Additional programming languages such as C++, Java, and Python </p>

          
          <p className="hero-disc">
           I possess strong problem-solving
          skills, enabling me to diagnose technical issues, identify system
          errors, and implement effective solutions. I am proficient in
          utilizing diverse development environments, including **IDEs** and
          text editors, to optimize the coding process. In addition to my
          technical abilities, I have excellent communication skills and thrive
          in collaborative team environments. I am committed to delivering
          high-quality solutions and am eager to work with you to develop
          innovative projects.
        </p>

        <div className="hero-icons">
          <span>
            <a href="https://www.linkedin.com/in/mhdrdn122">
              <FaLinkedin  size={20} />
            </a>
          </span>
          <span>
            <a href="https://github.com/mhdrdn122">
              <FaGithub size={20} />
            </a>
          </span>
          <span>
            <a href="https://t.me/muhammed_ramadan">
              <FaTelegramPlane size={20} />
            </a>
          </span>
        </div>
      </div>
      <div className="animation">
        <Lottie className="ani-dev" animationData={developer} />
      </div>
    </section>
  );
}
