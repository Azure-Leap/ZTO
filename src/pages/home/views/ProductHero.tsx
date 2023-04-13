import React from "react";
import Button from "../../../comp/Button";
import Typography from "../../../comp/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Cardnine from "../../../comp/Card";
import Box from "@mui/material/Box";
import WhiteCard from "../../../comp/whiteCard";
export default function ProductHero() {
  if (typeof window !== "undefined") {
    console.log("window");
    // browser codegit git config push.default current
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

  // const backgroundImage =
  //   "https://images.unsplash.com/photo-1680967764054-97e008c5235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80";

  return (
    <ProductHeroLayout
      sxBackground={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      <Box
        id="left-side"
        className="side"
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1680967764054-97e008c5235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          className="htitle"
          align="center"
          variant="h2"
          marginTop={10}
          marginRight={170}
        >
          Өөрийн зүйлийг өөрөө бүтээ.
        </Typography>
        <Typography
          className="title"
          color="inherit"
          variant="h5"
          marginRight={170}
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          Хүссэн загвараа эндээс ол
        </Typography>
        <Box sx={{ marginRight: 170 }}>
          <Button
            id="apple"
            variant="contained"
            size="large"
            component="a"
            href=""
            sx={{ minWidth: 200, background: "#075A6E" }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
        <Typography
          className="mintitle"
          marginRight={170}
          variant="body2"
          sx={{ mt: 2 }}
        >
          Туршаад үз таалагдана.
        </Typography>
        <div className="bounce__css">
          <Cardnine />
        </div>
      </Box>
      <Box
        id="right-side"
        className="side"
        sx={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1673795751644-e42b58452dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          style={{ display: "none" }}
          // src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          className="htitle"
          align="center"
          variant="h2"
          marginTop={10}
          marginRight={170}
        >
          Өөрийн зүйлийг өөрөө бүтээ.
        </Typography>
        <Typography
          className="title"
          variant="h5"
          marginRight={170}
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          Хүссэн загвараа эндээс ол
        </Typography>
        <Box sx={{ marginRight: 170 }}>
          <Button
            id="apple"
            variant="contained"
            size="large"
            component="a"
            href=""
            sx={{ minWidth: 200, background: "#075A6E" }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
        <Typography
          className="mintitle"
          marginRight={170}
          variant="body2"
          color="inherit"
          sx={{ mt: 2 }}
        >
          Туршаад үз таалагдана.
        </Typography>
        <div className="bounce__css">
          <WhiteCard />
        </div>
      </Box>
    </ProductHeroLayout>
  );
}
