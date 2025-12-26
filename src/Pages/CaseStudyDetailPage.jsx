import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caseStudies } from "../Datasets/caseStudies";
import CaseStudyDetail from "../Components/CaseStudyPage/CaseStudyDetail/CaseStudyDetail";

export default function CaseStudyDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const caseStudy = caseStudies.find(study => study.slug === slug);
    
    if (!caseStudy) {
        return (
            <Fragment>
                <div style={{ padding: "100px 20px", textAlign: "center" }}>
                    <h1>Case Study Not Found</h1>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </Fragment>
        );
    }
    
    return (
        <Fragment>
            <CaseStudyDetail caseStudy={caseStudy} />
        </Fragment>
    );
}

