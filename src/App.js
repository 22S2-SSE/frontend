// import logo from './logo.svg';
import "./App.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import {
  createTheme,
  ThemeProvider,
  styled,
  rgbToHex,
} from "@mui/material/styles";
import { ReactComponent as ReactLogo } from "./assets/Dating.svg";
import LoginForm from "./LoginPage/LoginForm";


function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 460,
    width: 400,
    lineHeight: "60px",
  }));

  return (
    <div className="App">
      <div className="App-background">
        <ReactLogo className="App-icon" />
        {/* form */}
        {/* <div>
          <Item
            elevation={16}
            style={{
              padding: "30px 40px",
              background: "rgba(54,55,57,.6)",
            }}
          >
            <div className={text-3xl font-bold underline}
              style={{
                color: "whitesmoke",
                fontSize: "30px",
                fontFamily: "Poly",
              }}
            >
              User Login
            </div>
            <Stack spacing={2}>
              <div>
                <TextField
                  id="standard-password-input"
                  label="UserName"
                  autoComplete="current-password"
                  color="success"
                  variant="standard"
                  focused
                />
                <br />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  color="warning"
                  focused
                  autoComplete="current-password"
                  variant="standard"
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Keep me logged in"
                  />
                </FormGroup>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Login
                </Button>
              </div>
            </Stack>
          </Item>
        </div> */}
        <div className="bg-zinc-200 rounded-lg w-1/3 h-96 flex flex-col  justify-evenly items-center">
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
            <TextField id="filled-basic" label="UserName" variant="filled" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
