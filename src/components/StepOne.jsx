import React from "react";
import "../index.css"


function StepOne({ formData, handleChange, nextStep }) {
  
  const { login, password, confirmPassword } = formData;

  const validate = () => {
    if (login && password && confirmPassword && password === confirmPassword) {
      nextStep();
    } else {
      alert("Iltimos, to'g'ri ma'lumotlarni kiriting");
    }
  };

  return (
    <div className="step-one">
      <h2>User Registration Wizard - Step 1</h2>
      <form>
        <div className="form-group">
          <label htmlFor="login">Login
          <input className="input"
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={handleChange}
            required
          />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">Parol
          <input className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Parolni tasdiqlash
          <input className="input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          </label>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={validate}>
            Keyingi
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepOne;
