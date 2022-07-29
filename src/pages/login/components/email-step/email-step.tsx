import './email-step.scss';

export const EmailStep = () => {
  return (
    <>
      <label className="login-input-label">Enter your email</label>
      <input type="text" className="login-input" />
      <button className="login-btn">SEND CODE</button>
    </>
  );
};
