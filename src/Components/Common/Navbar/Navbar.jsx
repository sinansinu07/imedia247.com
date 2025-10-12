import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

import logowhite from "../../../Assets/Logo/imedia-logo.png"
import logoblack from "../../../Assets/Logo/imedia-logo.png"

import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

import { IoIosArrowDown } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { products } from '../../../DataSets/products'
import { services } from '../../../DataSets/services'
import { FlipLinkBtn } from '../../../Designs/FlipLink'

export default function Navbar(){
    const location = useLocation()
    const [isAboutUsDropDownOpen, setIsAboutUsDropDownOpen] = useState(false)
    const [isServicesDropDownOpen, setIsServicesDropDownOpen] = useState(false)
    const [isProductsDropDownOpen, setIsProductsDropDownOpen] = useState(false)
    const [ isSticky, setIsSticky ] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
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

    return (
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo-div">
            <a href="/"><img src={!isSticky ? logoblack : logowhite} alt="Logo" className="logo"/></a>
        </div>
        <div className="nav-links-div">
            <ul className={`menu-bar${mobileMenu ? "" : "hide-mobile-menu"}`}>
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
                    onMouseEnter={() => {setIsServicesDropDownOpen(true)}}
                    onMouseLeave={() => {setIsServicesDropDownOpen(false)}}
                    ><a href="/" className={location.pathname==="/services" ? "" : ""}>Services</a><IoIosArrowDown />
                    <AnimatePresence>
                        {isServicesDropDownOpen && (
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="dropdown services">
                                <ul>
                                    {services.map((ele) => {
                                        return (
                                            <li><a href={`/`} className={location.pathname === ele.slug ? "active" : ""}>{ele.title}</a></li>
                                        )
                                    })}
                                </ul>
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
            <hr className='menu-hr'/>
            <BiLogIn className='login-icon'/>
            <a href="/">
                <div 
                    className="btn btn-primary"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <FlipLinkBtn isHovered={isHovered}>Contact Us</FlipLinkBtn>
                </div>
            </a>
        </div>
        {/* <div className="button-div"> */}
            
        {/* </div> */}
        </div>
    )
}