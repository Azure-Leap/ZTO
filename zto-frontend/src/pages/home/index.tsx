import NavAppBar from "@/comp/Testnav";
import ProductHero from "@/pages/home/views/ProductHero";
import CustomCursor from "@/form/cursor";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <NavAppBar />
        <ProductHero />
        <CustomCursor />
      </main>
    </>
  );
}
