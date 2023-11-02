import React, { useRef } from 'react'

import EarthCanvas from "./canvas/Earth";

import { motion, useScroll, useTransform } from "framer-motion"

import './techparallax.scss'

const TechParallax = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target:ref,
      offset:["start start", "end start"],
    })
  
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  

  return (
    <motion.div
    className='earth'>
        <motion.div 
            ref={ref}  
            className='title' 
            style={{y : yText}}>
        <h1>
            WHAT I KNOW ?
        </h1>
     </motion.div>

        <EarthCanvas/>
    </motion.div>
  )
}

export default TechParallax