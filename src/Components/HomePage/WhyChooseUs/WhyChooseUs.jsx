import "./WhyChooseUs.scss"
import { motion } from "framer-motion"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    {
        id: 1,
        title: "Years of Expertise",
        numbers: 20
    },
    {
        id: 2,
        title: "Prime Locations",
        numbers: 500
    },
    {
        id: 3,
        title: "Successful Campaigns",
        numbers: 10000
    },
    {
        id: 4,
        title: "Brands Served",
        numbers: 2000
    },
]

const items = [
    {
        id: 1,
        title: "VISION",
        description: "We aim to be at the forefront of the OOH advertising industry by embracing digital transformation. Our vision includes expanding our footprint across the UAE & KSA, forging strategic partnerships, and staying ahead of market trends."
    },
    {
        id: 2,
        title: "MISSION",
        description: "To elevate our clients' brand presence by offering innovative OOH and digital advertising solutions. We strive to create impactful campaigns that not only resonate with audiences but also help businesses achieve outstanding results."
    }
]

export default function WhyChooseUs() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

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
        <section>
            <div className="why-choose-us section-container">
                <div className="head-div">
                    <div className="left">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">Leading OOH & Digital Advertising</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Why Choose <span className="color">IMedia</span></motion.h1>
                    </div>
                    <motion.div variants={textVariants1} initial="initial" whileInView="animate" className="right">
                        IMedia leads the OOH and digital advertising industry across UAE & KSA, providing brands with maximum visibility through exclusive prime locations and 20+ years of expertise.
                    </motion.div>
                </div>
                <div className="content-div">
                    <div ref={ref} className="stats-container">
                        {stats.map((stat) => {
                            return (
                                <div className="stats" key={stat.id}>
                                    <h1 className="stat-number">
                                        {/* {stat.numbers} */}
                                        {inView && <CountUp end={stat.numbers} duration={3} />}+
                                        </h1>
                                    <h2 className="stat-title">{stat.title}</h2>
                                </div>
                            )
                        })}
                    </div>
                    <div className="item-container">
                        {items.map((item) => {
                            return (
                                <div className="item">
                                    <div className="si-no">
                                        0{item.id}
                                    </div>
                                    <div className="details">
                                        <h1 className="title">{item.title}</h1>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}