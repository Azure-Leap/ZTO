import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import axios from "axios";
import { TextField } from "@mui/material";
import Draggable from "react-draggable";
import { EditContext } from "../edit/editContext";

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

function ProductHowItWorks() {
  const [work, setWork] = React.useState([]);
  const { currentPosition, onDrag } = React.useContext(EditContext);

  const getWork = async () => {
    try {
      const res = await axios("http://localhost:8008/works");
      console.log("cate", res.data);
      setWork(res.data);
    } catch (err) {
      console.log("ERROR", err);
    }
  };
  React.useEffect(() => {
    getWork();
  }, []);

  return (
    <Box
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
        <Draggable
          position={{ x: currentPosition.xRate, y: currentPosition.yRate }}
          onDrag={onDrag}
        >
          <Typography
            variant="h4"
            marked="center"
            component="h2"
            sx={{ mb: 14 }}
          >
            How it works
          </Typography>
        </Draggable>
        <div>
          <Grid container spacing={5}>
            {work.map((x, idx): any => (
              <Grid key={idx} item xs={12} md={4}>
                <Box sx={item}>
                  <Draggable
                    position={{
                      x: currentPosition.xRate,
                      y: currentPosition.yRate,
                    }}
                    onDrag={onDrag}
                  >
                    <Box sx={number}>{x.number}.</Box>
                  </Draggable>
                  <Draggable
                    position={{
                      x: currentPosition.xRate,
                      y: currentPosition.yRate,
                    }}
                    onDrag={onDrag}
                  >
                    <Box
                      component="img"
                      src={x.icon}
                      alt="suitcase"
                      sx={image}
                    />
                   </Draggable>
                   <Draggable
                    position={{
                      x: currentPosition.xRate,
                      y: currentPosition.yRate,
                    }}
                    onDrag={onDrag}
                  >

                    <TextField
                      name="title"
                      value={"inputVal.title.title"}
                      variant="outlined"
                      // onChange={change}
                      sx={{
                        height: "200px",
                        width: "100%",
                        "& fieldset": { border: "none" },
                        input: {
                          textAlign: "center",
                        },
                      }}
                    />
                   </Draggable>

                </Box>
              </Grid>
            ))}
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
