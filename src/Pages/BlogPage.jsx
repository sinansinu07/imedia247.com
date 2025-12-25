import { Fragment } from "react";
import CommonHero from "../Components/Common/CommonHero/CommonHero";
import Blogs from "../Components/BlogPage/Blogs/Blogs";

export default function BlogPage() {
    return (
        <Fragment>
            <CommonHero
                title1 = "Blog"
                title2white = "Latest"
                title2red = "Blogs"
            />
            <Blogs/>
        </Fragment>
    )
}