import React from "react";
import Navbar from "../../components/PublicComponents/Navbar.jsx";
import HeroSection from "../../components/PublicComponents/HeroSection.jsx";
import SleekSlider from "../../components/PublicComponents/SleekSlider.jsx";
import Testimonials from "../../components/PublicComponents/Testimonials.jsx";
import GetCrm from "../../components/PublicComponents/GetCrm.jsx";
import WhatDo from "../../components/PublicComponents/WhatDo.jsx";
import Advantages from "../../components/PublicComponents/Advantages.jsx";
import TalkToExpert from "../../components/PublicComponents/TalkToExpert.jsx";
import Footer from "../../components/PublicComponents/Footer.jsx";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <SleekSlider />
            <Testimonials />
            <GetCrm />
            <WhatDo />
            <Advantages />
            <TalkToExpert />
            <Footer />
        </div>
    );
}
