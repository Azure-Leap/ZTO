import * as React from 'react';
import Draggable from 'react-draggable';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../components/Typography';
import Button from '../components/Button';


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';


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
      controlledPosition: { x: -400, y: 200 }
    };
  }

  handleDrag = (e: any, ui: any) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
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
    return (
        <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#7fc7d9', // Average color of the background image.
          backgroundPosition: 'center',
        }}
      >
          <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
          <Typography color="inherit" align="center" variant="h2" marked="center">
              Upgrade your Sundays
          </Typography>
          </div>
        </Draggable>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
          </Typography>
          </div>
        </Draggable>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            sx={{marginLeft:"37%"}}
          >
            Register
          </Button>
          </div>
        </Draggable>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
          <Typography variant="body2"    align="center" color="inherit" sx={{ mt: 2 }}>
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

