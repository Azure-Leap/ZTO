import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

export default function App({ activeStep, nextStep, prevStep }: any): any {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Stepper
        activeStep={activeStep}
        sx={{ background: "white", borderRadius: "20px", padding: 2 }}
      >
        <Step>
          <StepLabel>First</StepLabel>
        </Step>
        <Step>
          <StepLabel>Second</StepLabel>
        </Step>
        <Step>
          <StepLabel>Third</StepLabel>
        </Step>
      </Stepper>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={() => prevStep()}>
          <Box
            sx={{
              color: "white",
              border: "1px solid white",
              padding: 2,
              borderRadius: "10px",
            }}
          >
            Өмнөх алхамд шилжих
          </Box>
        </Button>
        <Button onClick={() => nextStep()}>
          <Box
            sx={{
              color: "white",
              border: "1px solid white",
              padding: 2,
              borderRadius: "10px",
            }}
          >
            Өмнөх алхамд шилжих
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
