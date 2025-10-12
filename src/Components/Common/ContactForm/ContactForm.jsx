import "./ContactForm.scss"
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { FlipLinkBtn } from "../../../Designs/FlipLink";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });
    
    const handleUpdate = (field) => (event) => {
        const inputValue = event.target.value;
        setFormData((prev) => ({ ...prev, [field]: inputValue }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your submission logic here (e.g. send to API)
    };

    const textVariants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3
            }
        },
    }

    const textVariants1 = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3
            }
        },
    }

    const childVariants = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const childVariants1 = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <section id="contact-form">
            <div className="contact-form section-container">
                <div className="contact-info">
                    <motion.div className="head-div" variants={textVariants} initial="initial" whileInView="animate">
                        <motion.div className="head-top" variants={textVariants} initial="initial" whileInView="animate">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">Contact us</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Do You any<span className="color"> Questions?</span></motion.h1>
                        <motion.p variants={textVariants1} initial="initial" whileInView="animate">IMEDIA is a leading provider of OOH and digital advertising solutions across UAE & KSA. We are committed to delivering exceptional results that maximize brand visibility and drive engagement.</motion.p>
                    </motion.div>
                    <motion.form
                        component="form"
                        onSubmit={handleSubmit}
                        className="contact-form"
                        variants={textVariants1}
                        initial="initial"
                        whileInView="animate"
                        >
                        <motion.div className="sameline" variants={childVariants1}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                value={formData.firstName}
                                onChange={handleUpdate('firstName')}
                                fullWidth
                                className="form-field"
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                value={formData.lastName}
                                onChange={handleUpdate('lastName')}
                                fullWidth
                                className="form-field"
                            />
                        </motion.div>
                        <motion.div className="sameline" variants={childVariants1}>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                value={formData.phone}
                                onChange={handleUpdate('phone')}
                                fullWidth
                                className="form-field"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+971</InputAdornment>,
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleUpdate('email')}
                                fullWidth
                                className="form-field"
                            />
                        </motion.div>
                        <motion.div variants={childVariants1} style={{ width: '100%' }}>
                            <TextField
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleUpdate('message')}
                                fullWidth
                                className="form-field"
                            />
                        </motion.div>
                        <motion.div
                            type="submit"
                            className="btn btn-primary"
                            variants={childVariants1}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <FlipLinkBtn isHovered={isHovered}>Submit</FlipLinkBtn>
                        </motion.div>
                    </motion.form>
                </div>
                <motion.div className="contact-form-div" variants={textVariants1} initial="initial" whileInView="animate">
                    <motion.h1 className="head" variants={childVariants1}>
                        Are You Going to Implement Project?
                    </motion.h1>
                    <motion.div className="contact-details" variants={textVariants1} initial="initial" whileInView="animate">
                        <motion.div className="contact" variants={childVariants1}>
                            <h1 className="head">Address</h1>
                            <div className="content">
                                <p>Onyx Tower 1 - Office 712</p>
                                <p>Sheikh Zaid Road</p>
                                <p>Dubai, UAE</p>
                            </div>
                        </motion.div>
                        <motion.div className="contact" variants={childVariants1}>
                            <h1 className="head">Email</h1>
                            <div className="content">
                                <a href="mailto:servicing@media247.ae"><p>servicing@media247.ae</p></a>
                            </div>
                        </motion.div>
                        <motion.div className="contact" variants={childVariants1}>
                            <h1 className="head">Phone</h1>
                            <div className="content">
                                <a href="tel:+97142833471"><p>+971 4 283 3471</p></a>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="social-links" variants={childVariants1}>
                        <a href="" alt=""><FaFacebookF /></a>
                        <a href="" alt=""><RiInstagramFill /></a>
                        <a href="" alt=""><FaYoutube /></a>
                        <a href="" alt=""><FaTwitter /></a>
                        <a href="" alt=""><FaLinkedinIn /></a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}