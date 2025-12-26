import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./CaseStudies.scss"

import { TbArrowBigRight } from "react-icons/tb";
import { caseStudies } from "../../../Datasets/caseStudies";
import { FlipLinkBtn } from "../../../Designs/FlipLink";

// Case Study Card Component
function CaseStudyCard({ caseStudy }) {
    const navigate = useNavigate();
    const [isReadMoreHovered, setIsReadMoreHovered] = useState(false);

    const handleCardClick = () => {
        navigate(`/case-study/${caseStudy.slug}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="caseStudies-card"
        >
            <div className="left-div">
                <img src={caseStudy.image1} alt="case study" />
            </div>
            <div className="right-div">
                <div className="same-line">
                    <div className="left-info">
                        <h3 className="service-category">{caseStudy.category}</h3>
                        <p className="location">{caseStudy.location}, {caseStudy.country}</p>
                    </div>
                    { caseStudy.companyLogo && <div className="logo-div">
                        <img
                            className="company-logo"
                            src={caseStudy.companyLogo}
                            alt={caseStudy.companyName}
                        />
                    </div>}
                </div>
                <h1 className="caseStudy-title">{caseStudy.title}</h1>
                <ul className="key-points">
                    {caseStudy.keyPoints.map((point, index) => {
                        return (
                            <li className="points" key={index}>
                                <TbArrowBigRight className="icon"/>
                                <h1 className="point-title">{point}</h1>
                            </li>
                        )
                    })}
                </ul>
                <div 
                    className="btn btn-primary read-more-btn"
                    onMouseEnter={() => setIsReadMoreHovered(true)}
                    onMouseLeave={() => setIsReadMoreHovered(false)}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick();
                    }}
                >
                    <FlipLinkBtn isHovered={isReadMoreHovered}>Read More</FlipLinkBtn>
                </div>
            </div>
        </div>
    );
}

export default function CaseStudies({ country = null, oohType = null, showOohTabs = false }) {
    // Filter case studies by country and OOH type - memoized to track changes
    const filteredStudies = useMemo(() => {
        let filtered = caseStudies;
        
        if (country) {
            filtered = filtered.filter(study => study.country === country);
        }
        
        if (oohType) {
            if (oohType === "Digital OOH") {
                filtered = filtered.filter(study => study.category === "DOOH");
            } else if (oohType === "Static OOH") {
                filtered = filtered.filter(study => study.category !== "DOOH");
            }
        }
        
        return filtered;
    }, [country, oohType])

    const [activeCategory, setActiveCategory] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    // Memoize categories to track changes properly
    const categories = useMemo(() => {
        const cats = []
        filteredStudies.forEach((ele) => {
            if (!cats.includes(ele.category)) {
                cats.push(ele.category)
            }
        })
        return cats
    }, [filteredStudies])
    
    // Set first category as active by default when categories change
    useEffect(() => {
        if (categories.length > 0) {
            // If activeCategory is null or the current activeCategory doesn't exist in new categories, set to first
            if (activeCategory === null || !categories.includes(activeCategory)) {
                setActiveCategory(categories[0]);
            }
        } else {
            setActiveCategory(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    return (
        <section className="caseStudies-section section-container">
            <div className="head-div">
                <div className="head-top">
                    <hr className="head-top-hr"/>
                    <h3 className="top-title">Our Portfolio</h3>
                </div>
                <h1 className="main-title">Digital and <span className="color">OOH Assets</span></h1>
            </div>

            <div className="category-filter-div">
                {
                    categories.map((category) => {
                        return (
                            <h3 
                                key={category} 
                                onClick={() => setActiveCategory(category)} 
                                onMouseEnter={() => setHoveredCategory(category)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                className={`category-name ${activeCategory === category ? "active" : ""} `}>
                                    <FlipLinkBtn isHovered={hoveredCategory === category}>{category}</FlipLinkBtn>
                                </h3>
                        )
                    })
                }
            </div>

            <div className="caseStudies-grid">
                {filteredStudies.length > 0 ? (
                    filteredStudies
                        .filter((caseStudy) => !activeCategory || caseStudy.category === activeCategory)
                        .map((caseStudy) => (
                            <CaseStudyCard
                                key={caseStudy.id}
                                caseStudy={caseStudy}
                            />
                        ))
                ) : (
                    <div className="no-results">
                        <p>No case studies found for the selected filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}