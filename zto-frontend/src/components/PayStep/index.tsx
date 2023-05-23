import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

export default function App({ activeStep, nextStep, prevStep }: any): any {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "40vh",
        minHeight: "38vh",
        borderRadius: "15px",
      }}
    >

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          sx={{
            color: "white",
            border: "1px solid white",
            padding: 2,
            borderRadius: "10px",
            backgroundColor: "blue",
            width: "30%",
            opacity: "0.7",
            ":hover": { color: "black" },
          }}
          onClick={() => prevStep()}
        >
          <Box>VISA</Box>
        </Button>
        <Button
          sx={{
            color: "white",
            border: "1px solid white",
            padding: 2,
            borderRadius: "10px",
            backgroundColor: "blue",
            width: "30%",
            opacity: "0.7",
            ":hover": { color: "black" },
          }}
          onClick={() => nextStep()}
        >
          <Box>QR</Box>
        </Button>
      </Box>
    </Box>
  );
}
