import { Alert } from "@mui/material";
import loginImage from "../../assets/login-image.png";
import { EmailStep, CodeStep } from "./components";
import "./login.scss";

export const Login = () => {
  

  return (
    <>
      <div className="main">
        <div className="playground-section">
          <h1 className="playground-title">PLAYGROUND</h1>
          <div className="playground-img">
            <img src={loginImage} />
          </div>
        </div>
        <div className="login-section">
          <div className="login-block">
            <h3 className="login-title">Login</h3>
            {/* <Alert severity="error" className="error-alert">Please enter a valid code</Alert> */}
            {/* <EmailStep /> */}
            <CodeStep />
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-text">© 2022 Playground. All rights reserved.</p>
      </footer>
    </>
  );
};
