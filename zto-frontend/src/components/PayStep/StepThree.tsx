import React from 'react'
import { Box, TextField, Button, Typography } from "@mui/material";

const StepThree = () => {
  return (
	<Box
	sx={{     margin: "auto",
	width: "100%",
	height: "30vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 2,
	padding: "300px",
	maxHeight: "40vh",
	minHeight: "38vh",
	borderRadius: "15px",}}
   >
			<Box sx={{  backgroundColor:"white", padding:"20px"}} className="p-150 bod-3">
			  <Box className="row">
				<Box sx={{width:"100%"}} className="col-lg-4 col-md-12 py-5">
				  <Box className="purchase-section flex-fill flex-vertical" >
					<Box sx={{padding:"10px"}}>
					<img src="https://play-lh.googleusercontent.com/-CvY0c-MmYQf2xaJQ6TVj_PZO4lpKG3T-i78UOolkpMxwlUen3KsakPA7I8OOwjOx_Q=w240-h480-rw" alt="dsfdsf" />
					</Box>
					<ul className="purchase-props">
					  <li className="flex-between">
						<span>Company</span>
						<strong>Apple</strong>
					  </li>
					  <li className="flex-between">
						<span>Order number</span>
						<strong>429252965</strong>
					  </li>
					  <li className="flex-between">
						<span>Product</span>
						<strong>MacBook Air</strong>
					  </li>
					  <li className="flex-between">
						<span>VAT (20%)</span>
						<strong>$100.00</strong>
					  </li>
					</ul>
				  </Box>
				  <Box className="separation-line"></Box>
				  <Box className="total-section flex-between flex-vertical-center">
					<Box className="flex-fill flex-vertical">
					  <Box className="total-label f-secondary-color">You have to Pay</Box>
					  <Box>
						<strong>549</strong>
						<small>.99 <span className="f-secondary-color">USD</span></small>
					  </Box>
					</Box>
					<i className="ai-coin size-lg"></i>
				  </Box>
				</Box>
			  </Box>
			</Box>
		  </Box>
)
}

export default StepThree