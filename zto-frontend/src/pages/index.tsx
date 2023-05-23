import NavAppBar from "@/components/Navbar";
import ProductHero from "@/pages/home/views/ProductHero";
import Chatbot from "@/components/Chatbot";
import TemplateList from "@/components/templateCard";
import WebSteppers from "@/components/process";
import SecondSection from "@/components/secondSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import TemplateCart from "@/components/TemplateCart/TemplateCart";

export default function Home() {
  return (
    <>
    <Layout>
      <main className="bg-white, absolute">
        <ProductHero />
        {/* <CustomCursor /> */}
        <SecondSection />
      <TemplateCart/>
        {/* <TemplateList /> */}
        <About />
        <Chatbot />
        <WebSteppers />
        <Footer />
      </main>
      </Layout>
    </>
  );
}
