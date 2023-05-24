import { AuthContext } from "@/context/UserContext";
import { BASE_API_URL } from "@/utils/variables";
import {
  Box,
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
  const { user, setUser, changeUser, setChangeUser }: any =
    useContext(AuthContext);
  console.log("userPro", user);

  const updateUser = async (id: any) => {
    // console.log("ooid", id);
    try {
      const res = await axios.put(`${BASE_API_URL}/users/${id}`, user);
      console.log("update user");
      setChangeUser(!changeUser);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        border: "1px solid #979a9b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <Typography variant="h3" sx={{ color: "#262b40" }}>
        General Information
      </Typography>
      <Grid container spacing={2} sx={{ py: "10px", color: "#4a5073" }}>
        <Grid xs={12} sm={6} item>
          <TextField
            placeholder="Enter user name"
            label="User name"
            variant="outlined"
            name="username"
            value={user?.username}
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            type="password"
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            fullWidth
            name="password"
            value={user?.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            label="Email"
            placeholder="Enter email"
            name="email"
            value={user?.email}
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="phone number"
            variant="outlined"
            name="phone_number"
            value={user?.phone_number}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              value={user?.gender}
              label="gender"
              onChange={handleChange}
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
              name="role"
              value={user?.role}
              label="role"
              onChange={handleChange}
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
            name="address"
            value={user?.address}
            variant="outlined"
            fullWidth
            onChange={handleChange}
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
            sx={{
              backgroundColor: "#262b40",
              "&:hover": {
                background: "none",
                color: "#262b40",
              },
            }}
            onClick={() => updateUser(user._id)}
          >
            Save all
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FromInfo;
