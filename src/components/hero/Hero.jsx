import React from 'react'

import { TypeAnimation } from 'react-type-animation';

import { motion } from "framer-motion"

import "./hero.scss"

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration:2,
            repeatType:"mirror",
            repeat:Infinity,
        }
    }
};

const sliderVariants = {
    initial:{
        x:0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            duration: 20,
        },
    },
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer"
                        variants={textVariants}
                        initial="initial"
                        animate="animate">
                <motion.h2 variants={textVariants}>JONAT J MATHEW</motion.h2>
                <motion.h1 variants={textVariants}>I'm a <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'Cyber Security Enthusiast',
                2000,
                'Python Programmer',
                2000,
                'Technical Content Writer',
                2000,
              ]}
              speed={50}
              className='text-animation'
              wrapper='span'
              repeat={Infinity}
              /></motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img animate="scrollButton" src="/scroll.png" alt="" variants={textVariants}/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Developer Writer CyberSec Programmer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero