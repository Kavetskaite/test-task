import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabelTitle } from "../../../../helpers";
import { generatePassword } from "../../../../store/actions";
import { selectLabels, selectLanguageId } from "../../../../store/selectors";
import "./email-step.scss";

export const EmailStep = () => {
  const [email, setEmail] = useState<string>("");

  const dispatch = useDispatch();

  const labels = useSelector(selectLabels);
  const languageID = useSelector(selectLanguageId);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(generatePassword({ email, languageID }));
  };

  return (
    <>
      <label className="login-input-label">
        {getLabelTitle(labels, "login-title")}
      </label>
      <input
        type="text"
        className="login-input"
        onChange={handleChange}
        value={email}
      />
      <button className="login-btn" onClick={handleSubmit}>
        {getLabelTitle(labels, "send-code")}
      </button>
    </>
  );
};
