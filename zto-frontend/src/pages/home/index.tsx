import NavAppBar from "../../components/Navbar";
import ProductHero from "@/pages/home/views/ProductHero";

import TemplateList from "@/components/templateCard";
import WebSteppers from "@/components/process";
import { Container } from "@mui/material";
import SecondSection from "@/components/secondSection";
import About from "@/components/About";
import Footer from "../../components/Footer/index"

export default function Home() {
  return (
    <>
      <main className="bg-white">
        {/* <NavAppBar /> */}
        <ProductHero />
        {/* <CustomCursor /> */}
        <SecondSection />
        <TemplateList />
        <About/>
        <WebSteppers />
        <Footer/>
      </main>
    </>
  );
}
