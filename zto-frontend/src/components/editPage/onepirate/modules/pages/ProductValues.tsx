import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { TextField } from "@mui/material";
import { EditContext } from "../edit/editContext";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues({ handleClick, change }: any) {
  const { inputVal }: any = React.useContext(EditContext);

  return (
    <Box
      id="productValues"
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                <TextField
                  name="valTit1"
                  value={inputVal.valTit1.p}
                  variant="outlined"
                  fullWidth
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "400px",
                    "& fieldset": { border: "none" },

                    input: {
                      textAlign: "center",
                      color: inputVal.valTit1.color,
                      fontSize: inputVal.valTit1.size,
                      fontWeight: inputVal.valTit1.bold,
                    },
                  }}
                />
              </Typography>
              <Typography variant="h5">
                <TextField
                  name="valText1"
                  value={inputVal.valText1.p}
                  variant="outlined"
                  rows={4}
                  // multiline
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "400px",
                    "& fieldset": { border: "none" },

                    input: {
                      textAlign: "center",
                      color: inputVal.valText1.color,
                      fontSize: inputVal.valText1.size,
                      fontWeight: inputVal.valText1.bold,
                    },
                  }}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                <TextField
                  name="valTit2"
                  value={inputVal.valTit2.p}
                  variant="outlined"
                  rows={4}
                  // multiline
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "400px",
                    "& fieldset": { border: "none" },

                    input: {
                      textAlign: "center",
                      color: inputVal.valTit2.color,
                      fontSize: inputVal.valTit2.size,
                      fontWeight: inputVal.valTit2.bold,
                    },
                  }}
                />
              </Typography>
              <Typography variant="h5">
                <TextField
                  name="valText2"
                  value={inputVal.valText2.p}
                  variant="outlined"
                  rows={4}
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "400px",
                    "& fieldset": { border: "none" },

                    input: {
                      textAlign: "center",
                      color: inputVal.valText2.color,
                      fontSize: inputVal.valText2.size,
                      fontWeight: inputVal.valText2.bold,
                    },
                  }}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Box onClick={handleClick}>
                <Typography variant="h6" sx={{ my: 5 }}>
                  <TextField
                    name="valTit3"
                    value={inputVal.valTit3.p}
                    variant="outlined"
                    fullWidth
                    rows={4}
                    onChange={change}
                    sx={{
                      width: "400px",
                      "& fieldset": { border: "none" },
                      input: {
                        textAlign: "center",
                        color: inputVal.valTit3.color,
                        fontSize: inputVal.valTit3.size,
                        fontWeight: inputVal.valTit3.bold,
                      },
                    }}
                  />
                </Typography>
              </Box>
              <Typography variant="h5">
                <TextField
                  name="valText3"
                  value={inputVal.valText3.p}
                  variant="outlined"
                  rows={4}
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "400px",
                    "& fieldset": { border: "none" },

                    input: {
                      textAlign: "center",
                      color: inputVal.valText3.color,
                      fontSize: inputVal.valText3.size,
                      fontWeight: inputVal.valText3.bold,
                    },
                  }}
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
