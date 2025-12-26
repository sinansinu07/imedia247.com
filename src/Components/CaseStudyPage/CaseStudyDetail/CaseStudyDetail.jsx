import { useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import "./CaseStudyDetail.scss";

export default function CaseStudyDetail({ caseStudy }) {
    const contentSectionRef = useRef(null);
    
    // Create gallery images (3 duplicates of image1 for now)
    const galleryImages = [caseStudy.image1, caseStudy.image1, caseStudy.image1];
    
    const scrollToContent = () => {
        contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <section className="case-study-detail-page">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <div className="hero-background">
                    <img src={caseStudy.image1} alt={caseStudy.title} />
                    <div className="hero-overlay"></div>
                </div>
                
                {/* Info Tabs at Bottom Center of Hero */}
                <div className="hero-info-tabs">
                    <div className="info-tab">
                        <span className="tab-label">Category</span>
                        <span className="tab-value">{caseStudy.category}</span>
                    </div>
                    <div className="info-tab">
                        <span className="tab-label">Industry</span>
                        <span className="tab-value">{caseStudy.industry}</span>
                    </div>
                    <div className="info-tab">
                        <span className="tab-label">Location</span>
                        <span className="tab-value">{caseStudy.location}, {caseStudy.country}</span>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="mouse">
                    <div className="wheel"></div>
                    </div>
                    <span>Scroll to explore</span>
                </motion.div>
            </div>
            
            {/* Content Section */}
            <div className="content-section" ref={contentSectionRef}>
                <div className="content-container">
                    {/* Company Info */}
                    <div className="company-info">
                        {caseStudy.companyLogo && (
                            <div className="company-logo">
                                <img src={caseStudy.companyLogo} alt={caseStudy.companyName} />
                            </div>
                        )}
                        <div className="company-details">
                            <h2 className="company-name">{caseStudy.companyName}</h2>
                            <h1 className="case-study-title">{caseStudy.title}</h1>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <div className="description-section">
                        <p className="description">{caseStudy.description}</p>
                    </div>
                    
                    {/* Key Points */}
                    {caseStudy.keyPoints && caseStudy.keyPoints.length > 0 && (
                        <div className="key-points-section">
                            <h3 className="section-title">Key Highlights</h3>
                            <ul className="key-points-list">
                                {caseStudy.keyPoints.map((point, index) => (
                                    <li key={index} className="key-point-item">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {/* Sections */}
                    {caseStudy.sections && caseStudy.sections.length > 0 && (
                        <div className="sections-container">
                            {caseStudy.sections.map((section) => (
                                <div key={section.id} className="section-item">
                                    <h3 className="section-title">{section.title}</h3>
                                    <p className="section-description">{section.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* Gallery */}
                    <div className="gallery-section">
                        <h3 className="section-title">Gallery</h3>
                        <div className="gallery-grid">
                            {galleryImages.map((image, index) => (
                                <div key={index} className="gallery-item">
                                    <img src={image} alt={`Gallery ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

