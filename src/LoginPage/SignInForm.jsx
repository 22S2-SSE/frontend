import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignInForm = ({onClickSignUp}) => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const submitLoginInformation = () => {
    axios.post(`http://124.221.119.113:8081/tokens`, {
      username: `${emailAddress}`,
      password: `${password}`
    }).then(res => {
      // console.log(res.data)
      
      navigate(`/profile/${emailAddress}`)
    }).catch(e => {
      if (e.response.status === 500) {
        alert('This user is not exist.')
      }
    })
    
  }
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
        <TextField id="filled-basic" label="Email Address" helperText="" variant="filled" onChange={(e) => setEmailAddress(e.target.value)} />
      </div>
      <div>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
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
        {/* <Button variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/profile/aaabbbccc')}> */}
        <Button variant="contained" endIcon={<SendIcon />} onClick={() => submitLoginInformation()}>
          Sign In
        </Button>
        <div onClick={onClickSignUp} className="cursor-pointer text-blue-500 italic self-end font-semibold text-sm underline">
          Sign up
        </div>
      </div>
  </>
};

export default SignInForm;
