import { Fragment } from "react";
import CommonHero from "../Components/Common/CommonHero/CommonHero";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs/WhyChooseUs";
import Process from "../Components/Common/Process/Process";
import WhoAreWe from "../Components/AboutUsPage/WhoAreWe/WhoAreWe";
import Team from "../Components/AboutUsPage/Team/Team";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
import Clients from "../Components/Common/Clients/Clients";
import Certificates from "../Components/Common/Certificates/Certificates";
import ContactForm from "../Components/Common/ContactForm/ContactForm";

export default function AboutUsPage() {
    return (
        <Fragment>
            <CommonHero
                title1="About Us"
                title2white="Who"
                title2red="Are We"
            />
            <WhoAreWe/>
            {/* <Team/> */}
            {/* <Process/> */}
            <WhyChooseUs/>
            {/* <Testimonials/> */}
            <Clients/>
            <ContactForm/>
            {/* <Certificates/> */}
        </Fragment>
    )
}