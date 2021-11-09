import React from "react";

import AppAbout from "../components/home/about";
import AppHero from "../components/home/hero";
import AppFeature from "../components/home/feature";
import AppWorks from "../components/home/works";
import AppFaq from "../components/home/faq";
import AppPricing from "../components/home/pricing";
import AppContact from "../components/home/contact";

function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    )
}
export default AppHome;