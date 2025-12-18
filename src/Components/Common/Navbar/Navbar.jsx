import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

import logowhite from "../../../Assets/Logo/imedia-logo.png"
import logoblack from "../../../Assets/Logo/imedia-logo.png"

import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

import { IoIosArrowDown } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { services } from '../../../Datasets/services'
import { FlipLinkBtn } from '../../../Designs/FlipLink'
import HamburgerButton from '../../../Designs/HamburgerButton/HamburgerButton'

export default function Navbar(){
    const location = useLocation()
    // const [isAboutUsDropDownOpen, setIsAboutUsDropDownOpen] = useState(false)
    const [isServicesDropDownOpen, setIsServicesDropDownOpen] = useState(false)
    // const [isProductsDropDownOpen, setIsProductsDropDownOpen] = useState(false)
    const [ isSticky, setIsSticky ] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const toggleServicesDropdown = (e) => {
        console.log('toggleServicesDropdown called');
        console.log('Current state before toggle:', isServicesDropDownOpen);
        e.preventDefault()
        e.stopPropagation()
        setIsServicesDropDownOpen(!isServicesDropDownOpen)
        console.log('State after toggle should be:', !isServicesDropDownOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
        if (location.pathname.startsWith("/blogs/")) {
            setIsSticky(true); // Keep sticky if pathname matches
        } else {
            window.scrollY > 100 ? setIsSticky(true) : mobileMenu ? setIsSticky(true) : setIsSticky(false); // Update based on scroll position otherwise
        }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Run once on mount to set initial sticky state
        handleScroll();

        // Cleanup the event listener on unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, mobileMenu]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isServicesDropDownOpen && !event.target.closest('li.dropdown-open')) {
                setIsServicesDropDownOpen(false);
            }
        };

        if (isServicesDropDownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesDropDownOpen]);

    return (
        <>
        {mobileMenu && (
            <div className={`mobile-menu-overlay ${mobileMenu ? "active" : ""}`} onClick={toggleMenu}></div>
        )}
        <div className={`navbar ${isSticky ? "sticky" : ""} ${mobileMenu ? "mobile-menu-active" : ""}`}>
            <div className="logo-div">
                <a href="/"><img src={!isSticky ? logoblack : logowhite} alt="Logo" className="logo"/></a>
            </div>
            <div className="mobile-menu-toggle">
                <HamburgerButton onClick={toggleMenu} />
            </div>
            <div className={`nav-links-div ${mobileMenu ? "menu-open" : ""}`}>
                <ul className={`menu-bar ${mobileMenu ? "mobile-menu-open" : "hide-mobile-menu"}`}>
                    <li><a href="/" className={location.pathname==="/" ? "" : ""}>Home</a></li>
                    <li 
                    // onMouseEnter={() => {setIsAboutUsDropDownOpen(true)}}
                    // onMouseLeave={() => {setIsAboutUsDropDownOpen(false)}}
                    ><a href="/about-us" className={location.pathname==="/about-u" ? "" : ""}>About Us</a>
                    {/* <IoIosArrowDown /> */}
                        {/* <AnimatePresence>
                            {isAboutUsDropDownOpen && (
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="dropdown">
                                    <ul>
                                        <li><a href="/" className={location.pathname==="/" ? "" : ""}>Certificates</a></li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence> */}
                    </li>
                <li 
                    className={isServicesDropDownOpen ? "dropdown-open" : ""}
                    onClick={(e) => {
                        // Check if click is on the dropdown toggle
                        if (e.target.closest('.dropdown-toggle') || e.target.tagName === 'svg' || e.target.closest('svg')) {
                            console.log('Click detected on dropdown toggle or icon');
                            console.log('Window width:', window.innerWidth);
                            // Only for mobile - toggle on click
                            if (window.innerWidth <= 1024) {
                                console.log('Mobile detected, toggling dropdown');
                                e.preventDefault();
                                e.stopPropagation();
                                toggleServicesDropdown(e);
                            } else {
                                console.log('Desktop detected, click ignored');
                            }
                        }
                    }}>
                    <a href="/" className={location.pathname==="/services" ? "" : ""}>Services</a>
                    <span 
                        className="dropdown-toggle"
                        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', zIndex: 10, position: 'relative' }}>
                        <IoIosArrowDown />
                    </span>
                    {/* Desktop dropdown - shown on hover via CSS */}
                    <div className="dropdown services desktop-dropdown">
                        <ul>
                            {services.map((ele) => {
                                return (
                                    <li key={ele.id || ele.title}><a href={`/`} className={location.pathname === ele.slug ? "active" : ""}>{ele.title}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* Mobile dropdown - shown on click with animation */}
                    <AnimatePresence>
                        {isServicesDropDownOpen && (
                            <motion.div 
                                initial={{ 
                                    height: 0, 
                                    opacity: 0,
                                    marginTop: 0
                                }}
                                animate={{ 
                                    height: "auto", 
                                    opacity: 1,
                                    marginTop: 10
                                }}
                                exit={{ 
                                    height: 0, 
                                    opacity: 0,
                                    marginTop: 0
                                }}
                                transition={{ 
                                    height: {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1]
                                    },
                                    opacity: {
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    },
                                    marginTop: {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1]
                                    }
                                }}
                                style={{ 
                                    overflow: 'hidden',
                                    willChange: 'height, opacity'
                                }}
                                className="dropdown services mobile-dropdown">
                                <motion.ul
                                    initial={{ y: -10 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: -10 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: 0.1
                                    }}>
                                    {services.map((ele) => {
                                        return (
                                            <li key={ele.id || ele.title}><a href={`/`} className={location.pathname === ele.slug ? "active" : ""}>{ele.title}</a></li>
                                        )
                                    })}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>
                    {/* <li
                        onMouseEnter={() => {setIsProductsDropDownOpen(true)}}
                        onMouseLeave={() => {setIsProductsDropDownOpen(false)}}
                        ><a href="/products" className={location.pathname==="/products" ? "" : ""}>Products </a><IoIosArrowDown />
                        <AnimatePresence>
                            {isProductsDropDownOpen && (
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="dropdown products">
                                    <ul>
                                        {products.map((ele) => {
                                            return (
                                                <li><a href={`/products/${ele.slug}`} className={location.pathname === ele.slug ? "active" : ""}>{ele.name}</a></li>
                                            )
                                        })}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li> */}
                    <li><a href="/assets" className={location.pathname==="/assets" ? "" : ""}>Assets</a></li>
                    <li><a href="/" className={location.pathname==="/blogs" ? "" : ""}>Blog</a></li>
                </ul>
            </div>
            <div className="button-div">
                <a href="/">
                    <div 
                        className="btn btn-primary"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <FlipLinkBtn isHovered={isHovered}>Contact Us</FlipLinkBtn>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}