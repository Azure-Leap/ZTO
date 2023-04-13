import NavAppBar from "@/comp/Testnav";
import ProductHero from "../../ehlel/modules/views/ProductHero";
import CustomCursor from "../../ehlel/modules/form/cursor";

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
