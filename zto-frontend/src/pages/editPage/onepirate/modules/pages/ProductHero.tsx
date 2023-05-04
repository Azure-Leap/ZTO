import * as React from "react";
import Draggable from "react-draggable";
import ProductHeroLayout from "./ProductHeroLayout";
import Typography from "../components/Typography";
import Button from "../components/Button";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  makeStyles,
} from "@mui/material";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

interface AppState {
  activeDrags: number;
  deltaPosition: {
    x: number;
    y: number;
  };
  controlledPosition: {
    x: number;
    y: number;
  };
}

class ProductHero extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: { x: 0, y: 0 },
      controlledPosition: { x: -400, y: 200 },
    };
  }

  handleDrag = (e: any, ui: any) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  adjustXPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e: any, position: any) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e: any, position: any) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    const { formats, inputVal, change, handleClick }: any = this.props;

    return (
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
      >
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <div>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              className="box"
              style={{ width: "1200px" }}
              onClick={(e)=>{
                console.log("Click",e.target.name);
                handleClick(e)
              }}
            >
              <TextField
                name="title"
                value={inputVal.title}
                variant="outlined"
                onChange={change}
                sx={{
                  height: "200px",
                  width: "100%",
                  "& fieldset": { border: "none" },
                  fontStyle: formats.includes("italic") ? "italic" : "normal",
                  input: {
                    textAlign: "center",
                    color: inputVal.titleColor,
                    fontSize: inputVal.titleSize,
                    fontWeight: formats.includes("bold") ? 600 : 400,
                    textDecoration: formats.includes("underlined")
                      ? "underline"
                      : "normal",
                  },
                }}
              />
            </div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div className="box" style={{ width: "1200px" }} id="" onClick={handleClick}>
              <TextField
                name="text"
                value={inputVal.text}
                variant="outlined"
                onChange={change}
                sx={{
                  width: "100%",
                  fontStyle: formats.includes("italic") ? "italic" : "normal",
                  color: "white",
                  "& fieldset": { border: "none" },
                }}
              />
            </div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div className="box" id="page1-btn" onClick={handleClick}>
              <TextField
              
                name="btn"
                value={inputVal.btn}
                variant="outlined"
                onChange={change}
                sx={{
                  width: "100%",
                  fontStyle: formats.includes("italic") ? "italic" : "normal",
                  "& fieldset": { border: "none" },
                  input: {
                    textAlign: "center",
                    color: inputVal.btnColor,
                    fontSize: inputVal.btnSize,
                    fontWeight: formats.includes("bold") ? 900 : 400,
                    textDecoration: formats.includes("underlined")
                      ? "underline"
                      : "normal",
                  },
                }}
              />
            </div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div className="box">
              <Typography
                variant="body2"
                align="center"
                color="inherit"
                sx={{ mt: 2 }}
              >
                Discover the experience
              </Typography>
            </div>
          </Draggable>
        </div>
      </ProductHeroLayout>
    );
  }
}

export default ProductHero;
