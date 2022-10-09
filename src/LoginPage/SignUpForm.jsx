import HorizontalLinearStepper from "./HorizontalLinearStepper";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SignUpForm = ({onClickBackButton}) => {
  return (
    <>
      <IconButton
        onClick={onClickBackButton}
        aria-label="delete"
        style={{
          position: "absolute",
          left: '520px',
          top: '220px'
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div>
        <p
          className=" text-black text-4xl mb-5"
          style={{
            fontFamily: "Poly",
          }}
        >
          Users Register
        </p>
        <HorizontalLinearStepper />
      </div>
    </>
  );
};

export default SignUpForm;
