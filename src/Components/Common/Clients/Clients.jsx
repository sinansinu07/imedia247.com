import "./Clients.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from 'framer-motion';

import client1 from "../../../Assets/Clients/client1.png"
import client2 from "../../../Assets/Clients/client2.png"
import client3 from "../../../Assets/Clients/client3.png"
import client4 from "../../../Assets/Clients/client4.png"
import client5 from "../../../Assets/Clients/client5.png"
import client6 from "../../../Assets/Clients/client6.png"
import client7 from "../../../Assets/Clients/client7.png"
import client8 from "../../../Assets/Clients/client8.png"


const testimonials = [
    {
        id: 1,
        image: client1,
    },
    {
        id: 2,
        image: client2,
    },
    {
        id: 3,
        image: client3,
    },
    {
        id: 4,
        image: client4,
    },
    {
        id: 5,
        image: client5,
    },
    {
        id: 6,
        image: client6,
    },
    {
        id: 7,
        image: client7,
    },
    {
        id: 8,
        image: client8,
    },
]

// Animation variants
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

export default function Clients() {
    return (
        <section>
            <div className="clients-section section-container">
                <motion.div className="head-div" variants={textVariants} initial="initial" whileInView="animate">
                    <div>
                        <motion.div className="head-top" variants={childVariants}>
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">Where We Work</h3>
                        </motion.div>
                        <motion.h1 variants={childVariants1} className="main-title">Our <span className="color">Clients</span></motion.h1>
                    </div>
                    <motion.p variants={childVariants1}>We make scaffolding easy - with a clear process that gets your project off the ground without delay.</motion.p>
                </motion.div>
                <div className="clients-container">
                    <Splide
                        options={{
                            perPage: 5,
                            perMove: 1,
                            gap: "20px",
                            autoplay: true,
                            speed: 1000,
                            rewind: true,
                            rewindByDrag: true,
                        }}
                    >
                        {testimonials.map((item) => (
                            <SplideSlide key={item.id}>
                                <div className="img-div">
                                    <img src={item.image} alt="" />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}