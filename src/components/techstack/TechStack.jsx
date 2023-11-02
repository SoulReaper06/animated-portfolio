import React from 'react'

import BallCanvas from "./canvas/Ball";

import { technologies } from "../../constants";

import './techstack.scss'


const TechStack = () => {
  return (
    <div className='ballsContainer'>
        {technologies.map((technology) => (
            <div className='balls' key={technology.name}>
                <BallCanvas icon={technology.icon}/>
                <h5 className='ballname'>{technology.name}</h5>
            </div>
        ))}
    </div>
  )
}

export default TechStack;