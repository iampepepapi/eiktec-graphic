import ContactUs from "@/components/ContactUs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Section from "@/components/section";
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
