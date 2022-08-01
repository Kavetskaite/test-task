import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./code-step.scss";
import { getLabelTitle } from "../../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectLabels,
  selectLanguageId,
  selectLoginError,
  selectUserEmail,
} from "../../../../store/selectors";
import { Alert } from "@mui/material";
import { loginWithCode } from "../../../../store/actions";
import { useNavigate } from "react-router-dom";

export const CodeStep = () => {
  const labels = useSelector(selectLabels);
  const languageID = useSelector(selectLanguageId);
  const email = useSelector(selectUserEmail);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loginError = useSelector(selectLoginError);

  const [inputs, setInputs] = useState<Array<HTMLInputElement>>([]);
  const [form, setForm] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !loginError) {
      navigate("/dashboard");
    }

    if (loginError) {
      setIsError(true);
    }
  }, [isAuthenticated, loginError]);

  useEffect(() => {
    const form = document.querySelector('[name="verify"]');
    const inputs: NodeListOf<HTMLInputElement> | null =
      form?.querySelectorAll(".inputs input") || null;

    setInputs(Array.from(inputs || []));
    setForm(form);
  }, []);

  // check for data that was inputed and if there is a next input, focus it
  const handleInput = (e: any) => {
    const input = e.target;
    input.value = input.value.replace(/\D/, "");

    if (input && input.nextElementSibling && input.value) {
      input.classList.add("filled");
      input.nextElementSibling.focus();
    }
  };

  // check for data that was deleted and if there is a previous input, focus it
  const handleDelete = (e: any) => {
    const input = e.target;

    if (
      e.keyCode === 8 &&
      input &&
      input.previousElementSibling &&
      !input.value
    ) {
      e.preventDefault();
      input.previousElementSibling.value = "";
      input.previousElementSibling.focus();
      input.previousElementSibling.classList.remove("filled");
      input.classList.remove("filled");
    }
  };

  useEffect(() => {
    if (inputs.length && form) {
      inputs[0].addEventListener("paste", handlePaste);
      form?.addEventListener("keyup", handleInput);
      form?.addEventListener("keydown", handleDelete);
    }
  }, [form, inputs]);

  // loop over each input, and populate with the index of that string
  const handlePaste = (e: any) => {
    const paste = e.clipboardData.getData("text").replaceAll(/\D/g, "");

    inputs.forEach((input, i) => {
      if (!paste[i]) {
        return;
      }
      input.value = paste[i];
      input.classList.add("filled");
      if (input.nextElementSibling) {
        (input.nextElementSibling as HTMLInputElement).focus();
      }
    });
  };

  const clearInputs = () => {
    inputs?.forEach((input) => {
      input.value = "";
      input.classList.remove("filled");
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let code = "";
    inputs?.forEach((input) => {
      code += input.value;
    });

    if (code.length < 6) {
      setIsError(true);
      return;
    }

    setIsError(false);

    dispatch(loginWithCode({ email, code, languageID }));
  };

  return (
    <>
      {isError && (
        <Alert severity="error" className="error-alert">
          {getLabelTitle(labels, "invalid-login")}
        </Alert>
      )}
      <p className="login-text">{getLabelTitle(labels, "code-title")}</p>
      <form name="verify" onSubmit={handleSubmit}>
        <div className="inputs code-form" id="inputs-block">
          <input type="text" id="1" maxLength={1} className="code-input" />
          <input type="text" id="2" maxLength={1} className="code-input" />
          <input type="text" id="3" maxLength={1} className="code-input" />
          <input type="text" id="4" maxLength={1} className="code-input" />
          <input type="text" id="5" maxLength={1} className="code-input" />
          <input type="text" id="6" maxLength={1} className="code-input" />

          <ClearIcon className="clear-icon" onClick={clearInputs} />
        </div>
        <button className="submit-btn">
          {getLabelTitle(labels, "submit")}
        </button>
      </form>

      <p className="sub-text">
        If you do not receive the confirmation message within a few minutes,
        please check your Spam or Bulk E-Mail folder
      </p>
    </>
  );
};
