import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./code-step.scss";
import { getLabelTitle } from "../../../../helpers";
import { useSelector } from "react-redux";
import { selectLabels } from "../../../../store/selectors";

export const CodeStep = () => {
  const [inputs, setInputs] = useState<Array<HTMLInputElement>>([]);
  const [form, setForm] = useState<any>(null);

  const labels = useSelector(selectLabels);

  useEffect(() => {
    const form = document.querySelector('[name="verify"]');
    const inputs: NodeListOf<HTMLInputElement> | null =
      form?.querySelectorAll(".inputs input") || null;

    setInputs(Array.from(inputs || []));
    setForm(form);
  }, []);

  useEffect(() => {
    if (inputs && form) {
      inputs[0].addEventListener("paste", handlePaste);
      form?.addEventListener("input", handleInput);
      form?.addEventListener("keydown", handleDelete);
    }
  }, [form, inputs]);

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

  return (
    <>
      <p className="login-text">{getLabelTitle(labels, "code-title")}</p>
      <form name="verify">
        <div className="inputs code-form">
          <input type="text" id="1" maxLength={1} className="code-input" />
          <input type="text" id="2" maxLength={1} className="code-input" />
          <input type="text" id="3" maxLength={1} className="code-input" />
          <input type="text" id="4" maxLength={1} className="code-input" />
          <input type="text" id="5" maxLength={1} className="code-input" />
          <input type="text" id="6" maxLength={1} className="code-input" />

          <ClearIcon className="clear-icon" onClick={clearInputs} />
        </div>
      </form>
      <button className="submit-btn">{getLabelTitle(labels, "submit")}</button>
      <p className="sub-text">
        If you do not receive the confirmation message within a few minutes,
        please check your Spam or Bulk E-Mail folder
      </p>
    </>
  );
};
