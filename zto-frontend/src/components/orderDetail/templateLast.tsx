import { formatDistanceToNow } from 'date-fns';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import Image from 'next/image';

export const LatestProducts = (props:any) => {
  const { products = [], sx } = props;

  return (
    <Card sx={{maxWidth:"400px"}}>
      <CardHeader title="Latest Products" />
      <CardContent>
        <Image      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
/>
        
      </CardContent>
     
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};


