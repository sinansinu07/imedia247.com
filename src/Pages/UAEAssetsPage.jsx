import { Fragment, useState } from "react";
import CaseStudies from "../Components/CaseStudyPage/CaseStudies/CaseStudies";
import CommonHero from "../Components/Common/CommonHero/CommonHero";
import "./UAEAssetsPage.scss";

export default function UAEAssetsPage() {
    const [activeTab, setActiveTab] = useState("Digital OOH");

    return (
        <Fragment>
            <CommonHero title1="IMedia" title2white="Advertising" title2red="UAE Assets" />
            <div className="uae-assets-tabs">
                <div className="tabs-container">
                    <button 
                        className={`tab ${activeTab === "Digital OOH" ? "active" : ""}`}
                        onClick={() => setActiveTab("Digital OOH")}
                    >
                        Digital OOH
                    </button>
                    <button 
                        className={`tab ${activeTab === "Static OOH" ? "active" : ""}`}
                        onClick={() => setActiveTab("Static OOH")}
                    >
                        Static OOH
                    </button>
                </div>
            </div>
            <CaseStudies country="UAE" oohType={activeTab} showOohTabs={false} />
        </Fragment>
    )
}

