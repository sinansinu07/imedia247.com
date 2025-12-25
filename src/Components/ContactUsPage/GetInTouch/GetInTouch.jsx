import { MdEmail, MdAccessTime, MdPhone, MdCheckCircle, MdQuestionAnswer } from "react-icons/md"
import { FaHeadset, FaRegClock } from "react-icons/fa"
import "./GetInTouch.scss"

const quickContact = [
    {
        id: 1,
        icon: <MdPhone />,
        title: "Phone Support",
        description: "Speak directly with our team",
        action: "Call Now",
        link: "tel:+971501234567",
        details: "+971 50 123 4567"
    },
    {
        id: 2,
        icon: <MdEmail />,
        title: "Email Us",
        description: "Send us your inquiry",
        action: "Send Email",
        link: "mailto:info@imedia247.com",
        details: "info@imedia247.com"
    },
    {
        id: 3,
        icon: <FaHeadset />,
        title: "Live Chat",
        description: "Get instant assistance",
        action: "Chat Now",
        link: "#",
        details: "Available 24/7"
    }
]

const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM (GST)" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM (GST)" },
    { day: "Sunday", time: "Closed" }
]

const faqs = [
    {
        question: "How quickly will I receive a response?",
        answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly for immediate assistance."
    },
    {
        question: "Do you offer consultations for OOH advertising campaigns?",
        answer: "Yes! We offer free consultations to discuss your advertising needs, available locations, and campaign strategies tailored to your brand."
    },
    {
        question: "What areas do you cover?",
        answer: "We provide OOH and digital advertising solutions across UAE and KSA, with prime locations in Dubai, Abu Dhabi, Riyadh, and other major cities."
    },
    {
        question: "Can I view available billboard locations before booking?",
        answer: "Absolutely! Contact us to schedule a site visit or request our portfolio of available prime locations with traffic data and demographics."
    }
]

export default function GetInTouch() {
    return (
        <section>
            <div className="get-in-touch-section section-container">
                <div className="head-div">
                    <div className="head-top">
                        <hr className="head-top-hr"/>
                        <h3 className="top-title">Get In Touch</h3>
                    </div>
                    <h1 className="main-title">How Can We <span className="color">Help You?</span></h1>
                    <p>Choose the most convenient way to reach us. Our team is ready to assist you with your OOH advertising needs.</p>
                </div>

                <div className="quick-contact-grid">
                    {quickContact.map((item) => (
                        <div key={item.id} className="contact-card">
                            <div className="icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <p className="card-details">{item.details}</p>
                            <a href={item.link} className="contact-btn">
                                {item.action}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="info-container">
                    <div className="office-hours-card">
                        <div className="card-header">
                            <FaRegClock />
                            <h2>Office Hours</h2>
                        </div>
                        <div className="hours-list">
                            {officeHours.map((schedule, index) => (
                                <div key={index} className="hours-item">
                                    <span className="day">{schedule.day}</span>
                                    <span className="time">{schedule.time}</span>
                                </div>
                            ))}
                        </div>
                        <div className="timezone-note">
                            <MdAccessTime />
                            <p>All times are in Gulf Standard Time (GST)</p>
                        </div>
                    </div>

                    <div className="faq-card">
                        <div className="card-header">
                            <MdQuestionAnswer />
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h4 className="faq-question">
                                        <MdCheckCircle />
                                        {faq.question}
                                    </h4>
                                    <p className="faq-answer">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
