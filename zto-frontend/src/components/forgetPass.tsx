import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import axios from "axios";

const ForgetPass = () => {
 const [email, setEmail] = useState("");

  const forgetPassword = async()=>{
    try{
      console.log(email, "email");
      const res = await axios.post("http://localhost:9010/users/forget-password", email)
      console.log("---",res);
    }catch(err){
      console.log("err", err);
    }
  }
  return (
    <>
      <Box
        sx={{
          m: "auto",
          backgroundColor: "#fff",
          color: "#000",
          maxWidth: "400px",
          height: "640px",
          textAlign: "center",
          my: "30px",
          borderRadius: "10px",
          border:"1px solid #ccc"
        }}
      >
        <Box sx={{ p: "20px" }}>
          <IconButton>
            <LockPersonOutlinedIcon
              sx={{ color: "#000010", width: "100px", height: "100px" }}
            />
          </IconButton>

          <Typography variant="h4"> Find your account</Typography>
          <hr />
          <Typography variant="body1" sx={{ my: "20px" }}>
            Please enter your email or mobile number to search for your account.
          </Typography>
          <TextField
            fullWidth
            label="Email or mobile number"
            id="fullWidth"
            value={email}
            sx={{ my: "20px", backgroundColor:"#fafafa" }}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Box>
            <Button
              variant="contained"
              sx={{ mr: "15px", backgroundColor: "#33bfff", px: "30px" }}
              onClick={forgetPassword}
            >
              Send login link
            </Button>
            <Typography variant="body1" sx={{ mt: "15px", fontSize: "0.8rem" }}>
              Can't reset your password?
            </Typography>
            <Typography sx={{my:"10px"}}>OR</Typography>
            <Typography variant="h6" sx={{my:"10px"}}>Create new account</Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "#fafafa", mt:"55px", border:"1px solid #ccc", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px" }}>
          <Button variant="text" sx={{ color: "#000" }}>
            Back to login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ForgetPass;
