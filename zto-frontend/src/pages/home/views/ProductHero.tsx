import ProductHeroLayout from "./ProductHeroLayout";
import HeroSectionDark from "@/components/Hero/HeroSectionDark";
import HeroSectionWhite from "@/components/Hero/HeroSectionWhite";
export default function ProductHero() {
  if (typeof window !== "undefined") {
    const left: HTMLElement | null = document.getElementById("left-side");

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (left) {
        left.style.width = `${
          ((e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) /
            window.innerWidth) *
          100
        }%`;
      }
    };
    document.onmousemove = handleMove;
    document.ontouchmove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e);
    };
  }
  return (
    <ProductHeroLayout sxBackground={{}}>
      <HeroSectionDark />
      <HeroSectionWhite />
    </ProductHeroLayout>
  );
}
