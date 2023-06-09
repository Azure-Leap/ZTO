import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { EditContext } from "../edit/editContext";
import { TextField } from "@mui/material";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks({ handleClick, change }: any) {
  const { inputVal }: any = React.useContext(EditContext);
  return (
    <Box
      id="productHowItWork"
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
          <TextField
            name="workTit"
            value={inputVal.workTit.p}
            variant="outlined"
            fullWidth
            rows={4}
            onClick={handleClick}
            onChange={change}
            sx={{
              width: "600px",
              "& fieldset": { border: "none" },
              input: {
                textAlign: "center",
                color: inputVal.workTit.color,
                fontSize: inputVal.workTit.size,
                fontWeight: inputVal.workTit.bold,
              },
            }}
          />
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://mui.com/static/themes/onepirate/productHowItWorks1.svg"
                  alt="suitcase"
                  sx={image}
                />
                  <TextField
                    name="workP1"
                    value={inputVal.workP1.p}
                    variant="outlined"
                    onClick={handleClick}
                    onChange={change}
                    sx={{
                      width: "600px",
                      "& fieldset": { border: "none" },
                      input: {
                        textAlign: "center",
                        color: inputVal.workP1.color,
                        fontSize: inputVal.workP1.size,
                        fontWeight: inputVal.workP1.bold,
                      },
                    }}
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://mui.com/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                  <TextField
                    name="workP2"
                    value={inputVal.workP2.p}
                    variant="outlined"
                    rows={4}
                    onClick={handleClick}
                    onChange={change}
                    sx={{
                      width: "400px",
                      "& fieldset": { border: "none" },
                      input: {
                        textAlign: "center",
                        color: inputVal.workP2.color,
                        fontSize: inputVal.workP2.size,
                        fontWeight: inputVal.workP2.bold,
                      },
                    }}
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://mui.com/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                  <TextField
                    name="workP3"
                    value={inputVal.workP3.p}
                    variant="outlined"
                    rows={4}
                    onClick={handleClick}
                    onChange={change}
                    sx={{
                      width: "400px",
                      "& fieldset": { border: "none" },
                      input: {
                        textAlign: "center",
                        color: inputVal.workP3.color,
                        fontSize: inputVal.workP3.size,
                        fontWeight: inputVal.workP3.bold,
                      },
                    }}
                  />
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
