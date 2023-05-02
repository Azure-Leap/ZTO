import * as React from 'react';
import Draggable from 'react-draggable';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};


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
class ProductValues extends React.Component<{}, AppState> {
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
      <div>
          <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
       <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
       <Grid container spacing={5}>
       <Grid item xs={12} md={4}>
            <Box sx={item}>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
       
              <Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                The best luxury hotels
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }
                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
          </div>
        </Draggable>
        </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
         
              <Box
                component="img"
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
           
          </div>
        </Draggable>
        </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
         
              <Box
                component="img"
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }
                {'your Sundays will not be alike.'}
              </Typography>
         
          </div>
        </Draggable>
        </Box>
          </Grid>


        </Grid>
        </Container>
        </Box>
     
        
      </div>
    );
  }
}

export default ProductValues;















