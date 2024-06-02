import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section />
            <ContactUs />
            <Pricing />
            <Footer />
        </>
    );
}
