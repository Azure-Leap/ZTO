import React, { useContext, useState } from "react";
import PayStep from "@/components/PayStep";
import { Box, TextField, Button, Typography } from "@mui/material";
import StepTwo from "@/components/PayStep/StepTwo";
import StepThree from "@/components/PayStep/StepThree";
import Layout from "@/components/layout";
import { CartContext } from "@/context/CartContext";

const PaymentPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [valueObj, setValueObj] = useState({});

  const setValues = (e: any) => {
    setValueObj({ ...valueObj, [e.target.name]: e.target.value });
  };

  const checkValues = () => {
    console.log("DUUSLAA", valueObj);
  };

  const nextStep = () => {
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  
  return (
    <Layout>
    <Box className="paymentBody">
      <Box
        sx={{
          color: "black",
          padding: 3,
        }}
      >
        {activeStep === 0 ? (
         <StepTwo/>
        ) : activeStep === 1 ? (

          <StepThree/>
   
        ) : activeStep === 2 }

        <Box >
          <PayStep
            activeStep={activeStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </Box>
      </Box>
    </Box>
    </Layout>
  );
};

export default PaymentPage;
