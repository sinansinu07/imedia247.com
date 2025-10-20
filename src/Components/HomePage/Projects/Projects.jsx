import "./Projects.scss"

import project1 from "../../../Assets/Projects/project1.webp"
import project2 from "../../../Assets/Projects/project2.webp"
import project3 from "../../../Assets/Projects/project3-new.webp"
import project4 from "../../../Assets/Projects/project4.webp"
import project5 from "../../../Assets/Projects/project6.webp"
import project6 from "../../../Assets/Projects/project8.webp"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const textVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    },
}

const textVariants1 = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    },
}

const childVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Projects() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorClass, setCursorClass] = useState('');

    useEffect(() => {
        let animationFrame;
        
        const handleMouseMove = (e) => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            
            animationFrame = requestAnimationFrame(() => {
                setCursorPosition({ x: e.clientX, y: e.clientY });
            });
        };

        const handleMouseEnter = (e) => {
            if (e.target.closest('.project-card-1') || e.target.closest('.project-card-2')) {
                setCursorClass('cursor-hover');
            }
        };

        const handleMouseLeave = (e) => {
            if (e.target.closest('.project-card-1') || e.target.closest('.project-card-2')) {
                setCursorClass('');
            }
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <section>
            <div className="project-section section-container">
                {/* Custom Cursor */}
                <div 
                    className={`custom-cursor ${cursorClass}`}
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                    }}
                />
                <div className="head-section-div">
                    <div className="head-div">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">What we have done</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="color">Projects</span></motion.h1>
                    </div>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate">
                        We are proud to showcase our work and the results we have achieved for our clients.
                    </motion.p>
                </div>
                <div className="project-container">
                    {/* {projects.map((project) => {
                        return (
                            <div className="project-card" key={project.id}>
                                <div className="project-img-div">
                                    <div className="overlay"></div>
                                    <div className="si-no">0{project.id}</div>
                                    <img className="project-img" src={project.image} alt="" />
                                </div>
                                <div className="project-info">
                                    <h3 className="project-name">{project.title}</h3>
                                    <hr className="project-hr"/>
                                    <div className="same-line">
                                        <p className="project-location">{project.location}</p>
                                        <div className="read-more"><FlipLinkText>Details</FlipLinkText><LuMoveRight /></div>
                                    </div>
                                </div>
                            </div>  
                        )
                    })} */}
                     <div className="project-grid-row">
                         <div className="project-card-1">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project1} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 1</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location-1</p>
                             </div>
                         </div>
                         <div className="project-card-2">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project2} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 2</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location 2</p>
                             </div>
                         </div>
                     </div>

                     <div className="project-grid-row second-row">
                         <div className="project-card-1">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project3} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 3</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location-3</p>
                             </div>
                         </div>
                         <div className="project-card-2">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project4} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 4</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location 4</p>
                             </div>
                         </div>
                     </div>

                     <div className="project-grid-row third-row">
                         <div className="project-card-1">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project5} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 3</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location-3</p>
                             </div>
                         </div>
                         <div className="project-card-2">
                             <div className="project-img-div">
                                 <div className="overlay"></div>
                                 <img className="project-image" src={project6} alt="" />
                             </div>
                             <div className="project-title">
                                 <h3 className="project-name">Project 4</h3>
                             </div>
                             <div className="project-location">
                                 <p className="project-location">Location 4</p>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </section>
    )
}