import "./WhoAreWe.scss"

import image from "../../../Assets/Projects/project8.webp"
import { FaArrowRight } from "react-icons/fa6"

export default function WhoAreWe() {
    return (
        <section>
            <div className="who-are-we-section section-container">
                <div className="about-company-content">
                    <div className="head-div">
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">Who Are We</h3>
                        </div>
                        <h1 className="main-title">Bringing Your <span className="color">Ideas<br/> and Innovations</span> to Life</h1>
                    </div>
                    <div className="about-company-details">
                        <p className="description">Quaddream Scaffolding Contracting LLC is one of the leading suppliers of scaffoldings since 2012</p>
                        <div className="company-points">
                            <div className="points">
                                <FaArrowRight className="point-arrow"/>
                                <h1 className="point-title">Making lives easier</h1>
                            </div>
                            <div className="points">
                                <FaArrowRight className="point-arrow"/>
                                <h1 className="point-title">Get every solution right here</h1>
                            </div>
                            <div className="points">
                                <FaArrowRight className="point-arrow"/>
                                <h1 className="point-title">Innovation and creativity</h1>
                            </div>
                            <div className="points">
                                <FaArrowRight className="point-arrow"/>
                                <h1 className="point-title">Fine engineering only with us</h1>
                            </div>
                        </div>
                        <div className="btn btn-primary">About Company</div>
                    </div>
                </div>
                <div className="img-div">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}