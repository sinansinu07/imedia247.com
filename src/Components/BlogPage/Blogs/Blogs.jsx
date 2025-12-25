import "./Blogs.scss"

import { FaArrowRight } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri"
import { FaXTwitter } from "react-icons/fa6";

import project1 from "../../../Assets/Projects/project1.webp"
import project2 from "../../../Assets/Projects/project2.webp"
import project3 from "../../../Assets/Projects/project3.webp"
import project4 from "../../../Assets/Projects/project4.webp"

const blogs = [
    {
        id: 1,
        image: project1,
        category: "OOH Advertising",
        date: "January 15, 2025",
        title: "The Future of Out-of-Home Advertising in UAE & KSA",
        description: "Discover how OOH advertising is evolving in the Middle East, with innovative digital billboards and strategic placements in prime locations across Dubai and Riyadh."
    },
    {
        id: 2,
        image: project2,
        category: "Digital Billboards",
        date: "January 10, 2025",
        title: "Maximizing Brand Visibility with Prime Billboard Locations",
        description: "Learn how IMedia247 leverages exclusive prime locations in UAE and KSA to deliver maximum brand exposure and engagement for our clients."
    },
    {
        id: 3,
        image: project3,
        category: "Campaign Strategy",
        date: "January 5, 2025",
        title: "20+ Years of Excellence: IMedia247's Journey in OOH Advertising",
        description: "Explore IMedia247's two decades of expertise in the OOH and digital advertising industry, providing brands with innovative solutions and unmatched visibility."
    },
    {
        id: 4,
        image: project4,
        category: "Industry Insights",
        date: "December 28, 2024",
        title: "Why OOH Advertising Remains Essential in the Digital Age",
        description: "Understand why out-of-home advertising continues to be a powerful marketing tool, especially in high-traffic areas of Dubai and Riyadh where digital and physical converge."
    }
]

export default function Blogs() {
    return (
        <section>
            <div className="blogs-section section-container">
                <div className="blogs-grid-container">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blogs-card">
                            <div className="img-div">
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="blogs-details">
                                <div className="category-div">
                                    <h3 className="blog-category">{blog.category}</h3>
                                    <h4 className="blog-date">{blog.date}</h4>
                                </div>
                                <h1 className="blog-title">{blog.title}</h1>
                                <div className="title-description">
                                    {blog.description}
                                </div>
                                <div className="read-more">Read More<FaArrowRight /></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="blogs-filter-div">
                    <div className="search-div">
                        <div className="search-group">
                            <input type="text" className="search-input" placeholder="Search..."/>
                        </div>
                        <div className="seach-btn">
                            <IoSearchSharp />
                        </div>
                    </div>

                    <div className="category-div">
                        <h1>Categories</h1>
                        <div className="category-heads">
                            <li className="categories">
                                <FaArrowRight />
                                <h3>OOH Advertising</h3>
                            </li>
                            <li className="categories">
                                <FaArrowRight />
                                <h3>Digital Billboards</h3>
                            </li>
                            <li className="categories">
                                <FaArrowRight />
                                <h3>Campaign Strategy</h3>
                            </li>
                            <li className="categories">
                                <FaArrowRight />
                                <h3>Industry Insights</h3>
                            </li>
                            <li className="categories">
                                <FaArrowRight />
                                <h3>Brand Visibility</h3>
                            </li>
                        </div>
                    </div>

                    <div className="latest-blog-div">
                        <h1 className="latest-blog-title">Latest Blog</h1>
                        <div className="latest-blog">
                            <div className="img-div">
                                <img src={project1} alt="Latest Blog" />
                            </div>
                            <h3 className="blog-title">The Future of Out-of-Home Advertising in UAE & KSA</h3>
                            <div className="read-more">Read More<FaArrowRight /></div>
                        </div>
                        <hr className="blog-hr"/>
                        <div className="latest-blog">
                            <h3 className="blog-title">Maximizing Brand Visibility with Prime Billboard Locations</h3>
                            <div className="read-more">Read More<FaArrowRight /></div>
                        </div>
                        <hr className="blog-hr"/>
                        <div className="latest-blog">
                            <h3 className="blog-title">20+ Years of Excellence: IMedia247's Journey</h3>
                            <div className="read-more">Read More<FaArrowRight /></div>
                        </div>
                    </div>

                    <div className="newsletter-div">
                        <h1 className="head">Subscribe to Our News</h1>
                        <div className="newsletter-details">
                            <p>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                            <div className="newsletter-input">
                                <input className="input" type="text" placeholder="Enter your email address"/>
                                <div className="btn">Subscribe</div>
                            </div>
                            <p className="social-head">Follow us On :</p>
                            <div className="social-links">
                                <a href=""><FaFacebook /></a>
                                <a href=""><RiInstagramFill /></a>
                                <a href=""><FaYoutube /></a>
                                <a href=""><FaXTwitter /></a>
                                <a href=""><FaTiktok /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}