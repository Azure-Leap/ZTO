import React from "react";
import { Box } from "@mui/material";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FootNav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {matches && (
        <Box
          sx={{
            xs: { display: "none" },
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "white",
            padding: 2,
            position: "fixed",
            bottom: 0,
            height: 50,
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <Link href={"./about"}>
            <Box>About</Box>
          </Link>
          <Link href={"./"}>
            <Box
              sx={{
                height: 60,
                backgroundColor: "white",
                marginBottom: 2,
                borderRadius: 50,
              }}
            >
              {" "}
              <FaHome
                style={{
                  width: 70,
                  height: 40,
                  marginBottom: "20px",
                }}
              />{" "}
            </Box>
          </Link>
          <Link href={"./auth"}>
            <Box>Login</Box>
          </Link>
        </Box>
      )}
    </>
  );
};

export default FootNav;
