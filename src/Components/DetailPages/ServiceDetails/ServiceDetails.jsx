import "./ServiceDetails.scss"

export default function ServiceDetails({service}) {
    return (
        <section>
            <div className="service-detail-section section-container">
                <div className="head-section-div">
                    <div className="head-div">
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">{service.title}</h3>
                        </div>
                        <h1 className="main-title">We Provide <span className="color">{service.title}</span> Services</h1>
                    </div>
                    <p>{service.description}</p>
                </div>
                <div className="service-details-container">
                    <div className="service-left">
                        <div className="service-item active">On-Site Testing and Commissioning</div>
                        <div className="service-item">Lighting Planning and Drive Technology</div>
                        <div className="service-item">Electrical Heating and/or Trace Heating</div>
                        <div className="service-item">Development of Electrical Schematics</div>
                        <div className="service-item">Grounding</div>
                        <div className="service-item">Lightning Protection</div>
                    </div>

                    <div className="service-right">
                        <div className="img-div">
                        <img src={service.image} alt="" />
                        </div>

                        <div className="details">
                            <div className="info-div">
                                <div className="info">
                                    <p><strong>Duration:</strong> 1 DAY</p>
                                    <p><strong>Price:</strong> $12 PER HOUR</p>
                                </div>
                                <a href="#contact-form"><button className="btn">Get Service</button></a>
                            </div>

                            <p className="description">
                            For construction projects of all sorts to be safe and effective, finding a trustworthy scaffolding contractor in the UAE is crucial. Our business specializes in offering complete scaffolding solutions that are customized to meet your unique demands all around the United Arab Emirates. We provide a broad range of services, such as scaffolding rentals, installation, and dismantling for different applications, as one of the leading scaffolding contractors in the United Arab Emirates.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}