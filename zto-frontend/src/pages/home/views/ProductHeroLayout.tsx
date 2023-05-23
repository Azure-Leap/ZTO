import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    height: "95vh",
    minHeight: 200,
    maxHeight: 1000,
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
