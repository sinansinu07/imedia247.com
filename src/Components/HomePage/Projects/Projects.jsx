import "./Projects.scss"

import project1 from "../../../Assets/Projects/project1.webp"
import project2 from "../../../Assets/Projects/project2.webp"
import project3 from "../../../Assets/Projects/project3.webp"
import project4 from "../../../Assets/Projects/project4.webp"
import project5 from "../../../Assets/Projects/project5.webp"
import project6 from "../../../Assets/Projects/project6.webp"


import { LuMoveRight } from "react-icons/lu"
import { FlipLinkText } from "../../../Designs/FlipLink"
import { motion } from "framer-motion"

const projects = [
    {
        id: 1,
        title: "Project 1",
        location: "Location 1",
        description: "This is a description of project 1",
        image: project1,
    },
    {
        id: 2,
        title: "Project 2",
        location: "Location 2",
        description: "This is a description of project 2",
        image: project2,
    },
    {
        id: 3,
        title: "Project 3",
        location: "Location 3",
        description: "This is a description of project 3",
        image: project3,
    },
    {
        id: 4,
        title: "Project 4",
        location: "Location 4",
        description: "This is a description of project 4",
        image: project4,
    },
    {
        id: 5,
        title: "Project 5",
        location: "Location 5",
        description: "This is a description of project 5",
        image: project5,
    },
    {
        id: 6,
        title: "Project 6",
        location: "Location 6",
        description: "This is a description of project 6",
        image: project6,
    },
]

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

export default function Projects() {
    return (
        <section>
            <div className="project-section section-container">
                <div className="head-div">
                    <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                        <motion.hr className="head-top-hr"/>
                        <motion.h3 className="top-title">What we have done</motion.h3>
                    </motion.div>
                    <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="text-black">Projects</span></motion.h1>
                </div>
                <div className="project-container">
                    {projects.map((project) => {
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
                    })}
                </div>
            </div>
        </section>
    )
}