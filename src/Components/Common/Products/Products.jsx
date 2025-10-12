import React, { useState } from 'react';
import './Products.scss'; // We'll create this SCSS file next
import { LuMoveRight } from 'react-icons/lu'; // Assuming you're using react-icons
import { products } from '../../../DataSets/products';
import { motion } from 'framer-motion';
import { FlipLinkBtn } from '../../../Designs/FlipLink';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(products.length > 0 ? products[0].id : null);
  const [isHovered, setIsHovered] = useState(false);

  // If no services are provided, you might want to render nothing or a placeholder
  if (!products || products.length === 0) {
    return null; // Or <p>No services available</p>
  }

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
        <section className="products-section-container section-container">
            <div className="head-section-div">
                <div className="head-div">
                    <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                        <motion.hr variants={childVariants} className="head-top-hr"/>
                        <motion.h3 variants={childVariants} className="top-title">What we provide</motion.h3>
                    </motion.div>
                    <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Premium <span className="color">Scaffolding<br/> Solutions</span> for Every Project</motion.h1>
                </div>
                <motion.p variants={textVariants1} initial="initial" whileInView="animate">We are your best choice for innovative digital strategies. We provide a wide range of services to meet your business needs.
                    {/* Whether you're undertaking a small renovation or a large-scale construction, our products are designed to support your success. */}
                    </motion.p>
            </div>

            <div className="products-grid">
                {products.map((service, index) => (
                <div
                    key={service.id}
                    className={`products-card ${activeService === service.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(service.id)}
                    style={activeService == service.id ? { backgroundImage: `url(${service.image})` } : {}}
                    // onMouseLeave={() => setActiveService(services[0].id)} // Optional: reset to first on mouse leave
                >
                    <div className="products-card-static">
                        <span className="products-number">{String(index + 1).padStart(2, '0')}</span>
                        <h2 className="products-card-title-static">{service.name?.toUpperCase()}</h2>
                    </div>
                    <div className="overlay"></div>
                    <div className="products-card-hover-content">
                        <span className="products-number-hover">{String(index + 1).padStart(2, '0')}</span>
                        <h2 className="products-card-title-hover">{service.name?.toUpperCase()}</h2>
                        <p className="products-description">{service.description}</p>
                        <a href={`/products/${service.slug}`}>
                        <div 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="btn">
                            <FlipLinkBtn isHovered={isHovered}>READ MORE</FlipLinkBtn>
                        </div>    
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;