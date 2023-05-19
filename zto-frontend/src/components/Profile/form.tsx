import { AuthContext } from "@/context/UserContext";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";

const FromInfo = () => {
  const {user}:any = useContext(AuthContext);

  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [username, setUserName] = useState(user?.username);
  const [phone_number, setPhoneNumber] = useState(user?.phone_number);
  const [gender, setGender] = useState(user?.gender);
  const [role, setRole] = useState(user?.role);
  const [address, setAddress] = useState(user?.address);

  const updateUser = async(id:any)=>{
    console.log("id", id);
    try{
      const res = await axios.put(`http://localhost:9010/users/${id}`, user );
    }catch(err){
      console.log("err", err);
    }

  }

  return (
    <>
      <form >
        <Typography variant="h3" sx={{color:"#262b40"}}>
          General Information
        </Typography>
        <Grid container spacing={2} sx={{ py: "10px", color:"#4a5073" }}>         
          <Grid xs={12} sm={6} item>
            <TextField
              placeholder="Enter user name"
              label='User name'
              variant="outlined"
              value={username}
              fullWidth
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
            type="password"
            label='Password'
              placeholder="Enter password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label='Email'
              placeholder="Enter email"
              value={email}
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              label='Phone number'
              placeholder="Enter phone number"
              value={phone_number}
              variant="outlined"
              fullWidth
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              placeholder="Enter address"
              value={address}
              variant="outlined"
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree my submitted data is collected and stored"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button
              size="large"
              type="submit"
              variant="contained"
              // color="white"
              sx={{backgroundColor:"#262b40", 
              '&:hover': {
                background: 'none',
                color:"#262b40"
            }
            }} 
            onClick={()=>updateUser(user._id)}
            >
              Save all
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default FromInfo;
