import { Fragment } from "react";
import CaseStudies from "../Components/CaseStudyPage/CaseStudies/CaseStudies";
import CommonHero from "../Components/Common/CommonHero/CommonHero";

export default function KSAAssetsPage() {
    return (
        <Fragment>
            <CommonHero title1="IMedia" title2white="Advertising" title2red="KSA Assets" />
            <CaseStudies country="KSA" oohType={null} showOohTabs={false} />
        </Fragment>
    )
}

