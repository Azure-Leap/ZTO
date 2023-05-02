import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Payment = (): any => {
  const textFont: string = "sans-serif";
  const [age, setAge] = React.useState("");
  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <Box
      sx={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
        gap: "20%",
        margin: "auto",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: textFont }}>
          .ZTO
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: textFont }}>
          Enter payment details
        </Typography>

        <Box
          sx={{
            padding: 2,
            border: 1,
            borderColor: " #808080",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
            backgroundColor: "#FFFFFA",
            fontFamily: textFont,
          }}
        >
          <p>Email</p>
          <p>Users.email@gmail.com</p>
        </Box>
        <Typography variant="h5">Save card information</Typography>

        <Box
          sx={{
            width: "100wh",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "15px" }}>
            Card information
          </Typography>
          <TextField
            label="1234 1234 1234 1234"
            sx={{
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
                borderRadius: "15px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
              },
            }}
          ></TextField>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TextField
              sx={{
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                  borderRadius: "11px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                },
                width: "50%",
              }}
              label="MM/YY"
            ></TextField>
            <TextField
              sx={{
                width: "50%",
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                  borderRadius: "11px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    borderRadius: "11px",
                  },
                },
              }}
              label="CVC"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100wh",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "15px" }}>
            Name On Card
          </Typography>
          <TextField
            sx={{
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
                borderRadius: "15px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
              },
            }}
          ></TextField>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20%",
          }}
        >
          <FormControl
            fullWidth
            sx={{
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
                borderRadius: "15px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                  borderRadius: "15px",
                },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Country or region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Country or region"
              onChange={handleChange}
            >
              <MenuItem value={10}>Mongolia</MenuItem>
              <MenuItem value={20}>Americ</MenuItem>
              <MenuItem value={30}>Australia</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100wh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "100%",
            backgroundColor: "blue",
            margin: 2,
            padding: 2,
            color: "white",
            border: 1,
            borderColor: "white",
            ":hover": {
              color: "black",
              border: 1,
            },
            borderRadius: "11px",
          }}
        >
          Save Card
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
