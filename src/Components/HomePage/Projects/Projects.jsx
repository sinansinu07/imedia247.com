import "./Projects.scss"

import project1 from "../../../Assets/Projects/project1.webp"
import project2 from "../../../Assets/Projects/project2.webp"
import project3 from "../../../Assets/Projects/project3-new.webp"
import project4 from "../../../Assets/Projects/project4.webp"
import project5 from "../../../Assets/Projects/project6.webp"
import project6 from "../../../Assets/Projects/project8.webp"

 

export default function Projects() {
    const projects = [
        { id: 1, image: project1, name: "Billboards", location: "Dubai", service: "Billboards", description: "Large‑format placements on key transit routes for maximum exposure. Built for long‑range readability with premium print quality, ensuring brand recall at peak traffic times." },
        { id: 2, image: project2, name: "Digital", location: "Dubai Marina", service: "Digital", description: "Dynamic, data‑driven screens with precision targeting and real‑time content. Ideal for timely promos, day‑parting, and creative that adapts to audience and context." },
        { id: 3, image: project3, name: "Bridge Banners", location: "SZR", service: "Bridge Banners", description: "High‑visibility bridge takeovers across major interchanges. Extended dwell time and wide viewing angles make them perfect for bold, iconic brand messaging." },
        { id: 4, image: project4, name: "Airport", location: "DXB", service: "Airport", description: "Premium in‑terminal media reaching affluent travelers at key touchpoints. Strategically placed formats drive awareness from check‑in to boarding gates." },
        { id: 5, image: project5, name: "Transport", location: "Dubai Metro", service: "Transport", description: "Full train wraps and station dominations deliver citywide ubiquity. High‑frequency exposure across commuter journeys amplifies consideration and recall." },
        { id: 6, image: project6, name: "PDOOH", location: "Dubai", service: "PDOOH", description: "Programmatic OOH planned and optimized in real time. Use audience, location, and weather triggers to activate efficient buys with measurable outcomes." },
    ];

    return (
        <section>
            <div className="project-section section-container">
                <div className="head-section-div">
                    <div className="head-div">
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">What we have done</h3>
                        </div>
                        <h1 className="main-title">Our <span className="color">Projects</span></h1>
                    </div>
                    <p>
                        We are proud to showcase our work and the results we have achieved for our clients.
                    </p>
                </div>
                <div className="project-container">
                    <div className="projects-grid">
                        {projects.map((p) => (
                            <div className="project-card" key={p.id}>
                                <div className="card-image">
                                    <img src={p.image} alt={p.name} />
                                    <span className="badge-service">{p.service}</span>
                                    <div className="image-overlay" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                            <div className="hover-head">
                                                <h3 className="hover-title">{p.name}</h3>
                                                <span className="hover-location">{p.location}</span>
                                            </div>
                                            <p className="hover-description">{p.description}</p>
                                            <button className="learn-more-btn" type="button">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}