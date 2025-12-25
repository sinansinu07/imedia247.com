import "./Team.scss"

import { FaFacebookF, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"

import image from "../../../Assets/Common/dummy-profile.jpg"

const team = [
    {
        id: 1,
        name: "John Doe",
        position: "Frontend Developer",
        description: "John is a passionate developer who loves turning complex ideas into sleek, responsive interfaces. With a strong eye for detail and a love for clean code, he ensures every pixel is perfectly placed.",
        image: image,
        socialMedia: [
            {
                id: 1,
                type: "Facebook",
                link: "/"
            },
            {
                id: 2,
                type: "Instgram",
                link: "/"
            },
            {
                id: 3,
                type: "Twitter",
                link: "/"
            },
            {
                id: 4,
                type: "Whatsapp",
                link: "/"
            },
        ]
    },
    {
        id: 2,
        name: "Name 2",
        position: "position 2",
        description: "",
        image: image,
        socialMedia: [
            {
                id: 1,
                type: "Facebook",
                link: "/"
            },
            {
                id: 2,
                type: "Instgram",
                link: "/"
            },
            {
                id: 3,
                type: "Twitter",
                link: "/"
            },
            {
                id: 4,
                type: "Whatsapp",
                link: "/"
            },
        ]
    },
    {
        id: 3,
        name: "Name 3",
        position: "position 3",
        description: "",
        image: image,
        socialMedia: [
            {
                id: 1,
                type: "Facebook",
                link: "/"
            },
            {
                id: 2,
                type: "Instgram",
                link: "/"
            },
            {
                id: 3,
                type: "Twitter",
                link: "/"
            },
            {
                id: 4,
                type: "Whatsapp",
                link: "/"
            },
        ]
    },
]


export default function Team() {
    return (
        <section>
            <div className="team section-container">
                <div className="head-div">
                    <div className="head-top">
                        <hr className="head-top-hr"/>
                        <h3 className="top-title">Better than others</h3>
                    </div>
                    <h1 className="main-title">Our <span className="color">Team</span></h1>
                </div>
                <div className="team-grid-container">
                    {team.map((ele) => {
                        return (
                            <div className="team-card">
                                <div className="img-div">
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className="details">
                                    <h1 className="name">{ele.name}</h1>
                                    <h2 className="position">{ele.position}</h2>
                                    <p className="description">{ele.description}</p>
                                    <div className="social-links">
                                        <a href={ele.socialMedia[0]}><FaFacebookF /></a>
                                        <a href={ele.socialMedia[1]}><RiInstagramFill /></a>
                                        <a href={ele.socialMedia[2]}><FaXTwitter /></a>
                                        <a href={ele.socialMedia[3]}><FaWhatsapp /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}