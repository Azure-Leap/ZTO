import NavAppBar from "../../components/Navbar";
import ProductHero from "@/pages/home/views/ProductHero";
import CustomCursor from "@/form/cursor";
import TemplateList from "@/components/templateCard";
import WebSteppers from "@/components/process";
import { Container } from "@mui/material";
import SecondSection from "@/components/secondSection";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <NavAppBar />
        <ProductHero />
        {/* <CustomCursor /> */}
          <SecondSection/>
          <TemplateList />
       
          <WebSteppers />
      
      </main>
    </>
  );
}
