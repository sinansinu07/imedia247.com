import { Fragment } from "react";
import CommonHero from "../Components/Common/CommonHero/CommonHero";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import GetInTouch from "../Components/ContactUsPage/GetInTouch/GetInTouch";

export default function ContactUspage() {
    return (
        <Fragment>
            <CommonHero
                title1="Contact Us"
                title2white="Get In"
                title2red="Touch"
            />
            <GetInTouch/>
            <ContactForm/>
        </Fragment>
    )
}