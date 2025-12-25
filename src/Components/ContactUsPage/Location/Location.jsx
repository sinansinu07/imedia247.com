import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md"
import "./Location.scss"
import { useState } from "react"

const locations = [
    {
        id: 1,
        name: "Head Office",
        county: "United Arab Emirates",
        addressLine1: "PO Box 123996, Office No. 307",
        addressLine2: "Liberty Building, Dubai",
        addressLine3: "United Arab Emirates",
        phone: ["+971 4 263 7784", "+971 56 544 5987", "+971 50 545 2385"],
        email: ["enquiries@quaddream.com", "info@quaddream.com"],
        location: "https://maps.app.goo.gl/omA4QLA1ywkFmgwp6",
        embeddedLoc : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462409.02148770774!2d55.39037400000001!3d25.116397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6dca9879d9%3A0x6ff60f5cae0a1791!2sRabbit%20And%20Carrot%20LLC!5e0!3m2!1sen!2sus!4v1736317272343!5m2!1sen!2sus"
    },
    {
        id: 2,
        name: "Yard",
        county: "United Arab Emirates",
        addressLine1: "Al Quoz Industrial Area – 2",
        addressLine2: "Bartawi  Dubai,",
        addressLine3: "United Arab Emirates",
        phone: ["+971 56 544 5987", "+971 50 545 2385"],
        email: ["sales@quaddream.com"],
        location: "https://maps.app.goo.gl/8KSHUt84QzvGpod8A",
        embeddedLoc : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0887325176745!2d67.11196097570411!3d24.929046942509206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338c0c7c37625%3A0xdbaf41f85d3d9bb3!2sRabbit%20And%20Carrot!5e0!3m2!1sen!2sae!4v1736318871313!5m2!1sen!2sae"
    },
    {
        id: 3,
        name: "UAE Branch",
        county: "United Arab Emirates",
        addressLine1: "Quaddream Branch office",
        addressLine2: "Abu dhabi",
        addressLine3: "United Arab Emirates",
        phone: ["+971 503 525 314"],
        email: ["sales@quaddream.com"],
        location: "https://maps.app.goo.gl/8KSHUt84QzvGpod8A",
        embeddedLoc : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0887325176745!2d67.11196097570411!3d24.929046942509206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338c0c7c37625%3A0xdbaf41f85d3d9bb3!2sRabbit%20And%20Carrot!5e0!3m2!1sen!2sae!4v1736318871313!5m2!1sen!2sae"
    },
    {
        id: 4,
        name: "Canada",
        county: "Canada",
        addressLine1: "Bradford , Ontario",
        addressLine2: "Canada",
        addressLine3: "",
        phone: ["+416 970 1617"],
        email: ["sales@quaddream.com"],
        location: "https://maps.app.goo.gl/8KSHUt84QzvGpod8A",
        embeddedLoc : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0887325176745!2d67.11196097570411!3d24.929046942509206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338c0c7c37625%3A0xdbaf41f85d3d9bb3!2sRabbit%20And%20Carrot!5e0!3m2!1sen!2sae!4v1736318871313!5m2!1sen!2sae"
    },
]

export default function Location() {
    const [selectedAddress, setSelectedAddress] = useState(locations[0])
    return (
        <section>
            <div className="location-section section-container">
                <div className="head-div">
                    <div className="head-top">
                        <hr className="head-top-hr"/>
                        <h3 className="top-title">Location</h3>
                    </div>
                    <h1 className="main-title">Our <span className="color">Location</span></h1>
                </div>
                <div className="location-container">
                    <div className="left">
                        {locations.map((ele) => {
                            return (
                            <div key={ele.id} className={`location-card ${selectedAddress.id === ele.id ? "" : ""}`} onClick={() => {setSelectedAddress(locations.find(location => location.id === ele.id))}}>
                                <h2>{ele.name}</h2>
                                <div className="location-details">
                                    <div className="place">
                                        <MdLocationPin />
                                        <div className="details">
                                            <p>{ele.addressLine1}</p>
                                            <p>{ele.addressLine2}</p>
                                            <p>{ele.addressLine3}</p>
                                        </div>
                                    </div>
                                    <div className="phone-col">
                                            {ele.phone.map((ele) => {
                                               return (
                                                    <a className="phone" href={`tel:${ele}`}>
                                                        <MdPhone /> <p>{ele}</p>
                                                    </a>
                                                )
                                            })}
                                    </div>
                                    <div className="email-col">
                                        {ele.email.map((ele) => {
                                            return (
                                                <a className="email" href={`mailto:${ele}`}>
                                                    <MdEmail />
                                                    <p>{ele}</p>
                                                </a>
                                            )
                                                
                                        })}
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="right">
                        <iframe
                            src={selectedAddress.embeddedLoc}
                            // width="100%"
                            // height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}