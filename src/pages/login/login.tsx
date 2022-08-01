import { Alert } from "@mui/material";
import loginImage from "../../assets/login-image.png";
import { EmailStep, CodeStep } from "./components";
import { selectLabels } from "../../store/selectors";
import "./login.scss";
import { useSelector } from "react-redux";
import { getLabelTitle } from "../../helpers";
import { useState } from "react";

export const Login = () => {
  const labels = useSelector(selectLabels);

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
            <h3 className="login-title">{getLabelTitle(labels, "login")}</h3>
            {/* <Alert severity="error" className="error-alert">{getLabelTitle(labels, "invalid-login")}</Alert> */}
            <EmailStep />
            {/* <CodeStep /> */}
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-text">{getLabelTitle(labels, "copyrights")}</p>
      </footer>
    </>
  );
};
