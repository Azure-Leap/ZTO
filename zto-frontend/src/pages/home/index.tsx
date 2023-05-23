import NavAppBar from "../../components/Navbar";
import ProductHero from "@/pages/home/views/ProductHero";
import Chatbot from "../../components/Chatbot"
import TemplateList from "@/components/templateCard";
import WebSteppers from "@/components/process";
import SecondSection from "@/components/secondSection";
import About from "@/components/About";
import Footer from "../../components/Footer/index";
import TemplateCart from "@/components/TemplateCart/TemplateCart";
import {Box} from "@mui/material";

export default function Home() {
  return (
    <>
      <main className="bg-white, absolute">
        <Box>
        <ProductHero />
        </Box>
   
        {/* <CustomCursor /> */}
        <Box>  <SecondSection /></Box>
      
        {/* <TemplateList /> */}
        <TemplateCart/>
        <About />
        <Chatbot/>
        <WebSteppers />
        <Footer />
  
      
      </main>
    </>
  );
}
