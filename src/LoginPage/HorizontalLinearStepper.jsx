import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const steps = ["Username", "Password"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const registerUser = async () => {
    try {
      let { data } = await axios.post(`http://124.221.119.113:8081/users`, {
        username,
        password,
      });
      let res = await axios.post(`http://124.221.119.113:8081/tokens`, {
        username: `${username}`,
        password: `${password}`,
      });
      let userID = await axios.get(`http://124.221.119.113:8081/users/me`, {
        headers: {
          "Authorization": "Bearer " + res.data
        }
      });
      navigate(`/profile/${userID.data.id}`);
    } catch (error) {
      alert('Please refresh and try again.')
    }

  };

  const isStepOptional = (step) => {
    return step === 0;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} className=" mb-10">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : activeStep === steps.length - 1 ? (
        <div className="mb-16">
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconButton onClick={registerUser}>
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
      ) : (
        <div className="mb-16">
          <TextField
            id="filled-basic"
            label="Username"
            helperText=""
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <IconButton onClick={handleNext}>
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
      )}
    </Box>
  );
}
