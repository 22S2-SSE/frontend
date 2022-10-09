import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const SignInForm = () => {
  return <>
      <div
        className="text-3xl font-bold"
        style={{
          color: "black",
          fontSize: "30px",
          fontFamily: "Poly",
        }}
      >
        User Login
      </div>
      <div>
        <TextField id="filled-basic" label="Email Address" helperText="" variant="filled" />
      </div>
      <div>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
      <div className="w-52 left-32">
        <FormGroup className=" text-gray-600 italic	">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Keep me logged in"
            color="black"
          />
        </FormGroup>
      </div>
      <div className="flex justify-between space-x-6">
        <Button variant="contained" endIcon={<SendIcon />}>
          Sign In
        </Button>
        <div className="cursor-pointer text-blue-500 italic self-end font-semibold text-sm underline">
          Sign up
        </div>
      </div>
  </>
};

export default SignInForm;
