import "./navbar.scss"

import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}>
                  Jonat J Mathew</motion.span>
            <div className="social">
                <a href="https://github.com/SoulReaper06"><img src="/github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/jonat-j-mathew06/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.instagram.com/jjm_06_/"><img src="/instagram.png" alt="" /></a>
                <a href="https://medium.com/@johnatj33"><img src="/medium.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar