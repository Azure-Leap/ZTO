import NavAppBar from "../../components/Navbar";
import ProductHero from "@/pages/home/views/ProductHero";
import Chatbot from "../../components/Chatbot"
import TemplateList from "@/components/templateCard";
import WebSteppers from "@/components/process";
import { Container } from "@mui/material";
import SecondSection from "@/components/secondSection";
import About from "@/components/About";
import Footer from "../../components/Footer/index";
import Lol from "@/components/TemplateCart/Lol";

export default function Home() {
  return (
    <>
      <main className="bg-white, absolute">
        <ProductHero />
        {/* <CustomCursor /> */}
        <SecondSection />
        {/* <TemplateList /> */}
        <Lol/>
        <About />
        <Chatbot/>
        <WebSteppers />
        <Footer />
      </main>
    </>
  );
}
