import { Fragment } from "react";
// import Helmet from "../Components/Common/Helmet/Helmet"
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Projects from "../Components/HomePage/Projects/Projects";
import AboutCompany from "../Components/HomePage/AboutCompany/AboutCompany";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs/WhyChooseUs";
// import HomeGallery from "../Components/HomePage/HomeGallery/HomeGallery";
import Process from "../Components/Common/Process/Process";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
// import ContactUs from "../Components/HomePage/ContactUs/ContactUs";
import Services from "../Components/Common/Services/Services";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import Clients from "../Components/Common/Clients/Clients";

export default function HomePage() {
    return (
        <Fragment>
            {/* <Helmet title="Home"> */}
                <HomeHero/>
                <AboutCompany/>
                <Services/>
                <Projects/>
                <WhyChooseUs/>
                <Testimonials/>
                {/* <HomeGallery/> */}
                <Process/>
                <ContactForm/>
                <Clients/>
            {/* </Helmet> */}
        </Fragment>
    )
}