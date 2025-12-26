import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import Thankyou from "../Components/ThankYouPage/Thankyou.jsx";
import UnAuthorized from "../Components/UnAuthorized/UnAuthorixed.jsx";
import AboutUsPage from "../Pages/AboutUsPage.jsx";
import AssetsPage from "../Pages/AssetsPage.jsx";
import UAEAssetsPage from "../Pages/UAEAssetsPage.jsx";
import KSAAssetsPage from "../Pages/KSAAssetsPage.jsx";
import CaseStudyDetailPage from "../Pages/CaseStudyDetailPage.jsx";
import BlogPage from "../Pages/BlogPage.jsx";
import ContactUspage from "../Pages/ContactUspage.jsx";
import HomePage from "../Pages/HomePage.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage/>,
    isProtected: false,
  },
  {
    path: "/assets",
    element: <AssetsPage/>,
    isProtected: false,
  },
  {
    path: "/uae-assets",
    element: <UAEAssetsPage/>,
    isProtected: false,
  },
  {
    path: "/ksa-assets",
    element: <KSAAssetsPage/>,
    isProtected: false,
  },
  {
    path: "/case-study/:slug",
    element: <CaseStudyDetailPage/>,
    isProtected: false,
  },
  {
    path: "/about-us",
    element: <AboutUsPage/>,
    isProtected: false,
  },
  {
    path: "/blogs",
    element: <BlogPage/>,
    isProtected: false,
  },
  {
    path: "/contact-us",
    element: <ContactUspage/>,
    isProtected: false,
  },
  {
    path: "*",
    element: <PageNotFound/>,
    isProtected: false,
  },
  {
    path: "/thank-you",
    element: <Thankyou/>,
    isProtected: false,
  },
  {
    path: "/un-authorized",
    element: <UnAuthorized/>,
    isProtected: false,
  },
];

export default routes;




