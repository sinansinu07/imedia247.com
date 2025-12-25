import "./Gallery.scss"

import project1 from "../../../Assets/Gallery/project1.jpg"
import project2 from "../../../Assets/Gallery/project2.jpg"
import project3 from "../../../Assets/Gallery/project3.jpg"
import project4 from "../../../Assets/Gallery/project4.jpg"
import project5 from "../../../Assets/Gallery/project5.jpg"
import project6 from "../../../Assets/Gallery/project6.jpg"
import project7 from "../../../Assets/Gallery/project7.jpg"
import project8 from "../../../Assets/Gallery/project8.jpg"
import project9 from "../../../Assets/Gallery/project9.jpg"
import project10 from "../../../Assets/Gallery/project10.jpg"

import hse1 from "../../../Assets/Gallery/hse1.jpg"
import hse2 from "../../../Assets/Gallery/hse2.jpg"
import hse3 from "../../../Assets/Gallery/hse3.jpg"
import hse4 from "../../../Assets/Gallery/hse4.jpg"
import hse5 from "../../../Assets/Gallery/hse5.jpg"
import hse6 from "../../../Assets/Gallery/hse6.jpg"
import hse7 from "../../../Assets/Gallery/hse7.jpg"

import event1 from "../../../Assets/Gallery/event1.jpg"
import event2 from "../../../Assets/Gallery/event2.jpg"
import { useState } from "react"

const gallery = [
    // Project
    {
        id: 1,
        type: "Project",
        image: project1
    },
    {
        id: 2,
        type: "Project",
        image: project2
    },
    {
        id: 3,
        type: "Project",
        image: project3
    },
    {
        id: 4,
        type: "Project",
        image: project4
    },
    {
        id: 5,
        type: "Project",
        image: project5
    },
    {
        id: 6,
        type: "Project",
        image: project6
    },
    {
        id: 7,
        type: "Project",
        image: project7
    },
    {
        id: 8,
        type: "Project",
        image: project8
    },
    {
        id: 9,
        type: "Project",
        image: project9
    },
    {
        id: 10,
        type: "Project",
        image: project10
    },
    
    // HSE
    {
        id: 11,
        type: "HSE",
        image: hse1
    },
    {
        id: 12,
        type: "HSE",
        image: hse2
    },
    {
        id: 13,
        type: "HSE",
        image: hse3
    },
    {
        id: 14,
        type: "HSE",
        image: hse4
    },
    {
        id: 15,
        type: "HSE",
        image: hse5
    },
    {
        id: 16,
        type: "HSE",
        image: hse6
    },
    {
        id: 17,
        type: "HSE",
        image: hse7
    },

    // Events
    {
        id: 18,
        type: "Event",
        image: event1
    },
    {
        id: 19,
        type: "Event",
        image: event2
    },
]

export default function Gallery() {
    const [filterType, setFilterType] = useState("All")
    return (
        <section>
            <div className="gallery section-container">
                <div className="head-div">
                    <div className="head-top">
                        <hr className="head-top-hr"/>
                        <h3 className="top-title">What we do</h3>
                    </div>
                    <h1 className="main-title">Our <span className="color">Gallery</span></h1>
                </div>
                <div className="gallery-container">
                    <div className="gallery-section-head">
                        <li className={`section ${filterType === "All" ? "active" : ""}`} onClick={() => setFilterType("All")}>
                            All
                        </li>
                        <li className={`section ${filterType === "Project" ? "active" : ""}`} onClick={() => setFilterType("Project")}>
                            Projects
                        </li>
                        <li className={`section ${filterType === "HSE" ? "active" : ""}`} onClick={() => setFilterType("HSE")}>
                            HSE
                        </li>
                        <li className={`section ${filterType === "Event" ? "active" : ""}`} onClick={() => setFilterType("Event")}>
                            Events
                        </li>
                    </div>
                    <div className="gallery-grid">
                        {gallery.filter(ele => (ele.type === filterType || filterType === "All")).map((ele) => {
                            return (
                                <div className="gallery">
                                    <img src={ele.image} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}