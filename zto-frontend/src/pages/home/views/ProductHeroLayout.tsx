import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "95vh",
    minHeight: 400,
    maxHeight: 1200,
  },
}));

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot >
      {children}
      {/* <Box /> */}
    </ProductHeroLayoutRoot>
  );
}
