import React, { useRef } from 'react'

import { useInView, motion } from "framer-motion"

import './services.scss';

const variants = {
    initial: {
        x:-500,
        y:100,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className='services'
                variants={variants} 
                initial="initial" 
                ref={ref}
                animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I transform your vision <br/> 
                into Digital Reality</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Dare</motion.b> to be
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Different</motion.b>
                </h1>
                <button>WHAT I DO ?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Website Development
                </h2>
                <p> Elevate your brand's digital presence with our expert website design.
                    We craft visually appealing, user-friendly websites that tell your brand's unique story and drive engagement. 
                    From concept to launch, we're your partners in the online journey.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    ML Model Training
                </h2>
                <p>Harness the power of data with our machine learning model training. We equip your brand with AI-driven insights, helping you make informed decisions and stay ahead of the competition.
                     Whether it's predictive analytics, recommendation systems, or data-driven solutions, we've got your back. 
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    Technical Content 
                </h2>
                <p>Demystify intricate tech concepts with our technical content writing. Our team of experts translates complexity into clear, reader-friendly content. 
                    Share your brand's knowledge and innovations effectively, engaging your audience with insights that matter.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>
                    CTF Player
                </h2>
                <p>Guard your digital assets with our cybersecurity expertise. As Capture The Flag (CTF) champions, we detect vulnerabilities, design solutions, and ensure your brand's digital terrain remains secure. 
                    Your victory in the ever-evolving cybersecurity landscape is our mission
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services