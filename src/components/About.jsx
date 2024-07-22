import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className= "xs:w-[200px] w-full mx-auto ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card  '
      >
        <div
          options = {{
            max:45,
            scale:1, 
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      
      </motion.div>      
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondarytext-[17px] max-w-3xl leading-30px'
      >
        Hello! I'm a dynamic tech enthusiast on a mission to innovate and inspire. Currently pursuing a B.Tech in EEE at Birla Institute of Technology, Mesra, I excel in C/C++, Python, JavaScript, Node.js, and React JS, etc. My projects, like the Bharat Business Portal and eye-catching JavaScript web applications, showcase my creativity and technical prowess.

Interning at Slash Mark IT Start-Up and Suavy Technologies, I've sharpened my skills and thrived in collaborative environments. As an active member of the Finance Club and Ehsaas: Dramatics Society, I’ve demonstrated leadership and creativity, managing events and designing captivating materials.

A problem-solving enthusiast, I’ve tackled over more than 450 challenges on LeetCode and CodeForces, earning numerous badges and securing an impressive AIR of 5493 in GATE 2024. Eager to learn and grow, I’m ready to take on new tech adventures. Let's build something extraordinary together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-2 ' >
        {services.map((service, index) => (
          <ServiceCard key= {service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")