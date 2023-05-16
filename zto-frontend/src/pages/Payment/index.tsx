import React, { useState } from "react";
import PayStep from "@/components/PayStep";
import { Box, TextField, Button, Typography } from "@mui/material";

const index = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [valueObj, setValueObj] = useState({});

  const setValues = (e: any) => {
    setValueObj({ ...valueObj, [e.target.name]: e.target.value });
  };

  const checkValues = () => {
    console.log("DUUSLAA", valueObj);
  };

  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Box className="paymentBody" sx={{ height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "5vh",
          color: "white",
          padding: 3,
        }}
      >
        {activeStep === 0 ? (
          <Box
            sx={{
              margin: "auto",
              width: "70%",
              height: "30vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              border: 1,
              borderColor: "white",
              padding: 4,
              maxHeight: "40vh",
              minHeight: "38vh",
              borderRadius: "15px",
            }}
          >
            <Typography> Эрхэм хэрэглэгч users.name </Typography>
            <Typography
              variant="h6"
              sx={{ display: "flex", textAlign: "left" }}
            >
              Хэрэглэгчийн мэдээлэл бөглөх хэсэг
            </Typography>
            <TextField
              onChange={setValues}
              label={"Хаана ажилладаг?"}
              sx={{
                width: "50%",
                marginTop: 3,
                input: {
                  color: "#FFFFFA",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&:hover fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&.Mui-focused fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              name="workAddress"
            />
            <Box sx={{ width: "50%" }}>
              <TextField
                onChange={setValues}
                sx={{
                  width: "50%",
                  marginTop: 3,
                  input: {
                    color: "#FFFFFA",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&:hover fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&.Mui-focused fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label={"Албан тушаал"}
                name="workType"
              />

              <TextField
                onChange={setValues}
                sx={{
                  width: "50%",
                  marginTop: 3,
                  input: {
                    color: "#FFFFFA",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&:hover fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&.Mui-focused fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label={"Гэрийн хаяг"}
                name="address"
              />
            </Box>
            <TextField
              label={"Утасны дугаар"}
              name="phoneNumber"
              sx={{
                width: "50%",
                marginTop: 3,
                input: {
                  color: "#FFFFFA",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&:hover fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&.Mui-focused fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
          </Box>
        ) : activeStep === 1 ? (
          <Box
            sx={{
              margin: "auto",
              width: "70%",
              height: "30vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              border: 1,
              borderColor: "white",
              padding: 4,
              maxHeight: "40vh",
              minHeight: "38vh",
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", textAlign: "left" }}
            >
              Та төлбөр төлөхдөө
            </Typography>
            <TextField
              onChange={setValues}
              label={"Картын дугаар: 1234 1234 1234 1234"}
              sx={{
                width: "50%",
                marginTop: 3,

                input: {
                  color: "#FFFFFA",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&:hover fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                  "&.Mui-focused fieldset": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottomColor: "#FFFFFA",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              name="cardNumber"
              inputProps={{ maxLength: 19 }}
            />
            <Box sx={{ width: "50%" }}>
              <TextField
                onChange={setValues}
                sx={{
                  width: "50%",
                  marginTop: 3,
                  input: {
                    color: "#FFFFFA",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&:hover fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&.Mui-focused fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label={"Сар/Өдөр"}
                name="date"
              ></TextField>
              <TextField
                onChange={setValues}
                sx={{
                  width: "50%",
                  marginTop: 3,
                  input: {
                    color: "#FFFFFA",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&:hover fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                    "&.Mui-focused fieldset": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottomColor: "#FFFFFA",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label={"CVC"}
                name="CVC"
              ></TextField>
            </Box>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              Эсвэл:
            </Typography>
          </Box>
        ) : activeStep === 2 ? (
          <Box
            sx={{
              margin: "auto",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              border: 1,
              borderColor: "white",
              padding: 4,
              maxHeight: "40vh",
              minHeight: "38vh",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                border: 1,
                borderColor: "white",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                padding: 3,
                width: "25%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img
                    style={{ height: "40px" }}
                    src="https://cdn.discordapp.com/attachments/1063034593185366016/1106507098587680818/card_chip.png.png"
                  ></img>
                </Box>
                <Box>
                  <img
                    style={{ height: "40px" }}
                    src="https://cdn.discordapp.com/attachments/1063034593185366016/1106507013514604605/nfc-icon.png"
                  ></img>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "18%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box>
                    <Typography>John Cena</Typography>
                    <Typography>
                      {valueObj.cardNumber ?? "1234 1234 1234 1234"}
                    </Typography>
                    <Typography>{valueObj.date ?? "10/12"}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Box sx={{ paddingTop: 2 }}>
                      <img
                        style={{ height: "40px" }}
                        src="https://cdn.discordapp.com/attachments/1063034593185366016/1106507400418185278/mastercard-logo.png"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography> Ta website template awah gej baina</Typography>

            <Button onClick={checkValues}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFA",
                  border: 1,
                  borderColor: "#FFFFFA",
                  padding: 1,
                  borderRadius: 3,
                }}
              >
                Баталгаажуулах
              </Box>
            </Button>
          </Box>
        ) : (
          <></>
        )}

        <Box sx={{ width: "80%", margin: "auto" }}>
          <PayStep
            activeStep={activeStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </Box>
      </Box>
    </Box>
  );
};

// address
// cardNumber
// date
// dd
// workAddress
// workType

export default index;
